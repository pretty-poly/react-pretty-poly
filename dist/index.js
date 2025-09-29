import ht, { useState as pe, useCallback as B, useMemo as X, useEffect as Q, useRef as ue, createContext as yt, useContext as vt, useReducer as xt, forwardRef as ee, useImperativeHandle as kt, Children as Ve, isValidElement as Fe } from "react";
var je = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function wt() {
  if ($e) return ye;
  $e = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, n, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      s = {};
      for (var u in n)
        u !== "key" && (s[u] = n[u]);
    } else s = n;
    return n = s.ref, {
      $$typeof: e,
      type: o,
      key: i,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return ye.Fragment = t, ye.jsx = r, ye.jsxs = r, ye;
}
var ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function St() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === H ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case c:
          return "Fragment";
        case l:
          return "Profiler";
        case b:
          return "StrictMode";
        case S:
          return "Suspense";
        case w:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case a:
            return "Portal";
          case E:
            return (d.displayName || "Context") + ".Provider";
          case m:
            return (d._context.displayName || "Context") + ".Consumer";
          case I:
            var T = d.render;
            return d = d.displayName, d || (d = T.displayName || T.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case j:
            return T = d.displayName || null, T !== null ? T : e(d.type) || "Memo";
          case h:
            T = d._payload, d = d._init;
            try {
              return e(d(T));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var R = T.error, N = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return R.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(d);
      }
    }
    function o(d) {
      if (d === c) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === h)
        return "<...>";
      try {
        var T = e(d);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var d = q.A;
      return d === null ? null : d.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (D.call(d, "key")) {
        var T = Object.getOwnPropertyDescriptor(d, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function u(d, T) {
      function R() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: R,
        configurable: !0
      });
    }
    function f() {
      var d = e(this.type);
      return C[d] || (C[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function k(d, T, R, N, P, $, Z, L) {
      return R = $.ref, d = {
        $$typeof: p,
        type: d,
        key: T,
        props: $,
        _owner: P
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function A(d, T, R, N, P, $, Z, L) {
      var V = T.children;
      if (V !== void 0)
        if (N)
          if (G(V)) {
            for (N = 0; N < V.length; N++)
              g(V[N]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(V);
      if (D.call(T, "key")) {
        V = e(d);
        var J = Object.keys(T).filter(function(he) {
          return he !== "key";
        });
        N = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", K[V + N] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          V,
          J,
          V
        ), K[V + N] = !0);
      }
      if (V = null, R !== void 0 && (r(R), V = "" + R), i(T) && (r(T.key), V = "" + T.key), "key" in T) {
        R = {};
        for (var re in T)
          re !== "key" && (R[re] = T[re]);
      } else R = T;
      return V && u(
        R,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), k(
        d,
        V,
        $,
        P,
        n(),
        R,
        Z,
        L
      );
    }
    function g(d) {
      typeof d == "object" && d !== null && d.$$typeof === p && d._store && (d._store.validated = 1);
    }
    var z = ht, p = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), E = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), q = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, G = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    z = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var F, C = {}, U = z.react_stack_bottom_frame.bind(
      z,
      s
    )(), x = W(o(s)), K = {};
    ve.Fragment = c, ve.jsx = function(d, T, R, N, P) {
      var $ = 1e4 > q.recentlyCreatedOwnerStacks++;
      return A(
        d,
        T,
        R,
        !1,
        N,
        P,
        $ ? Error("react-stack-top-frame") : U,
        $ ? W(o(d)) : x
      );
    }, ve.jsxs = function(d, T, R, N, P) {
      var $ = 1e4 > q.recentlyCreatedOwnerStacks++;
      return A(
        d,
        T,
        R,
        !0,
        N,
        P,
        $ ? Error("react-stack-top-frame") : U,
        $ ? W(o(d)) : x
      );
    };
  }()), ve;
}
process.env.NODE_ENV === "production" ? je.exports = wt() : je.exports = St();
var _ = je.exports;
function He(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = He(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ie() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = He(e)) && (o && (o += " "), o += t);
  return o;
}
const Ne = "-", zt = (e) => {
  const t = Tt(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const u = i.split(Ne);
      return u[0] === "" && u.length !== 1 && u.shift(), Ye(u, t) || Et(i);
    },
    getConflictingClassGroupIds: (i, u) => {
      const f = r[i] || [];
      return u && o[i] ? [...f, ...o[i]] : f;
    }
  };
}, Ye = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Ye(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ne);
  return (i = t.validators.find(({
    validator: u
  }) => u(s))) == null ? void 0 : i.classGroupId;
}, Ge = /^\[(.+)\]$/, Et = (e) => {
  if (Ge.test(e)) {
    const t = Ge.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Tt = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    Re(r[n], o, n, t);
  return o;
}, Re = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? t : Ue(t, n);
      s.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (At(n)) {
        Re(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([s, i]) => {
      Re(i, Ue(t, s), r, o);
    });
  });
}, Ue = (e, t) => {
  let r = e;
  return t.split(Ne).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, At = (e) => e.isThemeGetter, It = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (s, i) => {
    r.set(s, i), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = o.get(s)) !== void 0)
        return n(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : n(s, i);
    }
  };
}, Pe = "!", Me = ":", jt = Me.length, Rt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const s = [];
    let i = 0, u = 0, f = 0, k;
    for (let a = 0; a < n.length; a++) {
      let c = n[a];
      if (i === 0 && u === 0) {
        if (c === Me) {
          s.push(n.slice(f, a)), f = a + jt;
          continue;
        }
        if (c === "/") {
          k = a;
          continue;
        }
      }
      c === "[" ? i++ : c === "]" ? i-- : c === "(" ? u++ : c === ")" && u--;
    }
    const A = s.length === 0 ? n : n.substring(f), g = Pt(A), z = g !== A, p = k && k > f ? k - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: z,
      baseClassName: g,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const n = t + Me, s = o;
    o = (i) => i.startsWith(n) ? s(i.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = o;
    o = (s) => r({
      className: s,
      parseClassName: n
    });
  }
  return o;
}, Pt = (e) => e.endsWith(Pe) ? e.substring(0, e.length - 1) : e.startsWith(Pe) ? e.substring(1) : e, Mt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let s = [];
    return o.forEach((i) => {
      i[0] === "[" || t[i] ? (n.push(...s.sort(), i), s = []) : s.push(i);
    }), n.push(...s.sort()), n;
  };
}, Nt = (e) => ({
  cache: It(e.cacheSize),
  parseClassName: Rt(e),
  sortModifiers: Mt(e),
  ...zt(e)
}), _t = /\s+/, Ot = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = t, i = [], u = e.trim().split(_t);
  let f = "";
  for (let k = u.length - 1; k >= 0; k -= 1) {
    const A = u[k], {
      isExternal: g,
      modifiers: z,
      hasImportantModifier: p,
      baseClassName: a,
      maybePostfixModifierPosition: c
    } = r(A);
    if (g) {
      f = A + (f.length > 0 ? " " + f : f);
      continue;
    }
    let b = !!c, l = o(b ? a.substring(0, c) : a);
    if (!l) {
      if (!b) {
        f = A + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (l = o(a), !l) {
        f = A + (f.length > 0 ? " " + f : f);
        continue;
      }
      b = !1;
    }
    const m = s(z).join(":"), E = p ? m + Pe : m, I = E + l;
    if (i.includes(I))
      continue;
    i.push(I);
    const S = n(l, b);
    for (let w = 0; w < S.length; ++w) {
      const j = S[w];
      i.push(E + j);
    }
    f = A + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function Dt() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = qe(t)) && (o && (o += " "), o += r);
  return o;
}
const qe = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = qe(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Ct(e, ...t) {
  let r, o, n, s = i;
  function i(f) {
    const k = t.reduce((A, g) => g(A), e());
    return r = Nt(k), o = r.cache.get, n = r.cache.set, s = u, u(f);
  }
  function u(f) {
    const k = o(f);
    if (k)
      return k;
    const A = Ot(f, r);
    return n(f, A), A;
  }
  return function() {
    return s(Dt.apply(null, arguments));
  };
}
const Y = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ke = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ze = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $t = /^\d+\/\d+$/, Lt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Gt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ut = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Bt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, le = (e) => $t.test(e), O = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => !!e && Number.isInteger(Number(e)), Te = (e) => e.endsWith("%") && O(e.slice(0, -1)), se = (e) => Lt.test(e), Vt = () => !0, Ft = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Gt.test(e) && !Ut.test(e)
), Je = () => !1, Ht = (e) => Bt.test(e), Yt = (e) => Wt.test(e), qt = (e) => !y(e) && !v(e), Kt = (e) => be(e, et, Je), y = (e) => Ke.test(e), ae = (e) => be(e, tt, Ft), Ae = (e) => be(e, er, O), Be = (e) => be(e, Xe, Je), Zt = (e) => be(e, Qe, Yt), we = (e) => be(e, rt, Ht), v = (e) => Ze.test(e), xe = (e) => ge(e, tt), Jt = (e) => ge(e, tr), We = (e) => ge(e, Xe), Xt = (e) => ge(e, et), Qt = (e) => ge(e, Qe), Se = (e) => ge(e, rt, !0), be = (e, t, r) => {
  const o = Ke.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ge = (e, t, r = !1) => {
  const o = Ze.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, Xe = (e) => e === "position" || e === "percentage", Qe = (e) => e === "image" || e === "url", et = (e) => e === "length" || e === "size" || e === "bg-size", tt = (e) => e === "length", er = (e) => e === "number", tr = (e) => e === "family-name", rt = (e) => e === "shadow", rr = () => {
  const e = Y("color"), t = Y("font"), r = Y("text"), o = Y("font-weight"), n = Y("tracking"), s = Y("leading"), i = Y("breakpoint"), u = Y("container"), f = Y("spacing"), k = Y("radius"), A = Y("shadow"), g = Y("inset-shadow"), z = Y("text-shadow"), p = Y("drop-shadow"), a = Y("blur"), c = Y("perspective"), b = Y("aspect"), l = Y("ease"), m = Y("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
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
  ], S = () => [...I(), v, y], w = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], h = () => [v, y, f], M = () => [le, "full", "auto", ...h()], H = () => [ne, "none", "subgrid", v, y], q = () => ["auto", {
    span: ["full", ne, v, y]
  }, ne, v, y], D = () => [ne, "auto", v, y], G = () => ["auto", "min", "max", "fr", v, y], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], F = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], C = () => ["auto", ...h()], U = () => [le, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], x = () => [e, v, y], K = () => [...I(), We, Be, {
    position: [v, y]
  }], d = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], T = () => ["auto", "cover", "contain", Xt, Kt, {
    size: [v, y]
  }], R = () => [Te, xe, ae], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    k,
    v,
    y
  ], P = () => ["", O, xe, ae], $ = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [O, Te, We, Be], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    a,
    v,
    y
  ], J = () => ["none", O, v, y], re = () => ["none", O, v, y], he = () => [O, v, y], ke = () => [le, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [se],
      breakpoint: [se],
      color: [Vt],
      container: [se],
      "drop-shadow": [se],
      ease: ["in", "out", "in-out"],
      font: [qt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [se],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [se],
      shadow: [se],
      spacing: ["px", O],
      text: [se],
      "text-shadow": [se],
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
        aspect: ["auto", "square", le, y, v, b]
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
        columns: [O, y, v, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        object: S()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: w()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": w()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": w()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        inset: M()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": M()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": M()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: M()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: M()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: M()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: M()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: M()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: M()
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
        z: [ne, "auto", v, y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [le, "full", "auto", u, ...h()]
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
        flex: [O, le, "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", O, v, y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", O, v, y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ne, "first", "last", "none", v, y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": H()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: q()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": H()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: q()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        "auto-cols": G()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": G()
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
        justify: [...W(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...F(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...F()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...F(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...F(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": W()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...F(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...F()]
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
        m: C()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: C()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: C()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: C()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: C()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: C()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: C()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: C()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: C()
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
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...U()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...U()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, xe, ae]
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
        font: [o, v, Ae]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Te, y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jt, y, t]
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
        tracking: [n, v, y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [O, "none", v, Ae]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...h()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v, y]
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
        list: ["disc", "decimal", "none", v, y]
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
        placeholder: x()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: x()
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
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [O, "from-font", "auto", v, ae]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: x()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [O, "auto", v, y]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v, y]
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
        content: ["none", v, y]
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
        bg: K()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: d()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: T()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ne, v, y],
          radial: ["", v, y],
          conic: [ne, v, y]
        }, Qt, Zt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: x()
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
        from: x()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: x()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: P()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": P()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": P()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": P()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": P()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": P()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": P()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": P()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": P()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": P()
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
        "divide-y": P()
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
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: x()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": x()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": x()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": x()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": x()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": x()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": x()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": x()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": x()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: x()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [O, v, y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", O, xe, ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: x()
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
          A,
          Se,
          we
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: x()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", g, Se, we]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": x()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: P()
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
        ring: x()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [O, ae]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": x()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": P()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": x()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", z, Se, we]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": x()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O, v, y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
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
        "mask-linear": [O]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": L()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": x()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": x()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": x()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": x()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": x()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": x()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": x()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": x()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": x()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": x()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": x()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": x()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": x()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": x()
      }],
      "mask-image-radial": [{
        "mask-radial": [v, y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": x()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": x()
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
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [O]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": L()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": x()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": x()
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
        mask: K()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: d()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: T()
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
        mask: ["none", v, y]
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
          v,
          y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: V()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [O, v, y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O, v, y]
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
          p,
          Se,
          we
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": x()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", O, v, y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [O, v, y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", O, v, y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O, v, y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", O, v, y]
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
          v,
          y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": V()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [O, v, y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O, v, y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", O, v, y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [O, v, y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", O, v, y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O, v, y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O, v, y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", O, v, y]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", v, y]
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
        duration: [O, "initial", v, y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", l, v, y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [O, v, y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", m, v, y]
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
        perspective: [c, v, y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [v, y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: S()
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
        translate: ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ke()
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
        accent: x()
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
        caret: x()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v, y]
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
        "will-change": ["auto", "scroll", "contents", "transform", v, y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...x()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [O, xe, ae, Ae]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...x()]
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
}, or = /* @__PURE__ */ Ct(rr);
function te(...e) {
  return or(ie(e));
}
const sr = {
  mobile: {
    type: "dock",
    breakpoint: 0,
    maxWidth: 767
  },
  tablet: {
    type: "sidebar",
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
function _e(e = sr) {
  const [t, r] = pe(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, n] = pe(null), s = B(() => {
    if (typeof window > "u") return;
    const a = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(a);
  }, []), i = X(() => {
    var c;
    if (o && e[o])
      return o;
    const a = Object.entries(e).filter(([b, l]) => {
      if (l.matcher)
        return l.matcher(t);
      const m = !l.minWidth || t.width >= l.minWidth, E = !l.maxWidth || t.width <= l.maxWidth;
      return m && E;
    });
    return a.sort(([, b], [, l]) => {
      const m = (b.minWidth ? 1 : 0) + (b.maxWidth ? 1 : 0);
      return (l.minWidth ? 1 : 0) + (l.maxWidth ? 1 : 0) - m;
    }), ((c = a[0]) == null ? void 0 : c[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), u = X(() => e[i], [e, i]), f = X(() => (u == null ? void 0 : u.type) || "grid", [u]), k = B((a) => {
    if (a && !e[a]) {
      console.warn(`Mode "${a}" not found in configuration`);
      return;
    }
    n(a);
  }, [e]), A = B((a) => i === a, [i]), g = X(() => Object.keys(e), [e]), z = B((a) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(a);
      case "sidebar":
        return ["resizing", "collapse"].includes(a);
      case "tabs":
        return a === "tabs";
      case "dock":
        return a === "dock";
      case "stack":
      case "accordion":
        return !1;
      default:
        return !1;
    }
  }, [f]), p = X(() => {
    const a = Object.entries(e).map(([m, E]) => ({ name: m, ...E })).sort((m, E) => (m.breakpoint || 0) - (E.breakpoint || 0)), c = a.findIndex((m) => m.name === i), b = a[c + 1], l = a[c - 1];
    return {
      current: i,
      currentBreakpoint: (u == null ? void 0 : u.breakpoint) || 0,
      nextMode: b == null ? void 0 : b.name,
      nextBreakpoint: b == null ? void 0 : b.breakpoint,
      prevMode: l == null ? void 0 : l.name,
      prevBreakpoint: l == null ? void 0 : l.breakpoint,
      isSmallest: c === 0,
      isLargest: c === a.length - 1
    };
  }, [e, i, u]);
  return Q(() => {
    if (typeof window > "u") return;
    const a = () => s(), c = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", a), window.addEventListener("orientationchange", c), () => {
      window.removeEventListener("resize", a), window.removeEventListener("orientationchange", c);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: i,
    currentModeConfig: u,
    currentLayoutType: f,
    // Mode management
    setMode: k,
    isMode: A,
    availableModes: g,
    // Features and capabilities
    supportsFeature: z,
    breakpointInfo: p,
    // Utilities
    isForced: !!o,
    updateViewport: s
  };
}
const oe = "pretty-poly-grid-", me = {
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
        r && r.startsWith(oe) && e.push(r);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, ot = {
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
        r && r.startsWith(oe) && e.push(r);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, de = /* @__PURE__ */ new Map(), ze = {
  save: (e, t) => {
    de.set(e, t);
  },
  load: (e) => de.get(e) || null,
  remove: (e) => {
    de.delete(e);
  },
  clear: () => {
    for (const e of de.keys())
      e.startsWith(oe) && de.delete(e);
  }
};
function Ie(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? me : ze;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? ot : ze;
    case "memory":
    default:
      return ze;
  }
}
function Oe(e) {
  return `${oe}${e}`;
}
function nr(e, t, r = me) {
  const o = Oe(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function ir(e, t = me) {
  const r = Oe(e);
  return t.load(r);
}
function ar(e, t = me) {
  const r = Oe(e);
  t.remove(r);
}
function Ar(e = me) {
  const t = {};
  try {
    if (e === me && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(oe)) {
          const n = o.substring(oe.length), s = e.load(o);
          s && (t[n] = s);
        }
      }
    else if (e === ot && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(oe)) {
          const n = o.substring(oe.length), s = e.load(o);
          s && (t[n] = s);
        }
      }
    else if (e === ze) {
      for (const r of de.keys())
        if (r.startsWith(oe)) {
          const o = r.substring(oe.length), n = e.load(r);
          n && (t[o] = n);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function lr(e) {
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
function cr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: n = !0,
  saveDelay: s = 500
}) {
  const i = ue(null), u = ue(), f = ue(""), k = ue(!1);
  Q(() => {
    if (!t) {
      i.current = null;
      return;
    }
    typeof t == "function" ? i.current = lr(t) : t === "localStorage" ? i.current = Ie("localStorage") : t === "sessionStorage" ? i.current = Ie("sessionStorage") : i.current = Ie("localStorage");
  }, [t]), Q(() => {
    if (!i.current || !t || typeof t == "function" || k.current)
      return;
    const a = ir(e, i.current);
    a && (o == null || o(a), k.current = !0);
  }, [e, t]);
  const A = B((a = r) => {
    if (!i.current || !t)
      return;
    const c = JSON.stringify(a);
    if (c !== f.current)
      try {
        nr(e, a, i.current), f.current = c;
      } catch (b) {
        console.warn("Failed to save grid state:", b);
      }
  }, [e, t, r]), g = B((a = r) => {
    u.current && clearTimeout(u.current), u.current = setTimeout(() => {
      A(a);
    }, s);
  }, [A, s, r]), z = B(() => {
    if (!(!i.current || !t || typeof t == "function"))
      try {
        ar(e, i.current), f.current = "";
      } catch (a) {
        console.warn("Failed to clear grid state:", a);
      }
  }, [e, t]), p = B((a = r) => {
    u.current && clearTimeout(u.current), A(a);
  }, [A, r]);
  return Q(() => {
    if (!(!n || !t))
      return g(r), () => {
        u.current && clearTimeout(u.current);
      };
  }, [r, n, t, g]), Q(() => {
    if (!t || typeof t == "function")
      return;
    const a = () => {
      p();
    };
    return window.addEventListener("beforeunload", a), () => {
      window.removeEventListener("beforeunload", a);
    };
  }, [p, t]), Q(() => () => {
    u.current && clearTimeout(u.current);
  }, []), {
    saveState: p,
    debouncedSave: g,
    clearState: z,
    isEnabled: !!t
  };
}
function st(e, t, r) {
  return Math.max(0, e - t - r);
}
function Ir(e, t) {
  return t > 0 ? e / t : 0;
}
function fe(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function jr(e, t) {
  return t > 0 && e <= t;
}
function dr(e, t, r, o, n) {
  if (r === 0)
    return e;
  const s = t <= r, i = o * 2.5;
  return s && e > i ? n : e < r && !s ? o : e;
}
function ur(e, t, r = 0, o = 1 / 0, n = !1) {
  const s = n ? -e : e, i = t + s;
  return fe(i, r, o);
}
function fr(e) {
  const t = [];
  return e.forEach((r) => {
    r.dividerPosition === "start" && t.push(`${r.dividerSize || 8}px`), r.sizeUnit === "auto" ? t.push("auto") : r.sizeUnit === "px" ? t.push(`var(--${r.id}-size, ${r.size}px)`) : t.push(`var(--${r.id}-size, ${r.size}fr)`), r.dividerPosition === "end" && t.push(`${r.dividerSize || 8}px`);
  }), t.join(" ");
}
function Rr(e, t) {
  return e * t;
}
function pr(e, t) {
  return t > 0 ? e / t : 0;
}
function Pr(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Mr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function mr(e, t) {
  switch (t.type) {
    case "RESIZE_BLOCK":
      const r = e.blocks[t.payload.blockId];
      return r ? {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...r,
            defaultSize: t.payload.size,
            size: t.payload.size
          }
        }
      } : e;
    case "COLLAPSE_BLOCK":
      const o = e.blocks[t.payload.blockId];
      if (!o) return e;
      const n = o.collapseTo || 0;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            // Preserve original size for expand
            originalDefaultSize: o.originalDefaultSize || o.defaultSize,
            defaultSize: n,
            size: n
          }
        }
      };
    case "EXPAND_BLOCK":
      const s = e.blocks[t.payload.blockId];
      if (!s) return e;
      const i = s.originalDefaultSize || s.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...s,
            defaultSize: i,
            size: i
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
      const u = Object.fromEntries(
        Object.entries(e.blocks).map(([f, k]) => [
          f,
          {
            ...k,
            size: k.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: u,
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
function br(e, t, r) {
  return {
    blocks: e.reduce((n, s) => (n[s.id] = {
      ...s,
      size: s.defaultSize,
      originalDefaultSize: s.defaultSize
      // Store original size for expand functionality
    }, n), {}),
    activeMode: r,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const nt = yt(null);
function gr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: n = !1,
  persistKey: s,
  onModeChange: i,
  onLayoutChange: u
}) {
  const { activeMode: f, viewport: k, setMode: A } = _e(r), [g, z] = xt(
    mr,
    br(t, k, f)
  );
  Q(() => {
    z({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: k }
    });
  }, [k]), Q(() => {
    const l = g.activeMode;
    f !== l && (z({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), i == null || i(f, l));
  }, [f, g.activeMode, i]);
  const { saveState: p, clearState: a } = cr({
    gridId: s || o,
    enabled: n,
    state: g,
    onStateLoad: (l) => {
      z({ type: "LOAD_STATE", payload: { state: l } });
    },
    autoSave: !0
  }), c = (l) => "touches" in l ? { x: l.touches[0].clientX, y: l.touches[0].clientY } : { x: l.clientX, y: l.clientY }, b = X(
    () => ({
      state: {
        ...g,
        activeMode: f,
        viewport: k
      },
      dispatch: z,
      // Grid operations
      resizeBlock: (l, m) => {
        z({
          type: "RESIZE_BLOCK",
          payload: { blockId: l, size: m }
        });
      },
      collapseBlock: (l) => {
        z({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: l }
        });
      },
      expandBlock: (l) => {
        z({
          type: "EXPAND_BLOCK",
          payload: { blockId: l }
        });
      },
      switchMode: (l) => {
        A(l);
      },
      // Resize operations
      startResize: (l, m, E) => {
        const I = g.blocks[l];
        if (!I) return;
        const S = c(E), j = Object.values(g.blocks).filter(
          (D) => D.parentId === I.parentId
        ).sort(
          (D, G) => (D.order || 0) - (G.order || 0)
        ), h = j.findIndex((D) => D.id === l);
        let M = null;
        if (I.dividerPosition === "start" && h > 0 ? M = j[h - 1] : I.dividerPosition === "end" && h < j.length - 1 && (M = j[h + 1]), M && I.sizeUnit === "fr" && M.sizeUnit === "px") {
          console.warn(
            `Cannot resize fr block "${l}" when adjacent to px block "${M.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
          );
          return;
        }
        z({
          type: "START_RESIZE",
          payload: {
            blockId: l,
            dividerId: m,
            startPosition: S,
            initialSize: I.defaultSize || 0,
            initialAdjacentBlockId: M == null ? void 0 : M.id,
            initialAdjacentSize: M ? M.originalDefaultSize || M.defaultSize || 0 : void 0
          }
        }), document.body.style.userSelect = "none";
        const H = I.parentId ? g.blocks[I.parentId] : null, q = (H == null ? void 0 : H.direction) || "row";
        document.body.style.cursor = q === "row" ? "col-resize" : "row-resize";
      },
      updateResize: (l) => {
        if (!g.resize.isDragging || !g.resize.activeBlockId) return;
        const m = g.blocks[g.resize.activeBlockId];
        if (!m) return;
        const E = c(l), I = m.parentId ? g.blocks[m.parentId] : null, S = (I == null ? void 0 : I.direction) || "row", w = S === "row" ? E.x - g.resize.startPosition.x : E.y - g.resize.startPosition.y;
        if (m.sizeUnit === "px") {
          const j = document.querySelector(`[data-block-id="${g.resize.activeDividerId}"]`), M = ((j == null ? void 0 : j.getAttribute("data-block-divider-position")) || "end") === "start", H = ur(
            w,
            g.resize.initialSize,
            m.minSize,
            m.maxSize,
            M
          );
          z({
            type: "RESIZE_BLOCK",
            payload: { blockId: g.resize.activeBlockId, size: H }
          });
        } else if (m.sizeUnit === "fr") {
          const j = Object.values(g.blocks).filter(
            (P) => P.parentId === m.parentId
          ), h = j.filter((P) => P.sizeUnit === "fr"), M = m.parentId ? document.querySelector(`[data-block-id="${m.parentId}"]`) : document.querySelector('[data-block-id="root"]'), H = M ? S === "row" ? M.clientWidth : M.clientHeight : 1200, q = j.filter((P) => P.sizeUnit === "px").reduce((P, $) => {
            const Z = document.querySelector(`[data-block-id="${$.id}"]`);
            if (!Z) return P;
            const L = S === "row" ? Z.clientWidth : Z.clientHeight;
            return P + L;
          }, 0), G = Array.from(
            (M == null ? void 0 : M.querySelectorAll('[data-block-type="divider"]')) || []
          ).reduce((P, $) => {
            if (!($ instanceof HTMLElement)) return P;
            const Z = S === "row" ? $.clientWidth : $.clientHeight;
            return P + Z;
          }, 0), F = st(H, q, G), C = h.reduce(
            (P, $) => P + ($.defaultSize || 1),
            0
          ), U = C > 0 ? F / C : 0;
          if (U === 0) return;
          const x = pr(w, U), K = h.sort(
            (P, $) => (P.order || 0) - ($.order || 0)
          ), d = K.findIndex(
            (P) => P.id === g.resize.activeBlockId
          ), T = document.querySelector(`[data-block-id="${g.resize.activeDividerId}"]`), R = (T == null ? void 0 : T.getAttribute("data-block-divider-position")) || "end";
          let N = null;
          if (R === "start" && d > 0 ? N = K[d - 1] : R === "end" && d < K.length - 1 && (N = K[d + 1]), N) {
            let P, $;
            P = x, $ = -x;
            const Z = 0.1, L = Math.max(
              Z,
              g.resize.initialSize + P
            ), V = Math.max(
              Z,
              (g.resize.initialAdjacentSize || 1) + $
            ), J = L - g.resize.initialSize, re = V - (g.resize.initialAdjacentSize || 1);
            Math.abs(J + re) < 0.01 && (z({
              type: "RESIZE_BLOCK",
              payload: {
                blockId: g.resize.activeBlockId,
                size: L
              }
            }), z({
              type: "RESIZE_BLOCK",
              payload: { blockId: N.id, size: V }
            }));
          }
        }
      },
      endResize: () => {
        z({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
      },
      // Persistence
      persistState: () => p(g),
      resetState: () => {
        z({ type: "RESET_STATE" }), a();
      }
    }),
    [g, f, k, p, a, A]
  );
  return Q(() => {
    if (u) {
      const l = Object.values(g.blocks);
      u(l);
    }
  }, [g.blocks, u]), /* @__PURE__ */ _.jsx(nt.Provider, { value: b, children: e });
}
function Ee() {
  const e = vt(nt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function it() {
  const { state: e } = Ee();
  return e;
}
function hr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: s
  } = Ee();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: s
  };
}
function at() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = Ee();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function yr({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: n,
    updateResize: s,
    endResize: i,
    isDragging: u,
    activeBlockId: f,
    activeDividerId: k
  } = at(), A = B(() => {
    if (!t.current) return 0;
    const b = t.current.getBoundingClientRect();
    return o === "column" ? b.width : b.height;
  }, [o]), g = B(() => {
    const b = A();
    if (b === 0) return 0;
    const l = e.filter((S) => S.sizeUnit === "px").reduce((S, w) => S + (w.defaultSize || 0), 0), m = e.filter((S) => S.dividerPosition !== "none").reduce((S, w) => S + (w.dividerSize || 8), 0), E = e.filter((S) => S.sizeUnit === "fr").reduce((S, w) => S + (w.defaultSize || 1), 0), I = st(b, l, m);
    return E > 0 ? I / E : 0;
  }, [e, A]), z = B((b) => {
    const l = e.find((m) => m.id === b);
    l && l.defaultSize !== void 0 && (r == null || r(b, l.defaultSize));
  }, [e, r]), p = B((b) => {
    const l = e.find((m) => m.id === b);
    l && l.collapseTo !== void 0 && (r == null || r(b, l.collapseTo));
  }, [e, r]), a = B((b) => {
    const l = e.find((m) => m.id === b);
    l && l.defaultSize !== void 0 && (r == null || r(b, l.defaultSize));
  }, [e, r]), c = B((b) => {
    const l = e.find((m) => m.id === b);
    return !l || !l.collapseAt ? !1 : (l.defaultSize || 0) <= l.collapseAt;
  }, [e]);
  return Q(() => {
    const b = (I) => {
      I.preventDefault(), s(I);
    }, l = (I) => {
      I.preventDefault(), s(I);
    }, m = () => {
      i();
    }, E = () => {
      i();
    };
    if (u)
      return document.addEventListener("mousemove", b), document.addEventListener("mouseup", m), document.addEventListener("touchmove", l), document.addEventListener("touchend", E), () => {
        document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", m), document.removeEventListener("touchmove", l), document.removeEventListener("touchend", E);
      };
  }, [u, s, i]), {
    // State
    isDragging: u,
    activeBlockId: f,
    activeDividerId: k,
    // Actions
    startResize: n,
    resetBlock: z,
    collapseBlock: p,
    expandBlock: a,
    // Utilities
    isBlockCollapsed: c,
    getContainerSize: A,
    calculatePixelsPerFr: g
  };
}
function vr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: s,
  containerRef: i,
  stepSize: u = 10,
  largeStepSize: f = 50
}) {
  const k = B(() => {
    const c = document.activeElement;
    return (c == null ? void 0 : c.dataset.blockType) === "block" || (c == null ? void 0 : c.dataset.blockType) === "group" ? c : (c == null ? void 0 : c.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), A = B((c) => {
    if (!c) return null;
    const b = c.dataset.blockId;
    return t.find((l) => l.id === b) || null;
  }, [t]), g = B((c, b) => {
    if (!(i != null && i.current)) return null;
    const l = Array.from(
      i.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), m = c.getBoundingClientRect(), E = {
      x: m.left + m.width / 2,
      y: m.top + m.height / 2
    };
    let I = l.filter((S) => {
      if (S === c) return !1;
      const w = S.getBoundingClientRect(), j = {
        x: w.left + w.width / 2,
        y: w.top + w.height / 2
      };
      switch (b) {
        case "up":
          return j.y < E.y;
        case "down":
          return j.y > E.y;
        case "left":
          return j.x < E.x;
        case "right":
          return j.x > E.x;
        default:
          return !1;
      }
    });
    return I.length === 0 ? null : (I.sort((S, w) => {
      const j = S.getBoundingClientRect(), h = w.getBoundingClientRect(), M = {
        x: j.left + j.width / 2,
        y: j.top + j.height / 2
      }, H = {
        x: h.left + h.width / 2,
        y: h.top + h.height / 2
      }, q = Math.sqrt(
        Math.pow(M.x - E.x, 2) + Math.pow(M.y - E.y, 2)
      ), D = Math.sqrt(
        Math.pow(H.x - E.x, 2) + Math.pow(H.y - E.y, 2)
      );
      return q - D;
    }), I[0]);
  }, [i]), z = B((c) => {
    if (!e) return;
    const b = k();
    if (!b) return;
    const l = A(b);
    if (!l) return;
    const m = c.ctrlKey || c.metaKey, E = c.shiftKey, I = E ? f : u;
    if (!m && !E)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault();
          const S = g(b, "up");
          S && (S.focus(), o == null || o(S.dataset.blockId || ""));
          break;
        case "ArrowDown":
          c.preventDefault();
          const w = g(b, "down");
          w && (w.focus(), o == null || o(w.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          c.preventDefault();
          const j = g(b, "left");
          j && (j.focus(), o == null || o(j.dataset.blockId || ""));
          break;
        case "ArrowRight":
          c.preventDefault();
          const h = g(b, "right");
          h && (h.focus(), o == null || o(h.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          c.preventDefault(), l.collapsible && (s == null || s(l.id));
          break;
        case "Escape":
          c.preventDefault(), b.blur();
          break;
      }
    if (m && r)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault(), r(l.id, -I);
          break;
        case "ArrowDown":
          c.preventDefault(), r(l.id, I);
          break;
        case "ArrowLeft":
          c.preventDefault(), r(l.id, -I);
          break;
        case "ArrowRight":
          c.preventDefault(), r(l.id, I);
          break;
      }
    if (m)
      switch (c.key) {
        case "Minus":
        case "-":
          c.preventDefault(), n == null || n(l.id);
          break;
        case "Plus":
        case "+":
        case "=":
          c.preventDefault(), s == null || s(l.id);
          break;
      }
  }, [
    e,
    k,
    A,
    g,
    r,
    o,
    n,
    s,
    u,
    f
  ]), p = B((c) => {
    if (!(i != null && i.current)) return;
    const b = i.current.querySelector(
      `[data-block-id="${c}"]`
    );
    b && (b.focus(), o == null || o(c));
  }, [i, o]), a = B(() => i != null && i.current ? Array.from(
    i.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [i]);
  return Q(() => {
    if (e)
      return document.addEventListener("keydown", z), () => {
        document.removeEventListener("keydown", z);
      };
  }, [z, e]), {
    focusBlock: p,
    getFocusableBlocks: a,
    getFocusedBlock: k,
    isEnabled: e
  };
}
const lt = ee(
  ({ children: e, className: t, "aria-label": r }, o) => {
    const n = ue(null), { state: s, resizeBlock: i, collapseBlock: u, expandBlock: f, switchMode: k, persistState: A, resetState: g } = Ee(), z = s.resize.isDragging;
    kt(o, () => ({
      resizeBlock: i,
      collapseBlock: u,
      expandBlock: f,
      switchMode: k,
      persistState: A,
      resetState: g,
      getState: () => s
    }), [i, u, f, k, A, g, s]);
    const p = X(() => Object.values(s.blocks).sort((m, E) => (m.order || 0) - (E.order || 0)), [s.blocks]), a = X(() => p.find((l) => !l.parentId), [p]);
    yr({
      blocks: p,
      containerRef: n,
      onSizeChange: i,
      direction: (a == null ? void 0 : a.direction) || "row"
    }), vr({
      enabled: !0,
      blocks: p,
      containerRef: n,
      onResizeBlock: (l, m) => {
        const E = s.blocks[l];
        if (E) {
          const I = E.defaultSize || 0, S = Math.max(0, I + m);
          i(l, S);
        }
      },
      onCollapseBlock: u,
      onExpandBlock: f
    });
    const { gridStyles: c, cssVariables: b } = X(() => {
      if (!a)
        return { gridStyles: "", cssVariables: "" };
      const l = p.reduce((w, j) => {
        if (j.id === "root") return w;
        const h = j.parentId || "root";
        return w[h] || (w[h] = []), w[h].push(j), w;
      }, {}), m = p.filter((w) => w.defaultSize !== void 0).map((w) => {
        const j = w.sizeUnit === "px" ? `${w.defaultSize}px` : `${w.defaultSize}fr`;
        return `--${w.id}-size: ${j};`;
      }).join(`
  `), E = (w, j = /* @__PURE__ */ new Set()) => {
        if (j.has(w))
          return console.warn(`Circular reference detected for parent: ${w}`), "";
        const h = new Set(j);
        h.add(w);
        const M = l[w] || [];
        if (M.length === 0) return "";
        const H = [...M].sort((C, U) => (C.order || 0) - (U.order || 0)), q = p.find((C) => C.id === w) || a, D = (q == null ? void 0 : q.direction) || "row", G = fr(H.map((C) => ({
          id: C.id,
          sizeUnit: C.sizeUnit || "fr",
          size: C.defaultSize || 1,
          dividerPosition: C.dividerPosition || "none",
          dividerSize: C.dividerSize || 8
        })));
        let F = `
[data-block-id="${w}"] {
  display: grid;
  ${D === "column" ? "grid-template-rows" : "grid-template-columns"}: ${G};
  ${D === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
  height: 100%;
}`;
        for (const C of H)
          C.type === "group" && (F += E(C.id, h));
        return F;
      }, I = E("root");
      return {
        cssVariables: `:root {
  ${m}
}`,
        gridStyles: I + `
.pretty-poly-divider {
  background-color: #e5e7eb;
  cursor: col-resize;
}

.pretty-poly-divider[data-block-direction="column"] {
  cursor: row-resize;
}

.pretty-poly-divider--dragging {
  background-color: #3b82f6;
}`
      };
    }, [p, a]);
    return a ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsxs("style", { type: "text/css", children: [
        b,
        c
      ] }),
      /* @__PURE__ */ _.jsx(
        "div",
        {
          ref: n,
          className: te(
            "pretty-poly-grid relative overflow-hidden",
            z && "pretty-poly-grid--dragging",
            t
          ),
          "data-grid-id": a.id,
          "data-block-id": a.id,
          "data-active-mode": s.activeMode,
          "aria-label": r || "Resizable grid layout",
          role: "application",
          children: e
        }
      )
    ] }) : (console.warn("No root block found in grid configuration"), null);
  }
);
lt.displayName = "GridInternal";
const xr = ee(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: n,
    onLayoutChange: s,
    onModeChange: i,
    className: u,
    "aria-label": f
  }, k) => /* @__PURE__ */ _.jsx(
    gr,
    {
      blocks: t,
      modes: r,
      persist: o,
      persistKey: n,
      onLayoutChange: s,
      onModeChange: i,
      children: /* @__PURE__ */ _.jsx(
        lt,
        {
          ref: k,
          className: u,
          "aria-label": f,
          children: e
        }
      )
    }
  )
);
xr.displayName = "Grid";
const ct = ee(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, n) => {
    const s = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ _.jsx(
      "div",
      {
        ref: n,
        className: te(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          s[e],
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
ct.displayName = "Block.Content";
const dt = ee(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: n,
      className: te(
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
dt.displayName = "Block.Header";
const ut = ee(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: o,
      className: te(
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
ut.displayName = "Block.Footer";
const ft = ee(
  ({ left: e, center: t, right: r, className: o, "aria-label": n }, s) => /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: s,
      className: te(
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
        /* @__PURE__ */ _.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ _.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ _.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
ft.displayName = "Block.Toolbar";
const pt = ee(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": s,
    allowOverflow: i = !0
  }, u) => {
    const [f, k] = pe(null), A = (p, a) => {
      a.preventDefault(), p.disabled || r(p.id);
    }, g = (p, a) => {
      a.preventDefault(), a.stopPropagation(), o && p.closable && o(p.id);
    }, z = (p, a) => {
      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), p.disabled || r(p.id));
    };
    return /* @__PURE__ */ _.jsx(
      "div",
      {
        ref: u,
        className: ie(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-gray-200",
          "bg-white",
          i ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": s || "Block tabs",
        children: /* @__PURE__ */ _.jsx("div", { className: "flex items-center min-w-0", children: e.map((p) => {
          const a = p.id === t, c = f === p.id, b = p.icon;
          return /* @__PURE__ */ _.jsxs(
            "div",
            {
              className: ie(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                a ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                p.disabled && "opacity-50 cursor-not-allowed",
                !i && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": a,
              "aria-disabled": p.disabled,
              tabIndex: p.disabled ? -1 : 0,
              onClick: (l) => A(p, l),
              onKeyDown: (l) => z(p, l),
              onMouseEnter: () => k(p.id),
              onMouseLeave: () => k(null),
              "data-tab-id": p.id,
              children: [
                b && /* @__PURE__ */ _.jsx(b, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ _.jsx("span", { className: "truncate min-w-0", children: p.label }),
                p.closable && o && /* @__PURE__ */ _.jsx(
                  "button",
                  {
                    className: ie(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      c || a ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (l) => g(p, l),
                    "aria-label": `Close ${p.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ _.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ _.jsx(
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
            p.id
          );
        }) })
      }
    );
  }
);
pt.displayName = "Block.Tabs";
const De = ee(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": n }, s) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: s,
      className: ie(
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
De.displayName = "Block.Sidebar";
const mt = ee(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: n,
    onClick: s,
    className: i,
    "aria-label": u
  }, f) => {
    const [k, A] = pe(!1), g = () => {
      t && !o && A(!0);
    }, z = () => {
      A(!1);
    }, p = () => {
      !o && s && s();
    }, a = (c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), p());
    };
    return /* @__PURE__ */ _.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          ref: f,
          className: ie(
            "pretty-poly-sidebar-item",
            "w-full h-12",
            // Fixed height for consistency
            "flex items-center justify-center",
            "relative",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
            // Active state
            r && "bg-gray-700 border-r-2 border-blue-500",
            // Hover state (when not disabled)
            !o && "hover:bg-gray-700",
            // Disabled state
            o && "opacity-50 cursor-not-allowed",
            // Default cursor
            !o && "cursor-pointer",
            i
          ),
          disabled: o,
          onClick: p,
          onKeyDown: a,
          onMouseEnter: g,
          onMouseLeave: z,
          "aria-label": u || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ _.jsx(
              e,
              {
                className: ie(
                  "w-5 h-5",
                  r ? "text-white" : "text-gray-400",
                  !o && "group-hover:text-white"
                )
              }
            ),
            n && /* @__PURE__ */ _.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            r && /* @__PURE__ */ _.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      k && t && /* @__PURE__ */ _.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ _.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ _.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
mt.displayName = "Block.Sidebar.Item";
const bt = ee(
  ({ className: e }, t) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: t,
      className: ie(
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
bt.displayName = "Block.Sidebar.Spacer";
function kr(e, t) {
  const r = e[t] || {}, { id: o, type: n, direction: s, children: i, className: u, "aria-label": f, ...k } = e;
  return {
    ...Object.fromEntries(
      Object.entries(k).filter(
        ([g]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion"].includes(g)
      )
    ),
    ...r
  };
}
function wr(e) {
  let t = !1;
  return Ve.forEach(e, (r) => {
    var o, n;
    if (Fe(r)) {
      const s = ((o = r.type) == null ? void 0 : o.displayName) || ((n = r.type) == null ? void 0 : n.name);
      s && (s === "Block.Header" || s === "Block.Content" || s === "Block.Footer" || s === "Block.Toolbar" || s === "Block.Tabs" || s === "Block.Sidebar") && (t = !0);
    }
  }), t;
}
function Sr(e) {
  let t = !1;
  return Ve.forEach(e, (r) => {
    var o, n;
    Fe(r) && (((o = r.type) == null ? void 0 : o.displayName) || ((n = r.type) == null ? void 0 : n.name)) === "Block.Sidebar" && (t = !0);
  }), t;
}
const Ce = ee(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: n,
    "aria-label": s,
    ...i
  }, u) => {
    const f = it(), { collapseBlock: k, expandBlock: A } = hr(), { activeMode: g, currentLayoutType: z, supportsFeature: p } = _e(), a = f == null ? void 0 : f.blocks[e], c = kr({ id: e, type: t, direction: r, children: o, className: n, "aria-label": s, ...i }, g), b = X(() => wr(o), [o]), l = X(() => Sr(o), [o]), m = X(() => c.hidden ? !1 : z === "dock" ? !!(c.icon || c.label) : !0, [z, c]), E = X(() => {
      const S = [
        "pretty-poly-block",
        `pretty-poly-block--${t}`,
        `pretty-poly-block--mode-${g}`
      ];
      return a && (a.sizeUnit && S.push(`pretty-poly-block--${a.sizeUnit}`), a.collapsible && S.push("pretty-poly-block--collapsible"), a.collapsible && a.collapseAt && (a.size ?? a.defaultSize ?? 0) <= a.collapseAt && S.push("pretty-poly-block--collapsed")), z === "dock" && c.dockOrder !== void 0 && S.push(`pretty-poly-block--dock-order-${c.dockOrder}`), S;
    }, [t, g, a, z, c]), I = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? A(e) : k(e));
    };
    if (!m)
      return null;
    if (z === "dock") {
      const S = c.icon;
      return /* @__PURE__ */ _.jsxs(
        "div",
        {
          ref: u,
          className: te(
            ...E,
            "pretty-poly-dock-item",
            "flex flex-col items-center p-2 rounded-md transition-colors cursor-pointer min-w-12",
            "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
            c.className,
            n
          ),
          "data-block-id": e,
          "data-block-type": t,
          "data-dock-order": c.dockOrder,
          "aria-label": s || c.label,
          role: "button",
          tabIndex: 0,
          style: c.style,
          children: [
            S && /* @__PURE__ */ _.jsx(S, { className: "pretty-poly-dock-icon w-6 h-6 mb-1" }),
            c.label && /* @__PURE__ */ _.jsx("span", { className: "pretty-poly-dock-label text-xs font-medium text-center", children: c.label })
          ]
        }
      );
    }
    return z === "tabs" ? /* @__PURE__ */ _.jsx(
      "div",
      {
        ref: u,
        className: te(
          ...E,
          "pretty-poly-tab-panel",
          "flex-1 overflow-auto",
          c.className,
          n
        ),
        "data-block-id": e,
        "data-block-type": t,
        "aria-label": s || c.tabLabel,
        role: "tabpanel",
        style: c.style,
        children: o
      }
    ) : /* @__PURE__ */ _.jsx(
      "div",
      {
        ref: u,
        className: te(
          ...E,
          "relative overflow-hidden",
          // Apply flex layout for structured content
          b && !l && "flex flex-col h-full",
          // Apply horizontal flex layout when sidebar is present
          b && l && "flex flex-row h-full",
          "transition-opacity duration-150",
          c.className,
          n
        ),
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": a == null ? void 0 : a.defaultSize,
        "data-block-size-unit": a == null ? void 0 : a.sizeUnit,
        "data-block-size-min": a == null ? void 0 : a.minSize,
        "data-block-size-max": a == null ? void 0 : a.maxSize,
        "data-block-collapse-at": a == null ? void 0 : a.collapseAt,
        "data-block-collapse-to": a == null ? void 0 : a.collapseTo,
        "data-block-divider-position": a == null ? void 0 : a.dividerPosition,
        "data-block-divider-size": a == null ? void 0 : a.dividerSize,
        "data-structured": b,
        "data-has-sidebar": l,
        "aria-label": s,
        role: t === "group" ? "group" : void 0,
        tabIndex: p("resizing") ? 0 : void 0,
        onDoubleClick: p("collapse") ? I : void 0,
        style: {
          ...c.style
          // CSS Grid area assignment handled by parent
        },
        children: o
      }
    );
  }
);
Ce.displayName = "Block";
const gt = ee(
  (e, t) => /* @__PURE__ */ _.jsx(Ce, { ref: t, ...e, type: "group" })
);
gt.displayName = "Block.Group";
Object.assign(Ce, {
  Group: gt,
  Header: dt,
  Content: ct,
  Footer: ut,
  Toolbar: ft,
  Tabs: pt,
  Sidebar: De
});
Object.assign(De, {
  Item: mt,
  Spacer: bt
});
const zr = ({
  className: e,
  direction: t
}) => /* @__PURE__ */ _.jsx(
  "div",
  {
    className: te(
      "pretty-poly-divider-handle",
      t === "column" ? "w-[1px] h-full" : "w-full h-[1px]",
      "bg-border transition-colors",
      e
    )
  }
), Er = ee(
  ({
    targetId: e,
    size: t = 8,
    className: r,
    handle: o,
    "aria-label": n
  }, s) => {
    const i = ue(null), u = s || i, f = it(), { startResize: k, isDragging: A, activeDividerId: g } = at(), { supportsFeature: z } = _e(), [p, a] = pe(""), [c, b] = pe("end"), l = B(() => {
      const D = i.current;
      if (!D) return;
      let G = e, W = "end";
      if (e) {
        const F = document.querySelector(`[data-block-id="${e}"]`);
        F && (W = F.compareDocumentPosition(D) & Node.DOCUMENT_POSITION_FOLLOWING ? "start" : "end");
      } else {
        const F = D.previousElementSibling, C = D.nextElementSibling, U = F == null ? void 0 : F.getAttribute("data-block-id"), x = C == null ? void 0 : C.getAttribute("data-block-id"), K = U ? f.blocks[U] : null, d = x ? f.blocks[x] : null;
        if (K && d)
          K.sizeUnit === "fr" && d.sizeUnit === "px" ? (G = x, W = "start") : (K.sizeUnit === "px" && d.sizeUnit, G = U, W = "end");
        else if (K)
          if (K.type === "group") {
            const T = Object.values(f.blocks).filter((R) => R.parentId === U).sort((R, N) => (R.order || 0) - (N.order || 0)).filter((R) => R.type === "block" && (R.sizeUnit === "px" || R.sizeUnit === "fr"));
            T.length > 0 ? (G = T[T.length - 1].id, W = "end") : (G = U, W = "end");
          } else
            G = U, W = "end";
        else if (d)
          if (d.type === "group") {
            const T = Object.values(f.blocks).filter((R) => R.parentId === x).sort((R, N) => (R.order || 0) - (N.order || 0)).filter((R) => R.type === "block" && (R.sizeUnit === "px" || R.sizeUnit === "fr"));
            T.length > 0 ? (G = T[0].id, W = "start") : (G = x, W = "start");
          } else
            G = x, W = "start";
      }
      G && G !== p && a(G), W !== c && b(W);
    }, [e, p, c, f.blocks]);
    Q(() => {
      l();
    }, [l]), Q(() => {
      l();
    }, [f.blocks]);
    const m = p ? f.blocks[p] : null;
    if (!m && p && console.warn(`Divider target block "${p}" not found`), !z("resizing"))
      return null;
    const I = m != null && m.parentId ? f.blocks[m.parentId] : null, S = ((I == null ? void 0 : I.type) === "group" ? I.direction : void 0) || "row", w = S === "column", j = A && p && g === `${p}-${c}-divider`, h = w ? "row-resize" : "col-resize", M = B((D) => {
      if (!p) return;
      D.preventDefault();
      const G = `${p}-${c}-divider`;
      k(p, G, D);
    }, [p, c, k]), H = B(() => {
      m == null || m.defaultSize;
    }, [m]), q = o || zr;
    return /* @__PURE__ */ _.jsx(
      "div",
      {
        ref: u,
        className: te(
          "pretty-poly-divider",
          "flex items-center justify-center",
          "select-none touch-none transition-colors",
          "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:bg-accent",
          w ? "cursor-row-resize" : "cursor-col-resize",
          j && "pretty-poly-divider--dragging",
          c === "start" && "pretty-poly-divider--start",
          c === "end" && "pretty-poly-divider--end",
          r
        ),
        "data-block-id": p ? `${p}-${c}-divider` : "loading-divider",
        "data-block-type": "divider",
        "data-block-target": p || "",
        "data-block-direction": S,
        "data-block-divider-position": c,
        style: {
          [w ? "height" : "width"]: `${t}px`,
          cursor: h
        },
        role: "separator",
        "aria-label": n || `Resize ${p || "block"}`,
        "aria-valuenow": m == null ? void 0 : m.defaultSize,
        "aria-valuemin": m == null ? void 0 : m.minSize,
        "aria-valuemax": m == null ? void 0 : m.maxSize,
        tabIndex: 0,
        onMouseDown: M,
        onTouchStart: M,
        onDoubleClick: H,
        onKeyDown: (D) => {
          (D.key === "ArrowLeft" || D.key === "ArrowRight" || D.key === "ArrowUp" || D.key === "ArrowDown") && D.preventDefault();
        },
        children: /* @__PURE__ */ _.jsx(
          q,
          {
            className: te(
              "transition-colors hover:bg-foreground/20",
              j && "bg-foreground/30"
            ),
            direction: S
          }
        )
      }
    );
  }
);
Er.displayName = "Divider";
function Nr(e, t, r) {
  const o = [];
  let n = e;
  const s = t.minSize ?? 0, i = t.maxSize ?? 1 / 0;
  if (e < s && (o.push(`Size ${e} is below minimum ${s}`), n = s), e > i && (o.push(`Size ${e} exceeds maximum ${i}`), n = i), n = fe(n, s, i), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const u = t.collapseAt ?? 0, f = t.collapseTo ?? 0, k = t.defaultSize ?? n;
    n = dr(
      n,
      r,
      u,
      f,
      k
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: n,
    violations: o
  };
}
function _r(e, t, r, o, n = 1) {
  const s = [];
  let i = r, u = o;
  const f = ce(e.minSize ?? 0, e.sizeUnit, n), k = ce(e.maxSize ?? 1 / 0, e.sizeUnit, n), A = ce(t.minSize ?? 0, t.sizeUnit, n), g = ce(t.maxSize ?? 1 / 0, t.sizeUnit, n), z = ce(e.defaultSize ?? 0, e.sizeUnit, n), p = ce(t.defaultSize ?? 0, t.sizeUnit, n), a = z + r, c = p + o;
  let b = fe(a, f, k), l = fe(c, A, g);
  i = b - z, u = l - p;
  const m = i + u;
  if (Math.abs(m) > 1e-3) {
    const S = Math.abs(i) < Math.abs(r), w = Math.abs(u) < Math.abs(o);
    if (S && !w) {
      const j = p - i;
      l = fe(j, A, g), u = l - p;
    } else if (w && !S) {
      const j = z - u;
      b = fe(j, f, k), i = b - z;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const E = i + u;
  return {
    isValid: Math.abs(E) <= 1e-3,
    adjustedTargetDelta: i,
    adjustedAdjacentDelta: u,
    violations: s
  };
}
function ce(e, t, r) {
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
function Or(e, t) {
  const r = [], o = e.filter((s) => s.sizeUnit === "px").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0), n = e.filter((s) => s.sizeUnit === "fr").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((s) => s.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((s) => {
    const i = t[s.id] ?? s.defaultSize ?? 0, u = s.minSize ?? 0, f = s.maxSize ?? 1 / 0;
    u > f && r.push(`Block ${s.id}: minSize (${u}) > maxSize (${f})`), (i < u || i > f) && r.push(`Block ${s.id}: size ${i} violates constraints [${u}, ${f}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
export {
  Ce as Block,
  ct as BlockContent,
  ut as BlockFooter,
  gt as BlockGroup,
  dt as BlockHeader,
  De as BlockSidebar,
  mt as BlockSidebarItem,
  bt as BlockSidebarSpacer,
  pt as BlockTabs,
  ft as BlockToolbar,
  Er as Divider,
  xr as Grid,
  gr as GridProvider,
  dr as applyCollapseLogic,
  ur as calculateConstrainedSize,
  fe as clamp,
  te as cn,
  lr as createCustomAdapter,
  sr as defaultModes,
  Pr as findAdjacentBlock,
  Rr as frToPx,
  fr as generateGridTemplate,
  Ar as getAllGridStates,
  st as getFlexSpacePx,
  Ie as getStorageAdapter,
  jr as isCollapsed,
  Mr as isZeroSum,
  ir as loadGridState,
  me as localStorageAdapter,
  ze as memoryStorageAdapter,
  Ir as pxPerFr,
  pr as pxToFr,
  ar as removeGridState,
  nr as saveGridState,
  ot as sessionStorageAdapter,
  hr as useGridActions,
  Ee as useGridContext,
  vr as useGridKeyboard,
  _e as useGridMode,
  cr as useGridPersistence,
  yr as useGridResize,
  it as useGridState,
  Nr as validateBlockSize,
  Or as validateLayoutIntegrity,
  _r as validateTwoWayResize
};
