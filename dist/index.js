var Tt = Object.defineProperty;
var At = (e, t, r) => t in e ? Tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => At(e, typeof t != "symbol" ? t + "" : t, r);
import Ct, { useState as J, useCallback as _, useMemo as ee, useEffect as D, useRef as pe, createContext as Re, useContext as Ie, useReducer as Rt, useLayoutEffect as It, forwardRef as Z, useImperativeHandle as Lt } from "react";
var _e = { exports: {} }, ke = {};
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
  if (We) return ke;
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
  return ke.Fragment = t, ke.jsx = r, ke.jsxs = r, ke;
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
function Mt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === V ? null : c.displayName || c.name || null;
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
        case j:
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
          case L:
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
        var O = A.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return O.call(
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
      var c = F.A;
      return c === null ? null : c.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(c) {
      if (H.call(c, "key")) {
        var A = Object.getOwnPropertyDescriptor(c, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, A) {
      function O() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: O,
        configurable: !0
      });
    }
    function f() {
      var c = e(this.type);
      return U[c] || (U[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function y(c, A, O, M, $, Y, de, B) {
      return O = Y.ref, c = {
        $$typeof: u,
        type: c,
        key: A,
        props: Y,
        _owner: $
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: f
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
        value: de
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function b(c, A, O, M, $, Y, de, B) {
      var W = A.children;
      if (W !== void 0)
        if (M)
          if (P(W)) {
            for (M = 0; M < W.length; M++)
              v(W[M]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(W);
      if (H.call(A, "key")) {
        W = e(c);
        var X = Object.keys(A).filter(function(xe) {
          return xe !== "key";
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
      if (W = null, O !== void 0 && (r(O), W = "" + O), s(A) && (r(A.key), W = "" + A.key), "key" in A) {
        O = {};
        for (var se in A)
          se !== "key" && (O[se] = A[se]);
      } else O = A;
      return W && l(
        O,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), y(
        c,
        W,
        Y,
        $,
        n(),
        O,
        de,
        B
      );
    }
    function v(c) {
      typeof c == "object" && c !== null && c.$$typeof === u && c._store && (c._store.validated = 1);
    }
    var w = Ct, u = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), h = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), F = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, P = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var G, U = {}, q = w.react_stack_bottom_frame.bind(
      w,
      i
    )(), z = N(o(i)), te = {};
    Se.Fragment = d, Se.jsx = function(c, A, O, M, $) {
      var Y = 1e4 > F.recentlyCreatedOwnerStacks++;
      return b(
        c,
        A,
        O,
        !1,
        M,
        $,
        Y ? Error("react-stack-top-frame") : q,
        Y ? N(o(c)) : z
      );
    }, Se.jsxs = function(c, A, O, M, $) {
      var Y = 1e4 > F.recentlyCreatedOwnerStacks++;
      return b(
        c,
        A,
        O,
        !0,
        M,
        $,
        Y ? Error("react-stack-top-frame") : q,
        Y ? N(o(c)) : z
      );
    };
  }()), Se;
}
process.env.NODE_ENV === "production" ? _e.exports = jt() : _e.exports = Mt();
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
const Ve = "-", Pt = (e) => {
  const t = Ot(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(Ve);
      return l[0] === "" && l.length !== 1 && l.shift(), Ze(l, t) || _t(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const f = r[s] || [];
      return l && o[s] ? [...f, ...o[s]] : f;
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
  const i = e.join(Ve);
  return (s = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : s.classGroupId;
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
    Object.entries(n).forEach(([i, s]) => {
      Oe(s, Fe(t, i), r, o);
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
}, Dt = (e) => e.isThemeGetter, Nt = (e) => {
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
}, De = "!", Ne = ":", Vt = Ne.length, $t = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const i = [];
    let s = 0, l = 0, f = 0, y;
    for (let a = 0; a < n.length; a++) {
      let d = n[a];
      if (s === 0 && l === 0) {
        if (d === Ne) {
          i.push(n.slice(f, a)), f = a + Vt;
          continue;
        }
        if (d === "/") {
          y = a;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" ? s-- : d === "(" ? l++ : d === ")" && l--;
    }
    const b = i.length === 0 ? n : n.substring(f), v = Bt(b), w = v !== b, u = y && y > f ? y - f : void 0;
    return {
      modifiers: i,
      hasImportantModifier: w,
      baseClassName: v,
      maybePostfixModifierPosition: u
    };
  };
  if (t) {
    const n = t + Ne, i = o;
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
}, Bt = (e) => e.endsWith(De) ? e.substring(0, e.length - 1) : e.startsWith(De) ? e.substring(1) : e, Gt = (e) => {
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
  cache: Nt(e.cacheSize),
  parseClassName: $t(e),
  sortModifiers: Gt(e),
  ...Pt(e)
}), Wt = /\s+/, Kt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = t, s = [], l = e.trim().split(Wt);
  let f = "";
  for (let y = l.length - 1; y >= 0; y -= 1) {
    const b = l[y], {
      isExternal: v,
      modifiers: w,
      hasImportantModifier: u,
      baseClassName: a,
      maybePostfixModifierPosition: d
    } = r(b);
    if (v) {
      f = b + (f.length > 0 ? " " + f : f);
      continue;
    }
    let m = !!d, p = o(m ? a.substring(0, d) : a);
    if (!p) {
      if (!m) {
        f = b + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (p = o(a), !p) {
        f = b + (f.length > 0 ? " " + f : f);
        continue;
      }
      m = !1;
    }
    const S = i(w).join(":"), h = u ? S + De : S, T = h + p;
    if (s.includes(T))
      continue;
    s.push(T);
    const E = n(p, m);
    for (let C = 0; C < E.length; ++C) {
      const L = E[C];
      s.push(h + L);
    }
    f = b + (f.length > 0 ? " " + f : f);
  }
  return f;
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
  let r, o, n, i = s;
  function s(f) {
    const y = t.reduce((b, v) => v(b), e());
    return r = Ut(y), o = r.cache.get, n = r.cache.set, i = l, l(f);
  }
  function l(f) {
    const y = o(f);
    if (y)
      return y;
    const b = Kt(f, r);
    return n(f, b), b;
  }
  return function() {
    return i(Ht.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qt = /^\d+\/\d+$/, Yt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Xt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ue = (e) => qt.test(e), I = (e) => !!e && !Number.isNaN(Number(e)), ie = (e) => !!e && Number.isInteger(Number(e)), je = (e) => e.endsWith("%") && I(e.slice(0, -1)), oe = (e) => Yt.test(e), er = () => !0, tr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jt.test(e) && !Zt.test(e)
), tt = () => !1, rr = (e) => Xt.test(e), or = (e) => Qt.test(e), nr = (e) => !x(e) && !k(e), sr = (e) => ye(e, nt, tt), x = (e) => Qe.test(e), ce = (e) => ye(e, st, tr), Me = (e) => ye(e, dr, I), qe = (e) => ye(e, rt, tt), ir = (e) => ye(e, ot, or), Te = (e) => ye(e, it, rr), k = (e) => et.test(e), ze = (e) => be(e, st), ar = (e) => be(e, ur), Ye = (e) => be(e, rt), lr = (e) => be(e, nt), cr = (e) => be(e, ot), Ae = (e) => be(e, it, !0), ye = (e, t, r) => {
  const o = Qe.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = et.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", nt = (e) => e === "length" || e === "size" || e === "bg-size", st = (e) => e === "length", dr = (e) => e === "number", ur = (e) => e === "family-name", it = (e) => e === "shadow", fr = () => {
  const e = K("color"), t = K("font"), r = K("text"), o = K("font-weight"), n = K("tracking"), i = K("leading"), s = K("breakpoint"), l = K("container"), f = K("spacing"), y = K("radius"), b = K("shadow"), v = K("inset-shadow"), w = K("text-shadow"), u = K("drop-shadow"), a = K("blur"), d = K("perspective"), m = K("aspect"), p = K("ease"), S = K("animate"), h = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
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
  ], E = () => [...T(), k, x], C = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", "contain", "none"], g = () => [k, x, f], j = () => [ue, "full", "auto", ...g()], V = () => [ie, "none", "subgrid", k, x], F = () => ["auto", {
    span: ["full", ie, k, x]
  }, ie, k, x], H = () => [ie, "auto", k, x], P = () => ["auto", "min", "max", "fr", k, x], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], U = () => ["auto", ...g()], q = () => [ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], z = () => [e, k, x], te = () => [...T(), Ye, qe, {
    position: [k, x]
  }], c = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", lr, sr, {
    size: [k, x]
  }], O = () => [je, ze, ce], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    y,
    k,
    x
  ], $ = () => ["", I, ze, ce], Y = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [I, je, Ye, qe], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    a,
    k,
    x
  ], X = () => ["none", I, k, x], se = () => ["none", I, k, x], xe = () => [I, k, x], Ee = () => [ue, "full", ...g()];
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
      spacing: ["px", I],
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
        aspect: ["auto", "square", ue, x, k, m]
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
        columns: [I, x, k, l]
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
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
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
        z: [ie, "auto", k, x]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ue, "full", "auto", l, ...g()]
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
        flex: [I, ue, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, k, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, k, x]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ie, "first", "last", "none", k, x]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        justify: [...N(), "normal"]
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
        content: ["normal", ...N()]
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
        "place-content": N()
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
        size: q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...q()]
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
          ...q()
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
          ...q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...q()]
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
        font: [o, k, Me]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", je, x]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ar, x, t]
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
        tracking: [n, k, x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [I, "none", k, Me]
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
        "list-image": ["none", k, x]
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
        list: ["disc", "decimal", "none", k, x]
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
        decoration: [I, "from-font", "auto", k, ce]
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
        "underline-offset": [I, "auto", k, x]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k, x]
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
        content: ["none", k, x]
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
          }, ie, k, x],
          radial: ["", k, x],
          conic: [ie, k, x]
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
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
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
        "divide-y": $()
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
        "outline-offset": [I, k, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", I, ze, ce]
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
          b,
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
        "inset-shadow": ["none", v, Ae, Te]
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
        ring: $()
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
        "ring-offset": [I, ce]
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
        "inset-ring": $()
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
        "text-shadow": ["none", w, Ae, Te]
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
        opacity: [I, k, x]
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
        "mask-linear": [I]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": B()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": B()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": B()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": B()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": B()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": B()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": B()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": B()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": B()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": B()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": B()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": B()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": B()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": B()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": z()
      }],
      "mask-image-radial": [{
        "mask-radial": [k, x]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": B()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": B()
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
        "mask-conic": [I]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": B()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": B()
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
        mask: ["none", k, x]
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
          k,
          x
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
        brightness: [I, k, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, k, x]
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
          u,
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
        grayscale: ["", I, k, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, k, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, k, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, k, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, k, x]
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
          k,
          x
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
        "backdrop-brightness": [I, k, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, k, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, k, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, k, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, k, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, k, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, k, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, k, x]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", k, x]
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
        duration: [I, "initial", k, x]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", p, k, x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, k, x]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, k, x]
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
        perspective: [d, k, x]
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
        skew: xe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": xe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": xe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [k, x, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k, x]
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
        "will-change": ["auto", "scroll", "contents", "transform", k, x]
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
        stroke: [I, ze, ce, Me]
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
}, mr = /* @__PURE__ */ Ft(fr);
function le(...e) {
  return mr(ae(e));
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
  }), [o, n] = J(null), i = _(() => {
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
  }, [t, e, o]), l = ee(() => e[s], [e, s]), f = ee(() => (l == null ? void 0 : l.type) || "grid", [l]), y = _((a) => {
    if (a && !e[a]) {
      console.warn(`Mode "${a}" not found in configuration`);
      return;
    }
    n(a);
  }, [e]), b = _((a) => s === a, [s]), v = ee(() => Object.keys(e), [e]), w = _((a) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(a);
      case "tabs":
        return a === "tabs";
      case "dock":
        return a === "dock";
      default:
        return !1;
    }
  }, [f]), u = ee(() => {
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
  return D(() => {
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
    currentLayoutType: f,
    // Mode management
    setMode: y,
    isMode: b,
    availableModes: v,
    // Features and capabilities
    supportsFeature: w,
    breakpointInfo: u,
    // Utilities
    isForced: !!o,
    updateViewport: i
  };
}
const re = "pretty-poly-grid-", he = {
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
}, me = /* @__PURE__ */ new Map(), Ce = {
  save: (e, t) => {
    me.set(e, t);
  },
  load: (e) => me.get(e) || null,
  remove: (e) => {
    me.delete(e);
  },
  clear: () => {
    for (const e of me.keys())
      e.startsWith(re) && me.delete(e);
  }
};
function Pe(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? he : Ce;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? lt : Ce;
    case "memory":
    default:
      return Ce;
  }
}
function $e(e) {
  return `${re}${e}`;
}
function gr(e, t, r = he) {
  const o = $e(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function hr(e, t = he) {
  const r = $e(e);
  return t.load(r);
}
function yr(e, t = he) {
  const r = $e(e);
  t.remove(r);
}
function $r(e = he) {
  const t = {};
  try {
    if (e === he && typeof localStorage < "u")
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
      for (const r of me.keys())
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
  const s = pe(null), l = pe(), f = pe(""), y = pe(!1);
  D(() => {
    if (!t) {
      s.current = null;
      return;
    }
    typeof t == "function" ? s.current = br(t) : t === "localStorage" ? s.current = Pe("localStorage") : t === "sessionStorage" ? s.current = Pe("sessionStorage") : s.current = Pe("localStorage");
  }, [t]), D(() => {
    if (!s.current || !t || typeof t == "function" || y.current)
      return;
    const a = hr(e, s.current);
    a && (o == null || o(a), y.current = !0);
  }, [e, t]);
  const b = _((a = r) => {
    if (!s.current || !t)
      return;
    const d = JSON.stringify(a);
    if (d !== f.current)
      try {
        gr(e, a, s.current), f.current = d;
      } catch (m) {
        console.warn("Failed to save grid state:", m);
      }
  }, [e, t, r]), v = _((a = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      b(a);
    }, i);
  }, [b, i, r]), w = _(() => {
    if (!(!s.current || !t || typeof t == "function"))
      try {
        yr(e, s.current), f.current = "";
      } catch (a) {
        console.warn("Failed to clear grid state:", a);
      }
  }, [e, t]), u = _((a = r) => {
    l.current && clearTimeout(l.current), b(a);
  }, [b, r]);
  return D(() => {
    if (!(!n || !t))
      return v(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, n, t, v]), D(() => {
    if (!t || typeof t == "function")
      return;
    const a = () => {
      u();
    };
    return window.addEventListener("beforeunload", a), () => {
      window.removeEventListener("beforeunload", a);
    };
  }, [u, t]), D(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: u,
    debouncedSave: v,
    clearState: w,
    isEnabled: !!t
  };
}
function ct(e, t, r) {
  return Math.max(0, e - t - r);
}
function Br(e, t) {
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
  const i = t <= r, s = o * 2.5;
  return i && e > s ? n : e < r && !i ? o : e;
}
function xr(e, t, r = 0, o = 1 / 0, n = !1) {
  const i = n ? -e : e, s = t + i;
  return ge(s, r, o);
}
function kr(e, t, r) {
  const o = [];
  return (r ? e.filter((i) => !r.has(i.id)) : e).forEach((i) => {
    if (i.sizeUnit === "auto")
      o.push("auto");
    else if (i.sizeUnit === "px") {
      const s = t ? `--${t}-${i.id}-size` : `--${i.id}-size`;
      o.push(`var(${s}, ${i.size}px)`);
    } else {
      const s = t ? `--${t}-${i.id}-size` : `--${i.id}-size`;
      o.push(`var(${s}, ${i.size}fr)`);
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
  const r = _((s) => "touches" in s ? {
    x: s.touches[0].clientX,
    y: s.touches[0].clientY
  } : {
    x: s.clientX,
    y: s.clientY
  }, []), o = _((s, l, f) => {
    const y = e.blocks[s];
    if (!y) return;
    if (y.resizable === !1) {
      console.warn(`Cannot resize block "${s}" - block is marked as non-resizable.`);
      return;
    }
    const b = r(f), v = document.querySelector(`[data-divider-id="${l}"]`), w = (v == null ? void 0 : v.getAttribute("data-divider-position")) || "end", a = Object.values(e.blocks).filter(
      (h) => h.parentId === y.parentId
    ).sort(
      (h, T) => (h.order || 0) - (T.order || 0)
    ), d = a.findIndex((h) => h.id === s);
    let m = null;
    if (w === "start" && d > 0 ? m = a[d - 1] : w === "end" && d < a.length - 1 && (m = a[d + 1]), m && m.resizable === !1) {
      console.warn(
        `Cannot resize block "${s}" - adjacent block "${m.id}" is marked as non-resizable.`
      );
      return;
    }
    if (m && y.sizeUnit === "fr" && m.sizeUnit === "px") {
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
        startPosition: b,
        initialSize: y.defaultSize || 0,
        initialAdjacentBlockId: m == null ? void 0 : m.id,
        initialAdjacentSize: m ? m.originalDefaultSize || m.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const p = y.parentId ? e.blocks[y.parentId] : null, S = (p == null ? void 0 : p.direction) || "row";
    document.body.style.cursor = S === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), n = _((s) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const f = r(s), y = l.parentId ? e.blocks[l.parentId] : null, b = (y == null ? void 0 : y.direction) || "row", v = b === "row" ? f.x - e.resize.startPosition.x : f.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const w = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), a = ((w == null ? void 0 : w.getAttribute("data-divider-position")) || "end") === "start", d = xr(
        v,
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
      const w = Object.values(e.blocks).filter(
        (P) => P.parentId === l.parentId
      ), u = w.filter((P) => P.sizeUnit === "fr"), a = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = a ? b === "row" ? a.clientWidth : a.clientHeight : 1200, m = w.filter((P) => P.sizeUnit === "px").reduce((P, N) => {
        const G = document.querySelector(`[data-block-id="${N.id}"]`);
        if (!G) return P;
        const U = b === "row" ? G.clientWidth : G.clientHeight;
        return P + U;
      }, 0), S = Array.from(
        (a == null ? void 0 : a.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((P, N) => {
        if (!(N instanceof HTMLElement)) return P;
        const G = b === "row" ? N.clientWidth : N.clientHeight;
        return P + G;
      }, 0), T = ct(d, m, S), E = u.reduce(
        (P, N) => P + (N.defaultSize || 1),
        0
      ), C = E > 0 ? T / E : 0;
      if (C === 0) return;
      const L = Sr(v, C), g = u.sort(
        (P, N) => (P.order || 0) - (N.order || 0)
      ), j = g.findIndex(
        (P) => P.id === e.resize.activeBlockId
      ), V = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), F = (V == null ? void 0 : V.getAttribute("data-divider-position")) || "end";
      let H = null;
      if (F === "start" && j > 0 ? H = g[j - 1] : F === "end" && j < g.length - 1 && (H = g[j + 1]), H) {
        let P, N;
        P = L, N = -L;
        const G = 0.1, U = Math.max(
          G,
          e.resize.initialSize + P
        ), q = Math.max(
          G,
          (e.resize.initialAdjacentSize || 1) + N
        ), z = U - e.resize.initialSize, te = q - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + te) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: U
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: H.id, size: q }
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
      const s = e.blocks[t.payload.blockId];
      if (!s) return e;
      const l = s.collapseTo ?? 0, f = s.minSize ?? 0, y = Math.max(l, f);
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...s,
            // Preserve original size for expand
            originalDefaultSize: s.originalDefaultSize || s.defaultSize,
            defaultSize: y,
            size: y
          }
        }
      };
    case "EXPAND_BLOCK":
      const b = e.blocks[t.payload.blockId];
      if (!b) return e;
      const v = b.originalDefaultSize || b.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...b,
            defaultSize: v,
            size: v
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
      const w = Object.fromEntries(
        Object.entries(e.blocks).map(([u, a]) => [
          u,
          {
            ...a,
            size: a.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: w,
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
  const { activeMode: f, viewport: y, setMode: b } = at(r), [v, w] = Rt(
    Er,
    Tr(t, y, f)
  );
  D(() => {
    w({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: y }
    });
  }, [y]), D(() => {
    const h = v.activeMode;
    f !== h && (w({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), s == null || s(f, h));
  }, [f, v.activeMode, s]);
  const { saveState: u, clearState: a } = wr({
    gridId: i || o,
    enabled: n,
    state: v,
    onStateLoad: (h) => {
      w({ type: "LOAD_STATE", payload: { state: h } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: m, endResize: p } = zr(v, w), S = ee(
    () => ({
      gridId: o,
      state: {
        ...v,
        activeMode: f,
        viewport: y
      },
      dispatch: w,
      // Grid operations
      resizeBlock: (h, T) => {
        w({
          type: "RESIZE_BLOCK",
          payload: { blockId: h, size: T }
        });
      },
      collapseBlock: (h) => {
        w({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: h }
        });
      },
      expandBlock: (h) => {
        w({
          type: "EXPAND_BLOCK",
          payload: { blockId: h }
        });
      },
      switchMode: (h) => {
        b(h);
      },
      // Block visibility operations
      hideBlock: (h) => {
        w({
          type: "HIDE_BLOCK",
          payload: { blockId: h }
        });
      },
      showBlock: (h) => {
        w({
          type: "SHOW_BLOCK",
          payload: { blockId: h }
        });
      },
      toggleBlockVisibility: (h) => {
        w({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId: h }
        });
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: m,
      endResize: p,
      // Persistence
      persistState: () => u(v),
      resetState: () => {
        w({ type: "RESET_STATE" }), a();
      }
    }),
    [o, v, f, y, u, a, b, d, m, p]
  );
  return D(() => {
    if (l) {
      const h = Object.values(v.blocks);
      l(h);
    }
  }, [v.blocks, l]), /* @__PURE__ */ R.jsx(dt.Provider, { value: S, children: e });
}
function ne() {
  const e = Ie(dt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Be() {
  const { state: e } = ne();
  return e;
}
function Cr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: i,
    switchMode: s,
    persistState: l,
    resetState: f
  } = ne();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: i,
    switchMode: s,
    persistState: l,
    resetState: f
  };
}
function ut() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = ne();
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
  const { state: t } = ne();
  return t.hiddenBlocks.has(e);
}
function Fr() {
  const { hideBlock: e } = ne();
  return e;
}
function qr() {
  const { showBlock: e } = ne();
  return e;
}
function Yr() {
  const { toggleBlockVisibility: e } = ne();
  return e;
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
    activeBlockId: f,
    activeDividerId: y
  } = ut(), b = _(() => {
    if (!t.current) return 0;
    const m = t.current.getBoundingClientRect();
    return o === "column" ? m.width : m.height;
  }, [o, t]), v = _(() => {
    const m = b();
    if (m === 0) return 0;
    const p = e.filter((E) => E.sizeUnit === "px").reduce((E, C) => E + (C.defaultSize || 0), 0), S = 0, h = e.filter((E) => E.sizeUnit === "fr").reduce((E, C) => E + (C.defaultSize || 1), 0), T = ct(m, p, S);
    return h > 0 ? T / h : 0;
  }, [e, b]), w = _((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), u = _((m) => {
    const p = e.find((S) => S.id === m);
    p && p.collapseTo !== void 0 && (r == null || r(m, p.collapseTo));
  }, [e, r]), a = _((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), d = _((m) => {
    const p = e.find((S) => S.id === m);
    return !p || !p.collapseAt ? !1 : (p.defaultSize || 0) <= p.collapseAt;
  }, [e]);
  return D(() => {
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
    activeBlockId: f,
    activeDividerId: y,
    // Actions
    startResize: n,
    resetBlock: w,
    collapseBlock: u,
    expandBlock: a,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: b,
    calculatePixelsPerFr: v
  };
}
function Ir({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: i,
  containerRef: s,
  stepSize: l = 10,
  largeStepSize: f = 50
}) {
  const y = _(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), b = _((d) => {
    if (!d) return null;
    const m = d.dataset.blockId;
    return t.find((p) => p.id === m) || null;
  }, [t]), v = _((d, m) => {
    if (!(s != null && s.current)) return null;
    const p = Array.from(
      s.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), S = d.getBoundingClientRect(), h = {
      x: S.left + S.width / 2,
      y: S.top + S.height / 2
    }, T = p.filter((E) => {
      if (E === d) return !1;
      const C = E.getBoundingClientRect(), L = {
        x: C.left + C.width / 2,
        y: C.top + C.height / 2
      };
      switch (m) {
        case "up":
          return L.y < h.y;
        case "down":
          return L.y > h.y;
        case "left":
          return L.x < h.x;
        case "right":
          return L.x > h.x;
        default:
          return !1;
      }
    });
    return T.length === 0 ? null : (T.sort((E, C) => {
      const L = E.getBoundingClientRect(), g = C.getBoundingClientRect(), j = {
        x: L.left + L.width / 2,
        y: L.top + L.height / 2
      }, V = {
        x: g.left + g.width / 2,
        y: g.top + g.height / 2
      }, F = Math.sqrt(
        Math.pow(j.x - h.x, 2) + Math.pow(j.y - h.y, 2)
      ), H = Math.sqrt(
        Math.pow(V.x - h.x, 2) + Math.pow(V.y - h.y, 2)
      );
      return F - H;
    }), T[0]);
  }, [s]), w = _((d) => {
    if (!e) return;
    const m = y();
    if (!m) return;
    const p = b(m);
    if (!p) return;
    const S = d.ctrlKey || d.metaKey, h = d.shiftKey, T = h ? f : l;
    if (!S && !h)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const E = v(m, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const C = v(m, "down");
          C && (C.focus(), o == null || o(C.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const L = v(m, "left");
          L && (L.focus(), o == null || o(L.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const g = v(m, "right");
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
    y,
    b,
    v,
    r,
    o,
    n,
    i,
    l,
    f
  ]), u = _((d) => {
    if (!(s != null && s.current)) return;
    const m = s.current.querySelector(
      `[data-block-id="${d}"]`
    );
    m && (m.focus(), o == null || o(d));
  }, [s, o]), a = _(() => s != null && s.current ? Array.from(
    s.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [s]);
  return D(() => {
    if (e)
      return document.addEventListener("keydown", w), () => {
        document.removeEventListener("keydown", w);
      };
  }, [w, e]), {
    focusBlock: u,
    getFocusableBlocks: a,
    getFocusedBlock: y,
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
  const s = pe(null), l = Be(), { startResize: f, isDragging: y, activeDividerId: b } = ut(), [v, w] = J({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), u = l.blocks[e], a = r === "vertical", d = `${e}-${t}-divider`, m = y && b === d, p = _(() => {
    const h = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!h || !T) return;
    const E = h.getBoundingClientRect(), C = T.getBoundingClientRect(), L = u == null ? void 0 : u.parentId, g = L ? document.querySelector(`[data-block-id="${L}"]`) : h;
    if (!g) return;
    const j = g.getBoundingClientRect();
    if (a) {
      const V = t === "start" ? C.left - E.left : C.right - E.left;
      w({
        left: V - o / 2,
        // Center on edge
        top: j.top - E.top,
        // Position relative to parent
        width: o,
        height: j.height
        // Use parent height to constrain divider
      });
    } else {
      const V = t === "start" ? C.top - E.top : C.bottom - E.top;
      w({
        left: j.left - E.left,
        // Position relative to parent
        top: V - o / 2,
        // Center on edge
        width: j.width,
        // Use parent width to constrain divider
        height: o
      });
    }
  }, [e, t, a, o, u == null ? void 0 : u.parentId]);
  It(() => {
    const h = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!h || !T) return;
    p();
    const E = new ResizeObserver(() => {
      p();
    });
    E.observe(h), E.observe(T);
    const C = u == null ? void 0 : u.parentId, L = C ? document.querySelector(`[data-block-id="${C}"]`) : null;
    return L && E.observe(L), () => {
      E.disconnect();
    };
  }, [e, p, u == null ? void 0 : u.parentId]), D(() => {
    p();
  }, [l.blocks, p]);
  const S = _((h) => {
    h.preventDefault(), f(e, d, h);
  }, [e, d, f]);
  return u ? /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: s,
      className: le(
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
        left: `${v.left}px`,
        top: `${v.top}px`,
        width: `${v.width}px`,
        height: `${v.height}px`,
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
      "aria-valuenow": u == null ? void 0 : u.defaultSize,
      "aria-valuemin": u == null ? void 0 : u.minSize,
      "aria-valuemax": u == null ? void 0 : u.maxSize,
      tabIndex: 0,
      onMouseDown: S,
      onTouchStart: S
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
    const n = Object.values(e).filter((l) => l.parentId === o.id).sort((l, f) => (l.order || 0) - (f.order || 0));
    if (n.length === 0) return;
    const s = o.direction === "row" ? "vertical" : "horizontal";
    n.forEach((l, f) => {
      if (f === 0) return;
      const y = n[f - 1], b = y.resizable !== !1, v = l.resizable !== !1;
      if (!b && !v)
        return;
      const { targetId: w, position: u } = Lr(y, l), a = e[w];
      a && a.resizable === !1 || t.push({
        id: `divider-${y.id}-${l.id}`,
        targetBlockId: w,
        position: u,
        direction: s
      });
    });
  }), t;
}
const Mr = () => {
  const e = Be(), t = ee(() => jr(e.blocks), [e.blocks]);
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
  const n = pe(null), {
    state: i,
    resizeBlock: s,
    collapseBlock: l,
    expandBlock: f,
    switchMode: y,
    persistState: b,
    resetState: v
  } = ne(), w = i.resize.isDragging;
  Lt(
    o,
    () => ({
      resizeBlock: s,
      collapseBlock: l,
      expandBlock: f,
      switchMode: y,
      persistState: b,
      resetState: v,
      getState: () => i
    }),
    [
      s,
      l,
      f,
      y,
      b,
      v,
      i
    ]
  );
  const u = ee(() => Object.values(i.blocks).sort((h, T) => (h.order || 0) - (T.order || 0)), [i.blocks]), a = ee(() => u.find((S) => !S.parentId), [u]);
  Rr({
    blocks: u,
    containerRef: n,
    onSizeChange: s,
    direction: (a == null ? void 0 : a.direction) || "row"
  }), Ir({
    enabled: !0,
    blocks: u,
    containerRef: n,
    onResizeBlock: (S, h) => {
      const T = i.blocks[S];
      if (T) {
        const E = T.defaultSize || 0, C = Math.max(0, E + h);
        s(S, C);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: f
  });
  const { gridStyles: d, cssVariables: m, modeStyles: p } = ee(() => {
    if (!a)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const S = u.reduce((g, j) => {
      if (j.id === a.id) return g;
      const V = j.parentId || a.id;
      return g[V] || (g[V] = []), g[V].push(j), g;
    }, {}), h = u.filter((g) => g.defaultSize !== void 0).map((g) => {
      const j = g.sizeUnit === "px" ? `${g.defaultSize}px` : `${g.defaultSize}fr`;
      return `--${a.id}-${g.id}-size: ${j};`;
    }).join(`
  `), T = () => "", E = (g, j = /* @__PURE__ */ new Set()) => {
      if (j.has(g))
        return console.warn(`Circular reference detected for parent: ${g}`), "";
      const V = new Set(j);
      V.add(g);
      const F = S[g] || [];
      if (F.length === 0) return "";
      const H = [...F].sort(
        (c, A) => (c.order || 0) - (A.order || 0)
      ), P = u.find((c) => c.id === g) || a, N = (P == null ? void 0 : P.direction) || "row", G = H.map((c) => ({
        id: c.id,
        sizeUnit: c.sizeUnit || "fr",
        size: c.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), U = kr(G, a.id, i.hiddenBlocks), q = N === "column" ? "grid-template-rows" : "grid-template-columns";
      let te = `
${`[data-block-id="${g}"]`} {
  display: grid;
  ${q}: ${U};
  ${N === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const c of H)
        c.type === "group" && (te += E(c.id, V));
      return te;
    }, C = E(a.id), L = T();
    return {
      cssVariables: `:root {
  ${h}
}`,
      gridStyles: C,
      modeStyles: L
    };
  }, [u, a, i.hiddenBlocks]);
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
        className: le(
          "group relative overflow-hidden",
          w && "select-none cursor-grabbing pretty-poly-grid--dragging",
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
    dividers: f = "manual",
    dividerConfig: y,
    "aria-label": b
  }, v) => {
    const w = t.find((a) => !a.parentId), u = (w == null ? void 0 : w.id) || "root";
    return /* @__PURE__ */ R.jsx(
      Ar,
      {
        blocks: t,
        modes: r,
        gridId: u,
        persist: o,
        persistKey: n,
        onLayoutChange: i,
        onModeChange: s,
        children: /* @__PURE__ */ R.jsx(
          mt,
          {
            ref: v,
            className: l,
            dividers: f,
            dividerConfig: y,
            "aria-label": b,
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
pt.displayName = "Block.Content";
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
const ht = Z(
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
ht.displayName = "Block.Footer";
const yt = Z(
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
yt.displayName = "Block.Toolbar";
const bt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": i,
    allowOverflow: s = !0
  }, l) => {
    const [f, y] = J(null), b = (u, a) => {
      a.preventDefault(), u.disabled || r(u.id);
    }, v = (u, a) => {
      a.preventDefault(), a.stopPropagation(), o && u.closable && o(u.id);
    }, w = (u, a) => {
      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), u.disabled || r(u.id));
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
          s ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": i || "Block tabs",
        children: /* @__PURE__ */ R.jsx("div", { className: "flex items-center min-w-0", children: e.map((u) => {
          const a = u.id === t, d = f === u.id, m = u.icon;
          return /* @__PURE__ */ R.jsxs(
            "div",
            {
              className: ae(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                a ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                u.disabled && "opacity-50 cursor-not-allowed",
                !s && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": a,
              "aria-disabled": u.disabled,
              tabIndex: u.disabled ? -1 : 0,
              onClick: (p) => b(u, p),
              onKeyDown: (p) => w(u, p),
              onMouseEnter: () => y(u.id),
              onMouseLeave: () => y(null),
              "data-tab-id": u.id,
              children: [
                m && /* @__PURE__ */ R.jsx(m, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ R.jsx("span", { className: "truncate min-w-0", children: u.label }),
                u.closable && o && /* @__PURE__ */ R.jsx(
                  "button",
                  {
                    className: ae(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || a ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (p) => v(u, p),
                    "aria-label": `Close ${u.label} tab`,
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
            u.id
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
    className: s,
    "aria-label": l
  }, f) => {
    const [y, b] = J(!1), v = () => {
      t && !o && b(!0);
    }, w = () => {
      b(!1);
    }, u = () => {
      !o && i && i();
    }, a = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), u());
    };
    return /* @__PURE__ */ R.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          ref: f,
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
            s
          ),
          disabled: o,
          onClick: u,
          onKeyDown: a,
          onMouseEnter: v,
          onMouseLeave: w,
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
      y && t && /* @__PURE__ */ R.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ R.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
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
const xt = Z(
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
  }, f) => {
    var S;
    const { gridId: y } = ne(), b = Be(), { collapseBlock: v, expandBlock: w } = Cr(), { supportsFeature: u } = at(), a = b == null ? void 0 : b.blocks[e], d = ((S = b == null ? void 0 : b.hiddenBlocks) == null ? void 0 : S.has(e)) || !1, m = ee(() => a != null && a.collapsible && a.collapseAt ? (a.size ?? a.defaultSize ?? 0) <= a.collapseAt : !1, [a]), p = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? w(e) : v(e));
    };
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: f,
        className: le(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          m && "opacity-70",
          n
        ),
        style: {
          // Hide block with display: none - removes from grid flow
          // The grid template will be dynamically updated to exclude this block
          display: d ? "none" : void 0
        },
        "data-grid-id": y,
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
        "data-block-hidden": d,
        "aria-label": l,
        "aria-hidden": d,
        role: t === "group" ? "group" : void 0,
        tabIndex: u("resizing") && !d ? 0 : void 0,
        onDoubleClick: u("collapse") ? p : void 0,
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
  Toolbar: yt,
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
  const i = t.minSize ?? 0, s = t.maxSize ?? 1 / 0;
  if (e < i && (o.push(`Size ${e} is below minimum ${i}`), n = i), e > s && (o.push(`Size ${e} exceeds maximum ${s}`), n = s), n = ge(n, i, s), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, y = t.defaultSize ?? n;
    n = vr(
      n,
      r,
      l,
      f,
      y
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
  let s = r, l = o;
  const f = fe(e.minSize ?? 0, e.sizeUnit, n), y = fe(e.maxSize ?? 1 / 0, e.sizeUnit, n), b = fe(t.minSize ?? 0, t.sizeUnit, n), v = fe(t.maxSize ?? 1 / 0, t.sizeUnit, n), w = fe(e.defaultSize ?? 0, e.sizeUnit, n), u = fe(t.defaultSize ?? 0, t.sizeUnit, n), a = w + r, d = u + o;
  let m = ge(a, f, y), p = ge(d, b, v);
  s = m - w, l = p - u;
  const S = s + l;
  if (Math.abs(S) > 1e-3) {
    const E = Math.abs(s) < Math.abs(r), C = Math.abs(l) < Math.abs(o);
    if (E && !C) {
      const L = u - s;
      p = ge(L, b, v), l = p - u;
    } else if (C && !E) {
      const L = w - l;
      m = ge(L, f, y), s = m - w;
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
  const r = [], o = e.filter((i) => i.sizeUnit === "px").reduce((i, s) => i + (t[s.id] ?? s.defaultSize ?? 0), 0), n = e.filter((i) => i.sizeUnit === "fr").reduce((i, s) => i + (t[s.id] ?? s.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((i) => i.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((i) => {
    const s = t[i.id] ?? i.defaultSize ?? 0, l = i.minSize ?? 0, f = i.maxSize ?? 1 / 0;
    l > f && r.push(`Block ${i.id}: minSize (${l}) > maxSize (${f})`), (s < l || s > f) && r.push(`Block ${i.id}: size ${s} violates constraints [${l}, ${f}]`);
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
const St = Re(null);
function Le() {
  const e = Ie(St);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function Qr(e) {
  const t = Le(), [r, o] = J(() => t.getView(e));
  return D(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function eo(e) {
  const t = Le(), [r, o] = J(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return D(() => {
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
  D(() => t.registerViews(e), [t, e]);
}
function oo(e) {
  const t = Le();
  D(() => t.registerView(e), [t, e]);
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
      const i = o.category || "", s = n.category || "";
      if (i !== s) return i.localeCompare(s);
      const l = o.title || o.id, f = n.title || n.id;
      return l.localeCompare(f);
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
function we() {
  const e = Ie(zt);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function no(e) {
  const t = we(), [r, o] = J(() => t.getCommand(e));
  return D(() => {
    const n = () => {
      o(t.getCommand(e));
    };
    return t.onDidChangeCommands(n);
  }, [t, e]), r;
}
function so(e) {
  const t = we(), [r, o] = J(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return D(() => {
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
  D(() => t.registerCommands(e), [t, e]);
}
function lo(e) {
  const t = we();
  D(() => t.registerCommand(e), [t, e]);
}
function co(e = !0) {
  const t = we();
  D(() => {
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
  return D(() => {
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
function ve() {
  const e = Ie(Et);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function fo(e) {
  const t = ve(), [r, o] = J(() => t.getBlockViewType(e));
  return D(() => {
    const n = (s) => {
      o(s[e]);
    };
    return t.onViewTypesChange(n);
  }, [t, e]), r;
}
function mo() {
  const e = ve(), [t, r] = J(() => e.getAllViewTypes());
  return D(() => e.onViewTypesChange(r), [e]), t;
}
function po() {
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
  return D(() => {
    const o = () => {
      r(e.getAllLayouts());
    };
    return e.onLayoutsChange(o);
  }, [e]), t;
}
function ho() {
  const e = ve();
  return _(
    (t, r, o, n) => {
      const i = e.createLayoutFromCurrentState(t, r, o, n);
      e.saveLayout(i);
    },
    [e]
  );
}
function yo() {
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
  pt as BlockContent,
  ht as BlockFooter,
  kt as BlockGroup,
  gt as BlockHeader,
  xt as BlockLayout,
  Ge as BlockSidebar,
  wt as BlockSidebarItem,
  vt as BlockSidebarSpacer,
  bt as BlockTabs,
  yt as BlockToolbar,
  Or as CommandService,
  uo as CommandServiceProvider,
  ft as Divider,
  Pr as Grid,
  Ar as GridProvider,
  Dr as LayoutService,
  bo as LayoutServiceProvider,
  _r as ViewRegistry,
  to as ViewRegistryProvider,
  vr as applyCollapseLogic,
  xr as calculateConstrainedSize,
  ge as clamp,
  le as cn,
  br as createCustomAdapter,
  pr as defaultModes,
  Wr as findAdjacentBlock,
  Ur as frToPx,
  kr as generateGridTemplate,
  $r as getAllGridStates,
  ct as getFlexSpacePx,
  Pe as getStorageAdapter,
  Gr as isCollapsed,
  Kr as isZeroSum,
  hr as loadGridState,
  he as localStorageAdapter,
  Ce as memoryStorageAdapter,
  Br as pxPerFr,
  Sr as pxToFr,
  yr as removeGridState,
  gr as saveGridState,
  lt as sessionStorageAdapter,
  yo as useApplyLayout,
  fo as useBlockViewType,
  no as useCommand,
  co as useCommandKeyboardShortcuts,
  we as useCommandService,
  so as useCommands,
  io as useExecuteCommand,
  Cr as useGridActions,
  ne as useGridContext,
  Ir as useGridKeyboard,
  at as useGridMode,
  wr as useGridPersistence,
  Rr as useGridResize,
  Be as useGridState,
  Fr as useHideBlock,
  Hr as useIsBlockHidden,
  ve as useLayoutService,
  go as useLayouts,
  lo as useRegisterCommand,
  ao as useRegisterCommands,
  oo as useRegisterView,
  ro as useRegisterViews,
  ho as useSaveLayout,
  po as useSetBlockViewType,
  qr as useShowBlock,
  Yr as useToggleBlockVisibility,
  Qr as useViewDescriptor,
  Le as useViewRegistry,
  mo as useViewTypes,
  eo as useViews,
  Jr as validateBlockSize,
  Xr as validateLayoutIntegrity,
  Zr as validateTwoWayResize
};
