var Tt = Object.defineProperty;
var Ct = (e, t, r) => t in e ? Tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => Ct(e, typeof t != "symbol" ? t + "" : t, r);
import At, { useState as J, useCallback as _, useMemo as ee, useEffect as V, useRef as me, createContext as Ie, useContext as Re, useReducer as It, useLayoutEffect as Rt, forwardRef as Z, useImperativeHandle as Lt } from "react";
var _e = { exports: {} }, xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function jt() {
  if (We) return xe;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, n, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), n.key !== void 0 && (a = "" + n.key), "key" in n) {
      i = {};
      for (var l in n)
        l !== "key" && (i[l] = n[l]);
    } else i = n;
    return n = i.ref, {
      $$typeof: e,
      type: o,
      key: a,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return xe.Fragment = t, xe.jsx = r, xe.jsxs = r, xe;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Pt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === D ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case g:
          return "Fragment";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case E:
          return "Suspense";
        case I:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case s:
            return "Portal";
          case f:
            return (m.displayName || "Context") + ".Provider";
          case k:
            return (m._context.displayName || "Context") + ".Consumer";
          case v:
            var A = m.render;
            return m = m.displayName, m || (m = A.displayName || A.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case L:
            return A = m.displayName || null, A !== null ? A : e(m.type) || "Memo";
          case h:
            A = m._payload, m = m._init;
            try {
              return e(m(A));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function r(m) {
      try {
        t(m);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var O = A.error, P = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return O.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(m);
      }
    }
    function o(m) {
      if (m === g) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === h)
        return "<...>";
      try {
        var A = e(m);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var m = U.A;
      return m === null ? null : m.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(m) {
      if (F.call(m, "key")) {
        var A = Object.getOwnPropertyDescriptor(m, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function l(m, A) {
      function O() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: O,
        configurable: !0
      });
    }
    function p() {
      var m = e(this.type);
      return W[m] || (W[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function w(m, A, O, P, N, q, de, $) {
      return O = q.ref, m = {
        $$typeof: d,
        type: m,
        key: A,
        props: q,
        _owner: N
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function b(m, A, O, P, N, q, de, $) {
      var K = A.children;
      if (K !== void 0)
        if (P)
          if (M(K)) {
            for (P = 0; P < K.length; P++)
              x(K[P]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(K);
      if (F.call(A, "key")) {
        K = e(m);
        var X = Object.keys(A).filter(function(ke) {
          return ke !== "key";
        });
        P = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", ne[K + P] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          K,
          X,
          K
        ), ne[K + P] = !0);
      }
      if (K = null, O !== void 0 && (r(O), K = "" + O), a(A) && (r(A.key), K = "" + A.key), "key" in A) {
        O = {};
        for (var se in A)
          se !== "key" && (O[se] = A[se]);
      } else O = A;
      return K && l(
        O,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), w(
        m,
        K,
        q,
        N,
        n(),
        O,
        de,
        $
      );
    }
    function x(m) {
      typeof m == "object" && m !== null && m.$$typeof === d && m._store && (m._store.validated = 1);
    }
    var y = At, d = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), U = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, M = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var G, W = {}, Y = y.react_stack_bottom_frame.bind(
      y,
      i
    )(), C = B(o(i)), ne = {};
    Se.Fragment = g, Se.jsx = function(m, A, O, P, N) {
      var q = 1e4 > U.recentlyCreatedOwnerStacks++;
      return b(
        m,
        A,
        O,
        !1,
        P,
        N,
        q ? Error("react-stack-top-frame") : Y,
        q ? B(o(m)) : C
      );
    }, Se.jsxs = function(m, A, O, P, N) {
      var q = 1e4 > U.recentlyCreatedOwnerStacks++;
      return b(
        m,
        A,
        O,
        !0,
        P,
        N,
        q ? Error("react-stack-top-frame") : Y,
        q ? B(o(m)) : C
      );
    };
  }()), Se;
}
process.env.NODE_ENV === "production" ? _e.exports = jt() : _e.exports = Pt();
var R = _e.exports;
function Je(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Je(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ae() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Je(e)) && (o && (o += " "), o += t);
  return o;
}
const Ve = "-", Mt = (e) => {
  const t = Ot(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Ve);
      return l[0] === "" && l.length !== 1 && l.shift(), Ze(l, t) || _t(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const p = r[a] || [];
      return l && o[a] ? [...p, ...o[a]] : p;
    }
  };
}, Ze = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Ze(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join(Ve);
  return (a = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : a.classGroupId;
}, He = /^\[(.+)\]$/, _t = (e) => {
  if (He.test(e)) {
    const t = He.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ot = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    Oe(r[n], o, n, t);
  return o;
}, Oe = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : Fe(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Dt(n)) {
        Oe(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, a]) => {
      Oe(a, Fe(t, i), r, o);
    });
  });
}, Fe = (e, t) => {
  let r = e;
  return t.split(Ve).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, Dt = (e) => e.isThemeGetter, Bt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = o.get(i)) !== void 0)
        return n(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : n(i, a);
    }
  };
}, De = "!", Be = ":", Vt = Be.length, Nt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const i = [];
    let a = 0, l = 0, p = 0, w;
    for (let s = 0; s < n.length; s++) {
      let g = n[s];
      if (a === 0 && l === 0) {
        if (g === Be) {
          i.push(n.slice(p, s)), p = s + Vt;
          continue;
        }
        if (g === "/") {
          w = s;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? l++ : g === ")" && l--;
    }
    const b = i.length === 0 ? n : n.substring(p), x = $t(b), y = x !== b, d = w && w > p ? w - p : void 0;
    return {
      modifiers: i,
      hasImportantModifier: y,
      baseClassName: x,
      maybePostfixModifierPosition: d
    };
  };
  if (t) {
    const n = t + Be, i = o;
    o = (a) => a.startsWith(n) ? i(a.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = o;
    o = (i) => r({
      className: i,
      parseClassName: n
    });
  }
  return o;
}, $t = (e) => e.endsWith(De) ? e.substring(0, e.length - 1) : e.startsWith(De) ? e.substring(1) : e, Gt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let i = [];
    return o.forEach((a) => {
      a[0] === "[" || t[a] ? (n.push(...i.sort(), a), i = []) : i.push(a);
    }), n.push(...i.sort()), n;
  };
}, Ut = (e) => ({
  cache: Bt(e.cacheSize),
  parseClassName: Nt(e),
  sortModifiers: Gt(e),
  ...Mt(e)
}), Wt = /\s+/, Kt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = t, a = [], l = e.trim().split(Wt);
  let p = "";
  for (let w = l.length - 1; w >= 0; w -= 1) {
    const b = l[w], {
      isExternal: x,
      modifiers: y,
      hasImportantModifier: d,
      baseClassName: s,
      maybePostfixModifierPosition: g
    } = r(b);
    if (x) {
      p = b + (p.length > 0 ? " " + p : p);
      continue;
    }
    let c = !!g, u = o(c ? s.substring(0, g) : s);
    if (!u) {
      if (!c) {
        p = b + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (u = o(s), !u) {
        p = b + (p.length > 0 ? " " + p : p);
        continue;
      }
      c = !1;
    }
    const k = i(y).join(":"), f = d ? k + De : k, v = f + u;
    if (a.includes(v))
      continue;
    a.push(v);
    const E = n(u, c);
    for (let I = 0; I < E.length; ++I) {
      const L = E[I];
      a.push(f + L);
    }
    p = b + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Ht() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Xe(t)) && (o && (o += " "), o += r);
  return o;
}
const Xe = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Xe(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Ft(e, ...t) {
  let r, o, n, i = a;
  function a(p) {
    const w = t.reduce((b, x) => x(b), e());
    return r = Ut(w), o = r.cache.get, n = r.cache.set, i = l, l(p);
  }
  function l(p) {
    const w = o(p);
    if (w)
      return w;
    const b = Kt(p, r);
    return n(p, b), b;
  }
  return function() {
    return i(Ht.apply(null, arguments));
  };
}
const H = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Yt = /^\d+\/\d+$/, qt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Xt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ue = (e) => Yt.test(e), j = (e) => !!e && !Number.isNaN(Number(e)), ie = (e) => !!e && Number.isInteger(Number(e)), je = (e) => e.endsWith("%") && j(e.slice(0, -1)), oe = (e) => qt.test(e), er = () => !0, tr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jt.test(e) && !Zt.test(e)
), tt = () => !1, rr = (e) => Xt.test(e), or = (e) => Qt.test(e), nr = (e) => !S(e) && !z(e), sr = (e) => he(e, nt, tt), S = (e) => Qe.test(e), ce = (e) => he(e, st, tr), Pe = (e) => he(e, dr, j), Ye = (e) => he(e, rt, tt), ir = (e) => he(e, ot, or), Te = (e) => he(e, it, rr), z = (e) => et.test(e), ze = (e) => be(e, st), ar = (e) => be(e, ur), qe = (e) => be(e, rt), lr = (e) => be(e, nt), cr = (e) => be(e, ot), Ce = (e) => be(e, it, !0), he = (e, t, r) => {
  const o = Qe.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = et.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", nt = (e) => e === "length" || e === "size" || e === "bg-size", st = (e) => e === "length", dr = (e) => e === "number", ur = (e) => e === "family-name", it = (e) => e === "shadow", fr = () => {
  const e = H("color"), t = H("font"), r = H("text"), o = H("font-weight"), n = H("tracking"), i = H("leading"), a = H("breakpoint"), l = H("container"), p = H("spacing"), w = H("radius"), b = H("shadow"), x = H("inset-shadow"), y = H("text-shadow"), d = H("drop-shadow"), s = H("blur"), g = H("perspective"), c = H("aspect"), u = H("ease"), k = H("animate"), f = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], v = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], E = () => [...v(), z, S], I = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", "contain", "none"], h = () => [z, S, p], T = () => [ue, "full", "auto", ...h()], D = () => [ie, "none", "subgrid", z, S], U = () => ["auto", {
    span: ["full", ie, z, S]
  }, ie, z, S], F = () => [ie, "auto", z, S], M = () => ["auto", "min", "max", "fr", z, S], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...h()], Y = () => [ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], C = () => [e, z, S], ne = () => [...v(), qe, Ye, {
    position: [z, S]
  }], m = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", lr, sr, {
    size: [z, S]
  }], O = () => [je, ze, ce], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    w,
    z,
    S
  ], N = () => ["", j, ze, ce], q = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [j, je, qe, Ye], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    s,
    z,
    S
  ], X = () => ["none", j, z, S], se = () => ["none", j, z, S], ke = () => [j, z, S], Ee = () => [ue, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [oe],
      breakpoint: [oe],
      color: [er],
      container: [oe],
      "drop-shadow": [oe],
      ease: ["in", "out", "in-out"],
      font: [nr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [oe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [oe],
      shadow: [oe],
      spacing: ["px", j],
      text: [oe],
      "text-shadow": [oe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ue, S, z, c]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [j, S, z, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": f()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": f()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ie, "auto", z, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ue, "full", "auto", l, ...h()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [j, ue, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", j, z, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", j, z, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ie, "first", "last", "none", z, S]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": M()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": M()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: h()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": h()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": h()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: h()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: h()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: h()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: h()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: h()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: h()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: h()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: h()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: h()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: W()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: W()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: W()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: W()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: W()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: W()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: W()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: W()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: W()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": h()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": h()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ze, ce]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, z, Pe]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", je, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ar, S, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, z, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [j, "none", z, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...h()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", z, S]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", z, S]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [j, "from-font", "auto", z, ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [j, "auto", z, S]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z, S]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", z, S]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ne()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: m()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: A()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ie, z, S],
          radial: ["", z, S],
          conic: [ie, z, S]
        }, cr, ir]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: P()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": P()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": P()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": P()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": P()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": P()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": P()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": P()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": P()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": P()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": P()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": P()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": P()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": P()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": P()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: N()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": N()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": N()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": N()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": N()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": N()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": N()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": N()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": N()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": N()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": N()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [j, z, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", j, ze, ce]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          b,
          Ce,
          Te
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, Ce, Te]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: N()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [j, ce]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": N()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, Ce, Te]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j, z, S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...de(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": de()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [j]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": v()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [j]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ne()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: m()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: A()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", z, S]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          z,
          S
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [j, z, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j, z, S]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Ce,
          Te
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", j, z, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [j, z, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", j, z, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j, z, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", j, z, S]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          z,
          S
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [j, z, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j, z, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", j, z, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [j, z, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", j, z, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j, z, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j, z, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", j, z, S]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": h()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": h()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": h()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", z, S]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [j, "initial", z, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", u, z, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [j, z, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, z, S]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, z, S]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ke()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ke()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ke()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [z, S, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ee()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ee()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ee()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ee()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: C()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: C()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z, S]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", z, S]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [j, ze, ce, Pe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, pr = /* @__PURE__ */ Ft(fr);
function le(...e) {
  return pr(ae(e));
}
const mr = {
  mobile: {
    type: "dock",
    breakpoint: 0,
    maxWidth: 767
  },
  tablet: {
    type: "tabs",
    breakpoint: 768,
    minWidth: 768,
    maxWidth: 1023
  },
  desktop: {
    type: "grid",
    breakpoint: 1024,
    minWidth: 1024
  }
};
function at(e = mr) {
  const [t, r] = J(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, n] = J(null), i = _(() => {
    if (typeof window > "u") return;
    const s = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(s);
  }, []), a = ee(() => {
    var g;
    if (o && e[o])
      return o;
    const s = Object.entries(e).filter(([c, u]) => {
      if (u.matcher)
        return u.matcher(t);
      const k = !u.minWidth || t.width >= u.minWidth, f = !u.maxWidth || t.width <= u.maxWidth;
      return k && f;
    });
    return s.sort(([, c], [, u]) => {
      const k = (c.minWidth ? 1 : 0) + (c.maxWidth ? 1 : 0);
      return (u.minWidth ? 1 : 0) + (u.maxWidth ? 1 : 0) - k;
    }), ((g = s[0]) == null ? void 0 : g[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = ee(() => e[a], [e, a]), p = ee(() => (l == null ? void 0 : l.type) || "grid", [l]), w = _((s) => {
    if (s && !e[s]) {
      console.warn(`Mode "${s}" not found in configuration`);
      return;
    }
    n(s);
  }, [e]), b = _((s) => a === s, [a]), x = ee(() => Object.keys(e), [e]), y = _((s) => {
    switch (p) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(s);
      case "tabs":
        return s === "tabs";
      case "dock":
        return s === "dock";
      default:
        return !1;
    }
  }, [p]), d = ee(() => {
    const s = Object.entries(e).map(([k, f]) => ({ name: k, ...f })).sort((k, f) => (k.breakpoint || 0) - (f.breakpoint || 0)), g = s.findIndex((k) => k.name === a), c = s[g + 1], u = s[g - 1];
    return {
      current: a,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: c == null ? void 0 : c.name,
      nextBreakpoint: c == null ? void 0 : c.breakpoint,
      prevMode: u == null ? void 0 : u.name,
      prevBreakpoint: u == null ? void 0 : u.breakpoint,
      isSmallest: g === 0,
      isLargest: g === s.length - 1
    };
  }, [e, a, l]);
  return V(() => {
    if (typeof window > "u") return;
    const s = () => i(), g = () => {
      setTimeout(i, 100);
    };
    return window.addEventListener("resize", s), window.addEventListener("orientationchange", g), () => {
      window.removeEventListener("resize", s), window.removeEventListener("orientationchange", g);
    };
  }, [i]), {
    // Current state
    viewport: t,
    activeMode: a,
    currentModeConfig: l,
    currentLayoutType: p,
    // Mode management
    setMode: w,
    isMode: b,
    availableModes: x,
    // Features and capabilities
    supportsFeature: y,
    breakpointInfo: d,
    // Utilities
    isForced: !!o,
    updateViewport: i
  };
}
const te = "pretty-poly-grid-", ye = {
  save: (e, t) => {
    try {
      localStorage.setItem(e, JSON.stringify(t));
    } catch (r) {
      console.warn("Failed to save to localStorage:", r);
    }
  },
  load: (e) => {
    try {
      const t = localStorage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      return console.warn("Failed to load from localStorage:", t), null;
    }
  },
  remove: (e) => {
    try {
      localStorage.removeItem(e);
    } catch (t) {
      console.warn("Failed to remove from localStorage:", t);
    }
  },
  clear: () => {
    try {
      const e = [];
      for (let t = 0; t < localStorage.length; t++) {
        const r = localStorage.key(t);
        r && r.startsWith(te) && e.push(r);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, lt = {
  save: (e, t) => {
    try {
      sessionStorage.setItem(e, JSON.stringify(t));
    } catch (r) {
      console.warn("Failed to save to sessionStorage:", r);
    }
  },
  load: (e) => {
    try {
      const t = sessionStorage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      return console.warn("Failed to load from sessionStorage:", t), null;
    }
  },
  remove: (e) => {
    try {
      sessionStorage.removeItem(e);
    } catch (t) {
      console.warn("Failed to remove from sessionStorage:", t);
    }
  },
  clear: () => {
    try {
      const e = [];
      for (let t = 0; t < sessionStorage.length; t++) {
        const r = sessionStorage.key(t);
        r && r.startsWith(te) && e.push(r);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, pe = /* @__PURE__ */ new Map(), Ae = {
  save: (e, t) => {
    pe.set(e, t);
  },
  load: (e) => pe.get(e) || null,
  remove: (e) => {
    pe.delete(e);
  },
  clear: () => {
    for (const e of pe.keys())
      e.startsWith(te) && pe.delete(e);
  }
};
function Me(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? ye : Ae;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? lt : Ae;
    case "memory":
    default:
      return Ae;
  }
}
function Ne(e) {
  return `${te}${e}`;
}
function gr(e, t, r = ye) {
  const o = Ne(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function yr(e, t = ye) {
  const r = Ne(e);
  return t.load(r);
}
function hr(e, t = ye) {
  const r = Ne(e);
  t.remove(r);
}
function Nr(e = ye) {
  const t = {};
  try {
    if (e === ye && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(te)) {
          const n = o.substring(te.length), i = e.load(o);
          i && (t[n] = i);
        }
      }
    else if (e === lt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(te)) {
          const n = o.substring(te.length), i = e.load(o);
          i && (t[n] = i);
        }
      }
    else if (e === Ae) {
      for (const r of pe.keys())
        if (r.startsWith(te)) {
          const o = r.substring(te.length), n = e.load(r);
          n && (t[o] = n);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function br(e) {
  return {
    save: (t, r) => e(r),
    load: () => null,
    // Custom adapters typically don't load
    remove: () => {
    },
    clear: () => {
    }
  };
}
function wr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: n = !0,
  saveDelay: i = 500
}) {
  const a = me(null), l = me(), p = me(""), w = me(!1);
  V(() => {
    if (!t) {
      a.current = null;
      return;
    }
    typeof t == "function" ? a.current = br(t) : t === "localStorage" ? a.current = Me("localStorage") : t === "sessionStorage" ? a.current = Me("sessionStorage") : a.current = Me("localStorage");
  }, [t]), V(() => {
    if (!a.current || !t || typeof t == "function" || w.current)
      return;
    const s = yr(e, a.current);
    s && (o == null || o(s), w.current = !0);
  }, [e, t]);
  const b = _((s = r) => {
    if (!a.current || !t)
      return;
    const g = JSON.stringify(s);
    if (g !== p.current)
      try {
        gr(e, s, a.current), p.current = g;
      } catch (c) {
        console.warn("Failed to save grid state:", c);
      }
  }, [e, t, r]), x = _((s = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      b(s);
    }, i);
  }, [b, i, r]), y = _(() => {
    if (!(!a.current || !t || typeof t == "function"))
      try {
        hr(e, a.current), p.current = "";
      } catch (s) {
        console.warn("Failed to clear grid state:", s);
      }
  }, [e, t]), d = _((s = r) => {
    l.current && clearTimeout(l.current), b(s);
  }, [b, r]);
  return V(() => {
    if (!(!n || !t))
      return x(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, n, t, x]), V(() => {
    if (!t || typeof t == "function")
      return;
    const s = () => {
      d();
    };
    return window.addEventListener("beforeunload", s), () => {
      window.removeEventListener("beforeunload", s);
    };
  }, [d, t]), V(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: d,
    debouncedSave: x,
    clearState: y,
    isEnabled: !!t
  };
}
function ct(e, t, r) {
  return Math.max(0, e - t - r);
}
function $r(e, t) {
  return t > 0 ? e / t : 0;
}
function ge(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Gr(e, t) {
  return t > 0 && e <= t;
}
function vr(e, t, r, o, n) {
  if (r === 0)
    return e;
  const i = t <= r, a = o * 2.5;
  return i && e > a ? n : e < r && !i ? o : e;
}
function kr(e, t, r = 0, o = 1 / 0, n = !1) {
  const i = n ? -e : e, a = t + i;
  return ge(a, r, o);
}
function xr(e, t, r) {
  const o = [];
  return (r ? e.filter((i) => !r.has(i.id)) : e).forEach((i) => {
    if (i.sizeUnit === "auto")
      o.push("auto");
    else if (i.sizeUnit === "px") {
      const a = t ? `--${t}-${i.id}-size` : `--${i.id}-size`;
      o.push(`var(${a}, ${i.size}px)`);
    } else {
      const a = t ? `--${t}-${i.id}-size` : `--${i.id}-size`;
      o.push(`var(${a}, ${i.size}fr)`);
    }
  }), o.join(" ");
}
function Ur(e, t) {
  return e * t;
}
function Sr(e, t) {
  return t > 0 ? e / t : 0;
}
function Wr(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Kr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function zr(e, t) {
  const r = _((a) => "touches" in a ? {
    x: a.touches[0].clientX,
    y: a.touches[0].clientY
  } : {
    x: a.clientX,
    y: a.clientY
  }, []), o = _((a, l, p) => {
    const w = e.blocks[a];
    if (!w) return;
    if (w.resizable === !1) {
      console.warn(`Cannot resize block "${a}" - block is marked as non-resizable.`);
      return;
    }
    const b = r(p), x = document.querySelector(`[data-divider-id="${l}"]`), y = (x == null ? void 0 : x.getAttribute("data-divider-position")) || "end", s = Object.values(e.blocks).filter(
      (f) => f.parentId === w.parentId
    ).sort(
      (f, v) => (f.order || 0) - (v.order || 0)
    ), g = s.findIndex((f) => f.id === a);
    let c = null;
    if (y === "start" && g > 0 ? c = s[g - 1] : y === "end" && g < s.length - 1 && (c = s[g + 1]), c && c.resizable === !1) {
      console.warn(
        `Cannot resize block "${a}" - adjacent block "${c.id}" is marked as non-resizable.`
      );
      return;
    }
    if (c && w.sizeUnit === "fr" && c.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${a}" when adjacent to px block "${c.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: a,
        dividerId: l,
        startPosition: b,
        initialSize: w.defaultSize || 0,
        initialAdjacentBlockId: c == null ? void 0 : c.id,
        initialAdjacentSize: c ? c.originalDefaultSize || c.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const u = w.parentId ? e.blocks[w.parentId] : null, k = (u == null ? void 0 : u.direction) || "row";
    document.body.style.cursor = k === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), n = _((a) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const p = r(a), w = l.parentId ? e.blocks[l.parentId] : null, b = (w == null ? void 0 : w.direction) || "row", x = b === "row" ? p.x - e.resize.startPosition.x : p.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const y = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), s = ((y == null ? void 0 : y.getAttribute("data-divider-position")) || "end") === "start", g = kr(
        x,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        s
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: g }
      });
    } else if (l.sizeUnit === "fr") {
      const y = Object.values(e.blocks).filter(
        (M) => M.parentId === l.parentId
      ), d = y.filter((M) => M.sizeUnit === "fr"), s = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), g = s ? b === "row" ? s.clientWidth : s.clientHeight : 1200, c = y.filter((M) => M.sizeUnit === "px").reduce((M, B) => {
        const G = document.querySelector(`[data-block-id="${B.id}"]`);
        if (!G) return M;
        const W = b === "row" ? G.clientWidth : G.clientHeight;
        return M + W;
      }, 0), k = Array.from(
        (s == null ? void 0 : s.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((M, B) => {
        if (!(B instanceof HTMLElement)) return M;
        const G = b === "row" ? B.clientWidth : B.clientHeight;
        return M + G;
      }, 0), v = ct(g, c, k), E = d.reduce(
        (M, B) => M + (B.defaultSize || 1),
        0
      ), I = E > 0 ? v / E : 0;
      if (I === 0) return;
      const L = Sr(x, I), h = d.sort(
        (M, B) => (M.order || 0) - (B.order || 0)
      ), T = h.findIndex(
        (M) => M.id === e.resize.activeBlockId
      ), D = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), U = (D == null ? void 0 : D.getAttribute("data-divider-position")) || "end";
      let F = null;
      if (U === "start" && T > 0 ? F = h[T - 1] : U === "end" && T < h.length - 1 && (F = h[T + 1]), F) {
        let M, B;
        M = L, B = -L;
        const G = 0.1, W = Math.max(
          G,
          e.resize.initialSize + M
        ), Y = Math.max(
          G,
          (e.resize.initialAdjacentSize || 1) + B
        ), C = W - e.resize.initialSize, ne = Y - (e.resize.initialAdjacentSize || 1);
        Math.abs(C + ne) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: W
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: F.id, size: Y }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), i = _(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: n,
    endResize: i
  };
}
function Er(e, t) {
  switch (t.type) {
    case "HIDE_BLOCK":
      return {
        ...e,
        hiddenBlocks: /* @__PURE__ */ new Set([...e.hiddenBlocks, t.payload.blockId])
      };
    case "SHOW_BLOCK":
      const r = new Set(e.hiddenBlocks);
      return r.delete(t.payload.blockId), {
        ...e,
        hiddenBlocks: r
      };
    case "TOGGLE_BLOCK_VISIBILITY":
      const o = e.hiddenBlocks.has(t.payload.blockId), n = new Set(e.hiddenBlocks);
      return o ? n.delete(t.payload.blockId) : n.add(t.payload.blockId), {
        ...e,
        hiddenBlocks: n
      };
    case "RESIZE_BLOCK":
      const i = e.blocks[t.payload.blockId];
      return i ? {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...i,
            defaultSize: t.payload.size,
            size: t.payload.size
          }
        }
      } : e;
    case "COLLAPSE_BLOCK":
      const a = e.blocks[t.payload.blockId];
      if (!a) return e;
      const l = a.collapseTo ?? 0, p = a.minSize ?? 0, w = Math.max(l, p);
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...a,
            // Preserve original size for expand
            originalDefaultSize: a.originalDefaultSize || a.defaultSize,
            defaultSize: w,
            size: w
          }
        }
      };
    case "EXPAND_BLOCK":
      const b = e.blocks[t.payload.blockId];
      if (!b) return e;
      const x = b.originalDefaultSize || b.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...b,
            defaultSize: x,
            size: x
          }
        }
      };
    case "SET_ACTIVE_DIVIDER":
      return {
        ...e,
        activeDivider: t.payload.dividerId
      };
    case "SWITCH_MODE":
      return {
        ...e,
        activeMode: t.payload.mode
      };
    case "UPDATE_VIEWPORT":
      return {
        ...e,
        viewport: t.payload.viewport
      };
    case "LOAD_STATE":
      return {
        ...e,
        ...t.payload.state,
        // Always preserve current viewport
        viewport: e.viewport
      };
    case "RESET_STATE":
      const y = Object.fromEntries(
        Object.entries(e.blocks).map(([d, s]) => [
          d,
          {
            ...s,
            size: s.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: y,
        activeDivider: void 0,
        resize: {
          isDragging: !1,
          startPosition: { x: 0, y: 0 },
          initialSize: 0
        }
      };
    case "START_RESIZE":
      return {
        ...e,
        resize: {
          isDragging: !0,
          activeBlockId: t.payload.blockId,
          activeDividerId: t.payload.dividerId,
          startPosition: t.payload.startPosition,
          initialSize: t.payload.initialSize,
          initialAdjacentBlockId: t.payload.initialAdjacentBlockId,
          initialAdjacentSize: t.payload.initialAdjacentSize
        }
      };
    case "UPDATE_RESIZE":
      return {
        ...e,
        resize: {
          ...e.resize
          // The resize calculation happens in the resize handler, not the reducer
        }
      };
    case "END_RESIZE":
      return {
        ...e,
        resize: {
          isDragging: !1,
          startPosition: { x: 0, y: 0 },
          initialSize: 0
        }
      };
    case "SPLIT_BLOCK": {
      const { targetBlockId: d, direction: s, firstChildId: g, secondChildId: c, initialSize: u = 1 } = t.payload, k = e.blocks[d];
      if (!k) return e;
      const f = {
        ...k,
        type: "group",
        direction: s === "horizontal" ? "column" : "row",
        children: [g, c],
        viewType: void 0
        // Groups don't have view types
      }, v = {
        id: g,
        type: "block",
        parentId: d,
        order: 0,
        defaultSize: u,
        sizeUnit: "fr",
        viewType: k.viewType,
        viewState: k.viewState
      }, E = {
        id: c,
        type: "block",
        parentId: d,
        order: 1,
        defaultSize: u,
        sizeUnit: "fr",
        viewType: t.payload.newViewType
      };
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [d]: f,
          [g]: v,
          [c]: E
        }
      };
    }
    case "UNSPLIT_BLOCK": {
      const { blockId: d } = t.payload, s = e.blocks[d];
      if (!s || s.type !== "group" || !s.children)
        return e;
      const g = { ...e.blocks };
      s.children.forEach((u) => {
        delete g[u];
      });
      const c = {
        ...s,
        type: "block",
        children: void 0,
        viewType: void 0
        // User will need to set content
      };
      return g[d] = c, {
        ...e,
        blocks: g
      };
    }
    case "ADD_BLOCK": {
      const { parentId: d, block: s } = t.payload, g = e.blocks[d];
      if (!g) return e;
      const c = g.type === "group" && g.children ? {
        ...g,
        children: [...g.children, s.id]
      } : g;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [d]: c,
          [s.id]: s
        }
      };
    }
    case "REMOVE_BLOCK": {
      const { blockId: d } = t.payload, s = e.blocks[d];
      if (!s) return e;
      const g = { ...e.blocks };
      if (s.parentId) {
        const u = g[s.parentId];
        u && u.type === "group" && u.children && (g[s.parentId] = {
          ...u,
          children: u.children.filter((k) => k !== d)
        });
      }
      delete g[d];
      const c = new Set(e.hiddenBlocks);
      return c.delete(d), {
        ...e,
        blocks: g,
        hiddenBlocks: c
      };
    }
    case "SET_BLOCK_VIEW_TYPE": {
      const { blockId: d, viewType: s } = t.payload, g = e.blocks[d];
      return g ? {
        ...e,
        blocks: {
          ...e.blocks,
          [d]: {
            ...g,
            viewType: s
          }
        }
      } : e;
    }
    default:
      return e;
  }
}
function Tr(e, t, r) {
  return {
    blocks: e.reduce((n, i) => (n[i.id] = {
      ...i,
      size: i.defaultSize,
      originalDefaultSize: i.defaultSize
      // Store original size for expand functionality
    }, n), {}),
    hiddenBlocks: /* @__PURE__ */ new Set(),
    // Initialize with no hidden blocks
    activeMode: r,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const dt = Ie(null);
function Cr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: n = !1,
  persistKey: i,
  onModeChange: a,
  onLayoutChange: l
}) {
  const { activeMode: p, viewport: w, setMode: b } = at(r), [x, y] = It(
    Er,
    Tr(t, w, p)
  );
  V(() => {
    y({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: w }
    });
  }, [w]), V(() => {
    const f = x.activeMode;
    p !== f && (y({
      type: "SWITCH_MODE",
      payload: { mode: p }
    }), a == null || a(p, f));
  }, [p, x.activeMode, a]);
  const { saveState: d, clearState: s } = wr({
    gridId: i || o,
    enabled: n,
    state: x,
    onStateLoad: (f) => {
      y({ type: "LOAD_STATE", payload: { state: f } });
    },
    autoSave: !0
  }), { startResize: g, updateResize: c, endResize: u } = zr(x, y), k = ee(
    () => ({
      gridId: o,
      state: {
        ...x,
        activeMode: p,
        viewport: w
      },
      dispatch: y,
      // Grid operations
      resizeBlock: (f, v) => {
        y({
          type: "RESIZE_BLOCK",
          payload: { blockId: f, size: v }
        });
      },
      collapseBlock: (f) => {
        y({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: f }
        });
      },
      expandBlock: (f) => {
        y({
          type: "EXPAND_BLOCK",
          payload: { blockId: f }
        });
      },
      switchMode: (f) => {
        b(f);
      },
      // Block visibility operations
      hideBlock: (f) => {
        y({
          type: "HIDE_BLOCK",
          payload: { blockId: f }
        });
      },
      showBlock: (f) => {
        y({
          type: "SHOW_BLOCK",
          payload: { blockId: f }
        });
      },
      toggleBlockVisibility: (f) => {
        y({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId: f }
        });
      },
      // Split operations (LayoutService primitives)
      splitBlock: (f, v, E = {}) => {
        const { initialSize: I = 1, viewType: L, position: h = "after" } = E, T = `${f}-1`, D = `${f}-2`;
        return y({
          type: "SPLIT_BLOCK",
          payload: {
            targetBlockId: f,
            direction: v,
            newBlockId: h === "before" ? T : D,
            firstChildId: T,
            secondChildId: D,
            initialSize: I,
            newViewType: L,
            position: h
          }
        }), h === "before" ? T : D;
      },
      unsplitBlock: (f) => {
        y({
          type: "UNSPLIT_BLOCK",
          payload: { blockId: f }
        });
      },
      canSplit: (f) => {
        var I;
        const v = x.blocks[f];
        if (!v || v.type !== "block" || v.canSplit === !1) return !1;
        const E = ((I = v.splitConfig) == null ? void 0 : I.minSplitSize) || 200;
        return !(v.sizeUnit === "px" && (v.defaultSize || 0) < E * 2);
      },
      addBlock: (f, v) => {
        const E = v.id || `block-${Date.now()}`, I = {
          id: E,
          type: "block",
          parentId: f,
          defaultSize: 1,
          sizeUnit: "fr",
          ...v
        };
        return y({
          type: "ADD_BLOCK",
          payload: { parentId: f, block: I }
        }), E;
      },
      removeBlock: (f) => {
        y({
          type: "REMOVE_BLOCK",
          payload: { blockId: f }
        });
      },
      // View type operations (future ViewRegistry support)
      setBlockViewType: (f, v) => {
        y({
          type: "SET_BLOCK_VIEW_TYPE",
          payload: { blockId: f, viewType: v }
        });
      },
      getBlockViewType: (f) => {
        var v;
        return (v = x.blocks[f]) == null ? void 0 : v.viewType;
      },
      // Resize operations (using extracted hook)
      startResize: g,
      updateResize: c,
      endResize: u,
      // Persistence
      persistState: () => d(x),
      resetState: () => {
        y({ type: "RESET_STATE" }), s();
      }
    }),
    [o, x, p, w, d, s, b, g, c, u]
  );
  return V(() => {
    if (l) {
      const f = Object.values(x.blocks);
      l(f);
    }
  }, [x.blocks, l]), /* @__PURE__ */ R.jsx(dt.Provider, { value: k, children: e });
}
function re() {
  const e = Re(dt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function $e() {
  const { state: e } = re();
  return e;
}
function Ar() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: l,
    resetState: p
  } = re();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: l,
    resetState: p
  };
}
function ut() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = re();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function Hr(e) {
  const { state: t } = re();
  return t.hiddenBlocks.has(e);
}
function Fr() {
  const { hideBlock: e } = re();
  return e;
}
function Yr() {
  const { showBlock: e } = re();
  return e;
}
function qr() {
  const { toggleBlockVisibility: e } = re();
  return e;
}
function Ir({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: n,
    updateResize: i,
    endResize: a,
    isDragging: l,
    activeBlockId: p,
    activeDividerId: w
  } = ut(), b = _(() => {
    if (!t.current) return 0;
    const c = t.current.getBoundingClientRect();
    return o === "column" ? c.width : c.height;
  }, [o, t]), x = _(() => {
    const c = b();
    if (c === 0) return 0;
    const u = e.filter((E) => E.sizeUnit === "px").reduce((E, I) => E + (I.defaultSize || 0), 0), k = 0, f = e.filter((E) => E.sizeUnit === "fr").reduce((E, I) => E + (I.defaultSize || 1), 0), v = ct(c, u, k);
    return f > 0 ? v / f : 0;
  }, [e, b]), y = _((c) => {
    const u = e.find((k) => k.id === c);
    u && u.defaultSize !== void 0 && (r == null || r(c, u.defaultSize));
  }, [e, r]), d = _((c) => {
    const u = e.find((k) => k.id === c);
    u && u.collapseTo !== void 0 && (r == null || r(c, u.collapseTo));
  }, [e, r]), s = _((c) => {
    const u = e.find((k) => k.id === c);
    u && u.defaultSize !== void 0 && (r == null || r(c, u.defaultSize));
  }, [e, r]), g = _((c) => {
    const u = e.find((k) => k.id === c);
    return !u || !u.collapseAt ? !1 : (u.defaultSize || 0) <= u.collapseAt;
  }, [e]);
  return V(() => {
    const c = (v) => {
      v.preventDefault(), i(v);
    }, u = (v) => {
      v.preventDefault(), i(v);
    }, k = () => {
      a();
    }, f = () => {
      a();
    };
    if (l)
      return document.addEventListener("mousemove", c), document.addEventListener("mouseup", k), document.addEventListener("touchmove", u), document.addEventListener("touchend", f), () => {
        document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", k), document.removeEventListener("touchmove", u), document.removeEventListener("touchend", f);
      };
  }, [l, i, a]), {
    // State
    isDragging: l,
    activeBlockId: p,
    activeDividerId: w,
    // Actions
    startResize: n,
    resetBlock: y,
    collapseBlock: d,
    expandBlock: s,
    // Utilities
    isBlockCollapsed: g,
    getContainerSize: b,
    calculatePixelsPerFr: x
  };
}
function Rr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: i,
  onSplitBlock: a,
  containerRef: l,
  stepSize: p = 10,
  largeStepSize: w = 50
}) {
  const b = _(() => {
    const c = document.activeElement;
    return (c == null ? void 0 : c.dataset.blockType) === "block" || (c == null ? void 0 : c.dataset.blockType) === "group" ? c : (c == null ? void 0 : c.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), x = _((c) => {
    if (!c) return null;
    const u = c.dataset.blockId;
    return t.find((k) => k.id === u) || null;
  }, [t]), y = _((c, u) => {
    if (!(l != null && l.current)) return null;
    const k = Array.from(
      l.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), f = c.getBoundingClientRect(), v = {
      x: f.left + f.width / 2,
      y: f.top + f.height / 2
    }, E = k.filter((I) => {
      if (I === c) return !1;
      const L = I.getBoundingClientRect(), h = {
        x: L.left + L.width / 2,
        y: L.top + L.height / 2
      };
      switch (u) {
        case "up":
          return h.y < v.y;
        case "down":
          return h.y > v.y;
        case "left":
          return h.x < v.x;
        case "right":
          return h.x > v.x;
        default:
          return !1;
      }
    });
    return E.length === 0 ? null : (E.sort((I, L) => {
      const h = I.getBoundingClientRect(), T = L.getBoundingClientRect(), D = {
        x: h.left + h.width / 2,
        y: h.top + h.height / 2
      }, U = {
        x: T.left + T.width / 2,
        y: T.top + T.height / 2
      }, F = Math.sqrt(
        Math.pow(D.x - v.x, 2) + Math.pow(D.y - v.y, 2)
      ), M = Math.sqrt(
        Math.pow(U.x - v.x, 2) + Math.pow(U.y - v.y, 2)
      );
      return F - M;
    }), E[0]);
  }, [l]), d = _((c) => {
    if (!e) return;
    const u = b();
    if (!u) return;
    const k = x(u);
    if (!k) return;
    const f = c.ctrlKey || c.metaKey, v = c.shiftKey, E = v ? w : p;
    if (!f && !v)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault();
          const I = y(u, "up");
          I && (I.focus(), o == null || o(I.dataset.blockId || ""));
          break;
        case "ArrowDown":
          c.preventDefault();
          const L = y(u, "down");
          L && (L.focus(), o == null || o(L.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          c.preventDefault();
          const h = y(u, "left");
          h && (h.focus(), o == null || o(h.dataset.blockId || ""));
          break;
        case "ArrowRight":
          c.preventDefault();
          const T = y(u, "right");
          T && (T.focus(), o == null || o(T.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          c.preventDefault(), k.collapsible && (i == null || i(k.id));
          break;
        case "Escape":
          c.preventDefault(), u.blur();
          break;
      }
    if (f && r)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault(), r(k.id, -E);
          break;
        case "ArrowDown":
          c.preventDefault(), r(k.id, E);
          break;
        case "ArrowLeft":
          c.preventDefault(), r(k.id, -E);
          break;
        case "ArrowRight":
          c.preventDefault(), r(k.id, E);
          break;
      }
    if (f)
      switch (c.key) {
        case "Minus":
        case "-":
          c.preventDefault(), n == null || n(k.id);
          break;
        case "Plus":
        case "+":
        case "=":
          c.preventDefault(), i == null || i(k.id);
          break;
        case "\\":
          c.preventDefault(), v ? a == null || a(k.id, "horizontal") : a == null || a(k.id, "vertical");
          break;
      }
  }, [
    e,
    b,
    x,
    y,
    r,
    o,
    n,
    i,
    a,
    p,
    w
  ]), s = _((c) => {
    if (!(l != null && l.current)) return;
    const u = l.current.querySelector(
      `[data-block-id="${c}"]`
    );
    u && (u.focus(), o == null || o(c));
  }, [l, o]), g = _(() => l != null && l.current ? Array.from(
    l.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [l]);
  return V(() => {
    if (e)
      return document.addEventListener("keydown", d), () => {
        document.removeEventListener("keydown", d);
      };
  }, [d, e]), {
    focusBlock: s,
    getFocusableBlocks: g,
    getFocusedBlock: b,
    isEnabled: e
  };
}
const ft = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: n,
  "aria-label": i
}) => {
  const a = me(null), l = $e(), { startResize: p, isDragging: w, activeDividerId: b } = ut(), [x, y] = J({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), d = l.blocks[e], s = r === "vertical", g = `${e}-${t}-divider`, c = w && b === g, u = _(() => {
    const f = document.querySelector("[data-grid-id]"), v = document.querySelector(`[data-block-id="${e}"]`);
    if (!f || !v) return;
    const E = f.getBoundingClientRect(), I = v.getBoundingClientRect(), L = d == null ? void 0 : d.parentId, h = L ? document.querySelector(`[data-block-id="${L}"]`) : f;
    if (!h) return;
    const T = h.getBoundingClientRect();
    if (s) {
      const D = t === "start" ? I.left - E.left : I.right - E.left;
      y({
        left: D - o / 2,
        // Center on edge
        top: T.top - E.top,
        // Position relative to parent
        width: o,
        height: T.height
        // Use parent height to constrain divider
      });
    } else {
      const D = t === "start" ? I.top - E.top : I.bottom - E.top;
      y({
        left: T.left - E.left,
        // Position relative to parent
        top: D - o / 2,
        // Center on edge
        width: T.width,
        // Use parent width to constrain divider
        height: o
      });
    }
  }, [e, t, s, o, d == null ? void 0 : d.parentId]);
  Rt(() => {
    const f = document.querySelector("[data-grid-id]"), v = document.querySelector(`[data-block-id="${e}"]`);
    if (!f || !v) return;
    u();
    const E = new ResizeObserver(() => {
      u();
    });
    E.observe(f), E.observe(v);
    const I = d == null ? void 0 : d.parentId, L = I ? document.querySelector(`[data-block-id="${I}"]`) : null;
    return L && E.observe(L), () => {
      E.disconnect();
    };
  }, [e, u, d == null ? void 0 : d.parentId]), V(() => {
    u();
  }, [l.blocks, u]);
  const k = _((f) => {
    f.preventDefault(), p(e, g, f);
  }, [e, g, p]);
  return d ? /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: a,
      className: le(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        c && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        s ? "cursor-col-resize" : "cursor-row-resize",
        n
      ),
      style: {
        left: `${x.left}px`,
        top: `${x.top}px`,
        width: `${x.width}px`,
        height: `${x.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": g,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": r,
      role: "separator",
      "aria-label": i || `Resize ${e}`,
      "aria-valuenow": d == null ? void 0 : d.defaultSize,
      "aria-valuemin": d == null ? void 0 : d.minSize,
      "aria-valuemax": d == null ? void 0 : d.maxSize,
      tabIndex: 0,
      onMouseDown: k,
      onTouchStart: k
    }
  ) : null;
};
ft.displayName = "Divider";
function Lr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function jr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const n = Object.values(e).filter((l) => l.parentId === o.id).sort((l, p) => (l.order || 0) - (p.order || 0));
    if (n.length === 0) return;
    const a = o.direction === "row" ? "vertical" : "horizontal";
    n.forEach((l, p) => {
      if (p === 0) return;
      const w = n[p - 1], b = w.resizable !== !1, x = l.resizable !== !1;
      if (!b && !x)
        return;
      const { targetId: y, position: d } = Lr(w, l), s = e[y];
      s && s.resizable === !1 || t.push({
        id: `divider-${w.id}-${l.id}`,
        targetBlockId: y,
        position: d,
        direction: a
      });
    });
  }), t;
}
const Pr = () => {
  const e = $e(), t = ee(() => jr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ R.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ R.jsx(
        ft,
        {
          targetId: r.targetBlockId,
          position: r.position,
          direction: r.direction
        },
        r.id
      ))
    }
  );
}, pt = Z(({ children: e, className: t, "aria-label": r }, o) => {
  const n = me(null), {
    state: i,
    resizeBlock: a,
    collapseBlock: l,
    expandBlock: p,
    switchMode: w,
    persistState: b,
    resetState: x
  } = re(), y = i.resize.isDragging;
  Lt(
    o,
    () => ({
      resizeBlock: a,
      collapseBlock: l,
      expandBlock: p,
      switchMode: w,
      persistState: b,
      resetState: x,
      getState: () => i
    }),
    [
      a,
      l,
      p,
      w,
      b,
      x,
      i
    ]
  );
  const d = ee(() => Object.values(i.blocks).sort((v, E) => (v.order || 0) - (E.order || 0)), [i.blocks]), s = ee(() => d.find((f) => !f.parentId), [d]);
  Ir({
    blocks: d,
    containerRef: n,
    onSizeChange: a,
    direction: (s == null ? void 0 : s.direction) || "row"
  });
  const { splitBlock: g } = re();
  Rr({
    enabled: !0,
    blocks: d,
    containerRef: n,
    onResizeBlock: (f, v) => {
      const E = i.blocks[f];
      if (E) {
        const I = E.defaultSize || 0, L = Math.max(0, I + v);
        a(f, L);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: p,
    onSplitBlock: (f, v) => {
      g(f, v);
    }
  });
  const { gridStyles: c, cssVariables: u, modeStyles: k } = ee(() => {
    if (!s)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const f = d.reduce((T, D) => {
      if (D.id === s.id) return T;
      const U = D.parentId || s.id;
      return T[U] || (T[U] = []), T[U].push(D), T;
    }, {}), v = d.filter((T) => T.defaultSize !== void 0).map((T) => {
      const D = T.sizeUnit === "px" ? `${T.defaultSize}px` : `${T.defaultSize}fr`;
      return `--${s.id}-${T.id}-size: ${D};`;
    }).join(`
  `), E = () => "", I = (T, D = /* @__PURE__ */ new Set()) => {
      if (D.has(T))
        return console.warn(`Circular reference detected for parent: ${T}`), "";
      const U = new Set(D);
      U.add(T);
      const F = f[T] || [];
      if (F.length === 0) return "";
      const M = [...F].sort(
        (A, O) => (A.order || 0) - (O.order || 0)
      ), B = d.find((A) => A.id === T) || s, G = (B == null ? void 0 : B.direction) || "row", W = M.map((A) => ({
        id: A.id,
        sizeUnit: A.sizeUnit || "fr",
        size: A.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), Y = xr(W, s.id, i.hiddenBlocks), C = G === "column" ? "grid-template-rows" : "grid-template-columns";
      let m = `
${`[data-block-id="${T}"]`} {
  display: grid;
  ${C}: ${Y};
  ${G === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const A of M)
        A.type === "group" && (m += I(A.id, U));
      return m;
    }, L = I(s.id), h = E();
    return {
      cssVariables: `:root {
  ${v}
}`,
      gridStyles: L,
      modeStyles: h
    };
  }, [d, s, i.hiddenBlocks]);
  return s ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsxs("style", { type: "text/css", children: [
      u,
      c,
      k
    ] }),
    /* @__PURE__ */ R.jsxs(
      "div",
      {
        ref: n,
        className: le(
          "group relative overflow-hidden",
          y && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": s.id,
        "data-block-id": s.id,
        "data-block-type": s.type,
        "data-active-mode": i.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (i.activeMode === "grid" || i.activeMode === "desktop") && /* @__PURE__ */ R.jsx(Pr, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
pt.displayName = "GridInternal";
const Mr = Z(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: n,
    onLayoutChange: i,
    onModeChange: a,
    className: l,
    dividers: p = "manual",
    dividerConfig: w,
    "aria-label": b
  }, x) => {
    const y = t.find((s) => !s.parentId), d = (y == null ? void 0 : y.id) || "root";
    return /* @__PURE__ */ R.jsx(
      Cr,
      {
        blocks: t,
        modes: r,
        gridId: d,
        persist: o,
        persistKey: n,
        onLayoutChange: i,
        onModeChange: a,
        children: /* @__PURE__ */ R.jsx(
          pt,
          {
            ref: x,
            className: l,
            dividers: p,
            dividerConfig: w,
            "aria-label": b,
            children: e
          }
        )
      }
    );
  }
);
Mr.displayName = "Grid";
const mt = Z(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, n) => {
    const i = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: n,
        className: le(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          i[e],
          t
        ),
        "data-scroll-mode": e,
        "aria-label": o,
        role: "main",
        children: r
      }
    );
  }
);
mt.displayName = "Block.Content";
const gt = Z(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: n,
      className: le(
        "pretty-poly-block-header",
        "flex-shrink-0",
        // Don't shrink
        "flex flex-row items-center",
        // Default to horizontal layout
        "min-h-0",
        // Allow content to determine height
        e === "bottom" && "order-last",
        // Move to bottom if specified
        t
      ),
      "data-header-position": e,
      "aria-label": o,
      role: "banner",
      children: r
    }
  )
);
gt.displayName = "Block.Header";
const yt = Z(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: o,
      className: le(
        "pretty-poly-block-footer",
        "flex-shrink-0",
        // Don't shrink
        "flex flex-row items-center",
        // Default to horizontal layout
        "min-h-0",
        // Allow content to determine height
        "order-last",
        // Always at bottom
        e
      ),
      "aria-label": r,
      role: "contentinfo",
      children: t
    }
  )
);
yt.displayName = "Block.Footer";
const ht = Z(
  ({ left: e, center: t, right: r, className: o, "aria-label": n }, i) => /* @__PURE__ */ R.jsxs(
    "div",
    {
      ref: i,
      className: le(
        "pretty-poly-block-toolbar",
        "flex items-center justify-between",
        "w-full px-3 py-2",
        // Standard padding
        "border-b",
        // Shadcn border uses default border color
        "bg-muted",
        // Shadcn background
        o
      ),
      "aria-label": n || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
ht.displayName = "Block.Toolbar";
const bt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": i,
    allowOverflow: a = !0
  }, l) => {
    const [p, w] = J(null), b = (d, s) => {
      s.preventDefault(), d.disabled || r(d.id);
    }, x = (d, s) => {
      s.preventDefault(), s.stopPropagation(), o && d.closable && o(d.id);
    }, y = (d, s) => {
      (s.key === "Enter" || s.key === " ") && (s.preventDefault(), d.disabled || r(d.id));
    };
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: l,
        className: ae(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          a ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": i || "Block tabs",
        children: /* @__PURE__ */ R.jsx("div", { className: "flex items-center min-w-0", children: e.map((d) => {
          const s = d.id === t, g = p === d.id, c = d.icon;
          return /* @__PURE__ */ R.jsxs(
            "div",
            {
              className: ae(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                s ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                d.disabled && "opacity-50 cursor-not-allowed",
                !a && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": s,
              "aria-disabled": d.disabled,
              tabIndex: d.disabled ? -1 : 0,
              onClick: (u) => b(d, u),
              onKeyDown: (u) => y(d, u),
              onMouseEnter: () => w(d.id),
              onMouseLeave: () => w(null),
              "data-tab-id": d.id,
              children: [
                c && /* @__PURE__ */ R.jsx(c, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ R.jsx("span", { className: "truncate min-w-0", children: d.label }),
                d.closable && o && /* @__PURE__ */ R.jsx(
                  "button",
                  {
                    className: ae(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      g || s ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (u) => x(d, u),
                    "aria-label": `Close ${d.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ R.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ R.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                          }
                        )
                      }
                    )
                  }
                )
              ]
            },
            d.id
          );
        }) })
      }
    );
  }
);
bt.displayName = "Block.Tabs";
const Ge = Z(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": n }, i) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: i,
      className: ae(
        "pretty-poly-block-sidebar",
        "flex flex-col",
        "flex-shrink-0",
        // Don't shrink
        "h-full",
        // Full height
        "bg-sidebar",
        // VS Code-style sidebar background (adapts to theme)
        "border-sidebar-border",
        // Border color
        e === "left" ? "border-r" : "border-l",
        // Border on appropriate side
        e === "right" && "order-last",
        // Move to right if specified
        r
      ),
      style: { width: `${t}px` },
      "data-sidebar-position": e,
      "data-sidebar-width": t,
      "aria-label": n || "Sidebar navigation",
      role: "navigation",
      children: o
    }
  )
);
Ge.displayName = "Block.Sidebar";
const wt = Z(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: n,
    onClick: i,
    className: a,
    "aria-label": l
  }, p) => {
    const [w, b] = J(!1), x = () => {
      t && !o && b(!0);
    }, y = () => {
      b(!1);
    }, d = () => {
      !o && i && i();
    }, s = (g) => {
      (g.key === "Enter" || g.key === " ") && (g.preventDefault(), d());
    };
    return /* @__PURE__ */ R.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          ref: p,
          className: ae(
            "pretty-poly-sidebar-item",
            "w-full h-12",
            // Fixed height for consistency
            "flex items-center justify-center",
            "relative",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset",
            // Active state
            r && "bg-accent border-r-2 border-primary",
            // Hover state (when not disabled)
            !o && "hover:bg-accent",
            // Disabled state
            o && "opacity-50 cursor-not-allowed",
            // Default cursor
            !o && "cursor-pointer",
            a
          ),
          disabled: o,
          onClick: d,
          onKeyDown: s,
          onMouseEnter: x,
          onMouseLeave: y,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ R.jsx(
              e,
              {
                className: ae(
                  "w-5 h-5",
                  r ? "text-primary" : "text-muted-foreground",
                  !o && "group-hover:text-foreground"
                )
              }
            ),
            n && /* @__PURE__ */ R.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            r && /* @__PURE__ */ R.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      w && t && /* @__PURE__ */ R.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ R.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ R.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
wt.displayName = "Block.Sidebar.Item";
const vt = Z(
  ({ className: e }, t) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: t,
      className: ae(
        "pretty-poly-sidebar-spacer",
        "flex-1",
        // Takes up all available space
        "min-h-2",
        // Minimum height to ensure visibility
        e
      ),
      role: "separator",
      "aria-hidden": "true"
    }
  )
);
vt.displayName = "Block.Sidebar.Spacer";
const kt = Z(
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: n,
      className: le(
        "pretty-poly-block-layout",
        // Fill parent block completely
        "w-full h-full",
        // Flex container for structured children
        "flex",
        e === "column" ? "flex-col" : "flex-row",
        // Allow flex children to shrink below content size
        "min-h-0 min-w-0",
        // Stretch to fill grid area
        "self-stretch",
        t
      ),
      "aria-label": o,
      children: r
    }
  )
);
kt.displayName = "Block.Layout";
const Ue = Z(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: n,
    divider: i,
    noDivider: a,
    "aria-label": l
  }, p) => {
    var k;
    const { gridId: w } = re(), b = $e(), { collapseBlock: x, expandBlock: y } = Ar(), { supportsFeature: d } = at(), s = b == null ? void 0 : b.blocks[e], g = ((k = b == null ? void 0 : b.hiddenBlocks) == null ? void 0 : k.has(e)) || !1, c = ee(() => s != null && s.collapsible && s.collapseAt ? (s.size ?? s.defaultSize ?? 0) <= s.collapseAt : !1, [s]), u = () => {
      s != null && s.collapsible && s.collapseAt && ((s.size ?? s.defaultSize ?? 0) <= s.collapseAt ? y(e) : x(e));
    };
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: p,
        className: le(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          c && "opacity-70",
          n
        ),
        style: {
          // Hide block with display: none - removes from grid flow
          // The grid template will be dynamically updated to exclude this block
          display: g ? "none" : void 0
        },
        "data-grid-id": w,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": s == null ? void 0 : s.defaultSize,
        "data-block-size-unit": s == null ? void 0 : s.sizeUnit,
        "data-block-size-min": s == null ? void 0 : s.minSize,
        "data-block-size-max": s == null ? void 0 : s.maxSize,
        "data-block-resizable": (s == null ? void 0 : s.resizable) !== !1,
        "data-block-collapse-at": s == null ? void 0 : s.collapseAt,
        "data-block-collapse-to": s == null ? void 0 : s.collapseTo,
        "data-block-divider-position": s == null ? void 0 : s.dividerPosition,
        "data-block-divider-size": s == null ? void 0 : s.dividerSize,
        "data-block-divider": i !== void 0 ? JSON.stringify(i) : void 0,
        "data-block-no-divider": a,
        "data-block-hidden": g,
        "aria-label": l,
        "aria-hidden": g,
        role: t === "group" ? "group" : void 0,
        tabIndex: d("resizing") && !g ? 0 : void 0,
        onDoubleClick: d("collapse") ? u : void 0,
        children: o
      }
    );
  }
);
Ue.displayName = "Block";
const xt = Z(
  (e, t) => /* @__PURE__ */ R.jsx(Ue, { ref: t, ...e, type: "group" })
);
xt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: xt,
  Layout: kt,
  Header: gt,
  Content: mt,
  Footer: yt,
  Toolbar: ht,
  Tabs: bt,
  Sidebar: Ge
});
Object.assign(Ge, {
  Item: wt,
  Spacer: vt
});
function Jr(e, t, r) {
  const o = [];
  let n = e;
  const i = t.minSize ?? 0, a = t.maxSize ?? 1 / 0;
  if (e < i && (o.push(`Size ${e} is below minimum ${i}`), n = i), e > a && (o.push(`Size ${e} exceeds maximum ${a}`), n = a), n = ge(n, i, a), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, p = t.collapseTo ?? 0, w = t.defaultSize ?? n;
    n = vr(
      n,
      r,
      l,
      p,
      w
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: n,
    violations: o
  };
}
function Zr(e, t, r, o, n = 1) {
  const i = [];
  let a = r, l = o;
  const p = fe(e.minSize ?? 0, e.sizeUnit, n), w = fe(e.maxSize ?? 1 / 0, e.sizeUnit, n), b = fe(t.minSize ?? 0, t.sizeUnit, n), x = fe(t.maxSize ?? 1 / 0, t.sizeUnit, n), y = fe(e.defaultSize ?? 0, e.sizeUnit, n), d = fe(t.defaultSize ?? 0, t.sizeUnit, n), s = y + r, g = d + o;
  let c = ge(s, p, w), u = ge(g, b, x);
  a = c - y, l = u - d;
  const k = a + l;
  if (Math.abs(k) > 1e-3) {
    const E = Math.abs(a) < Math.abs(r), I = Math.abs(l) < Math.abs(o);
    if (E && !I) {
      const L = d - a;
      u = ge(L, b, x), l = u - d;
    } else if (I && !E) {
      const L = y - l;
      c = ge(L, p, w), a = c - y;
    }
    i.push("Zero-sum constraint violated, deltas adjusted");
  }
  const f = a + l;
  return {
    isValid: Math.abs(f) <= 1e-3,
    adjustedTargetDelta: a,
    adjustedAdjacentDelta: l,
    violations: i
  };
}
function fe(e, t, r) {
  if (e === void 0 || e === 1 / 0)
    return 1 / 0;
  switch (t) {
    case "px":
      return e;
    case "fr":
      return e * r;
    case "auto":
    default:
      return e;
  }
}
function Xr(e, t) {
  const r = [], o = e.filter((i) => i.sizeUnit === "px").reduce((i, a) => i + (t[a.id] ?? a.defaultSize ?? 0), 0), n = e.filter((i) => i.sizeUnit === "fr").reduce((i, a) => i + (t[a.id] ?? a.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((i) => i.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((i) => {
    const a = t[i.id] ?? i.defaultSize ?? 0, l = i.minSize ?? 0, p = i.maxSize ?? 1 / 0;
    l > p && r.push(`Block ${i.id}: minSize (${l}) > maxSize (${p})`), (a < l || a > p) && r.push(`Block ${i.id}: size ${a} violates constraints [${l}, ${p}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
class _r {
  constructor() {
    Q(this, "views", /* @__PURE__ */ new Map());
    Q(this, "listeners", /* @__PURE__ */ new Set());
  }
  /**
   * Register a new view type
   * @returns Disposable function to unregister the view
   */
  registerView(t) {
    return this.views.has(t.id) && console.warn(`View type "${t.id}" is already registered. Overwriting.`), this.views.set(t.id, t), this.notify(), () => {
      this.views.delete(t.id), this.notify();
    };
  }
  /**
   * Register multiple views at once
   * @returns Disposable function to unregister all views
   */
  registerViews(t) {
    const r = t.map((o) => this.registerView(o));
    return () => r.forEach((o) => o());
  }
  /**
   * Get a specific view descriptor by ID
   */
  getView(t) {
    return this.views.get(t);
  }
  /**
   * Get all registered view descriptors, optionally sorted by order
   */
  getAllViews(t = !0) {
    const r = Array.from(this.views.values());
    return t ? r.sort((o, n) => (o.order ?? 0) - (n.order ?? 0)) : r;
  }
  /**
   * Get views filtered by category
   */
  getViewsByCategory(t) {
    return this.getAllViews().filter((r) => r.category === t);
  }
  /**
   * Get all unique categories
   */
  getCategories() {
    const t = /* @__PURE__ */ new Set();
    return this.views.forEach((r) => {
      r.category && t.add(r.category);
    }), Array.from(t).sort();
  }
  /**
   * Check if a view type exists
   */
  hasView(t) {
    return this.views.has(t);
  }
  /**
   * Subscribe to registry changes (when views are added/removed)
   * @returns Unsubscribe function
   */
  subscribe(t) {
    return this.listeners.add(t), () => this.listeners.delete(t);
  }
  /**
   * Get count of registered views
   */
  get count() {
    return this.views.size;
  }
  /**
   * Clear all registered views
   */
  clear() {
    this.views.clear(), this.notify();
  }
  notify() {
    this.listeners.forEach((t) => t());
  }
}
const St = Ie(null);
function Le() {
  const e = Re(St);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function Qr(e) {
  const t = Le(), [r, o] = J(() => t.getView(e));
  return V(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function eo(e) {
  const t = Le(), [r, o] = J(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return V(() => {
    const n = () => {
      e != null && e.category ? o(t.getViewsByCategory(e.category)) : o(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function to({ children: e, registry: t }) {
  const [r] = J(() => t ?? new _r());
  return /* @__PURE__ */ R.jsx(St.Provider, { value: r, children: e });
}
function ro(e) {
  const t = Le();
  V(() => t.registerViews(e), [t, e]);
}
function oo(e) {
  const t = Le();
  V(() => t.registerView(e), [t, e]);
}
class Or {
  constructor() {
    Q(this, "commands", /* @__PURE__ */ new Map());
    Q(this, "executionListeners", /* @__PURE__ */ new Map());
    Q(this, "registrationListeners", /* @__PURE__ */ new Set());
    Q(this, "keybindingMap", /* @__PURE__ */ new Map());
  }
  // normalized key -> command id
  /**
   * Register a new command
   * @returns Disposable function to unregister the command
   */
  registerCommand(t) {
    if (this.commands.has(t.id) && console.warn(`Command "${t.id}" is already registered. Overwriting.`), this.commands.set(t.id, t), t.keybinding) {
      const r = this.normalizeKeybinding(t.keybinding);
      this.keybindingMap.set(r, t.id);
    }
    return this.notifyRegistrationChange(), () => {
      if (this.commands.delete(t.id), t.keybinding) {
        const r = this.normalizeKeybinding(t.keybinding);
        this.keybindingMap.delete(r);
      }
      this.notifyRegistrationChange();
    };
  }
  /**
   * Register multiple commands at once
   * @returns Disposable function to unregister all commands
   */
  registerCommands(t) {
    const r = t.map((o) => this.registerCommand(o));
    return () => r.forEach((o) => o());
  }
  /**
   * Execute a command by ID
   */
  async executeCommand(t, ...r) {
    const o = this.commands.get(t);
    if (!o)
      return console.warn(`Command not found: ${t}`), { success: !1, error: new Error(`Command not found: ${t}`) };
    try {
      const n = await o.handler(...r);
      return this.notifyExecution(t, n), { success: !0, result: n };
    } catch (n) {
      return console.error(`Error executing command ${t}:`, n), { success: !1, error: n };
    }
  }
  /**
   * Get a specific command by ID
   */
  getCommand(t) {
    return this.commands.get(t);
  }
  /**
   * Get all registered commands, optionally sorted by category and title
   */
  getAllCommands(t = !0) {
    const r = Array.from(this.commands.values());
    return t ? r.sort((o, n) => {
      const i = o.category || "", a = n.category || "";
      if (i !== a) return i.localeCompare(a);
      const l = o.title || o.id, p = n.title || n.id;
      return l.localeCompare(p);
    }) : r;
  }
  /**
   * Get commands filtered by category
   */
  getCommandsByCategory(t) {
    return this.getAllCommands().filter((r) => r.category === t);
  }
  /**
   * Get all unique categories
   */
  getCategories() {
    const t = /* @__PURE__ */ new Set();
    return this.commands.forEach((r) => {
      r.category && t.add(r.category);
    }), Array.from(t).sort();
  }
  /**
   * Check if a command exists
   */
  hasCommand(t) {
    return this.commands.has(t);
  }
  /**
   * Subscribe to command execution events
   * @returns Unsubscribe function
   */
  onDidExecuteCommand(t, r) {
    return this.executionListeners.has(t) || this.executionListeners.set(t, /* @__PURE__ */ new Set()), this.executionListeners.get(t).add(r), () => {
      var o;
      (o = this.executionListeners.get(t)) == null || o.delete(r);
    };
  }
  /**
   * Subscribe to command registration changes
   * @returns Unsubscribe function
   */
  onDidChangeCommands(t) {
    return this.registrationListeners.add(t), () => this.registrationListeners.delete(t);
  }
  /**
   * Handle keyboard event and execute matching command
   * Returns true if a command was executed
   */
  handleKeyboardEvent(t) {
    const r = this.normalizeKeyboardEvent(t), o = this.keybindingMap.get(r);
    return o ? (t.preventDefault(), t.stopPropagation(), this.executeCommand(o), !0) : !1;
  }
  /**
   * Get count of registered commands
   */
  get count() {
    return this.commands.size;
  }
  /**
   * Clear all registered commands
   */
  clear() {
    this.commands.clear(), this.keybindingMap.clear(), this.notifyRegistrationChange();
  }
  /**
   * Normalize a keybinding string to a canonical format
   * e.g., 'Ctrl+B' -> 'ctrl+b', 'Cmd+Shift+P' -> 'meta+shift+p'
   */
  normalizeKeybinding(t) {
    return t.toLowerCase().replace("cmd", "meta").replace("command", "meta").split("+").map((r) => r.trim()).sort().join("+");
  }
  /**
   * Convert a keyboard event to normalized key string
   */
  normalizeKeyboardEvent(t) {
    const r = [];
    t.ctrlKey && r.push("ctrl"), t.altKey && r.push("alt"), t.shiftKey && r.push("shift"), t.metaKey && r.push("meta");
    const o = t.key.toLowerCase();
    return o !== "control" && o !== "alt" && o !== "shift" && o !== "meta" && r.push(o), r.sort().join("+");
  }
  notifyExecution(t, r) {
    var o;
    (o = this.executionListeners.get(t)) == null || o.forEach((n) => n(r));
  }
  notifyRegistrationChange() {
    this.registrationListeners.forEach((t) => t());
  }
}
const zt = Ie(null);
function we() {
  const e = Re(zt);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function no(e) {
  const t = we(), [r, o] = J(() => t.getCommand(e));
  return V(() => {
    const n = () => {
      o(t.getCommand(e));
    };
    return t.onDidChangeCommands(n);
  }, [t, e]), r;
}
function so(e) {
  const t = we(), [r, o] = J(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return V(() => {
    const n = () => {
      e != null && e.category ? o(t.getCommandsByCategory(e.category)) : o(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function io(e) {
  const t = we();
  return _(
    (...r) => t.executeCommand(e, ...r),
    [t, e]
  );
}
function ao(e) {
  const t = we();
  V(() => t.registerCommands(e), [t, e]);
}
function lo(e) {
  const t = we();
  V(() => t.registerCommand(e), [t, e]);
}
function co(e = !0) {
  const t = we();
  V(() => {
    if (!e) return;
    const r = (o) => {
      t.handleKeyboardEvent(o);
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, e]);
}
function uo({
  children: e,
  service: t,
  enableKeyboardShortcuts: r = !0
}) {
  const [o] = J(() => t ?? new Or());
  return V(() => {
    if (!r) return;
    const n = (i) => {
      o.handleKeyboardEvent(i);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, [o, r]), /* @__PURE__ */ R.jsx(zt.Provider, { value: o, children: e });
}
class Dr {
  constructor() {
    Q(this, "viewTypes", {});
    // blockId -> viewTypeId
    Q(this, "layouts", /* @__PURE__ */ new Map());
    Q(this, "changeListeners", /* @__PURE__ */ new Set());
    Q(this, "layoutListeners", /* @__PURE__ */ new Set());
  }
  /**
   * Set which view type a block should display
   */
  setBlockViewType(t, r) {
    this.viewTypes[t] !== r && (this.viewTypes[t] = r, this.notifyChange());
  }
  /**
   * Get the current view type for a block
   */
  getBlockViewType(t) {
    return this.viewTypes[t];
  }
  /**
   * Get all current view type assignments
   */
  getAllViewTypes() {
    return { ...this.viewTypes };
  }
  /**
   * Set multiple view type assignments at once
   */
  setViewTypes(t) {
    this.viewTypes = { ...t }, this.notifyChange();
  }
  /**
   * Clear view type assignment for a block
   */
  clearBlockViewType(t) {
    delete this.viewTypes[t], this.notifyChange();
  }
  /**
   * Clear all view type assignments
   */
  clearAllViewTypes() {
    this.viewTypes = {}, this.notifyChange();
  }
  /**
   * Save a layout configuration
   */
  saveLayout(t) {
    var r;
    this.layouts.set(t.id, {
      ...t,
      metadata: {
        ...t.metadata,
        createdAt: ((r = t.metadata) == null ? void 0 : r.createdAt) || (/* @__PURE__ */ new Date()).toISOString()
      }
    }), this.notifyLayoutChange();
  }
  /**
   * Load a layout configuration
   * Returns the layout if found
   */
  loadLayout(t) {
    return this.layouts.get(t);
  }
  /**
   * Apply a saved layout (sets current view types)
   */
  applyLayout(t) {
    const r = this.layouts.get(t);
    return r ? (this.setViewTypes(r.viewTypes), !0) : (console.warn(`Layout not found: ${t}`), !1);
  }
  /**
   * Delete a saved layout
   */
  deleteLayout(t) {
    const r = this.layouts.delete(t);
    return r && this.notifyLayoutChange(), r;
  }
  /**
   * Get all saved layouts
   */
  getAllLayouts() {
    return Array.from(this.layouts.values()).sort((t, r) => {
      var i, a;
      const o = new Date(((i = t.metadata) == null ? void 0 : i.createdAt) || 0);
      return new Date(((a = r.metadata) == null ? void 0 : a.createdAt) || 0).getTime() - o.getTime();
    });
  }
  /**
   * Check if a layout exists
   */
  hasLayout(t) {
    return this.layouts.has(t);
  }
  /**
   * Create a layout configuration from current state
   */
  createLayoutFromCurrentState(t, r, o, n) {
    return {
      id: t,
      name: r,
      blocks: [...o],
      viewTypes: this.getAllViewTypes(),
      metadata: n
    };
  }
  /**
   * Subscribe to view type changes
   * @returns Unsubscribe function
   */
  onViewTypesChange(t) {
    return this.changeListeners.add(t), () => this.changeListeners.delete(t);
  }
  /**
   * Subscribe to saved layout changes (add/remove/update layouts)
   * @returns Unsubscribe function
   */
  onLayoutsChange(t) {
    return this.layoutListeners.add(t), () => this.layoutListeners.delete(t);
  }
  /**
   * Get count of saved layouts
   */
  get layoutCount() {
    return this.layouts.size;
  }
  /**
   * Clear all saved layouts
   */
  clearAllLayouts() {
    this.layouts.clear(), this.notifyLayoutChange();
  }
  /**
   * Export layouts as JSON
   */
  exportLayouts() {
    const t = Array.from(this.layouts.values());
    return JSON.stringify(t, null, 2);
  }
  /**
   * Import layouts from JSON
   */
  importLayouts(t) {
    try {
      const r = JSON.parse(t);
      let o = 0;
      for (const n of r)
        n.id && n.name && n.blocks && n.viewTypes && (this.saveLayout(n), o++);
      return o;
    } catch (r) {
      return console.error("Error importing layouts:", r), 0;
    }
  }
  notifyChange() {
    const t = this.getAllViewTypes();
    this.changeListeners.forEach((r) => r(t));
  }
  notifyLayoutChange() {
    this.layoutListeners.forEach((t) => t());
  }
}
const Et = Ie(null);
function ve() {
  const e = Re(Et);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function fo(e) {
  const t = ve(), [r, o] = J(() => t.getBlockViewType(e));
  return V(() => {
    const n = (a) => {
      o(a[e]);
    };
    return t.onViewTypesChange(n);
  }, [t, e]), r;
}
function po() {
  const e = ve(), [t, r] = J(() => e.getAllViewTypes());
  return V(() => e.onViewTypesChange(r), [e]), t;
}
function mo() {
  const e = ve();
  return _(
    (t, r) => {
      e.setBlockViewType(t, r);
    },
    [e]
  );
}
function go() {
  const e = ve(), [t, r] = J(() => e.getAllLayouts());
  return V(() => {
    const o = () => {
      r(e.getAllLayouts());
    };
    return e.onLayoutsChange(o);
  }, [e]), t;
}
function yo() {
  const e = ve();
  return _(
    (t, r, o, n) => {
      const i = e.createLayoutFromCurrentState(t, r, o, n);
      e.saveLayout(i);
    },
    [e]
  );
}
function ho() {
  const e = ve();
  return _(
    (t) => e.applyLayout(t),
    [e]
  );
}
function bo({
  children: e,
  service: t,
  initialViewTypes: r
}) {
  const [o] = J(() => {
    const n = t ?? new Dr();
    return r && n.setViewTypes(r), n;
  });
  return /* @__PURE__ */ R.jsx(Et.Provider, { value: o, children: e });
}
export {
  Ue as Block,
  mt as BlockContent,
  yt as BlockFooter,
  xt as BlockGroup,
  gt as BlockHeader,
  kt as BlockLayout,
  Ge as BlockSidebar,
  wt as BlockSidebarItem,
  vt as BlockSidebarSpacer,
  bt as BlockTabs,
  ht as BlockToolbar,
  Or as CommandService,
  uo as CommandServiceProvider,
  ft as Divider,
  Mr as Grid,
  Cr as GridProvider,
  Dr as LayoutService,
  bo as LayoutServiceProvider,
  _r as ViewRegistry,
  to as ViewRegistryProvider,
  vr as applyCollapseLogic,
  kr as calculateConstrainedSize,
  ge as clamp,
  le as cn,
  br as createCustomAdapter,
  mr as defaultModes,
  Wr as findAdjacentBlock,
  Ur as frToPx,
  xr as generateGridTemplate,
  Nr as getAllGridStates,
  ct as getFlexSpacePx,
  Me as getStorageAdapter,
  Gr as isCollapsed,
  Kr as isZeroSum,
  yr as loadGridState,
  ye as localStorageAdapter,
  Ae as memoryStorageAdapter,
  $r as pxPerFr,
  Sr as pxToFr,
  hr as removeGridState,
  gr as saveGridState,
  lt as sessionStorageAdapter,
  ho as useApplyLayout,
  fo as useBlockViewType,
  no as useCommand,
  co as useCommandKeyboardShortcuts,
  we as useCommandService,
  so as useCommands,
  io as useExecuteCommand,
  Ar as useGridActions,
  re as useGridContext,
  Rr as useGridKeyboard,
  at as useGridMode,
  wr as useGridPersistence,
  Ir as useGridResize,
  $e as useGridState,
  Fr as useHideBlock,
  Hr as useIsBlockHidden,
  ve as useLayoutService,
  go as useLayouts,
  lo as useRegisterCommand,
  ao as useRegisterCommands,
  oo as useRegisterView,
  ro as useRegisterViews,
  yo as useSaveLayout,
  mo as useSetBlockViewType,
  Yr as useShowBlock,
  qr as useToggleBlockVisibility,
  Qr as useViewDescriptor,
  Le as useViewRegistry,
  po as useViewTypes,
  eo as useViews,
  Jr as validateBlockSize,
  Xr as validateLayoutIntegrity,
  Zr as validateTwoWayResize
};
