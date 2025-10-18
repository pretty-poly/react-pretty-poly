var Tt = Object.defineProperty;
var At = (e, t, r) => t in e ? Tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => At(e, typeof t != "symbol" ? t + "" : t, r);
import Ct, { useState as J, useCallback as D, useMemo as ee, useEffect as N, useRef as me, createContext as Re, useContext as je, useReducer as Rt, useLayoutEffect as jt, forwardRef as Z, useImperativeHandle as It } from "react";
var De = { exports: {} }, xe = {};
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
function Lt() {
  if (We) return xe;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, n, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), n.key !== void 0 && (s = "" + n.key), "key" in n) {
      i = {};
      for (var l in n)
        l !== "key" && (i[l] = n[l]);
    } else i = n;
    return n = i.ref, {
      $$typeof: e,
      type: o,
      key: s,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return xe.Fragment = t, xe.jsx = r, xe.jsxs = r, xe;
}
var ke = {};
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
function Mt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === $ ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case d:
          return "Fragment";
        case p:
          return "Profiler";
        case m:
          return "StrictMode";
        case E:
          return "Suspense";
        case C:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case a:
            return "Portal";
          case h:
            return (c.displayName || "Context") + ".Provider";
          case S:
            return (c._context.displayName || "Context") + ".Consumer";
          case T:
            var A = c.render;
            return c = c.displayName, c || (c = A.displayName || A.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case I:
            return A = c.displayName || null, A !== null ? A : e(c.type) || "Memo";
          case g:
            A = c._payload, c = c._init;
            try {
              return e(c(A));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function r(c) {
      try {
        t(c);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var _ = A.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return _.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(c);
      }
    }
    function o(c) {
      if (c === d) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === g)
        return "<...>";
      try {
        var A = e(c);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var c = q.A;
      return c === null ? null : c.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(c) {
      if (F.call(c, "key")) {
        var A = Object.getOwnPropertyDescriptor(c, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, A) {
      function _() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: _,
        configurable: !0
      });
    }
    function u() {
      var c = e(this.type);
      return U[c] || (U[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function b(c, A, _, M, V, Y, ce, G) {
      return _ = Y.ref, c = {
        $$typeof: f,
        type: c,
        key: A,
        props: Y,
        _owner: V
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function w(c, A, _, M, V, Y, ce, G) {
      var W = A.children;
      if (W !== void 0)
        if (M)
          if (P(W)) {
            for (M = 0; M < W.length; M++)
              y(W[M]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(W);
      if (F.call(A, "key")) {
        W = e(c);
        var X = Object.keys(A).filter(function(ve) {
          return ve !== "key";
        });
        M = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", te[W + M] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          W,
          X,
          W
        ), te[W + M] = !0);
      }
      if (W = null, _ !== void 0 && (r(_), W = "" + _), s(A) && (r(A.key), W = "" + A.key), "key" in A) {
        _ = {};
        for (var ne in A)
          ne !== "key" && (_[ne] = A[ne]);
      } else _ = A;
      return W && l(
        _,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), b(
        c,
        W,
        Y,
        V,
        n(),
        _,
        ce,
        G
      );
    }
    function y(c) {
      typeof c == "object" && c !== null && c.$$typeof === f && c._store && (c._store.validated = 1);
    }
    var k = Ct, f = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), h = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), q = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, P = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var B, U = {}, H = k.react_stack_bottom_frame.bind(
      k,
      i
    )(), z = O(o(i)), te = {};
    ke.Fragment = d, ke.jsx = function(c, A, _, M, V) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return w(
        c,
        A,
        _,
        !1,
        M,
        V,
        Y ? Error("react-stack-top-frame") : H,
        Y ? O(o(c)) : z
      );
    }, ke.jsxs = function(c, A, _, M, V) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return w(
        c,
        A,
        _,
        !0,
        M,
        V,
        Y ? Error("react-stack-top-frame") : H,
        Y ? O(o(c)) : z
      );
    };
  }()), ke;
}
process.env.NODE_ENV === "production" ? De.exports = Lt() : De.exports = Mt();
var R = De.exports;
function Je(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Je(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ie() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Je(e)) && (o && (o += " "), o += t);
  return o;
}
const $e = "-", Pt = (e) => {
  const t = _t(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split($e);
      return l[0] === "" && l.length !== 1 && l.shift(), Ze(l, t) || Dt(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const u = r[s] || [];
      return l && o[s] ? [...u, ...o[s]] : u;
    }
  };
}, Ze = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Ze(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join($e);
  return (s = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : s.classGroupId;
}, Fe = /^\[(.+)\]$/, Dt = (e) => {
  if (Fe.test(e)) {
    const t = Fe.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, _t = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    _e(r[n], o, n, t);
  return o;
}, _e = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : qe(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Nt(n)) {
        _e(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, s]) => {
      _e(s, qe(t, i), r, o);
    });
  });
}, qe = (e, t) => {
  let r = e;
  return t.split($e).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, Nt = (e) => e.isThemeGetter, Ot = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (i, s) => {
    r.set(i, s), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = o.get(i)) !== void 0)
        return n(i, s), s;
    },
    set(i, s) {
      r.has(i) ? r.set(i, s) : n(i, s);
    }
  };
}, Ne = "!", Oe = ":", $t = Oe.length, Vt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const i = [];
    let s = 0, l = 0, u = 0, b;
    for (let a = 0; a < n.length; a++) {
      let d = n[a];
      if (s === 0 && l === 0) {
        if (d === Oe) {
          i.push(n.slice(u, a)), u = a + $t;
          continue;
        }
        if (d === "/") {
          b = a;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" ? s-- : d === "(" ? l++ : d === ")" && l--;
    }
    const w = i.length === 0 ? n : n.substring(u), y = Gt(w), k = y !== w, f = b && b > u ? b - u : void 0;
    return {
      modifiers: i,
      hasImportantModifier: k,
      baseClassName: y,
      maybePostfixModifierPosition: f
    };
  };
  if (t) {
    const n = t + Oe, i = o;
    o = (s) => s.startsWith(n) ? i(s.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
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
}, Gt = (e) => e.endsWith(Ne) ? e.substring(0, e.length - 1) : e.startsWith(Ne) ? e.substring(1) : e, Bt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let i = [];
    return o.forEach((s) => {
      s[0] === "[" || t[s] ? (n.push(...i.sort(), s), i = []) : i.push(s);
    }), n.push(...i.sort()), n;
  };
}, Ut = (e) => ({
  cache: Ot(e.cacheSize),
  parseClassName: Vt(e),
  sortModifiers: Bt(e),
  ...Pt(e)
}), Wt = /\s+/, Kt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = t, s = [], l = e.trim().split(Wt);
  let u = "";
  for (let b = l.length - 1; b >= 0; b -= 1) {
    const w = l[b], {
      isExternal: y,
      modifiers: k,
      hasImportantModifier: f,
      baseClassName: a,
      maybePostfixModifierPosition: d
    } = r(w);
    if (y) {
      u = w + (u.length > 0 ? " " + u : u);
      continue;
    }
    let m = !!d, p = o(m ? a.substring(0, d) : a);
    if (!p) {
      if (!m) {
        u = w + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (p = o(a), !p) {
        u = w + (u.length > 0 ? " " + u : u);
        continue;
      }
      m = !1;
    }
    const S = i(k).join(":"), h = f ? S + Ne : S, T = h + p;
    if (s.includes(T))
      continue;
    s.push(T);
    const E = n(p, m);
    for (let C = 0; C < E.length; ++C) {
      const I = E[C];
      s.push(h + I);
    }
    u = w + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Ft() {
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
function qt(e, ...t) {
  let r, o, n, i = s;
  function s(u) {
    const b = t.reduce((w, y) => y(w), e());
    return r = Ut(b), o = r.cache.get, n = r.cache.set, i = l, l(u);
  }
  function l(u) {
    const b = o(u);
    if (b)
      return b;
    const w = Kt(u, r);
    return n(u, w), w;
  }
  return function() {
    return i(Ft.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ht = /^\d+\/\d+$/, Yt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Xt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, de = (e) => Ht.test(e), j = (e) => !!e && !Number.isNaN(Number(e)), se = (e) => !!e && Number.isInteger(Number(e)), Le = (e) => e.endsWith("%") && j(e.slice(0, -1)), oe = (e) => Yt.test(e), er = () => !0, tr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jt.test(e) && !Zt.test(e)
), tt = () => !1, rr = (e) => Xt.test(e), or = (e) => Qt.test(e), nr = (e) => !v(e) && !x(e), sr = (e) => he(e, nt, tt), v = (e) => Qe.test(e), le = (e) => he(e, st, tr), Me = (e) => he(e, dr, j), He = (e) => he(e, rt, tt), ir = (e) => he(e, ot, or), Te = (e) => he(e, it, rr), x = (e) => et.test(e), Se = (e) => be(e, st), ar = (e) => be(e, ur), Ye = (e) => be(e, rt), lr = (e) => be(e, nt), cr = (e) => be(e, ot), Ae = (e) => be(e, it, !0), he = (e, t, r) => {
  const o = Qe.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = et.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", nt = (e) => e === "length" || e === "size" || e === "bg-size", st = (e) => e === "length", dr = (e) => e === "number", ur = (e) => e === "family-name", it = (e) => e === "shadow", fr = () => {
  const e = K("color"), t = K("font"), r = K("text"), o = K("font-weight"), n = K("tracking"), i = K("leading"), s = K("breakpoint"), l = K("container"), u = K("spacing"), b = K("radius"), w = K("shadow"), y = K("inset-shadow"), k = K("text-shadow"), f = K("drop-shadow"), a = K("blur"), d = K("perspective"), m = K("aspect"), p = K("ease"), S = K("animate"), h = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
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
  ], E = () => [...T(), x, v], C = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], g = () => [x, v, u], L = () => [de, "full", "auto", ...g()], $ = () => [se, "none", "subgrid", x, v], q = () => ["auto", {
    span: ["full", se, x, v]
  }, se, x, v], F = () => [se, "auto", x, v], P = () => ["auto", "min", "max", "fr", x, v], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], U = () => ["auto", ...g()], H = () => [de, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], z = () => [e, x, v], te = () => [...T(), Ye, He, {
    position: [x, v]
  }], c = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", lr, sr, {
    size: [x, v]
  }], _ = () => [Le, Se, le], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    x,
    v
  ], V = () => ["", j, Se, le], Y = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => [j, Le, Ye, He], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    a,
    x,
    v
  ], X = () => ["none", j, x, v], ne = () => ["none", j, x, v], ve = () => [j, x, v], Ee = () => [de, "full", ...g()];
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
        aspect: ["auto", "square", de, v, x, m]
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
        columns: [j, v, x, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": h()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": h()
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
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [se, "auto", x, v]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [de, "full", "auto", l, ...g()]
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
        flex: [j, de, "auto", "initial", "none", v]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", j, x, v]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", j, x, v]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [se, "first", "last", "none", x, v]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $()
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
        "grid-rows": $()
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
        "auto-cols": P()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": P()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: g()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": g()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": g()
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
        "justify-items": [...B(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...B()]
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
        items: [...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...B(), {
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
        "place-items": [...B(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...B()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: g()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: g()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: g()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: g()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: g()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: g()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: g()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: g()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: g()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: U()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: U()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: U()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: U()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: U()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: U()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: U()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: U()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: U()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": g()
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
        "space-y": g()
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
        size: H()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...H()]
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
          ...H()
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
            screen: [s]
          },
          ...H()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...H()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...H()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...H()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Se, le]
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
        font: [o, x, Me]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Le, v]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ar, v, t]
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
        tracking: [n, x, v]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [j, "none", x, Me]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...g()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", x, v]
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
        list: ["disc", "decimal", "none", x, v]
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
        placeholder: z()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: z()
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [j, "from-font", "auto", x, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: z()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [j, "auto", x, v]
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
        indent: g()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x, v]
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
        content: ["none", x, v]
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
        bg: te()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: c()
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
          }, se, x, v],
          radial: ["", x, v],
          conic: [se, x, v]
        }, cr, ir]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: z()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: _()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: z()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
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
        "divide-y": V()
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
        border: [...Y(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Y(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: z()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": z()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": z()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": z()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": z()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": z()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": z()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": z()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": z()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: z()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Y(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [j, x, v]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", j, Se, le]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: z()
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
          w,
          Ae,
          Te
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: z()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Ae, Te]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": z()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: V()
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
        ring: z()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [j, le]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": z()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": V()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": z()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", k, Ae, Te]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": z()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j, x, v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
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
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": G()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": G()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": G()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": G()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": G()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": G()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": G()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": z()
      }],
      "mask-image-radial": [{
        "mask-radial": [x, v]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": z()
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
        "mask-radial-at": T()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [j]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": G()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": z()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": z()
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
        mask: te()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: c()
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
        mask: ["none", x, v]
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
          x,
          v
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [j, x, v]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j, x, v]
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
          f,
          Ae,
          Te
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": z()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", j, x, v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [j, x, v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", j, x, v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j, x, v]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", j, x, v]
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
          x,
          v
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [j, x, v]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j, x, v]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", j, x, v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [j, x, v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", j, x, v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j, x, v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j, x, v]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", j, x, v]
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
        "border-spacing": g()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": g()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": g()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", x, v]
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
        duration: [j, "initial", x, v]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", p, x, v]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [j, x, v]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, x, v]
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
        perspective: [d, x, v]
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
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
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
        transform: [x, v, "", "none", "gpu", "cpu"]
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
        accent: z()
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
        caret: z()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x, v]
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
        "scroll-m": g()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
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
        "will-change": ["auto", "scroll", "contents", "transform", x, v]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...z()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [j, Se, le, Me]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...z()]
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
}, mr = /* @__PURE__ */ qt(fr);
function ae(...e) {
  return mr(ie(e));
}
const pr = {
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
function at(e = pr) {
  const [t, r] = J(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, n] = J(null), i = D(() => {
    if (typeof window > "u") return;
    const a = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(a);
  }, []), s = ee(() => {
    var d;
    if (o && e[o])
      return o;
    const a = Object.entries(e).filter(([m, p]) => {
      if (p.matcher)
        return p.matcher(t);
      const S = !p.minWidth || t.width >= p.minWidth, h = !p.maxWidth || t.width <= p.maxWidth;
      return S && h;
    });
    return a.sort(([, m], [, p]) => {
      const S = (m.minWidth ? 1 : 0) + (m.maxWidth ? 1 : 0);
      return (p.minWidth ? 1 : 0) + (p.maxWidth ? 1 : 0) - S;
    }), ((d = a[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = ee(() => e[s], [e, s]), u = ee(() => (l == null ? void 0 : l.type) || "grid", [l]), b = D((a) => {
    if (a && !e[a]) {
      console.warn(`Mode "${a}" not found in configuration`);
      return;
    }
    n(a);
  }, [e]), w = D((a) => s === a, [s]), y = ee(() => Object.keys(e), [e]), k = D((a) => {
    switch (u) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(a);
      case "tabs":
        return a === "tabs";
      case "dock":
        return a === "dock";
      default:
        return !1;
    }
  }, [u]), f = ee(() => {
    const a = Object.entries(e).map(([S, h]) => ({ name: S, ...h })).sort((S, h) => (S.breakpoint || 0) - (h.breakpoint || 0)), d = a.findIndex((S) => S.name === s), m = a[d + 1], p = a[d - 1];
    return {
      current: s,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: m == null ? void 0 : m.name,
      nextBreakpoint: m == null ? void 0 : m.breakpoint,
      prevMode: p == null ? void 0 : p.name,
      prevBreakpoint: p == null ? void 0 : p.breakpoint,
      isSmallest: d === 0,
      isLargest: d === a.length - 1
    };
  }, [e, s, l]);
  return N(() => {
    if (typeof window > "u") return;
    const a = () => i(), d = () => {
      setTimeout(i, 100);
    };
    return window.addEventListener("resize", a), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", a), window.removeEventListener("orientationchange", d);
    };
  }, [i]), {
    // Current state
    viewport: t,
    activeMode: s,
    currentModeConfig: l,
    currentLayoutType: u,
    // Mode management
    setMode: b,
    isMode: w,
    availableModes: y,
    // Features and capabilities
    supportsFeature: k,
    breakpointInfo: f,
    // Utilities
    isForced: !!o,
    updateViewport: i
  };
}
const re = "pretty-poly-grid-", ge = {
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
        r && r.startsWith(re) && e.push(r);
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
        r && r.startsWith(re) && e.push(r);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, fe = /* @__PURE__ */ new Map(), Ce = {
  save: (e, t) => {
    fe.set(e, t);
  },
  load: (e) => fe.get(e) || null,
  remove: (e) => {
    fe.delete(e);
  },
  clear: () => {
    for (const e of fe.keys())
      e.startsWith(re) && fe.delete(e);
  }
};
function Pe(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? ge : Ce;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? lt : Ce;
    case "memory":
    default:
      return Ce;
  }
}
function Ve(e) {
  return `${re}${e}`;
}
function gr(e, t, r = ge) {
  const o = Ve(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function hr(e, t = ge) {
  const r = Ve(e);
  return t.load(r);
}
function br(e, t = ge) {
  const r = Ve(e);
  t.remove(r);
}
function Vr(e = ge) {
  const t = {};
  try {
    if (e === ge && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(re)) {
          const n = o.substring(re.length), i = e.load(o);
          i && (t[n] = i);
        }
      }
    else if (e === lt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(re)) {
          const n = o.substring(re.length), i = e.load(o);
          i && (t[n] = i);
        }
      }
    else if (e === Ce) {
      for (const r of fe.keys())
        if (r.startsWith(re)) {
          const o = r.substring(re.length), n = e.load(r);
          n && (t[o] = n);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function yr(e) {
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
  const s = me(null), l = me(), u = me(""), b = me(!1);
  N(() => {
    if (!t) {
      s.current = null;
      return;
    }
    typeof t == "function" ? s.current = yr(t) : t === "localStorage" ? s.current = Pe("localStorage") : t === "sessionStorage" ? s.current = Pe("sessionStorage") : s.current = Pe("localStorage");
  }, [t]), N(() => {
    if (!s.current || !t || typeof t == "function" || b.current)
      return;
    const a = hr(e, s.current);
    a && (o == null || o(a), b.current = !0);
  }, [e, t]);
  const w = D((a = r) => {
    if (!s.current || !t)
      return;
    const d = JSON.stringify(a);
    if (d !== u.current)
      try {
        gr(e, a, s.current), u.current = d;
      } catch (m) {
        console.warn("Failed to save grid state:", m);
      }
  }, [e, t, r]), y = D((a = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      w(a);
    }, i);
  }, [w, i, r]), k = D(() => {
    if (!(!s.current || !t || typeof t == "function"))
      try {
        br(e, s.current), u.current = "";
      } catch (a) {
        console.warn("Failed to clear grid state:", a);
      }
  }, [e, t]), f = D((a = r) => {
    l.current && clearTimeout(l.current), w(a);
  }, [w, r]);
  return N(() => {
    if (!(!n || !t))
      return y(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, n, t, y]), N(() => {
    if (!t || typeof t == "function")
      return;
    const a = () => {
      f();
    };
    return window.addEventListener("beforeunload", a), () => {
      window.removeEventListener("beforeunload", a);
    };
  }, [f, t]), N(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: f,
    debouncedSave: y,
    clearState: k,
    isEnabled: !!t
  };
}
function ct(e, t, r) {
  return Math.max(0, e - t - r);
}
function Gr(e, t) {
  return t > 0 ? e / t : 0;
}
function pe(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Br(e, t) {
  return t > 0 && e <= t;
}
function vr(e, t, r, o, n) {
  if (r === 0)
    return e;
  const i = t <= r, s = o * 2.5;
  return i && e > s ? n : e < r && !i ? o : e;
}
function xr(e, t, r = 0, o = 1 / 0, n = !1) {
  const i = n ? -e : e, s = t + i;
  return pe(s, r, o);
}
function kr(e, t) {
  const r = [];
  return e.forEach((o) => {
    if (o.sizeUnit === "auto")
      r.push("auto");
    else if (o.sizeUnit === "px") {
      const n = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${n}, ${o.size}px)`);
    } else {
      const n = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${n}, ${o.size}fr)`);
    }
  }), r.join(" ");
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
  const r = D((s) => "touches" in s ? {
    x: s.touches[0].clientX,
    y: s.touches[0].clientY
  } : {
    x: s.clientX,
    y: s.clientY
  }, []), o = D((s, l, u) => {
    const b = e.blocks[s];
    if (!b) return;
    if (b.resizable === !1) {
      console.warn(`Cannot resize block "${s}" - block is marked as non-resizable.`);
      return;
    }
    const w = r(u), y = document.querySelector(`[data-divider-id="${l}"]`), k = (y == null ? void 0 : y.getAttribute("data-divider-position")) || "end", a = Object.values(e.blocks).filter(
      (h) => h.parentId === b.parentId
    ).sort(
      (h, T) => (h.order || 0) - (T.order || 0)
    ), d = a.findIndex((h) => h.id === s);
    let m = null;
    if (k === "start" && d > 0 ? m = a[d - 1] : k === "end" && d < a.length - 1 && (m = a[d + 1]), m && m.resizable === !1) {
      console.warn(
        `Cannot resize block "${s}" - adjacent block "${m.id}" is marked as non-resizable.`
      );
      return;
    }
    if (m && b.sizeUnit === "fr" && m.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${s}" when adjacent to px block "${m.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: s,
        dividerId: l,
        startPosition: w,
        initialSize: b.defaultSize || 0,
        initialAdjacentBlockId: m == null ? void 0 : m.id,
        initialAdjacentSize: m ? m.originalDefaultSize || m.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const p = b.parentId ? e.blocks[b.parentId] : null, S = (p == null ? void 0 : p.direction) || "row";
    document.body.style.cursor = S === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), n = D((s) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const u = r(s), b = l.parentId ? e.blocks[l.parentId] : null, w = (b == null ? void 0 : b.direction) || "row", y = w === "row" ? u.x - e.resize.startPosition.x : u.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const k = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), a = ((k == null ? void 0 : k.getAttribute("data-divider-position")) || "end") === "start", d = xr(
        y,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        a
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: d }
      });
    } else if (l.sizeUnit === "fr") {
      const k = Object.values(e.blocks).filter(
        (P) => P.parentId === l.parentId
      ), f = k.filter((P) => P.sizeUnit === "fr"), a = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = a ? w === "row" ? a.clientWidth : a.clientHeight : 1200, m = k.filter((P) => P.sizeUnit === "px").reduce((P, O) => {
        const B = document.querySelector(`[data-block-id="${O.id}"]`);
        if (!B) return P;
        const U = w === "row" ? B.clientWidth : B.clientHeight;
        return P + U;
      }, 0), S = Array.from(
        (a == null ? void 0 : a.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((P, O) => {
        if (!(O instanceof HTMLElement)) return P;
        const B = w === "row" ? O.clientWidth : O.clientHeight;
        return P + B;
      }, 0), T = ct(d, m, S), E = f.reduce(
        (P, O) => P + (O.defaultSize || 1),
        0
      ), C = E > 0 ? T / E : 0;
      if (C === 0) return;
      const I = Sr(y, C), g = f.sort(
        (P, O) => (P.order || 0) - (O.order || 0)
      ), L = g.findIndex(
        (P) => P.id === e.resize.activeBlockId
      ), $ = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), q = ($ == null ? void 0 : $.getAttribute("data-divider-position")) || "end";
      let F = null;
      if (q === "start" && L > 0 ? F = g[L - 1] : q === "end" && L < g.length - 1 && (F = g[L + 1]), F) {
        let P, O;
        P = I, O = -I;
        const B = 0.1, U = Math.max(
          B,
          e.resize.initialSize + P
        ), H = Math.max(
          B,
          (e.resize.initialAdjacentSize || 1) + O
        ), z = U - e.resize.initialSize, te = H - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + te) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: U
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: F.id, size: H }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), i = D(() => {
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
      const n = o.collapseTo ?? 0, i = o.minSize ?? 0, s = Math.max(n, i);
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            // Preserve original size for expand
            originalDefaultSize: o.originalDefaultSize || o.defaultSize,
            defaultSize: s,
            size: s
          }
        }
      };
    case "EXPAND_BLOCK":
      const l = e.blocks[t.payload.blockId];
      if (!l) return e;
      const u = l.originalDefaultSize || l.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...l,
            defaultSize: u,
            size: u
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
      const b = Object.fromEntries(
        Object.entries(e.blocks).map(([w, y]) => [
          w,
          {
            ...y,
            size: y.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: b,
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
function Tr(e, t, r) {
  return {
    blocks: e.reduce((n, i) => (n[i.id] = {
      ...i,
      size: i.defaultSize,
      originalDefaultSize: i.defaultSize
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
const dt = Re(null);
function Ar({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: n = !1,
  persistKey: i,
  onModeChange: s,
  onLayoutChange: l
}) {
  const { activeMode: u, viewport: b, setMode: w } = at(r), [y, k] = Rt(
    Er,
    Tr(t, b, u)
  );
  N(() => {
    k({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: b }
    });
  }, [b]), N(() => {
    const h = y.activeMode;
    u !== h && (k({
      type: "SWITCH_MODE",
      payload: { mode: u }
    }), s == null || s(u, h));
  }, [u, y.activeMode, s]);
  const { saveState: f, clearState: a } = wr({
    gridId: i || o,
    enabled: n,
    state: y,
    onStateLoad: (h) => {
      k({ type: "LOAD_STATE", payload: { state: h } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: m, endResize: p } = zr(y, k), S = ee(
    () => ({
      gridId: o,
      state: {
        ...y,
        activeMode: u,
        viewport: b
      },
      dispatch: k,
      // Grid operations
      resizeBlock: (h, T) => {
        k({
          type: "RESIZE_BLOCK",
          payload: { blockId: h, size: T }
        });
      },
      collapseBlock: (h) => {
        k({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: h }
        });
      },
      expandBlock: (h) => {
        k({
          type: "EXPAND_BLOCK",
          payload: { blockId: h }
        });
      },
      switchMode: (h) => {
        w(h);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: m,
      endResize: p,
      // Persistence
      persistState: () => f(y),
      resetState: () => {
        k({ type: "RESET_STATE" }), a();
      }
    }),
    [o, y, u, b, f, a, w, d, m, p]
  );
  return N(() => {
    if (l) {
      const h = Object.values(y.blocks);
      l(h);
    }
  }, [y.blocks, l]), /* @__PURE__ */ R.jsx(dt.Provider, { value: S, children: e });
}
function ze() {
  const e = je(dt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Ge() {
  const { state: e } = ze();
  return e;
}
function Cr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: i
  } = ze();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: i
  };
}
function ut() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = ze();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function Rr({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: n,
    updateResize: i,
    endResize: s,
    isDragging: l,
    activeBlockId: u,
    activeDividerId: b
  } = ut(), w = D(() => {
    if (!t.current) return 0;
    const m = t.current.getBoundingClientRect();
    return o === "column" ? m.width : m.height;
  }, [o, t]), y = D(() => {
    const m = w();
    if (m === 0) return 0;
    const p = e.filter((E) => E.sizeUnit === "px").reduce((E, C) => E + (C.defaultSize || 0), 0), S = 0, h = e.filter((E) => E.sizeUnit === "fr").reduce((E, C) => E + (C.defaultSize || 1), 0), T = ct(m, p, S);
    return h > 0 ? T / h : 0;
  }, [e, w]), k = D((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), f = D((m) => {
    const p = e.find((S) => S.id === m);
    p && p.collapseTo !== void 0 && (r == null || r(m, p.collapseTo));
  }, [e, r]), a = D((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), d = D((m) => {
    const p = e.find((S) => S.id === m);
    return !p || !p.collapseAt ? !1 : (p.defaultSize || 0) <= p.collapseAt;
  }, [e]);
  return N(() => {
    const m = (T) => {
      T.preventDefault(), i(T);
    }, p = (T) => {
      T.preventDefault(), i(T);
    }, S = () => {
      s();
    }, h = () => {
      s();
    };
    if (l)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", S), document.addEventListener("touchmove", p), document.addEventListener("touchend", h), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", p), document.removeEventListener("touchend", h);
      };
  }, [l, i, s]), {
    // State
    isDragging: l,
    activeBlockId: u,
    activeDividerId: b,
    // Actions
    startResize: n,
    resetBlock: k,
    collapseBlock: f,
    expandBlock: a,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: w,
    calculatePixelsPerFr: y
  };
}
function jr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: i,
  containerRef: s,
  stepSize: l = 10,
  largeStepSize: u = 50
}) {
  const b = D(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), w = D((d) => {
    if (!d) return null;
    const m = d.dataset.blockId;
    return t.find((p) => p.id === m) || null;
  }, [t]), y = D((d, m) => {
    if (!(s != null && s.current)) return null;
    const p = Array.from(
      s.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), S = d.getBoundingClientRect(), h = {
      x: S.left + S.width / 2,
      y: S.top + S.height / 2
    }, T = p.filter((E) => {
      if (E === d) return !1;
      const C = E.getBoundingClientRect(), I = {
        x: C.left + C.width / 2,
        y: C.top + C.height / 2
      };
      switch (m) {
        case "up":
          return I.y < h.y;
        case "down":
          return I.y > h.y;
        case "left":
          return I.x < h.x;
        case "right":
          return I.x > h.x;
        default:
          return !1;
      }
    });
    return T.length === 0 ? null : (T.sort((E, C) => {
      const I = E.getBoundingClientRect(), g = C.getBoundingClientRect(), L = {
        x: I.left + I.width / 2,
        y: I.top + I.height / 2
      }, $ = {
        x: g.left + g.width / 2,
        y: g.top + g.height / 2
      }, q = Math.sqrt(
        Math.pow(L.x - h.x, 2) + Math.pow(L.y - h.y, 2)
      ), F = Math.sqrt(
        Math.pow($.x - h.x, 2) + Math.pow($.y - h.y, 2)
      );
      return q - F;
    }), T[0]);
  }, [s]), k = D((d) => {
    if (!e) return;
    const m = b();
    if (!m) return;
    const p = w(m);
    if (!p) return;
    const S = d.ctrlKey || d.metaKey, h = d.shiftKey, T = h ? u : l;
    if (!S && !h)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const E = y(m, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const C = y(m, "down");
          C && (C.focus(), o == null || o(C.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const I = y(m, "left");
          I && (I.focus(), o == null || o(I.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const g = y(m, "right");
          g && (g.focus(), o == null || o(g.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), p.collapsible && (i == null || i(p.id));
          break;
        case "Escape":
          d.preventDefault(), m.blur();
          break;
      }
    if (S && r)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), r(p.id, -T);
          break;
        case "ArrowDown":
          d.preventDefault(), r(p.id, T);
          break;
        case "ArrowLeft":
          d.preventDefault(), r(p.id, -T);
          break;
        case "ArrowRight":
          d.preventDefault(), r(p.id, T);
          break;
      }
    if (S)
      switch (d.key) {
        case "Minus":
        case "-":
          d.preventDefault(), n == null || n(p.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), i == null || i(p.id);
          break;
      }
  }, [
    e,
    b,
    w,
    y,
    r,
    o,
    n,
    i,
    l,
    u
  ]), f = D((d) => {
    if (!(s != null && s.current)) return;
    const m = s.current.querySelector(
      `[data-block-id="${d}"]`
    );
    m && (m.focus(), o == null || o(d));
  }, [s, o]), a = D(() => s != null && s.current ? Array.from(
    s.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [s]);
  return N(() => {
    if (e)
      return document.addEventListener("keydown", k), () => {
        document.removeEventListener("keydown", k);
      };
  }, [k, e]), {
    focusBlock: f,
    getFocusableBlocks: a,
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
  const s = me(null), l = Ge(), { startResize: u, isDragging: b, activeDividerId: w } = ut(), [y, k] = J({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), f = l.blocks[e], a = r === "vertical", d = `${e}-${t}-divider`, m = b && w === d, p = D(() => {
    const h = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!h || !T) return;
    const E = h.getBoundingClientRect(), C = T.getBoundingClientRect(), I = f == null ? void 0 : f.parentId, g = I ? document.querySelector(`[data-block-id="${I}"]`) : h;
    if (!g) return;
    const L = g.getBoundingClientRect();
    if (a) {
      const $ = t === "start" ? C.left - E.left : C.right - E.left;
      k({
        left: $ - o / 2,
        // Center on edge
        top: L.top - E.top,
        // Position relative to parent
        width: o,
        height: L.height
        // Use parent height to constrain divider
      });
    } else {
      const $ = t === "start" ? C.top - E.top : C.bottom - E.top;
      k({
        left: L.left - E.left,
        // Position relative to parent
        top: $ - o / 2,
        // Center on edge
        width: L.width,
        // Use parent width to constrain divider
        height: o
      });
    }
  }, [e, t, a, o, f == null ? void 0 : f.parentId]);
  jt(() => {
    const h = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!h || !T) return;
    p();
    const E = new ResizeObserver(() => {
      p();
    });
    E.observe(h), E.observe(T);
    const C = f == null ? void 0 : f.parentId, I = C ? document.querySelector(`[data-block-id="${C}"]`) : null;
    return I && E.observe(I), () => {
      E.disconnect();
    };
  }, [e, p, f == null ? void 0 : f.parentId]), N(() => {
    p();
  }, [l.blocks, p]);
  const S = D((h) => {
    h.preventDefault(), u(e, d, h);
  }, [e, d, u]);
  return f ? /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: s,
      className: ae(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        m && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        a ? "cursor-col-resize" : "cursor-row-resize",
        n
      ),
      style: {
        left: `${y.left}px`,
        top: `${y.top}px`,
        width: `${y.width}px`,
        height: `${y.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": d,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": r,
      role: "separator",
      "aria-label": i || `Resize ${e}`,
      "aria-valuenow": f == null ? void 0 : f.defaultSize,
      "aria-valuemin": f == null ? void 0 : f.minSize,
      "aria-valuemax": f == null ? void 0 : f.maxSize,
      tabIndex: 0,
      onMouseDown: S,
      onTouchStart: S
    }
  ) : null;
};
ft.displayName = "Divider";
function Ir(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Lr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const n = Object.values(e).filter((l) => l.parentId === o.id).sort((l, u) => (l.order || 0) - (u.order || 0));
    if (n.length === 0) return;
    const s = o.direction === "row" ? "vertical" : "horizontal";
    n.forEach((l, u) => {
      if (u === 0) return;
      const b = n[u - 1], w = b.resizable !== !1, y = l.resizable !== !1;
      if (!w && !y)
        return;
      const { targetId: k, position: f } = Ir(b, l), a = e[k];
      a && a.resizable === !1 || t.push({
        id: `divider-${b.id}-${l.id}`,
        targetBlockId: k,
        position: f,
        direction: s
      });
    });
  }), t;
}
const Mr = () => {
  const e = Ge(), t = ee(() => Lr(e.blocks), [e.blocks]);
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
}, mt = Z(({ children: e, className: t, "aria-label": r }, o) => {
  const n = me(null), {
    state: i,
    resizeBlock: s,
    collapseBlock: l,
    expandBlock: u,
    switchMode: b,
    persistState: w,
    resetState: y
  } = ze(), k = i.resize.isDragging;
  It(
    o,
    () => ({
      resizeBlock: s,
      collapseBlock: l,
      expandBlock: u,
      switchMode: b,
      persistState: w,
      resetState: y,
      getState: () => i
    }),
    [
      s,
      l,
      u,
      b,
      w,
      y,
      i
    ]
  );
  const f = ee(() => Object.values(i.blocks).sort((h, T) => (h.order || 0) - (T.order || 0)), [i.blocks]), a = ee(() => f.find((S) => !S.parentId), [f]);
  Rr({
    blocks: f,
    containerRef: n,
    onSizeChange: s,
    direction: (a == null ? void 0 : a.direction) || "row"
  }), jr({
    enabled: !0,
    blocks: f,
    containerRef: n,
    onResizeBlock: (S, h) => {
      const T = i.blocks[S];
      if (T) {
        const E = T.defaultSize || 0, C = Math.max(0, E + h);
        s(S, C);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: u
  });
  const { gridStyles: d, cssVariables: m, modeStyles: p } = ee(() => {
    if (!a)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const S = f.reduce((g, L) => {
      if (L.id === a.id) return g;
      const $ = L.parentId || a.id;
      return g[$] || (g[$] = []), g[$].push(L), g;
    }, {}), h = f.filter((g) => g.defaultSize !== void 0).map((g) => {
      const L = g.sizeUnit === "px" ? `${g.defaultSize}px` : `${g.defaultSize}fr`;
      return `--${a.id}-${g.id}-size: ${L};`;
    }).join(`
  `), T = () => "", E = (g, L = /* @__PURE__ */ new Set()) => {
      if (L.has(g))
        return console.warn(`Circular reference detected for parent: ${g}`), "";
      const $ = new Set(L);
      $.add(g);
      const q = S[g] || [];
      if (q.length === 0) return "";
      const F = [...q].sort(
        (c, A) => (c.order || 0) - (A.order || 0)
      ), P = f.find((c) => c.id === g) || a, O = (P == null ? void 0 : P.direction) || "row", B = F.map((c) => ({
        id: c.id,
        sizeUnit: c.sizeUnit || "fr",
        size: c.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), U = kr(B, a.id), H = O === "column" ? "grid-template-rows" : "grid-template-columns";
      let te = `
${`[data-block-id="${g}"]`} {
  display: grid;
  ${H}: ${U};
  ${O === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const c of F)
        c.type === "group" && (te += E(c.id, $));
      return te;
    }, C = E(a.id), I = T();
    return {
      cssVariables: `:root {
  ${h}
}`,
      gridStyles: C,
      modeStyles: I
    };
  }, [f, a]);
  return a ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsxs("style", { type: "text/css", children: [
      m,
      d,
      p
    ] }),
    /* @__PURE__ */ R.jsxs(
      "div",
      {
        ref: n,
        className: ae(
          "group relative overflow-hidden",
          k && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": a.id,
        "data-block-id": a.id,
        "data-block-type": a.type,
        "data-active-mode": i.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (i.activeMode === "grid" || i.activeMode === "desktop") && /* @__PURE__ */ R.jsx(Mr, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
mt.displayName = "GridInternal";
const Pr = Z(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: n,
    onLayoutChange: i,
    onModeChange: s,
    className: l,
    dividers: u = "manual",
    dividerConfig: b,
    "aria-label": w
  }, y) => {
    const k = t.find((a) => !a.parentId), f = (k == null ? void 0 : k.id) || "root";
    return /* @__PURE__ */ R.jsx(
      Ar,
      {
        blocks: t,
        modes: r,
        gridId: f,
        persist: o,
        persistKey: n,
        onLayoutChange: i,
        onModeChange: s,
        children: /* @__PURE__ */ R.jsx(
          mt,
          {
            ref: y,
            className: l,
            dividers: u,
            dividerConfig: b,
            "aria-label": w,
            children: e
          }
        )
      }
    );
  }
);
Pr.displayName = "Grid";
const pt = Z(
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
        className: ae(
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
pt.displayName = "Block.Content";
const gt = Z(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: n,
      className: ae(
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
const ht = Z(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: o,
      className: ae(
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
ht.displayName = "Block.Footer";
const bt = Z(
  ({ left: e, center: t, right: r, className: o, "aria-label": n }, i) => /* @__PURE__ */ R.jsxs(
    "div",
    {
      ref: i,
      className: ae(
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
bt.displayName = "Block.Toolbar";
const yt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": i,
    allowOverflow: s = !0
  }, l) => {
    const [u, b] = J(null), w = (f, a) => {
      a.preventDefault(), f.disabled || r(f.id);
    }, y = (f, a) => {
      a.preventDefault(), a.stopPropagation(), o && f.closable && o(f.id);
    }, k = (f, a) => {
      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), f.disabled || r(f.id));
    };
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: l,
        className: ie(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          s ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": i || "Block tabs",
        children: /* @__PURE__ */ R.jsx("div", { className: "flex items-center min-w-0", children: e.map((f) => {
          const a = f.id === t, d = u === f.id, m = f.icon;
          return /* @__PURE__ */ R.jsxs(
            "div",
            {
              className: ie(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                a ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                f.disabled && "opacity-50 cursor-not-allowed",
                !s && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": a,
              "aria-disabled": f.disabled,
              tabIndex: f.disabled ? -1 : 0,
              onClick: (p) => w(f, p),
              onKeyDown: (p) => k(f, p),
              onMouseEnter: () => b(f.id),
              onMouseLeave: () => b(null),
              "data-tab-id": f.id,
              children: [
                m && /* @__PURE__ */ R.jsx(m, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ R.jsx("span", { className: "truncate min-w-0", children: f.label }),
                f.closable && o && /* @__PURE__ */ R.jsx(
                  "button",
                  {
                    className: ie(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || a ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (p) => y(f, p),
                    "aria-label": `Close ${f.label} tab`,
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
            f.id
          );
        }) })
      }
    );
  }
);
yt.displayName = "Block.Tabs";
const Be = Z(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": n }, i) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: i,
      className: ie(
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
Be.displayName = "Block.Sidebar";
const wt = Z(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: n,
    onClick: i,
    className: s,
    "aria-label": l
  }, u) => {
    const [b, w] = J(!1), y = () => {
      t && !o && w(!0);
    }, k = () => {
      w(!1);
    }, f = () => {
      !o && i && i();
    }, a = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), f());
    };
    return /* @__PURE__ */ R.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          ref: u,
          className: ie(
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
            s
          ),
          disabled: o,
          onClick: f,
          onKeyDown: a,
          onMouseEnter: y,
          onMouseLeave: k,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ R.jsx(
              e,
              {
                className: ie(
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
      b && t && /* @__PURE__ */ R.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ R.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
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
vt.displayName = "Block.Sidebar.Spacer";
const xt = Z(
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: n,
      className: ae(
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
xt.displayName = "Block.Layout";
const Ue = Z(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: n,
    divider: i,
    noDivider: s,
    "aria-label": l
  }, u) => {
    const { gridId: b } = ze(), w = Ge(), { collapseBlock: y, expandBlock: k } = Cr(), { supportsFeature: f } = at(), a = w == null ? void 0 : w.blocks[e], d = ee(() => a != null && a.collapsible && a.collapseAt ? (a.size ?? a.defaultSize ?? 0) <= a.collapseAt : !1, [a]), m = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? k(e) : y(e));
    };
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: u,
        className: ae(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          d && "opacity-70",
          n
        ),
        "data-grid-id": b,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": a == null ? void 0 : a.defaultSize,
        "data-block-size-unit": a == null ? void 0 : a.sizeUnit,
        "data-block-size-min": a == null ? void 0 : a.minSize,
        "data-block-size-max": a == null ? void 0 : a.maxSize,
        "data-block-resizable": (a == null ? void 0 : a.resizable) !== !1,
        "data-block-collapse-at": a == null ? void 0 : a.collapseAt,
        "data-block-collapse-to": a == null ? void 0 : a.collapseTo,
        "data-block-divider-position": a == null ? void 0 : a.dividerPosition,
        "data-block-divider-size": a == null ? void 0 : a.dividerSize,
        "data-block-divider": i !== void 0 ? JSON.stringify(i) : void 0,
        "data-block-no-divider": s,
        "aria-label": l,
        role: t === "group" ? "group" : void 0,
        tabIndex: f("resizing") ? 0 : void 0,
        onDoubleClick: f("collapse") ? m : void 0,
        children: o
      }
    );
  }
);
Ue.displayName = "Block";
const kt = Z(
  (e, t) => /* @__PURE__ */ R.jsx(Ue, { ref: t, ...e, type: "group" })
);
kt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: kt,
  Layout: xt,
  Header: gt,
  Content: pt,
  Footer: ht,
  Toolbar: bt,
  Tabs: yt,
  Sidebar: Be
});
Object.assign(Be, {
  Item: wt,
  Spacer: vt
});
function Fr(e, t, r) {
  const o = [];
  let n = e;
  const i = t.minSize ?? 0, s = t.maxSize ?? 1 / 0;
  if (e < i && (o.push(`Size ${e} is below minimum ${i}`), n = i), e > s && (o.push(`Size ${e} exceeds maximum ${s}`), n = s), n = pe(n, i, s), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, u = t.collapseTo ?? 0, b = t.defaultSize ?? n;
    n = vr(
      n,
      r,
      l,
      u,
      b
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: n,
    violations: o
  };
}
function qr(e, t, r, o, n = 1) {
  const i = [];
  let s = r, l = o;
  const u = ue(e.minSize ?? 0, e.sizeUnit, n), b = ue(e.maxSize ?? 1 / 0, e.sizeUnit, n), w = ue(t.minSize ?? 0, t.sizeUnit, n), y = ue(t.maxSize ?? 1 / 0, t.sizeUnit, n), k = ue(e.defaultSize ?? 0, e.sizeUnit, n), f = ue(t.defaultSize ?? 0, t.sizeUnit, n), a = k + r, d = f + o;
  let m = pe(a, u, b), p = pe(d, w, y);
  s = m - k, l = p - f;
  const S = s + l;
  if (Math.abs(S) > 1e-3) {
    const E = Math.abs(s) < Math.abs(r), C = Math.abs(l) < Math.abs(o);
    if (E && !C) {
      const I = f - s;
      p = pe(I, w, y), l = p - f;
    } else if (C && !E) {
      const I = k - l;
      m = pe(I, u, b), s = m - k;
    }
    i.push("Zero-sum constraint violated, deltas adjusted");
  }
  const h = s + l;
  return {
    isValid: Math.abs(h) <= 1e-3,
    adjustedTargetDelta: s,
    adjustedAdjacentDelta: l,
    violations: i
  };
}
function ue(e, t, r) {
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
function Hr(e, t) {
  const r = [], o = e.filter((i) => i.sizeUnit === "px").reduce((i, s) => i + (t[s.id] ?? s.defaultSize ?? 0), 0), n = e.filter((i) => i.sizeUnit === "fr").reduce((i, s) => i + (t[s.id] ?? s.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((i) => i.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((i) => {
    const s = t[i.id] ?? i.defaultSize ?? 0, l = i.minSize ?? 0, u = i.maxSize ?? 1 / 0;
    l > u && r.push(`Block ${i.id}: minSize (${l}) > maxSize (${u})`), (s < l || s > u) && r.push(`Block ${i.id}: size ${s} violates constraints [${l}, ${u}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
class Dr {
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
const St = Re(null);
function Ie() {
  const e = je(St);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function Yr(e) {
  const t = Ie(), [r, o] = J(() => t.getView(e));
  return N(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function Jr(e) {
  const t = Ie(), [r, o] = J(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return N(() => {
    const n = () => {
      e != null && e.category ? o(t.getViewsByCategory(e.category)) : o(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function Zr({ children: e, registry: t }) {
  const [r] = J(() => t ?? new Dr());
  return /* @__PURE__ */ R.jsx(St.Provider, { value: r, children: e });
}
function Xr(e) {
  const t = Ie();
  N(() => t.registerViews(e), [t, e]);
}
function Qr(e) {
  const t = Ie();
  N(() => t.registerView(e), [t, e]);
}
class _r {
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
      const i = o.category || "", s = n.category || "";
      if (i !== s) return i.localeCompare(s);
      const l = o.title || o.id, u = n.title || n.id;
      return l.localeCompare(u);
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
const zt = Re(null);
function ye() {
  const e = je(zt);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function eo(e) {
  const t = ye(), [r, o] = J(() => t.getCommand(e));
  return N(() => {
    const n = () => {
      o(t.getCommand(e));
    };
    return t.onDidChangeCommands(n);
  }, [t, e]), r;
}
function to(e) {
  const t = ye(), [r, o] = J(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return N(() => {
    const n = () => {
      e != null && e.category ? o(t.getCommandsByCategory(e.category)) : o(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function ro(e) {
  const t = ye();
  return D(
    (...r) => t.executeCommand(e, ...r),
    [t, e]
  );
}
function oo(e) {
  const t = ye();
  N(() => t.registerCommands(e), [t, e]);
}
function no(e) {
  const t = ye();
  N(() => t.registerCommand(e), [t, e]);
}
function so(e = !0) {
  const t = ye();
  N(() => {
    if (!e) return;
    const r = (o) => {
      t.handleKeyboardEvent(o);
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, e]);
}
function io({
  children: e,
  service: t,
  enableKeyboardShortcuts: r = !0
}) {
  const [o] = J(() => t ?? new _r());
  return N(() => {
    if (!r) return;
    const n = (i) => {
      o.handleKeyboardEvent(i);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, [o, r]), /* @__PURE__ */ R.jsx(zt.Provider, { value: o, children: e });
}
class Nr {
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
      var i, s;
      const o = new Date(((i = t.metadata) == null ? void 0 : i.createdAt) || 0);
      return new Date(((s = r.metadata) == null ? void 0 : s.createdAt) || 0).getTime() - o.getTime();
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
const Et = Re(null);
function we() {
  const e = je(Et);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function ao(e) {
  const t = we(), [r, o] = J(() => t.getBlockViewType(e));
  return N(() => {
    const n = (s) => {
      o(s[e]);
    };
    return t.onViewTypesChange(n);
  }, [t, e]), r;
}
function lo() {
  const e = we(), [t, r] = J(() => e.getAllViewTypes());
  return N(() => e.onViewTypesChange(r), [e]), t;
}
function co() {
  const e = we();
  return D(
    (t, r) => {
      e.setBlockViewType(t, r);
    },
    [e]
  );
}
function uo() {
  const e = we(), [t, r] = J(() => e.getAllLayouts());
  return N(() => {
    const o = () => {
      r(e.getAllLayouts());
    };
    return e.onLayoutsChange(o);
  }, [e]), t;
}
function fo() {
  const e = we();
  return D(
    (t, r, o, n) => {
      const i = e.createLayoutFromCurrentState(t, r, o, n);
      e.saveLayout(i);
    },
    [e]
  );
}
function mo() {
  const e = we();
  return D(
    (t) => e.applyLayout(t),
    [e]
  );
}
function po({
  children: e,
  service: t,
  initialViewTypes: r
}) {
  const [o] = J(() => {
    const n = t ?? new Nr();
    return r && n.setViewTypes(r), n;
  });
  return /* @__PURE__ */ R.jsx(Et.Provider, { value: o, children: e });
}
export {
  Ue as Block,
  pt as BlockContent,
  ht as BlockFooter,
  kt as BlockGroup,
  gt as BlockHeader,
  xt as BlockLayout,
  Be as BlockSidebar,
  wt as BlockSidebarItem,
  vt as BlockSidebarSpacer,
  yt as BlockTabs,
  bt as BlockToolbar,
  _r as CommandService,
  io as CommandServiceProvider,
  ft as Divider,
  Pr as Grid,
  Ar as GridProvider,
  Nr as LayoutService,
  po as LayoutServiceProvider,
  Dr as ViewRegistry,
  Zr as ViewRegistryProvider,
  vr as applyCollapseLogic,
  xr as calculateConstrainedSize,
  pe as clamp,
  ae as cn,
  yr as createCustomAdapter,
  pr as defaultModes,
  Wr as findAdjacentBlock,
  Ur as frToPx,
  kr as generateGridTemplate,
  Vr as getAllGridStates,
  ct as getFlexSpacePx,
  Pe as getStorageAdapter,
  Br as isCollapsed,
  Kr as isZeroSum,
  hr as loadGridState,
  ge as localStorageAdapter,
  Ce as memoryStorageAdapter,
  Gr as pxPerFr,
  Sr as pxToFr,
  br as removeGridState,
  gr as saveGridState,
  lt as sessionStorageAdapter,
  mo as useApplyLayout,
  ao as useBlockViewType,
  eo as useCommand,
  so as useCommandKeyboardShortcuts,
  ye as useCommandService,
  to as useCommands,
  ro as useExecuteCommand,
  Cr as useGridActions,
  ze as useGridContext,
  jr as useGridKeyboard,
  at as useGridMode,
  wr as useGridPersistence,
  Rr as useGridResize,
  Ge as useGridState,
  we as useLayoutService,
  uo as useLayouts,
  no as useRegisterCommand,
  oo as useRegisterCommands,
  Qr as useRegisterView,
  Xr as useRegisterViews,
  fo as useSaveLayout,
  co as useSetBlockViewType,
  Yr as useViewDescriptor,
  Ie as useViewRegistry,
  lo as useViewTypes,
  Jr as useViews,
  Fr as validateBlockSize,
  Hr as validateLayoutIntegrity,
  qr as validateTwoWayResize
};
