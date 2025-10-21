import { useCallback, useEffect, useRef } from "react";
import type { GridState } from "../types";
import {
  getStorageAdapter,
  saveGridState,
  loadGridState,
  removeGridState,
  createCustomAdapter,
  type StorageAdapter,
} from "../utils/storage";

export interface UseGridPersistenceOptions {
  gridId: string;
  enabled:
    | boolean
    | "localStorage"
    | "sessionStorage"
    | ((state: GridState) => void);
  state: GridState;
  onStateLoad?: (state: Partial<GridState>) => void;
  autoSave?: boolean;
  saveDelay?: number;
}

/**
 * Hook for handling grid state persistence
 */
export function useGridPersistence({
  gridId,
  enabled,
  state,
  onStateLoad,
  autoSave = true,
  saveDelay = 500,
}: UseGridPersistenceOptions) {
  const storageAdapter = useRef<StorageAdapter | null>(null);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const lastSavedState = useRef<string>("");
  const hasLoadedRef = useRef<boolean>(false);

  // Initialize storage adapter
  useEffect(() => {
    if (!enabled) {
      storageAdapter.current = null;
      return;
    }

    if (typeof enabled === "function") {
      // Custom save function
      storageAdapter.current = createCustomAdapter(enabled);
    } else if (enabled === "localStorage") {
      storageAdapter.current = getStorageAdapter("localStorage");
    } else if (enabled === "sessionStorage") {
      storageAdapter.current = getStorageAdapter("sessionStorage");
    } else {
      // Default to localStorage
      storageAdapter.current = getStorageAdapter("localStorage");
    }
  }, [enabled]);

  /**
   * Load persisted state on mount
   */
  useEffect(() => {
    if (
      !storageAdapter.current ||
      !enabled ||
      typeof enabled === "function" ||
      hasLoadedRef.current
    ) {
      return;
    }

    const loadedState = loadGridState(gridId, storageAdapter.current);
    if (loadedState) {
      onStateLoad?.(loadedState);
      hasLoadedRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridId, enabled]); // onStateLoad is intentionally stable (not expected to change)

  /**
   * Save state to storage
   */
  const saveState = useCallback(
    (stateToSave: GridState = state) => {
      if (!storageAdapter.current || !enabled) {
        return;
      }

      // Don't save if state hasn't changed
      const stateString = JSON.stringify(stateToSave);
      if (stateString === lastSavedState.current) {
        return;
      }

      try {
        saveGridState(gridId, stateToSave, storageAdapter.current);
        lastSavedState.current = stateString;
      } catch (error) {
        console.warn("Failed to save grid state:", error);
      }
    },
    [gridId, enabled, state]
  );

  /**
   * Save state with debouncing
   */
  const debouncedSave = useCallback(
    (stateToSave: GridState = state) => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      saveTimeoutRef.current = setTimeout(() => {
        saveState(stateToSave);
      }, saveDelay);
    },
    [saveState, saveDelay, state]
  );

  /**
   * Clear persisted state
   */
  const clearState = useCallback(() => {
    if (!storageAdapter.current || !enabled || typeof enabled === "function") {
      return;
    }

    try {
      removeGridState(gridId, storageAdapter.current);
      lastSavedState.current = "";
    } catch (error) {
      console.warn("Failed to clear grid state:", error);
    }
  }, [gridId, enabled]);

  /**
   * Force immediate save
   */
  const forceSave = useCallback(
    (stateToSave: GridState = state) => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      saveState(stateToSave);
    },
    [saveState, state]
  );

  // Auto-save when state changes
  useEffect(() => {
    if (!autoSave || !enabled) {
      return;
    }

    debouncedSave(state);

    // Cleanup timeout on unmount
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [state, autoSave, enabled, debouncedSave]);

  // Save state before page unload
  useEffect(() => {
    if (!enabled || typeof enabled === "function") {
      return;
    }

    const handleBeforeUnload = () => {
      forceSave();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [forceSave, enabled]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return {
    saveState: forceSave,
    debouncedSave,
    clearState,
    isEnabled: !!enabled,
  };
}
