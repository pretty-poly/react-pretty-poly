import Je, { useState as me, useCallback as C, useMemo as Z, useEffect as X, useRef as fe, createContext as zt, useContext as Et, useReducer as It, Children as be, isValidElement as ae, cloneElement as We, forwardRef as J, useImperativeHandle as At } from "react";
var Ne = { exports: {} }, xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Tt() {
  if (Ve) return xe;
  Ve = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, s, i) {
    var n = null;
    if (i !== void 0 && (n = "" + i), s.key !== void 0 && (n = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: n,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return xe.Fragment = t, xe.jsx = o, xe.jsxs = o, xe;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function jt() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === Y ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case d:
          return "Fragment";
        case a:
          return "Profiler";
        case u:
          return "StrictMode";
        case I:
          return "Suspense";
        case T:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case c:
            return "Portal";
          case y:
            return (p.displayName || "Context") + ".Provider";
          case w:
            return (p._context.displayName || "Context") + ".Consumer";
          case _:
            var A = p.render;
            return p = p.displayName, p || (p = A.displayName || A.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case P:
            return A = p.displayName || null, A !== null ? A : e(p.type) || "Memo";
          case x:
            A = p._payload, p = p._init;
            try {
              return e(p(A));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function o(p) {
      try {
        t(p);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var R = A.error, E = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return R.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), t(p);
      }
    }
    function r(p) {
      if (p === d) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === x)
        return "<...>";
      try {
        var A = e(p);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var p = N.A;
      return p === null ? null : p.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function n(p) {
      if (B.call(p, "key")) {
        var A = Object.getOwnPropertyDescriptor(p, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function l(p, A) {
      function R() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: R,
        configurable: !0
      });
    }
    function f() {
      var p = e(this.type);
      return L[p] || (L[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function m(p, A, R, E, U, K, le, W) {
      return R = K.ref, p = {
        $$typeof: b,
        type: p,
        key: A,
        props: K,
        _owner: U
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function g(p, A, R, E, U, K, le, W) {
      var F = A.children;
      if (F !== void 0)
        if (E)
          if (j(F)) {
            for (E = 0; E < F.length; E++)
              v(F[E]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(F);
      if (B.call(A, "key")) {
        F = e(p);
        var Q = Object.keys(A).filter(function(ve) {
          return ve !== "key";
        });
        E = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", q[F + E] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          F,
          Q,
          F
        ), q[F + E] = !0);
      }
      if (F = null, R !== void 0 && (o(R), F = "" + R), n(A) && (o(A.key), F = "" + A.key), "key" in A) {
        R = {};
        for (var oe in A)
          oe !== "key" && (R[oe] = A[oe]);
      } else R = A;
      return F && l(
        R,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), m(
        p,
        F,
        K,
        U,
        s(),
        R,
        le,
        W
      );
    }
    function v(p) {
      typeof p == "object" && p !== null && p.$$typeof === b && p._store && (p._store.validated = 1);
    }
    var h = Je, b = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), y = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), N = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, j = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(p) {
        return p();
      }
    };
    var D, L = {}, V = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), k = O(r(i)), q = {};
    we.Fragment = d, we.jsx = function(p, A, R, E, U) {
      var K = 1e4 > N.recentlyCreatedOwnerStacks++;
      return g(
        p,
        A,
        R,
        !1,
        E,
        U,
        K ? Error("react-stack-top-frame") : V,
        K ? O(r(p)) : k
      );
    }, we.jsxs = function(p, A, R, E, U) {
      var K = 1e4 > N.recentlyCreatedOwnerStacks++;
      return g(
        p,
        A,
        R,
        !0,
        E,
        U,
        K ? Error("react-stack-top-frame") : V,
        K ? O(r(p)) : k
      );
    };
  }()), we;
}
process.env.NODE_ENV === "production" ? Ne.exports = Tt() : Ne.exports = jt();
var M = Ne.exports;
function Xe(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (o = Xe(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function se() {
  for (var e, t, o = 0, r = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (t = Xe(e)) && (r && (r += " "), r += t);
  return r;
}
const Ge = "-", Rt = (e) => {
  const t = Nt(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (n) => {
      const l = n.split(Ge);
      return l[0] === "" && l.length !== 1 && l.shift(), Qe(l, t) || Pt(n);
    },
    getConflictingClassGroupIds: (n, l) => {
      const f = o[n] || [];
      return l && r[n] ? [...f, ...r[n]] : f;
    }
  };
}, Qe = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], r = t.nextPart.get(o), s = r ? Qe(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(Ge);
  return (n = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : n.classGroupId;
}, He = /^\[(.+)\]$/, Pt = (e) => {
  if (He.test(e)) {
    const t = He.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Nt = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in o)
    _e(o[s], r, s, t);
  return r;
}, _e = (e, t, o, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : Ye(t, s);
      i.classGroupId = o;
      return;
    }
    if (typeof s == "function") {
      if (_t(s)) {
        _e(s(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: o
      });
      return;
    }
    Object.entries(s).forEach(([i, n]) => {
      _e(n, Ye(t, i), o, r);
    });
  });
}, Ye = (e, t) => {
  let o = e;
  return t.split(Ge).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, _t = (e) => e.isThemeGetter, Mt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const s = (i, n) => {
    o.set(i, n), t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let n = o.get(i);
      if (n !== void 0)
        return n;
      if ((n = r.get(i)) !== void 0)
        return s(i, n), n;
    },
    set(i, n) {
      o.has(i) ? o.set(i, n) : s(i, n);
    }
  };
}, Me = "!", Oe = ":", Ot = Oe.length, $t = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (s) => {
    const i = [];
    let n = 0, l = 0, f = 0, m;
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (n === 0 && l === 0) {
        if (d === Oe) {
          i.push(s.slice(f, c)), f = c + Ot;
          continue;
        }
        if (d === "/") {
          m = c;
          continue;
        }
      }
      d === "[" ? n++ : d === "]" ? n-- : d === "(" ? l++ : d === ")" && l--;
    }
    const g = i.length === 0 ? s : s.substring(f), v = Dt(g), h = v !== g, b = m && m > f ? m - f : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: b
    };
  };
  if (t) {
    const s = t + Oe, i = r;
    r = (n) => n.startsWith(s) ? i(n.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: n,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const s = r;
    r = (i) => o({
      className: i,
      parseClassName: s
    });
  }
  return r;
}, Dt = (e) => e.endsWith(Me) ? e.substring(0, e.length - 1) : e.startsWith(Me) ? e.substring(1) : e, Gt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const s = [];
    let i = [];
    return r.forEach((n) => {
      n[0] === "[" || t[n] ? (s.push(...i.sort(), n), i = []) : i.push(n);
    }), s.push(...i.sort()), s;
  };
}, Lt = (e) => ({
  cache: Mt(e.cacheSize),
  parseClassName: $t(e),
  sortModifiers: Gt(e),
  ...Rt(e)
}), Ct = /\s+/, Ut = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, n = [], l = e.trim().split(Ct);
  let f = "";
  for (let m = l.length - 1; m >= 0; m -= 1) {
    const g = l[m], {
      isExternal: v,
      modifiers: h,
      hasImportantModifier: b,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = o(g);
    if (v) {
      f = g + (f.length > 0 ? " " + f : f);
      continue;
    }
    let u = !!d, a = r(u ? c.substring(0, d) : c);
    if (!a) {
      if (!u) {
        f = g + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (a = r(c), !a) {
        f = g + (f.length > 0 ? " " + f : f);
        continue;
      }
      u = !1;
    }
    const w = i(h).join(":"), y = b ? w + Me : w, _ = y + a;
    if (n.includes(_))
      continue;
    n.push(_);
    const I = s(a, u);
    for (let T = 0; T < I.length; ++T) {
      const P = I[T];
      n.push(y + P);
    }
    f = g + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function Bt() {
  let e = 0, t, o, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = et(t)) && (r && (r += " "), r += o);
  return r;
}
const et = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = et(e[r])) && (o && (o += " "), o += t);
  return o;
};
function Wt(e, ...t) {
  let o, r, s, i = n;
  function n(f) {
    const m = t.reduce((g, v) => v(g), e());
    return o = Lt(m), r = o.cache.get, s = o.cache.set, i = l, l(f);
  }
  function l(f) {
    const m = r(f);
    if (m)
      return m;
    const g = Ut(f, o);
    return s(f, g), g;
  }
  return function() {
    return i(Bt.apply(null, arguments));
  };
}
const H = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, tt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Vt = /^\d+\/\d+$/, Ft = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ht = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, qt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (e) => Vt.test(e), $ = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => !!e && Number.isInteger(Number(e)), Te = (e) => e.endsWith("%") && $(e.slice(0, -1)), te = (e) => Ft.test(e), Zt = () => !0, Jt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ht.test(e) && !Yt.test(e)
), ot = () => !1, Xt = (e) => qt.test(e), Qt = (e) => Kt.test(e), er = (e) => !S(e) && !z(e), tr = (e) => he(e, it, ot), S = (e) => tt.test(e), ie = (e) => he(e, at, Jt), je = (e) => he(e, ir, $), qe = (e) => he(e, nt, ot), rr = (e) => he(e, st, Qt), Ee = (e) => he(e, lt, Xt), z = (e) => rt.test(e), ke = (e) => ye(e, at), or = (e) => ye(e, ar), Ke = (e) => ye(e, nt), nr = (e) => ye(e, it), sr = (e) => ye(e, st), Ie = (e) => ye(e, lt, !0), he = (e, t, o) => {
  const r = tt.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ye = (e, t, o = !1) => {
  const r = rt.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, nt = (e) => e === "position" || e === "percentage", st = (e) => e === "image" || e === "url", it = (e) => e === "length" || e === "size" || e === "bg-size", at = (e) => e === "length", ir = (e) => e === "number", ar = (e) => e === "family-name", lt = (e) => e === "shadow", lr = () => {
  const e = H("color"), t = H("font"), o = H("text"), r = H("font-weight"), s = H("tracking"), i = H("leading"), n = H("breakpoint"), l = H("container"), f = H("spacing"), m = H("radius"), g = H("shadow"), v = H("inset-shadow"), h = H("text-shadow"), b = H("drop-shadow"), c = H("blur"), d = H("perspective"), u = H("aspect"), a = H("ease"), w = H("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], I = () => [..._(), z, S], T = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], x = () => [z, S, f], G = () => [ce, "full", "auto", ...x()], Y = () => [ne, "none", "subgrid", z, S], N = () => ["auto", {
    span: ["full", ne, z, S]
  }, ne, z, S], B = () => [ne, "auto", z, S], j = () => ["auto", "min", "max", "fr", z, S], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...x()], V = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], k = () => [e, z, S], q = () => [..._(), Ke, qe, {
    position: [z, S]
  }], p = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", nr, tr, {
    size: [z, S]
  }], R = () => [Te, ke, ie], E = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    z,
    S
  ], U = () => ["", $, ke, ie], K = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [$, Te, Ke, qe], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    z,
    S
  ], Q = () => ["none", $, z, S], oe = () => ["none", $, z, S], ve = () => [$, z, S], ze = () => [ce, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [te],
      breakpoint: [te],
      color: [Zt],
      container: [te],
      "drop-shadow": [te],
      ease: ["in", "out", "in-out"],
      font: [er],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [te],
      shadow: [te],
      spacing: ["px", $],
      text: [te],
      "text-shadow": [te],
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
        aspect: ["auto", "square", ce, S, z, u]
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
        columns: [$, S, z, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
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
        object: I()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        inset: G()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": G()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": G()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: G()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: G()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: G()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: G()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: G()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: G()
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
        z: [ne, "auto", z, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ce, "full", "auto", l, ...x()]
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
        flex: [$, ce, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", $, z, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", $, z, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ne, "first", "last", "none", z, S]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Y()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: N()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Y()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: N()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...O(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...D(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...D()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": O()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...D(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...D()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
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
        "space-y": x()
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
        size: V()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...V()]
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
          ...V()
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
            screen: [n]
          },
          ...V()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...V()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...V()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...V()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, ke, ie]
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
        font: [r, z, je]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Te, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [or, S, t]
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
        tracking: [s, z, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [$, "none", z, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...x()
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
        placeholder: k()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: k()
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [$, "from-font", "auto", z, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: k()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [$, "auto", z, S]
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
        indent: x()
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
        bg: q()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: p()
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
          }, ne, z, S],
          radial: ["", z, S],
          conic: [ne, z, S]
        }, sr, rr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: k()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: R()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: k()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: E()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": E()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": E()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": E()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": E()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": E()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": E()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": E()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": E()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": E()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": E()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": E()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": E()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": E()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": E()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: U()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": U()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": U()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": U()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": U()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": U()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": U()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": U()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": U()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": U()
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
        "divide-y": U()
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
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: k()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": k()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": k()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": k()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": k()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": k()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": k()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": k()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": k()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: k()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$, z, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", $, ke, ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: k()
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
          g,
          Ie,
          Ee
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: k()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, Ie, Ee]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": k()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: U()
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
        ring: k()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [$, ie]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": k()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": U()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": k()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Ie, Ee]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": k()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$, z, S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        "mask-linear": [$]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": k()
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
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [$]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": k()
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
        mask: q()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: p()
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
        blur: F()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [$, z, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [$, z, S]
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
          b,
          Ie,
          Ee
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": k()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", $, z, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [$, z, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", $, z, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$, z, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", $, z, S]
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
        "backdrop-blur": F()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [$, z, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [$, z, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", $, z, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [$, z, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", $, z, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [$, z, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$, z, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", $, z, S]
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
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
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
        duration: [$, "initial", z, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", a, z, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [$, z, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, z, S]
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
        perspective: [d, z, S]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": I()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": oe()
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
        skew: ve()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ve()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ve()
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
        origin: I()
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
        translate: ze()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ze()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ze()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ze()
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
        accent: k()
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
        caret: k()
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        fill: ["none", ...k()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [$, ke, ie, je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...k()]
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
}, cr = /* @__PURE__ */ Wt(lr);
function re(...e) {
  return cr(se(e));
}
const dr = {
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
function Le(e = dr) {
  const [t, o] = me(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [r, s] = me(null), i = C(() => {
    if (typeof window > "u") return;
    const c = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    o(c);
  }, []), n = Z(() => {
    var d;
    if (r && e[r])
      return r;
    const c = Object.entries(e).filter(([u, a]) => {
      if (a.matcher)
        return a.matcher(t);
      const w = !a.minWidth || t.width >= a.minWidth, y = !a.maxWidth || t.width <= a.maxWidth;
      return w && y;
    });
    return c.sort(([, u], [, a]) => {
      const w = (u.minWidth ? 1 : 0) + (u.maxWidth ? 1 : 0);
      return (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0) - w;
    }), ((d = c[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, r]), l = Z(() => e[n], [e, n]), f = Z(() => (l == null ? void 0 : l.type) || "grid", [l]), m = C((c) => {
    if (c && !e[c]) {
      console.warn(`Mode "${c}" not found in configuration`);
      return;
    }
    s(c);
  }, [e]), g = C((c) => n === c, [n]), v = Z(() => Object.keys(e), [e]), h = C((c) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(c);
      case "tabs":
        return c === "tabs";
      case "dock":
        return c === "dock";
      default:
        return !1;
    }
  }, [f]), b = Z(() => {
    const c = Object.entries(e).map(([w, y]) => ({ name: w, ...y })).sort((w, y) => (w.breakpoint || 0) - (y.breakpoint || 0)), d = c.findIndex((w) => w.name === n), u = c[d + 1], a = c[d - 1];
    return {
      current: n,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: u == null ? void 0 : u.name,
      nextBreakpoint: u == null ? void 0 : u.breakpoint,
      prevMode: a == null ? void 0 : a.name,
      prevBreakpoint: a == null ? void 0 : a.breakpoint,
      isSmallest: d === 0,
      isLargest: d === c.length - 1
    };
  }, [e, n, l]);
  return X(() => {
    if (typeof window > "u") return;
    const c = () => i(), d = () => {
      setTimeout(i, 100);
    };
    return window.addEventListener("resize", c), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", c), window.removeEventListener("orientationchange", d);
    };
  }, [i]), {
    // Current state
    viewport: t,
    activeMode: n,
    currentModeConfig: l,
    currentLayoutType: f,
    // Mode management
    setMode: m,
    isMode: g,
    availableModes: v,
    // Features and capabilities
    supportsFeature: h,
    breakpointInfo: b,
    // Utilities
    isForced: !!r,
    updateViewport: i
  };
}
const ee = "pretty-poly-grid-", ge = {
  save: (e, t) => {
    try {
      localStorage.setItem(e, JSON.stringify(t));
    } catch (o) {
      console.warn("Failed to save to localStorage:", o);
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
        const o = localStorage.key(t);
        o && o.startsWith(ee) && e.push(o);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, ct = {
  save: (e, t) => {
    try {
      sessionStorage.setItem(e, JSON.stringify(t));
    } catch (o) {
      console.warn("Failed to save to sessionStorage:", o);
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
        const o = sessionStorage.key(t);
        o && o.startsWith(ee) && e.push(o);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, ue = /* @__PURE__ */ new Map(), Ae = {
  save: (e, t) => {
    ue.set(e, t);
  },
  load: (e) => ue.get(e) || null,
  remove: (e) => {
    ue.delete(e);
  },
  clear: () => {
    for (const e of ue.keys())
      e.startsWith(ee) && ue.delete(e);
  }
};
function Re(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? ge : Ae;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? ct : Ae;
    case "memory":
    default:
      return Ae;
  }
}
function Ce(e) {
  return `${ee}${e}`;
}
function ur(e, t, o = ge) {
  const r = Ce(e), s = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  o.save(r, s);
}
function fr(e, t = ge) {
  const o = Ce(e);
  return t.load(o);
}
function pr(e, t = ge) {
  const o = Ce(e);
  t.remove(o);
}
function Dr(e = ge) {
  const t = {};
  try {
    if (e === ge && typeof localStorage < "u")
      for (let o = 0; o < localStorage.length; o++) {
        const r = localStorage.key(o);
        if (r && r.startsWith(ee)) {
          const s = r.substring(ee.length), i = e.load(r);
          i && (t[s] = i);
        }
      }
    else if (e === ct && typeof sessionStorage < "u")
      for (let o = 0; o < sessionStorage.length; o++) {
        const r = sessionStorage.key(o);
        if (r && r.startsWith(ee)) {
          const s = r.substring(ee.length), i = e.load(r);
          i && (t[s] = i);
        }
      }
    else if (e === Ae) {
      for (const o of ue.keys())
        if (o.startsWith(ee)) {
          const r = o.substring(ee.length), s = e.load(o);
          s && (t[r] = s);
        }
    }
  } catch (o) {
    console.warn("Failed to get all grid states:", o);
  }
  return t;
}
function mr(e) {
  return {
    save: (t, o) => e(o),
    load: () => null,
    // Custom adapters typically don't load
    remove: () => {
    },
    clear: () => {
    }
  };
}
function br({
  gridId: e,
  enabled: t,
  state: o,
  onStateLoad: r,
  autoSave: s = !0,
  saveDelay: i = 500
}) {
  const n = fe(null), l = fe(), f = fe(""), m = fe(!1);
  X(() => {
    if (!t) {
      n.current = null;
      return;
    }
    typeof t == "function" ? n.current = mr(t) : t === "localStorage" ? n.current = Re("localStorage") : t === "sessionStorage" ? n.current = Re("sessionStorage") : n.current = Re("localStorage");
  }, [t]), X(() => {
    if (!n.current || !t || typeof t == "function" || m.current)
      return;
    const c = fr(e, n.current);
    c && (r == null || r(c), m.current = !0);
  }, [e, t]);
  const g = C((c = o) => {
    if (!n.current || !t)
      return;
    const d = JSON.stringify(c);
    if (d !== f.current)
      try {
        ur(e, c, n.current), f.current = d;
      } catch (u) {
        console.warn("Failed to save grid state:", u);
      }
  }, [e, t, o]), v = C((c = o) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      g(c);
    }, i);
  }, [g, i, o]), h = C(() => {
    if (!(!n.current || !t || typeof t == "function"))
      try {
        pr(e, n.current), f.current = "";
      } catch (c) {
        console.warn("Failed to clear grid state:", c);
      }
  }, [e, t]), b = C((c = o) => {
    l.current && clearTimeout(l.current), g(c);
  }, [g, o]);
  return X(() => {
    if (!(!s || !t))
      return v(o), () => {
        l.current && clearTimeout(l.current);
      };
  }, [o, s, t, v]), X(() => {
    if (!t || typeof t == "function")
      return;
    const c = () => {
      b();
    };
    return window.addEventListener("beforeunload", c), () => {
      window.removeEventListener("beforeunload", c);
    };
  }, [b, t]), X(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: b,
    debouncedSave: v,
    clearState: h,
    isEnabled: !!t
  };
}
function dt(e, t, o) {
  return Math.max(0, e - t - o);
}
function Gr(e, t) {
  return t > 0 ? e / t : 0;
}
function pe(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
function Lr(e, t) {
  return t > 0 && e <= t;
}
function gr(e, t, o, r, s) {
  if (o === 0)
    return e;
  const i = t <= o, n = r * 2.5;
  return i && e > n ? s : e < o && !i ? r : e;
}
function hr(e, t, o = 0, r = 1 / 0, s = !1) {
  const i = s ? -e : e, n = t + i;
  return pe(n, o, r);
}
function yr(e, t) {
  const o = [];
  return e.forEach((r) => {
    if (r.dividerPosition === "start" && o.push(`${r.dividerSize || 8}px`), r.sizeUnit === "auto")
      o.push("auto");
    else if (r.sizeUnit === "px") {
      const s = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${s}, ${r.size}px)`);
    } else {
      const s = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${s}, ${r.size}fr)`);
    }
    r.dividerPosition === "end" && o.push(`${r.dividerSize || 8}px`);
  }), o.join(" ");
}
function Ze(e, t) {
  const o = [];
  return e.forEach((r) => {
    if (r.type === "divider")
      o.push(`${r.dividerSize || 8}px`);
    else if (r.sizeUnit === "auto")
      o.push("auto");
    else if (r.sizeUnit === "px") {
      const s = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${s}, ${r.size || 1}px)`);
    } else {
      const s = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${s}, ${r.size || 1}fr)`);
    }
  }), o.join(" ");
}
function Cr(e, t) {
  return e * t;
}
function vr(e, t) {
  return t > 0 ? e / t : 0;
}
function Ur(e, t, o) {
  return o === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Br(e, t, o = 1e-3) {
  return Math.abs(e + t) <= o;
}
function xr(e, t) {
  const o = C((n) => "touches" in n ? {
    x: n.touches[0].clientX,
    y: n.touches[0].clientY
  } : {
    x: n.clientX,
    y: n.clientY
  }, []), r = C((n, l, f) => {
    const m = e.blocks[n];
    if (!m) return;
    const g = o(f), h = Object.values(e.blocks).filter(
      (a) => a.parentId === m.parentId
    ).sort(
      (a, w) => (a.order || 0) - (w.order || 0)
    ), b = h.findIndex((a) => a.id === n);
    let c = null;
    if (m.dividerPosition === "start" && b > 0 ? c = h[b - 1] : m.dividerPosition === "end" && b < h.length - 1 && (c = h[b + 1]), c && m.sizeUnit === "fr" && c.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${n}" when adjacent to px block "${c.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: n,
        dividerId: l,
        startPosition: g,
        initialSize: m.defaultSize || 0,
        initialAdjacentBlockId: c == null ? void 0 : c.id,
        initialAdjacentSize: c ? c.originalDefaultSize || c.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const d = m.parentId ? e.blocks[m.parentId] : null, u = (d == null ? void 0 : d.direction) || "row";
    document.body.style.cursor = u === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, o]), s = C((n) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const f = o(n), m = l.parentId ? e.blocks[l.parentId] : null, g = (m == null ? void 0 : m.direction) || "row", v = g === "row" ? f.x - e.resize.startPosition.x : f.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const h = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), c = ((h == null ? void 0 : h.getAttribute("data-block-divider-position")) || "end") === "start", d = hr(
        v,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        c
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: d }
      });
    } else if (l.sizeUnit === "fr") {
      const h = Object.values(e.blocks).filter(
        (j) => j.parentId === l.parentId
      ), b = h.filter((j) => j.sizeUnit === "fr"), c = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = c ? g === "row" ? c.clientWidth : c.clientHeight : 1200, u = h.filter((j) => j.sizeUnit === "px").reduce((j, O) => {
        const D = document.querySelector(`[data-block-id="${O.id}"]`);
        if (!D) return j;
        const L = g === "row" ? D.clientWidth : D.clientHeight;
        return j + L;
      }, 0), w = Array.from(
        (c == null ? void 0 : c.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((j, O) => {
        if (!(O instanceof HTMLElement)) return j;
        const D = g === "row" ? O.clientWidth : O.clientHeight;
        return j + D;
      }, 0), _ = dt(d, u, w), I = b.reduce(
        (j, O) => j + (O.defaultSize || 1),
        0
      ), T = I > 0 ? _ / I : 0;
      if (T === 0) return;
      const P = vr(v, T), x = b.sort(
        (j, O) => (j.order || 0) - (O.order || 0)
      ), G = x.findIndex(
        (j) => j.id === e.resize.activeBlockId
      ), Y = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), N = (Y == null ? void 0 : Y.getAttribute("data-block-divider-position")) || "end";
      let B = null;
      if (N === "start" && G > 0 ? B = x[G - 1] : N === "end" && G < x.length - 1 && (B = x[G + 1]), B) {
        let j, O;
        j = P, O = -P;
        const D = 0.1, L = Math.max(
          D,
          e.resize.initialSize + j
        ), V = Math.max(
          D,
          (e.resize.initialAdjacentSize || 1) + O
        ), k = L - e.resize.initialSize, q = V - (e.resize.initialAdjacentSize || 1);
        Math.abs(k + q) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: L
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: B.id, size: V }
        }));
      }
    }
  }, [e.resize, e.blocks, t, o]), i = C(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: r,
    updateResize: s,
    endResize: i
  };
}
function wr(e, t) {
  switch (t.type) {
    case "RESIZE_BLOCK":
      const o = e.blocks[t.payload.blockId];
      return o ? {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            defaultSize: t.payload.size,
            size: t.payload.size
          }
        }
      } : e;
    case "COLLAPSE_BLOCK":
      const r = e.blocks[t.payload.blockId];
      if (!r) return e;
      const s = r.collapseTo || 0;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...r,
            // Preserve original size for expand
            originalDefaultSize: r.originalDefaultSize || r.defaultSize,
            defaultSize: s,
            size: s
          }
        }
      };
    case "EXPAND_BLOCK":
      const i = e.blocks[t.payload.blockId];
      if (!i) return e;
      const n = i.originalDefaultSize || i.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...i,
            defaultSize: n,
            size: n
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
      const l = Object.fromEntries(
        Object.entries(e.blocks).map(([f, m]) => [
          f,
          {
            ...m,
            size: m.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: l,
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
    default:
      return e;
  }
}
function kr(e, t, o) {
  return {
    blocks: e.reduce((s, i) => (s[i.id] = {
      ...i,
      size: i.defaultSize,
      originalDefaultSize: i.defaultSize
      // Store original size for expand functionality
    }, s), {}),
    activeMode: o,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const ut = zt(null);
function Sr({
  children: e,
  blocks: t,
  modes: o,
  gridId: r = "default",
  persist: s = !1,
  persistKey: i,
  onModeChange: n,
  onLayoutChange: l
}) {
  const { activeMode: f, viewport: m, setMode: g } = Le(o), [v, h] = It(
    wr,
    kr(t, m, f)
  );
  X(() => {
    h({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: m }
    });
  }, [m]), X(() => {
    const y = v.activeMode;
    f !== y && (h({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), n == null || n(f, y));
  }, [f, v.activeMode, n]);
  const { saveState: b, clearState: c } = br({
    gridId: i || r,
    enabled: s,
    state: v,
    onStateLoad: (y) => {
      h({ type: "LOAD_STATE", payload: { state: y } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: u, endResize: a } = xr(v, h), w = Z(
    () => ({
      gridId: r,
      state: {
        ...v,
        activeMode: f,
        viewport: m
      },
      dispatch: h,
      // Grid operations
      resizeBlock: (y, _) => {
        h({
          type: "RESIZE_BLOCK",
          payload: { blockId: y, size: _ }
        });
      },
      collapseBlock: (y) => {
        h({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: y }
        });
      },
      expandBlock: (y) => {
        h({
          type: "EXPAND_BLOCK",
          payload: { blockId: y }
        });
      },
      switchMode: (y) => {
        g(y);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: u,
      endResize: a,
      // Persistence
      persistState: () => b(v),
      resetState: () => {
        h({ type: "RESET_STATE" }), c();
      }
    }),
    [r, v, f, m, b, c, g, d, u, a]
  );
  return X(() => {
    if (l) {
      const y = Object.values(v.blocks);
      l(y);
    }
  }, [v.blocks, l]), /* @__PURE__ */ M.jsx(ut.Provider, { value: w, children: e });
}
function Se() {
  const e = Et(ut);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function ft() {
  const { state: e } = Se();
  return e;
}
function zr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    switchMode: r,
    persistState: s,
    resetState: i
  } = Se();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    switchMode: r,
    persistState: s,
    resetState: i
  };
}
function pt() {
  const { startResize: e, updateResize: t, endResize: o, state: r } = Se();
  return {
    startResize: e,
    updateResize: t,
    endResize: o,
    isDragging: r.resize.isDragging,
    activeBlockId: r.resize.activeBlockId,
    activeDividerId: r.resize.activeDividerId
  };
}
function Er({
  blocks: e,
  containerRef: t,
  onSizeChange: o,
  direction: r = "row"
}) {
  const {
    startResize: s,
    updateResize: i,
    endResize: n,
    isDragging: l,
    activeBlockId: f,
    activeDividerId: m
  } = pt(), g = C(() => {
    if (!t.current) return 0;
    const u = t.current.getBoundingClientRect();
    return r === "column" ? u.width : u.height;
  }, [r, t]), v = C(() => {
    const u = g();
    if (u === 0) return 0;
    const a = e.filter((I) => I.sizeUnit === "px").reduce((I, T) => I + (T.defaultSize || 0), 0), w = e.filter((I) => I.dividerPosition !== "none").reduce((I, T) => I + (T.dividerSize || 8), 0), y = e.filter((I) => I.sizeUnit === "fr").reduce((I, T) => I + (T.defaultSize || 1), 0), _ = dt(u, a, w);
    return y > 0 ? _ / y : 0;
  }, [e, g]), h = C((u) => {
    const a = e.find((w) => w.id === u);
    a && a.defaultSize !== void 0 && (o == null || o(u, a.defaultSize));
  }, [e, o]), b = C((u) => {
    const a = e.find((w) => w.id === u);
    a && a.collapseTo !== void 0 && (o == null || o(u, a.collapseTo));
  }, [e, o]), c = C((u) => {
    const a = e.find((w) => w.id === u);
    a && a.defaultSize !== void 0 && (o == null || o(u, a.defaultSize));
  }, [e, o]), d = C((u) => {
    const a = e.find((w) => w.id === u);
    return !a || !a.collapseAt ? !1 : (a.defaultSize || 0) <= a.collapseAt;
  }, [e]);
  return X(() => {
    const u = (_) => {
      _.preventDefault(), i(_);
    }, a = (_) => {
      _.preventDefault(), i(_);
    }, w = () => {
      n();
    }, y = () => {
      n();
    };
    if (l)
      return document.addEventListener("mousemove", u), document.addEventListener("mouseup", w), document.addEventListener("touchmove", a), document.addEventListener("touchend", y), () => {
        document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", w), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", y);
      };
  }, [l, i, n]), {
    // State
    isDragging: l,
    activeBlockId: f,
    activeDividerId: m,
    // Actions
    startResize: s,
    resetBlock: h,
    collapseBlock: b,
    expandBlock: c,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: g,
    calculatePixelsPerFr: v
  };
}
function Ir({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: o,
  onFocusBlock: r,
  onCollapseBlock: s,
  onExpandBlock: i,
  containerRef: n,
  stepSize: l = 10,
  largeStepSize: f = 50
}) {
  const m = C(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), g = C((d) => {
    if (!d) return null;
    const u = d.dataset.blockId;
    return t.find((a) => a.id === u) || null;
  }, [t]), v = C((d, u) => {
    if (!(n != null && n.current)) return null;
    const a = Array.from(
      n.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), w = d.getBoundingClientRect(), y = {
      x: w.left + w.width / 2,
      y: w.top + w.height / 2
    }, _ = a.filter((I) => {
      if (I === d) return !1;
      const T = I.getBoundingClientRect(), P = {
        x: T.left + T.width / 2,
        y: T.top + T.height / 2
      };
      switch (u) {
        case "up":
          return P.y < y.y;
        case "down":
          return P.y > y.y;
        case "left":
          return P.x < y.x;
        case "right":
          return P.x > y.x;
        default:
          return !1;
      }
    });
    return _.length === 0 ? null : (_.sort((I, T) => {
      const P = I.getBoundingClientRect(), x = T.getBoundingClientRect(), G = {
        x: P.left + P.width / 2,
        y: P.top + P.height / 2
      }, Y = {
        x: x.left + x.width / 2,
        y: x.top + x.height / 2
      }, N = Math.sqrt(
        Math.pow(G.x - y.x, 2) + Math.pow(G.y - y.y, 2)
      ), B = Math.sqrt(
        Math.pow(Y.x - y.x, 2) + Math.pow(Y.y - y.y, 2)
      );
      return N - B;
    }), _[0]);
  }, [n]), h = C((d) => {
    if (!e) return;
    const u = m();
    if (!u) return;
    const a = g(u);
    if (!a) return;
    const w = d.ctrlKey || d.metaKey, y = d.shiftKey, _ = y ? f : l;
    if (!w && !y)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const I = v(u, "up");
          I && (I.focus(), r == null || r(I.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const T = v(u, "down");
          T && (T.focus(), r == null || r(T.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const P = v(u, "left");
          P && (P.focus(), r == null || r(P.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const x = v(u, "right");
          x && (x.focus(), r == null || r(x.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), a.collapsible && (i == null || i(a.id));
          break;
        case "Escape":
          d.preventDefault(), u.blur();
          break;
      }
    if (w && o)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), o(a.id, -_);
          break;
        case "ArrowDown":
          d.preventDefault(), o(a.id, _);
          break;
        case "ArrowLeft":
          d.preventDefault(), o(a.id, -_);
          break;
        case "ArrowRight":
          d.preventDefault(), o(a.id, _);
          break;
      }
    if (w)
      switch (d.key) {
        case "Minus":
        case "-":
          d.preventDefault(), s == null || s(a.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), i == null || i(a.id);
          break;
      }
  }, [
    e,
    m,
    g,
    v,
    o,
    r,
    s,
    i,
    l,
    f
  ]), b = C((d) => {
    if (!(n != null && n.current)) return;
    const u = n.current.querySelector(
      `[data-block-id="${d}"]`
    );
    u && (u.focus(), r == null || r(d));
  }, [n, r]), c = C(() => n != null && n.current ? Array.from(
    n.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [n]);
  return X(() => {
    if (e)
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
  }, [h, e]), {
    focusBlock: b,
    getFocusableBlocks: c,
    getFocusedBlock: m,
    isEnabled: e
  };
}
function Ar(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const o = e.sizeUnit || "fr", r = t.sizeUnit || "fr";
  return o === "fr" && r === "px" ? { targetId: t.id, position: "start" } : o === "px" && r === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Tr(e, t, o, r, s) {
  return s || o === "none" ? !1 : o === "manual" ? !!r : o === "auto" ? t ? !1 : !s : !1;
}
function jr(e, t, o, r) {
  var f;
  const { targetId: s, position: i } = Ar(e, t), n = {
    targetId: s,
    position: i,
    size: (r == null ? void 0 : r.defaultSize) || 8,
    className: r == null ? void 0 : r.defaultClassName,
    handle: r == null ? void 0 : r.defaultHandle
  }, l = (f = r == null ? void 0 : r.overrides) == null ? void 0 : f[e.id];
  if (l && Object.assign(n, l), typeof o == "object" && o !== null) {
    const m = o;
    Object.assign(n, m), m.position && m.position !== "auto" && (m.position === "start" ? (n.targetId = e.id, n.position = "start") : m.position === "end" && (n.targetId = e.id, n.position = "end"));
  }
  return n;
}
function Pe(e) {
  const t = e.props;
  return t.id ? {
    id: t.id,
    divider: t.divider,
    noDivider: t.noDivider
  } : null;
}
function Rr(e, t, o) {
  return Je.createElement(o, {
    key: `auto-divider-${t}`,
    targetId: e.targetId,
    position: e.position,
    size: e.size,
    className: e.className,
    handle: e.handle,
    "aria-label": e["aria-label"]
  });
}
function mt(e, t, o, r, s) {
  if (t !== "auto" || !s) {
    const m = be.toArray(e).filter(ae).map((g) => {
      const v = Pe(g);
      if (!v) return null;
      const h = r == null ? void 0 : r[v.id];
      return {
        id: v.id,
        type: "block",
        sizeUnit: (h == null ? void 0 : h.sizeUnit) || "fr",
        size: (h == null ? void 0 : h.defaultSize) || 1
      };
    }).filter((g) => g !== null);
    return {
      children: e,
      templateItems: m
    };
  }
  const i = be.toArray(e), n = [], l = [];
  return i.forEach((f, m) => {
    if (!ae(f)) {
      n.push(f);
      return;
    }
    const g = Pe(f);
    if (!g) {
      n.push(f);
      return;
    }
    n.push(f);
    const v = {
      id: g.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    };
    r != null && r[g.id] && Object.assign(v, r[g.id]), l.push({
      id: v.id,
      type: "block",
      sizeUnit: v.sizeUnit || "fr",
      size: v.defaultSize || 1
    });
    const h = m === i.length - 1, b = m < i.length - 1 ? i[m + 1] : null;
    let c = null;
    if (ae(b)) {
      const a = Pe(b);
      a && (c = { id: a.id });
    }
    const d = c ? {
      id: c.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    } : null;
    if (d && (r != null && r[d.id]) && Object.assign(d, r[d.id]), Tr(
      v,
      h,
      t,
      g.divider,
      g.noDivider
    )) {
      const a = jr(
        v,
        d,
        g.divider,
        o
      ), w = Rr(
        a,
        `${g.id}-${m}`,
        s
      );
      n.push(w), l.push({
        id: `${g.id}-divider-${m}`,
        type: "divider",
        dividerSize: a.size
      });
    }
  }), {
    children: n,
    templateItems: l
  };
}
function $e(e, t, o, r, s) {
  const i = {};
  return t !== "auto" ? {
    children: e,
    templateItemsByGroup: i
  } : {
    children: be.map(e, (l) => {
      var v, h;
      if (!ae(l))
        return l;
      const f = ((v = l.type) == null ? void 0 : v.displayName) || ((h = l.type) == null ? void 0 : h.name), m = f === "Block.Group" || f === "BlockGroup", g = f === "Block";
      if (m) {
        const b = mt(
          l.props.children,
          t,
          o,
          r,
          s
        ), c = l.props.id;
        c && (i[c] = b.templateItems);
        const d = $e(
          b.children,
          t,
          o,
          r,
          s
        );
        return Object.assign(i, d.templateItemsByGroup), We(l, {
          ...l.props,
          children: d.children
        });
      } else if (g && be.toArray(l.props.children).some((c) => {
        var u, a;
        if (!ae(c)) return !1;
        const d = ((u = c.type) == null ? void 0 : u.displayName) || ((a = c.type) == null ? void 0 : a.name);
        return d === "Block.Group" || d === "BlockGroup";
      })) {
        const c = $e(
          l.props.children,
          t,
          o,
          r,
          s
        );
        return Object.assign(i, c.templateItemsByGroup), We(l, {
          ...l.props,
          children: c.children
        });
      }
      return l;
    }),
    templateItemsByGroup: i
  };
}
const Pr = ({
  className: e,
  direction: t
}) => /* @__PURE__ */ M.jsx(
  "div",
  {
    className: re(
      "pretty-poly-divider-handle",
      t === "column" ? "w-[1px] h-full" : "w-full h-[1px]",
      "bg-border transition-colors",
      e
    )
  }
), De = J(
  ({
    targetId: e,
    position: t,
    size: o = 8,
    className: r,
    handle: s,
    "aria-label": i
  }, n) => {
    const l = fe(null), f = n || l, m = ft(), { startResize: g, isDragging: v, activeDividerId: h } = pt(), { supportsFeature: b } = Le(), [c, d] = me(""), [u, a] = me("end"), w = C(() => {
      const j = l.current;
      if (!j) return;
      if (e && t && t !== "auto" && t !== "none") {
        e !== c && d(e), t !== u && a(t);
        return;
      }
      let O = e, D = t === "start" || t === "end" ? t : "end";
      if (e) {
        const L = document.querySelector(`[data-block-id="${e}"]`);
        L && (D = L.compareDocumentPosition(j) & Node.DOCUMENT_POSITION_FOLLOWING ? "start" : "end");
      } else {
        const L = j.previousElementSibling, V = j.nextElementSibling, k = L == null ? void 0 : L.getAttribute("data-block-id"), q = V == null ? void 0 : V.getAttribute("data-block-id"), p = k ? m.blocks[k] : null, A = q ? m.blocks[q] : null;
        if (p && A)
          p.sizeUnit === "fr" && A.sizeUnit === "px" ? (O = q, D = "start") : (p.sizeUnit === "px" && A.sizeUnit, O = k, D = "end");
        else if (p)
          if (p.type === "group") {
            const R = Object.values(m.blocks).filter((E) => E.parentId === k).sort((E, U) => (E.order || 0) - (U.order || 0)).filter((E) => E.type === "block" && (E.sizeUnit === "px" || E.sizeUnit === "fr"));
            R.length > 0 ? (O = R[R.length - 1].id, D = "end") : (O = k, D = "end");
          } else
            O = k, D = "end";
        else if (A)
          if (A.type === "group") {
            const R = Object.values(m.blocks).filter((E) => E.parentId === q).sort((E, U) => (E.order || 0) - (U.order || 0)).filter((E) => E.type === "block" && (E.sizeUnit === "px" || E.sizeUnit === "fr"));
            R.length > 0 ? (O = R[0].id, D = "start") : (O = q, D = "start");
          } else
            O = q, D = "start";
      }
      O && O !== c && d(O), D !== u && a(D);
    }, [e, t, c, u, m.blocks]);
    X(() => {
      w();
    }, [w]);
    const y = c ? m.blocks[c] : null, _ = y != null && y.parentId ? m.blocks[y.parentId] : null, I = ((_ == null ? void 0 : _.type) === "group" ? _.direction : void 0) || "row", T = I === "column", P = v && c && h === `${c}-${u}-divider`, x = T ? "row-resize" : "col-resize", G = C((j) => {
      if (!c) return;
      j.preventDefault();
      const O = `${c}-${u}-divider`;
      g(c, O, j);
    }, [c, u, g]), Y = C(() => {
      y == null || y.defaultSize;
    }, [y]);
    if (!y && c && console.warn(`Divider target block "${c}" not found`), !b("resizing"))
      return null;
    const B = s || Pr;
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: f,
        className: re(
          "relative flex items-center justify-center bg-transparent",
          "select-none touch-none transition-colors",
          "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:bg-accent",
          T ? "cursor-row-resize" : "cursor-col-resize",
          P && "pretty-poly-divider--dragging",
          r
        ),
        "data-block-id": c ? `${c}-${u}-divider` : "loading-divider",
        "data-block-type": "divider",
        "data-block-target": c || "",
        "data-block-direction": I,
        "data-block-divider-position": u,
        style: {
          [T ? "height" : "width"]: `${o}px`,
          cursor: x
        },
        role: "separator",
        "aria-label": i || `Resize ${c || "block"}`,
        "aria-valuenow": y == null ? void 0 : y.defaultSize,
        "aria-valuemin": y == null ? void 0 : y.minSize,
        "aria-valuemax": y == null ? void 0 : y.maxSize,
        tabIndex: 0,
        onMouseDown: G,
        onTouchStart: G,
        onDoubleClick: Y,
        onKeyDown: (j) => {
          (j.key === "ArrowLeft" || j.key === "ArrowRight" || j.key === "ArrowUp" || j.key === "ArrowDown") && j.preventDefault();
        },
        children: /* @__PURE__ */ M.jsx(
          B,
          {
            className: re(
              "transition-colors hover:bg-foreground/20",
              P && "bg-foreground/30"
            ),
            direction: I
          }
        )
      }
    );
  }
);
De.displayName = "Divider";
const bt = J(
  ({ children: e, className: t, dividers: o = "manual", dividerConfig: r, "aria-label": s }, i) => {
    const n = fe(null), { state: l, resizeBlock: f, collapseBlock: m, expandBlock: g, switchMode: v, persistState: h, resetState: b } = Se(), c = l.resize.isDragging;
    At(i, () => ({
      resizeBlock: f,
      collapseBlock: m,
      expandBlock: g,
      switchMode: v,
      persistState: h,
      resetState: b,
      getState: () => l
    }), [f, m, g, v, h, b, l]);
    const d = Z(() => Object.values(l.blocks).sort((T, P) => (T.order || 0) - (P.order || 0)), [l.blocks]), u = Z(() => d.find((I) => !I.parentId), [d]);
    Er({
      blocks: d,
      containerRef: n,
      onSizeChange: f,
      direction: (u == null ? void 0 : u.direction) || "row"
    }), Ir({
      enabled: !0,
      blocks: d,
      containerRef: n,
      onResizeBlock: (I, T) => {
        const P = l.blocks[I];
        if (P) {
          const x = P.defaultSize || 0, G = Math.max(0, x + T);
          f(I, G);
        }
      },
      onCollapseBlock: m,
      onExpandBlock: g
    });
    const a = Z(() => {
      const I = mt(
        e,
        o,
        r,
        l.blocks,
        De
      );
      if (o === "auto") {
        const T = $e(
          I.children,
          o,
          r,
          l.blocks,
          De
        );
        return {
          children: T.children,
          templateItems: I.templateItems,
          templateItemsByGroup: T.templateItemsByGroup
        };
      }
      return I;
    }, [e, o, r, l.blocks]), { gridStyles: w, cssVariables: y, modeStyles: _ } = Z(() => {
      if (!u)
        return { gridStyles: "", cssVariables: "", modeStyles: "" };
      const I = d.reduce((N, B) => {
        if (B.id === "root") return N;
        const j = B.parentId || "root";
        return N[j] || (N[j] = []), N[j].push(B), N;
      }, {}), T = d.filter((N) => N.defaultSize !== void 0).map((N) => {
        const B = N.sizeUnit === "px" ? `${N.defaultSize}px` : `${N.defaultSize}fr`;
        return `--${u.id}-${N.id}-size: ${B};`;
      }).join(`
  `), P = () => {
        let N = "";
        return N += `
[data-grid-id="${u.id}"][data-active-mode="dock"],
[data-grid-id="${u.id}"][data-active-mode="mobile"] {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: hsl(var(--background));
  border-top: 1px solid hsl(var(--border));
  z-index: 100;
}
`, N += `
[data-grid-id="${u.id}"][data-active-mode="tabs"],
[data-grid-id="${u.id}"][data-active-mode="tablet"] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
`, N += `
[data-grid-id="${u.id}"][data-active-mode="dock"] .pretty-poly-divider,
[data-grid-id="${u.id}"][data-active-mode="tabs"] .pretty-poly-divider,
[data-grid-id="${u.id}"][data-active-mode="mobile"] .pretty-poly-divider,
[data-grid-id="${u.id}"][data-active-mode="tablet"] .pretty-poly-divider {
  display: none;
}
`, N;
      }, x = (N, B = /* @__PURE__ */ new Set()) => {
        var A;
        if (B.has(N))
          return console.warn(`Circular reference detected for parent: ${N}`), "";
        const j = new Set(B);
        j.add(N);
        const O = I[N] || [];
        if (O.length === 0) return "";
        const D = [...O].sort((R, E) => (R.order || 0) - (E.order || 0)), L = d.find((R) => R.id === N) || u, V = (L == null ? void 0 : L.direction) || "row";
        let k;
        if (o === "auto" && N === u.id)
          k = Ze(a.templateItems, u.id);
        else if (o === "auto" && ((A = a.templateItemsByGroup) != null && A[N]))
          k = Ze(a.templateItemsByGroup[N], u.id);
        else {
          const R = D.map((E) => ({
            id: E.id,
            sizeUnit: E.sizeUnit || "fr",
            size: E.defaultSize || 1,
            dividerPosition: E.dividerPosition === "auto" ? "none" : E.dividerPosition || "none",
            dividerSize: E.dividerSize || (r == null ? void 0 : r.defaultSize) || 8
          }));
          k = yr(R, u.id);
        }
        const q = V === "column" ? "grid-template-rows" : "grid-template-columns";
        let p = `
[data-grid-id="${u.id}"][data-block-id="${N}"][data-active-mode="grid"],
[data-grid-id="${u.id}"][data-block-id="${N}"][data-active-mode="desktop"] {
  display: grid;
  ${q}: ${k};
  ${V === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
        for (const R of D)
          R.type === "group" && (p += x(R.id, j));
        return p;
      }, G = x("root"), Y = P();
      return {
        cssVariables: `:root {
  ${T}
}`,
        gridStyles: G,
        modeStyles: Y
      };
    }, [d, u, a, o, r]);
    return u ? /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ M.jsxs("style", { type: "text/css", children: [
        y,
        w,
        _
      ] }),
      /* @__PURE__ */ M.jsx(
        "div",
        {
          ref: n,
          className: re(
            "group relative overflow-hidden",
            c && "select-none cursor-grabbing pretty-poly-grid--dragging",
            t
          ),
          "data-grid-id": u.id,
          "data-block-id": u.id,
          "data-active-mode": l.activeMode,
          "aria-label": s || "Resizable grid layout",
          role: "application",
          children: a.children
        }
      )
    ] }) : (console.warn("No root block found in grid configuration"), null);
  }
);
bt.displayName = "GridInternal";
const Nr = J(
  ({
    children: e,
    defaultLayout: t = [],
    modes: o,
    persist: r = !1,
    persistKey: s,
    onLayoutChange: i,
    onModeChange: n,
    className: l,
    dividers: f = "manual",
    dividerConfig: m,
    "aria-label": g
  }, v) => {
    const h = t.find((c) => !c.parentId), b = (h == null ? void 0 : h.id) || "root";
    return /* @__PURE__ */ M.jsx(
      Sr,
      {
        blocks: t,
        modes: o,
        gridId: b,
        persist: r,
        persistKey: s,
        onLayoutChange: i,
        onModeChange: n,
        children: /* @__PURE__ */ M.jsx(
          bt,
          {
            ref: v,
            className: l,
            dividers: f,
            dividerConfig: m,
            "aria-label": g,
            children: e
          }
        )
      }
    );
  }
);
Nr.displayName = "Grid";
const gt = J(
  ({ scrollMode: e = "vertical", className: t, children: o, "aria-label": r }, s) => {
    const i = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: s,
        className: re(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          i[e],
          t
        ),
        "data-scroll-mode": e,
        "aria-label": r,
        role: "main",
        children: o
      }
    );
  }
);
gt.displayName = "Block.Content";
const ht = J(
  ({ position: e = "top", className: t, children: o, "aria-label": r }, s) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: s,
      className: re(
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
      "aria-label": r,
      role: "banner",
      children: o
    }
  )
);
ht.displayName = "Block.Header";
const yt = J(
  ({ className: e, children: t, "aria-label": o }, r) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: r,
      className: re(
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
      "aria-label": o,
      role: "contentinfo",
      children: t
    }
  )
);
yt.displayName = "Block.Footer";
const vt = J(
  ({ left: e, center: t, right: o, className: r, "aria-label": s }, i) => /* @__PURE__ */ M.jsxs(
    "div",
    {
      ref: i,
      className: re(
        "pretty-poly-block-toolbar",
        "flex items-center justify-between",
        "w-full px-3 py-2",
        // Standard padding
        "border-b",
        // Shadcn border uses default border color
        "bg-muted",
        // Shadcn background
        r
      ),
      "aria-label": s || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ M.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ M.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ M.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: o })
      ]
    }
  )
);
vt.displayName = "Block.Toolbar";
const xt = J(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: o,
    onTabClose: r,
    className: s,
    "aria-label": i,
    allowOverflow: n = !0
  }, l) => {
    const [f, m] = me(null), g = (b, c) => {
      c.preventDefault(), b.disabled || o(b.id);
    }, v = (b, c) => {
      c.preventDefault(), c.stopPropagation(), r && b.closable && r(b.id);
    }, h = (b, c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), b.disabled || o(b.id));
    };
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: l,
        className: se(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-gray-200",
          "bg-white",
          n ? "overflow-x-auto" : "overflow-x-hidden",
          s
        ),
        role: "tablist",
        "aria-label": i || "Block tabs",
        children: /* @__PURE__ */ M.jsx("div", { className: "flex items-center min-w-0", children: e.map((b) => {
          const c = b.id === t, d = f === b.id, u = b.icon;
          return /* @__PURE__ */ M.jsxs(
            "div",
            {
              className: se(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                c ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                b.disabled && "opacity-50 cursor-not-allowed",
                !n && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": c,
              "aria-disabled": b.disabled,
              tabIndex: b.disabled ? -1 : 0,
              onClick: (a) => g(b, a),
              onKeyDown: (a) => h(b, a),
              onMouseEnter: () => m(b.id),
              onMouseLeave: () => m(null),
              "data-tab-id": b.id,
              children: [
                u && /* @__PURE__ */ M.jsx(u, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ M.jsx("span", { className: "truncate min-w-0", children: b.label }),
                b.closable && r && /* @__PURE__ */ M.jsx(
                  "button",
                  {
                    className: se(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || c ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (a) => v(b, a),
                    "aria-label": `Close ${b.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ M.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ M.jsx(
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
            b.id
          );
        }) })
      }
    );
  }
);
xt.displayName = "Block.Tabs";
const Ue = J(
  ({ position: e = "left", width: t = 48, className: o, children: r, "aria-label": s }, i) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: i,
      className: se(
        "pretty-poly-block-sidebar",
        "flex flex-col",
        "flex-shrink-0",
        // Don't shrink
        "h-full",
        // Full height
        "bg-gray-800",
        // VS Code-style dark background
        "border-gray-700",
        // Border color
        e === "left" ? "border-r" : "border-l",
        // Border on appropriate side
        e === "right" && "order-last",
        // Move to right if specified
        o
      ),
      style: { width: `${t}px` },
      "data-sidebar-position": e,
      "data-sidebar-width": t,
      "aria-label": s || "Sidebar navigation",
      role: "navigation",
      children: r
    }
  )
);
Ue.displayName = "Block.Sidebar";
const wt = J(
  ({
    icon: e,
    tooltip: t,
    active: o = !1,
    disabled: r = !1,
    badge: s,
    onClick: i,
    className: n,
    "aria-label": l
  }, f) => {
    const [m, g] = me(!1), v = () => {
      t && !r && g(!0);
    }, h = () => {
      g(!1);
    }, b = () => {
      !r && i && i();
    }, c = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), b());
    };
    return /* @__PURE__ */ M.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ M.jsxs(
        "button",
        {
          ref: f,
          className: se(
            "pretty-poly-sidebar-item",
            "w-full h-12",
            // Fixed height for consistency
            "flex items-center justify-center",
            "relative",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
            // Active state
            o && "bg-gray-700 border-r-2 border-blue-500",
            // Hover state (when not disabled)
            !r && "hover:bg-gray-700",
            // Disabled state
            r && "opacity-50 cursor-not-allowed",
            // Default cursor
            !r && "cursor-pointer",
            n
          ),
          disabled: r,
          onClick: b,
          onKeyDown: c,
          onMouseEnter: v,
          onMouseLeave: h,
          "aria-label": l || t,
          "aria-pressed": o,
          tabIndex: r ? -1 : 0,
          children: [
            /* @__PURE__ */ M.jsx(
              e,
              {
                className: se(
                  "w-5 h-5",
                  o ? "text-white" : "text-gray-400",
                  !r && "group-hover:text-white"
                )
              }
            ),
            s && /* @__PURE__ */ M.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof s == "number" && s > 99 ? "99+" : s }),
            o && /* @__PURE__ */ M.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      m && t && /* @__PURE__ */ M.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ M.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ M.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
wt.displayName = "Block.Sidebar.Item";
const kt = J(
  ({ className: e }, t) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: t,
      className: se(
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
kt.displayName = "Block.Sidebar.Spacer";
function _r(e, t) {
  const o = e[t] || {}, { id: r, type: s, direction: i, children: n, className: l, divider: f, noDivider: m, "aria-label": g, ...v } = e;
  return {
    ...Object.fromEntries(
      Object.entries(v).filter(
        ([b]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion", "divider", "noDivider"].includes(b)
      )
    ),
    ...o
  };
}
function Mr(e) {
  let t = !1;
  return be.forEach(e, (o) => {
    var r, s;
    if (ae(o)) {
      const i = ((r = o.type) == null ? void 0 : r.displayName) || ((s = o.type) == null ? void 0 : s.name);
      i && (i === "Block.Header" || i === "Block.Content" || i === "Block.Footer" || i === "Block.Toolbar" || i === "Block.Tabs" || i === "Block.Sidebar") && (t = !0);
    }
  }), t;
}
function Or(e) {
  let t = !1;
  return be.forEach(e, (o) => {
    var r, s;
    ae(o) && (((r = o.type) == null ? void 0 : r.displayName) || ((s = o.type) == null ? void 0 : s.name)) === "Block.Sidebar" && (t = !0);
  }), t;
}
const Be = J(
  ({
    id: e,
    type: t = "block",
    direction: o = "row",
    children: r,
    className: s,
    divider: i,
    noDivider: n,
    "aria-label": l,
    ...f
  }, m) => {
    const { gridId: g } = Se(), v = ft(), { collapseBlock: h, expandBlock: b } = zr(), { activeMode: c, currentLayoutType: d, supportsFeature: u } = Le(), a = v == null ? void 0 : v.blocks[e], w = _r({ id: e, type: t, direction: o, children: r, className: s, "aria-label": l, ...f }, c), y = Z(() => Mr(r), [r]), _ = Z(() => Or(r), [r]), I = Z(() => w.hidden ? !1 : d === "dock" ? !!(w.icon || w.label) : !0, [d, w]), T = Z(() => a != null && a.collapsible && a.collapseAt ? (a.size ?? a.defaultSize ?? 0) <= a.collapseAt : !1, [a]), P = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? b(e) : h(e));
    };
    if (!I)
      return null;
    const x = w.icon;
    return /* @__PURE__ */ M.jsxs(
      "div",
      {
        ref: m,
        className: re(
          // Base styles (always applied)
          "relative transition-opacity duration-150",
          // Grid mode styles (default)
          "overflow-hidden",
          y && !_ && "flex flex-col h-full",
          y && _ && "flex flex-row h-full",
          T && "opacity-70",
          // Dock mode styles (via group-data selector)
          // When parent grid has [data-active-mode="dock"], apply these styles
          "group-data-[active-mode=dock]:flex",
          "group-data-[active-mode=dock]:flex-col",
          "group-data-[active-mode=dock]:items-center",
          "group-data-[active-mode=dock]:p-2",
          "group-data-[active-mode=dock]:rounded-md",
          "group-data-[active-mode=dock]:cursor-pointer",
          "group-data-[active-mode=dock]:min-w-12",
          "group-data-[active-mode=dock]:hover:bg-accent",
          "group-data-[active-mode=mobile]:flex",
          "group-data-[active-mode=mobile]:flex-col",
          "group-data-[active-mode=mobile]:items-center",
          "group-data-[active-mode=mobile]:p-2",
          "group-data-[active-mode=mobile]:rounded-md",
          "group-data-[active-mode=mobile]:cursor-pointer",
          "group-data-[active-mode=mobile]:min-w-12",
          "group-data-[active-mode=mobile]:hover:bg-accent",
          // Tabs mode styles (via group-data selector)
          "group-data-[active-mode=tabs]:flex-1",
          "group-data-[active-mode=tabs]:overflow-auto",
          "group-data-[active-mode=tablet]:flex-1",
          "group-data-[active-mode=tablet]:overflow-auto",
          // Focus styles
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-2",
          // Mode-specific className overrides
          w.className,
          s
        ),
        "data-grid-id": g,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": o,
        "data-block-size-default": a == null ? void 0 : a.defaultSize,
        "data-block-size-unit": a == null ? void 0 : a.sizeUnit,
        "data-block-size-min": a == null ? void 0 : a.minSize,
        "data-block-size-max": a == null ? void 0 : a.maxSize,
        "data-block-collapse-at": a == null ? void 0 : a.collapseAt,
        "data-block-collapse-to": a == null ? void 0 : a.collapseTo,
        "data-block-divider-position": a == null ? void 0 : a.dividerPosition,
        "data-block-divider-size": a == null ? void 0 : a.dividerSize,
        "data-block-divider": i !== void 0 ? JSON.stringify(i) : void 0,
        "data-block-no-divider": n,
        "data-structured": y,
        "data-has-sidebar": _,
        "data-dock-order": w.dockOrder,
        "aria-label": l || (d === "dock" ? w.label : d === "tabs" ? w.tabLabel : void 0),
        role: d === "dock" ? "button" : d === "tabs" ? "tabpanel" : t === "group" ? "group" : void 0,
        tabIndex: d === "dock" || u("resizing") ? 0 : void 0,
        onDoubleClick: u("collapse") ? P : void 0,
        style: {
          ...w.style,
          // CSS Grid area assignment handled by parent in grid mode
          // Dock order controlled by data attribute and CSS
          order: d === "dock" ? w.dockOrder : void 0
        },
        children: [
          d === "dock" && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
            x && /* @__PURE__ */ M.jsx(x, { className: "w-6 h-6 mb-1" }),
            w.label && /* @__PURE__ */ M.jsx("span", { className: "text-xs font-medium text-center", children: w.label })
          ] }),
          d !== "dock" && r
        ]
      }
    );
  }
);
Be.displayName = "Block";
const St = J(
  (e, t) => /* @__PURE__ */ M.jsx(Be, { ref: t, ...e, type: "group" })
);
St.displayName = "Block.Group";
Object.assign(Be, {
  Group: St,
  Header: ht,
  Content: gt,
  Footer: yt,
  Toolbar: vt,
  Tabs: xt,
  Sidebar: Ue
});
Object.assign(Ue, {
  Item: wt,
  Spacer: kt
});
function Wr(e, t, o) {
  const r = [];
  let s = e;
  const i = t.minSize ?? 0, n = t.maxSize ?? 1 / 0;
  if (e < i && (r.push(`Size ${e} is below minimum ${i}`), s = i), e > n && (r.push(`Size ${e} exceeds maximum ${n}`), s = n), s = pe(s, i, n), t.sizeUnit === "px" && t.collapsible && o !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, m = t.defaultSize ?? s;
    s = gr(
      s,
      o,
      l,
      f,
      m
    );
  }
  return {
    isValid: r.length === 0,
    adjustedValue: s,
    violations: r
  };
}
function Vr(e, t, o, r, s = 1) {
  const i = [];
  let n = o, l = r;
  const f = de(e.minSize ?? 0, e.sizeUnit, s), m = de(e.maxSize ?? 1 / 0, e.sizeUnit, s), g = de(t.minSize ?? 0, t.sizeUnit, s), v = de(t.maxSize ?? 1 / 0, t.sizeUnit, s), h = de(e.defaultSize ?? 0, e.sizeUnit, s), b = de(t.defaultSize ?? 0, t.sizeUnit, s), c = h + o, d = b + r;
  let u = pe(c, f, m), a = pe(d, g, v);
  n = u - h, l = a - b;
  const w = n + l;
  if (Math.abs(w) > 1e-3) {
    const I = Math.abs(n) < Math.abs(o), T = Math.abs(l) < Math.abs(r);
    if (I && !T) {
      const P = b - n;
      a = pe(P, g, v), l = a - b;
    } else if (T && !I) {
      const P = h - l;
      u = pe(P, f, m), n = u - h;
    }
    i.push("Zero-sum constraint violated, deltas adjusted");
  }
  const y = n + l;
  return {
    isValid: Math.abs(y) <= 1e-3,
    adjustedTargetDelta: n,
    adjustedAdjacentDelta: l,
    violations: i
  };
}
function de(e, t, o) {
  if (e === void 0 || e === 1 / 0)
    return 1 / 0;
  switch (t) {
    case "px":
      return e;
    case "fr":
      return e * o;
    case "auto":
    default:
      return e;
  }
}
function Fr(e, t) {
  const o = [], r = e.filter((i) => i.sizeUnit === "px").reduce((i, n) => i + (t[n.id] ?? n.defaultSize ?? 0), 0), s = e.filter((i) => i.sizeUnit === "fr").reduce((i, n) => i + (t[n.id] ?? n.defaultSize ?? 0), 0);
  return r < 0 && o.push("Total fixed size cannot be negative"), s <= 0 && e.some((i) => i.sizeUnit === "fr") && o.push("Total fr units must be positive"), e.forEach((i) => {
    const n = t[i.id] ?? i.defaultSize ?? 0, l = i.minSize ?? 0, f = i.maxSize ?? 1 / 0;
    l > f && o.push(`Block ${i.id}: minSize (${l}) > maxSize (${f})`), (n < l || n > f) && o.push(`Block ${i.id}: size ${n} violates constraints [${l}, ${f}]`);
  }), {
    isValid: o.length === 0,
    violations: o
  };
}
export {
  Be as Block,
  gt as BlockContent,
  yt as BlockFooter,
  St as BlockGroup,
  ht as BlockHeader,
  Ue as BlockSidebar,
  wt as BlockSidebarItem,
  kt as BlockSidebarSpacer,
  xt as BlockTabs,
  vt as BlockToolbar,
  De as Divider,
  Nr as Grid,
  Sr as GridProvider,
  gr as applyCollapseLogic,
  hr as calculateConstrainedSize,
  pe as clamp,
  re as cn,
  mr as createCustomAdapter,
  dr as defaultModes,
  Ur as findAdjacentBlock,
  Cr as frToPx,
  yr as generateGridTemplate,
  Dr as getAllGridStates,
  dt as getFlexSpacePx,
  Re as getStorageAdapter,
  Lr as isCollapsed,
  Br as isZeroSum,
  fr as loadGridState,
  ge as localStorageAdapter,
  Ae as memoryStorageAdapter,
  Gr as pxPerFr,
  vr as pxToFr,
  pr as removeGridState,
  ur as saveGridState,
  ct as sessionStorageAdapter,
  zr as useGridActions,
  Se as useGridContext,
  Ir as useGridKeyboard,
  Le as useGridMode,
  br as useGridPersistence,
  Er as useGridResize,
  ft as useGridState,
  Wr as validateBlockSize,
  Fr as validateLayoutIntegrity,
  Vr as validateTwoWayResize
};
