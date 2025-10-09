import ht, { useState as xe, useCallback as D, useMemo as X, useEffect as Z, useRef as ue, createContext as yt, useContext as vt, useReducer as xt, useLayoutEffect as wt, forwardRef as K, useImperativeHandle as kt } from "react";
var Re = { exports: {} }, he = {};
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
function St() {
  if ($e) return he;
  $e = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, a, s) {
    var n = null;
    if (s !== void 0 && (n = "" + s), a.key !== void 0 && (n = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: o,
      key: n,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return he.Fragment = t, he.jsx = r, he.jsxs = r, he;
}
var ye = {};
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
function zt() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
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
        case I:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case i:
            return "Portal";
          case g:
            return (c.displayName || "Context") + ".Provider";
          case S:
            return (c._context.displayName || "Context") + ".Consumer";
          case T:
            var A = c.render;
            return c = c.displayName, c || (c = A.displayName || A.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case M:
            return A = c.displayName || null, A !== null ? A : e(c.type) || "Memo";
          case b:
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
        var O = A.error, _ = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return O.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(c);
      }
    }
    function o(c) {
      if (c === d) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === b)
        return "<...>";
      try {
        var A = e(c);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var c = q.A;
      return c === null ? null : c.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function n(c) {
      if (F.call(c, "key")) {
        var A = Object.getOwnPropertyDescriptor(c, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, A) {
      function O() {
        U || (U = !0, console.error(
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
      return W[c] || (W[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function h(c, A, O, _, L, Y, ae, G) {
      return O = Y.ref, c = {
        $$typeof: u,
        type: c,
        key: A,
        props: Y,
        _owner: L
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
        value: ae
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function x(c, A, O, _, L, Y, ae, G) {
      var V = A.children;
      if (V !== void 0)
        if (_)
          if (N(V)) {
            for (_ = 0; _ < V.length; _++)
              w(V[_]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(V);
      if (F.call(A, "key")) {
        V = e(c);
        var J = Object.keys(A).filter(function(ge) {
          return ge !== "key";
        });
        _ = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", Q[V + _] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          V,
          J,
          V
        ), Q[V + _] = !0);
      }
      if (V = null, O !== void 0 && (r(O), V = "" + O), n(A) && (r(A.key), V = "" + A.key), "key" in A) {
        O = {};
        for (var re in A)
          re !== "key" && (O[re] = A[re]);
      } else O = A;
      return V && l(
        O,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), h(
        c,
        V,
        Y,
        L,
        a(),
        O,
        ae,
        G
      );
    }
    function w(c) {
      typeof c == "object" && c !== null && c.$$typeof === u && c._store && (c._store.validated = 1);
    }
    var k = ht, u = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), g = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), q = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, N = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var U, W = {}, H = k.react_stack_bottom_frame.bind(
      k,
      s
    )(), z = C(o(s)), Q = {};
    ye.Fragment = d, ye.jsx = function(c, A, O, _, L) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return x(
        c,
        A,
        O,
        !1,
        _,
        L,
        Y ? Error("react-stack-top-frame") : H,
        Y ? C(o(c)) : z
      );
    }, ye.jsxs = function(c, A, O, _, L) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return x(
        c,
        A,
        O,
        !0,
        _,
        L,
        Y ? Error("react-stack-top-frame") : H,
        Y ? C(o(c)) : z
      );
    };
  }()), ye;
}
process.env.NODE_ENV === "production" ? Re.exports = St() : Re.exports = zt();
var j = Re.exports;
function Be(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Be(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ne() {
  for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Be(e)) && (o && (o += " "), o += t);
  return o;
}
const _e = "-", Et = (e) => {
  const t = At(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (n) => {
      const l = n.split(_e);
      return l[0] === "" && l.length !== 1 && l.shift(), Fe(l, t) || Tt(n);
    },
    getConflictingClassGroupIds: (n, l) => {
      const f = r[n] || [];
      return l && o[n] ? [...f, ...o[n]] : f;
    }
  };
}, Fe = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), a = o ? Fe(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const s = e.join(_e);
  return (n = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : n.classGroupId;
}, Ge = /^\[(.+)\]$/, Tt = (e) => {
  if (Ge.test(e)) {
    const t = Ge.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, At = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const a in r)
    je(r[a], o, a, t);
  return o;
}, je = (e, t, r, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? t : Ue(t, a);
      s.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (It(a)) {
        je(a(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([s, n]) => {
      je(n, Ue(t, s), r, o);
    });
  });
}, Ue = (e, t) => {
  let r = e;
  return t.split(_e).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, It = (e) => e.isThemeGetter, Rt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const a = (s, n) => {
    r.set(s, n), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let n = r.get(s);
      if (n !== void 0)
        return n;
      if ((n = o.get(s)) !== void 0)
        return a(s, n), n;
    },
    set(s, n) {
      r.has(s) ? r.set(s, n) : a(s, n);
    }
  };
}, Me = "!", Pe = ":", jt = Pe.length, Mt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (a) => {
    const s = [];
    let n = 0, l = 0, f = 0, h;
    for (let i = 0; i < a.length; i++) {
      let d = a[i];
      if (n === 0 && l === 0) {
        if (d === Pe) {
          s.push(a.slice(f, i)), f = i + jt;
          continue;
        }
        if (d === "/") {
          h = i;
          continue;
        }
      }
      d === "[" ? n++ : d === "]" ? n-- : d === "(" ? l++ : d === ")" && l--;
    }
    const x = s.length === 0 ? a : a.substring(f), w = Pt(x), k = w !== x, u = h && h > f ? h - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: k,
      baseClassName: w,
      maybePostfixModifierPosition: u
    };
  };
  if (t) {
    const a = t + Pe, s = o;
    o = (n) => n.startsWith(a) ? s(n.substring(a.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: n,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const a = o;
    o = (s) => r({
      className: s,
      parseClassName: a
    });
  }
  return o;
}, Pt = (e) => e.endsWith(Me) ? e.substring(0, e.length - 1) : e.startsWith(Me) ? e.substring(1) : e, _t = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const a = [];
    let s = [];
    return o.forEach((n) => {
      n[0] === "[" || t[n] ? (a.push(...s.sort(), n), s = []) : s.push(n);
    }), a.push(...s.sort()), a;
  };
}, Nt = (e) => ({
  cache: Rt(e.cacheSize),
  parseClassName: Mt(e),
  sortModifiers: _t(e),
  ...Et(e)
}), Ot = /\s+/, Dt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: a,
    sortModifiers: s
  } = t, n = [], l = e.trim().split(Ot);
  let f = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const x = l[h], {
      isExternal: w,
      modifiers: k,
      hasImportantModifier: u,
      baseClassName: i,
      maybePostfixModifierPosition: d
    } = r(x);
    if (w) {
      f = x + (f.length > 0 ? " " + f : f);
      continue;
    }
    let m = !!d, p = o(m ? i.substring(0, d) : i);
    if (!p) {
      if (!m) {
        f = x + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (p = o(i), !p) {
        f = x + (f.length > 0 ? " " + f : f);
        continue;
      }
      m = !1;
    }
    const S = s(k).join(":"), g = u ? S + Me : S, T = g + p;
    if (n.includes(T))
      continue;
    n.push(T);
    const E = a(p, m);
    for (let I = 0; I < E.length; ++I) {
      const M = E[I];
      n.push(g + M);
    }
    f = x + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function Ct() {
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
function $t(e, ...t) {
  let r, o, a, s = n;
  function n(f) {
    const h = t.reduce((x, w) => w(x), e());
    return r = Nt(h), o = r.cache.get, a = r.cache.set, s = l, l(f);
  }
  function l(f) {
    const h = o(f);
    if (h)
      return h;
    const x = Dt(f, r);
    return a(f, x), x;
  }
  return function() {
    return s(Ct.apply(null, arguments));
  };
}
const B = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, He = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ye = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Lt = /^\d+\/\d+$/, Gt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ut = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Vt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Bt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, le = (e) => Lt.test(e), R = (e) => !!e && !Number.isNaN(Number(e)), oe = (e) => !!e && Number.isInteger(Number(e)), Te = (e) => e.endsWith("%") && R(e.slice(0, -1)), te = (e) => Gt.test(e), Ft = () => !0, qt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ut.test(e) && !Wt.test(e)
), Ke = () => !1, Ht = (e) => Vt.test(e), Yt = (e) => Bt.test(e), Kt = (e) => !y(e) && !v(e), Zt = (e) => me(e, Xe, Ke), y = (e) => He.test(e), se = (e) => me(e, Qe, qt), Ae = (e) => me(e, tr, R), We = (e) => me(e, Ze, Ke), Jt = (e) => me(e, Je, Yt), Se = (e) => me(e, et, Ht), v = (e) => Ye.test(e), ve = (e) => be(e, Qe), Xt = (e) => be(e, rr), Ve = (e) => be(e, Ze), Qt = (e) => be(e, Xe), er = (e) => be(e, Je), ze = (e) => be(e, et, !0), me = (e, t, r) => {
  const o = He.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = Ye.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, Ze = (e) => e === "position" || e === "percentage", Je = (e) => e === "image" || e === "url", Xe = (e) => e === "length" || e === "size" || e === "bg-size", Qe = (e) => e === "length", tr = (e) => e === "number", rr = (e) => e === "family-name", et = (e) => e === "shadow", or = () => {
  const e = B("color"), t = B("font"), r = B("text"), o = B("font-weight"), a = B("tracking"), s = B("leading"), n = B("breakpoint"), l = B("container"), f = B("spacing"), h = B("radius"), x = B("shadow"), w = B("inset-shadow"), k = B("text-shadow"), u = B("drop-shadow"), i = B("blur"), d = B("perspective"), m = B("aspect"), p = B("ease"), S = B("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
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
  ], E = () => [...T(), v, y], I = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], b = () => [v, y, f], P = () => [le, "full", "auto", ...b()], $ = () => [oe, "none", "subgrid", v, y], q = () => ["auto", {
    span: ["full", oe, v, y]
  }, oe, v, y], F = () => [oe, "auto", v, y], N = () => ["auto", "min", "max", "fr", v, y], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...b()], H = () => [le, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], z = () => [e, v, y], Q = () => [...T(), Ve, We, {
    position: [v, y]
  }], c = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", Qt, Zt, {
    size: [v, y]
  }], O = () => [Te, ve, se], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    v,
    y
  ], L = () => ["", R, ve, se], Y = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => [R, Te, Ve, We], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    i,
    v,
    y
  ], J = () => ["none", R, v, y], re = () => ["none", R, v, y], ge = () => [R, v, y], ke = () => [le, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [te],
      breakpoint: [te],
      color: [Ft],
      container: [te],
      "drop-shadow": [te],
      ease: ["in", "out", "in-out"],
      font: [Kt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [te],
      shadow: [te],
      spacing: ["px", R],
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
        aspect: ["auto", "square", le, y, v, m]
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
        columns: [R, y, v, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": g()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": g()
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
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
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
        z: [oe, "auto", v, y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [le, "full", "auto", l, ...b()]
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
        flex: [R, le, "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", R, v, y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", R, v, y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [oe, "first", "last", "none", v, y]
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
        "auto-cols": N()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": N()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...C(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...C()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": C()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
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
        "space-x": b()
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
        "space-y": b()
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
            screen: [n]
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
        text: ["base", r, ve, se]
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
        font: [Xt, y, t]
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
        tracking: [a, v, y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [R, "none", v, Ae]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...b()
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
        decoration: [R, "from-font", "auto", v, se]
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
        "underline-offset": [R, "auto", v, y]
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
        indent: b()
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
        bg: Q()
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
          }, oe, v, y],
          radial: ["", v, y],
          conic: [oe, v, y]
        }, er, Jt]
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
        rounded: _()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": _()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": _()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": _()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": _()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": _()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": _()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": _()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": _()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": _()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": _()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": _()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": _()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": _()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": _()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
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
        "divide-y": L()
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
        "outline-offset": [R, v, y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", R, ve, se]
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
          x,
          ze,
          Se
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
        "inset-shadow": ["none", w, ze, Se]
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
        ring: L()
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
        "ring-offset": [R, se]
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
        "inset-ring": L()
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
        "text-shadow": ["none", k, ze, Se]
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
        opacity: [R, v, y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ae(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        "mask-linear": [R]
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
        "mask-radial": [v, y]
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
        "mask-conic": [R]
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
        mask: Q()
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
        brightness: [R, v, y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [R, v, y]
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
          ze,
          Se
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
        grayscale: ["", R, v, y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [R, v, y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", R, v, y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [R, v, y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", R, v, y]
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
        "backdrop-brightness": [R, v, y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [R, v, y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", R, v, y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [R, v, y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", R, v, y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [R, v, y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [R, v, y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", R, v, y]
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
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
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
        duration: [R, "initial", v, y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", p, v, y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [R, v, y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, v, y]
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
        perspective: [d, v, y]
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
        skew: ge()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ge()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ge()
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        fill: ["none", ...z()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [R, ve, se, Ae]
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
}, nr = /* @__PURE__ */ $t(or);
function ie(...e) {
  return nr(ne(e));
}
const ir = {
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
function tt(e = ir) {
  const [t, r] = xe(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, a] = xe(null), s = D(() => {
    if (typeof window > "u") return;
    const i = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(i);
  }, []), n = X(() => {
    var d;
    if (o && e[o])
      return o;
    const i = Object.entries(e).filter(([m, p]) => {
      if (p.matcher)
        return p.matcher(t);
      const S = !p.minWidth || t.width >= p.minWidth, g = !p.maxWidth || t.width <= p.maxWidth;
      return S && g;
    });
    return i.sort(([, m], [, p]) => {
      const S = (m.minWidth ? 1 : 0) + (m.maxWidth ? 1 : 0);
      return (p.minWidth ? 1 : 0) + (p.maxWidth ? 1 : 0) - S;
    }), ((d = i[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = X(() => e[n], [e, n]), f = X(() => (l == null ? void 0 : l.type) || "grid", [l]), h = D((i) => {
    if (i && !e[i]) {
      console.warn(`Mode "${i}" not found in configuration`);
      return;
    }
    a(i);
  }, [e]), x = D((i) => n === i, [n]), w = X(() => Object.keys(e), [e]), k = D((i) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(i);
      case "tabs":
        return i === "tabs";
      case "dock":
        return i === "dock";
      default:
        return !1;
    }
  }, [f]), u = X(() => {
    const i = Object.entries(e).map(([S, g]) => ({ name: S, ...g })).sort((S, g) => (S.breakpoint || 0) - (g.breakpoint || 0)), d = i.findIndex((S) => S.name === n), m = i[d + 1], p = i[d - 1];
    return {
      current: n,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: m == null ? void 0 : m.name,
      nextBreakpoint: m == null ? void 0 : m.breakpoint,
      prevMode: p == null ? void 0 : p.name,
      prevBreakpoint: p == null ? void 0 : p.breakpoint,
      isSmallest: d === 0,
      isLargest: d === i.length - 1
    };
  }, [e, n, l]);
  return Z(() => {
    if (typeof window > "u") return;
    const i = () => s(), d = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", i), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", i), window.removeEventListener("orientationchange", d);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: n,
    currentModeConfig: l,
    currentLayoutType: f,
    // Mode management
    setMode: h,
    isMode: x,
    availableModes: w,
    // Features and capabilities
    supportsFeature: k,
    breakpointInfo: u,
    // Utilities
    isForced: !!o,
    updateViewport: s
  };
}
const ee = "pretty-poly-grid-", pe = {
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
        r && r.startsWith(ee) && e.push(r);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, rt = {
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
        r && r.startsWith(ee) && e.push(r);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, de = /* @__PURE__ */ new Map(), Ee = {
  save: (e, t) => {
    de.set(e, t);
  },
  load: (e) => de.get(e) || null,
  remove: (e) => {
    de.delete(e);
  },
  clear: () => {
    for (const e of de.keys())
      e.startsWith(ee) && de.delete(e);
  }
};
function Ie(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? pe : Ee;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? rt : Ee;
    case "memory":
    default:
      return Ee;
  }
}
function Ne(e) {
  return `${ee}${e}`;
}
function sr(e, t, r = pe) {
  const o = Ne(e), a = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, a);
}
function ar(e, t = pe) {
  const r = Ne(e);
  return t.load(r);
}
function lr(e, t = pe) {
  const r = Ne(e);
  t.remove(r);
}
function Ar(e = pe) {
  const t = {};
  try {
    if (e === pe && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(ee)) {
          const a = o.substring(ee.length), s = e.load(o);
          s && (t[a] = s);
        }
      }
    else if (e === rt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(ee)) {
          const a = o.substring(ee.length), s = e.load(o);
          s && (t[a] = s);
        }
      }
    else if (e === Ee) {
      for (const r of de.keys())
        if (r.startsWith(ee)) {
          const o = r.substring(ee.length), a = e.load(r);
          a && (t[o] = a);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function cr(e) {
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
function dr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: a = !0,
  saveDelay: s = 500
}) {
  const n = ue(null), l = ue(), f = ue(""), h = ue(!1);
  Z(() => {
    if (!t) {
      n.current = null;
      return;
    }
    typeof t == "function" ? n.current = cr(t) : t === "localStorage" ? n.current = Ie("localStorage") : t === "sessionStorage" ? n.current = Ie("sessionStorage") : n.current = Ie("localStorage");
  }, [t]), Z(() => {
    if (!n.current || !t || typeof t == "function" || h.current)
      return;
    const i = ar(e, n.current);
    i && (o == null || o(i), h.current = !0);
  }, [e, t]);
  const x = D((i = r) => {
    if (!n.current || !t)
      return;
    const d = JSON.stringify(i);
    if (d !== f.current)
      try {
        sr(e, i, n.current), f.current = d;
      } catch (m) {
        console.warn("Failed to save grid state:", m);
      }
  }, [e, t, r]), w = D((i = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      x(i);
    }, s);
  }, [x, s, r]), k = D(() => {
    if (!(!n.current || !t || typeof t == "function"))
      try {
        lr(e, n.current), f.current = "";
      } catch (i) {
        console.warn("Failed to clear grid state:", i);
      }
  }, [e, t]), u = D((i = r) => {
    l.current && clearTimeout(l.current), x(i);
  }, [x, r]);
  return Z(() => {
    if (!(!a || !t))
      return w(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, a, t, w]), Z(() => {
    if (!t || typeof t == "function")
      return;
    const i = () => {
      u();
    };
    return window.addEventListener("beforeunload", i), () => {
      window.removeEventListener("beforeunload", i);
    };
  }, [u, t]), Z(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: u,
    debouncedSave: w,
    clearState: k,
    isEnabled: !!t
  };
}
function ot(e, t, r) {
  return Math.max(0, e - t - r);
}
function Ir(e, t) {
  return t > 0 ? e / t : 0;
}
function fe(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Rr(e, t) {
  return t > 0 && e <= t;
}
function ur(e, t, r, o, a) {
  if (r === 0)
    return e;
  const s = t <= r, n = o * 2.5;
  return s && e > n ? a : e < r && !s ? o : e;
}
function fr(e, t, r = 0, o = 1 / 0, a = !1) {
  const s = a ? -e : e, n = t + s;
  return fe(n, r, o);
}
function pr(e, t) {
  const r = [];
  return e.forEach((o) => {
    if (o.sizeUnit === "auto")
      r.push("auto");
    else if (o.sizeUnit === "px") {
      const a = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${a}, ${o.size}px)`);
    } else {
      const a = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${a}, ${o.size}fr)`);
    }
  }), r.join(" ");
}
function jr(e, t) {
  return e * t;
}
function mr(e, t) {
  return t > 0 ? e / t : 0;
}
function Mr(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Pr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function br(e, t) {
  const r = D((n) => "touches" in n ? {
    x: n.touches[0].clientX,
    y: n.touches[0].clientY
  } : {
    x: n.clientX,
    y: n.clientY
  }, []), o = D((n, l, f) => {
    const h = e.blocks[n];
    if (!h) return;
    const x = r(f), w = document.querySelector(`[data-divider-id="${l}"]`), k = (w == null ? void 0 : w.getAttribute("data-divider-position")) || "end", i = Object.values(e.blocks).filter(
      (g) => g.parentId === h.parentId
    ).sort(
      (g, T) => (g.order || 0) - (T.order || 0)
    ), d = i.findIndex((g) => g.id === n);
    let m = null;
    if (k === "start" && d > 0 ? m = i[d - 1] : k === "end" && d < i.length - 1 && (m = i[d + 1]), m && h.sizeUnit === "fr" && m.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${n}" when adjacent to px block "${m.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: n,
        dividerId: l,
        startPosition: x,
        initialSize: h.defaultSize || 0,
        initialAdjacentBlockId: m == null ? void 0 : m.id,
        initialAdjacentSize: m ? m.originalDefaultSize || m.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const p = h.parentId ? e.blocks[h.parentId] : null, S = (p == null ? void 0 : p.direction) || "row";
    document.body.style.cursor = S === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), a = D((n) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const f = r(n), h = l.parentId ? e.blocks[l.parentId] : null, x = (h == null ? void 0 : h.direction) || "row", w = x === "row" ? f.x - e.resize.startPosition.x : f.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const k = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), i = ((k == null ? void 0 : k.getAttribute("data-divider-position")) || "end") === "start", d = fr(
        w,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        i
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: d }
      });
    } else if (l.sizeUnit === "fr") {
      const k = Object.values(e.blocks).filter(
        (N) => N.parentId === l.parentId
      ), u = k.filter((N) => N.sizeUnit === "fr"), i = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = i ? x === "row" ? i.clientWidth : i.clientHeight : 1200, m = k.filter((N) => N.sizeUnit === "px").reduce((N, C) => {
        const U = document.querySelector(`[data-block-id="${C.id}"]`);
        if (!U) return N;
        const W = x === "row" ? U.clientWidth : U.clientHeight;
        return N + W;
      }, 0), S = Array.from(
        (i == null ? void 0 : i.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((N, C) => {
        if (!(C instanceof HTMLElement)) return N;
        const U = x === "row" ? C.clientWidth : C.clientHeight;
        return N + U;
      }, 0), T = ot(d, m, S), E = u.reduce(
        (N, C) => N + (C.defaultSize || 1),
        0
      ), I = E > 0 ? T / E : 0;
      if (I === 0) return;
      const M = mr(w, I), b = u.sort(
        (N, C) => (N.order || 0) - (C.order || 0)
      ), P = b.findIndex(
        (N) => N.id === e.resize.activeBlockId
      ), $ = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), q = ($ == null ? void 0 : $.getAttribute("data-divider-position")) || "end";
      let F = null;
      if (q === "start" && P > 0 ? F = b[P - 1] : q === "end" && P < b.length - 1 && (F = b[P + 1]), F) {
        let N, C;
        N = M, C = -M;
        const U = 0.1, W = Math.max(
          U,
          e.resize.initialSize + N
        ), H = Math.max(
          U,
          (e.resize.initialAdjacentSize || 1) + C
        ), z = W - e.resize.initialSize, Q = H - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + Q) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: W
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: F.id, size: H }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), s = D(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: a,
    endResize: s
  };
}
function gr(e, t) {
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
      const a = o.collapseTo || 0;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            // Preserve original size for expand
            originalDefaultSize: o.originalDefaultSize || o.defaultSize,
            defaultSize: a,
            size: a
          }
        }
      };
    case "EXPAND_BLOCK":
      const s = e.blocks[t.payload.blockId];
      if (!s) return e;
      const n = s.originalDefaultSize || s.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...s,
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
        Object.entries(e.blocks).map(([f, h]) => [
          f,
          {
            ...h,
            size: h.defaultSize
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
function hr(e, t, r) {
  return {
    blocks: e.reduce((a, s) => (a[s.id] = {
      ...s,
      size: s.defaultSize,
      originalDefaultSize: s.defaultSize
      // Store original size for expand functionality
    }, a), {}),
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
function yr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: a = !1,
  persistKey: s,
  onModeChange: n,
  onLayoutChange: l
}) {
  const { activeMode: f, viewport: h, setMode: x } = tt(r), [w, k] = xt(
    gr,
    hr(t, h, f)
  );
  Z(() => {
    k({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), Z(() => {
    const g = w.activeMode;
    f !== g && (k({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), n == null || n(f, g));
  }, [f, w.activeMode, n]);
  const { saveState: u, clearState: i } = dr({
    gridId: s || o,
    enabled: a,
    state: w,
    onStateLoad: (g) => {
      k({ type: "LOAD_STATE", payload: { state: g } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: m, endResize: p } = br(w, k), S = X(
    () => ({
      gridId: o,
      state: {
        ...w,
        activeMode: f,
        viewport: h
      },
      dispatch: k,
      // Grid operations
      resizeBlock: (g, T) => {
        k({
          type: "RESIZE_BLOCK",
          payload: { blockId: g, size: T }
        });
      },
      collapseBlock: (g) => {
        k({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: g }
        });
      },
      expandBlock: (g) => {
        k({
          type: "EXPAND_BLOCK",
          payload: { blockId: g }
        });
      },
      switchMode: (g) => {
        x(g);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: m,
      endResize: p,
      // Persistence
      persistState: () => u(w),
      resetState: () => {
        k({ type: "RESET_STATE" }), i();
      }
    }),
    [o, w, f, h, u, i, x, d, m, p]
  );
  return Z(() => {
    if (l) {
      const g = Object.values(w.blocks);
      l(g);
    }
  }, [w.blocks, l]), /* @__PURE__ */ j.jsx(nt.Provider, { value: S, children: e });
}
function we() {
  const e = vt(nt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Oe() {
  const { state: e } = we();
  return e;
}
function vr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: a,
    resetState: s
  } = we();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: a,
    resetState: s
  };
}
function it() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = we();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function xr({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: a,
    updateResize: s,
    endResize: n,
    isDragging: l,
    activeBlockId: f,
    activeDividerId: h
  } = it(), x = D(() => {
    if (!t.current) return 0;
    const m = t.current.getBoundingClientRect();
    return o === "column" ? m.width : m.height;
  }, [o, t]), w = D(() => {
    const m = x();
    if (m === 0) return 0;
    const p = e.filter((E) => E.sizeUnit === "px").reduce((E, I) => E + (I.defaultSize || 0), 0), S = 0, g = e.filter((E) => E.sizeUnit === "fr").reduce((E, I) => E + (I.defaultSize || 1), 0), T = ot(m, p, S);
    return g > 0 ? T / g : 0;
  }, [e, x]), k = D((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), u = D((m) => {
    const p = e.find((S) => S.id === m);
    p && p.collapseTo !== void 0 && (r == null || r(m, p.collapseTo));
  }, [e, r]), i = D((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), d = D((m) => {
    const p = e.find((S) => S.id === m);
    return !p || !p.collapseAt ? !1 : (p.defaultSize || 0) <= p.collapseAt;
  }, [e]);
  return Z(() => {
    const m = (T) => {
      T.preventDefault(), s(T);
    }, p = (T) => {
      T.preventDefault(), s(T);
    }, S = () => {
      n();
    }, g = () => {
      n();
    };
    if (l)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", S), document.addEventListener("touchmove", p), document.addEventListener("touchend", g), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", p), document.removeEventListener("touchend", g);
      };
  }, [l, s, n]), {
    // State
    isDragging: l,
    activeBlockId: f,
    activeDividerId: h,
    // Actions
    startResize: a,
    resetBlock: k,
    collapseBlock: u,
    expandBlock: i,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: x,
    calculatePixelsPerFr: w
  };
}
function wr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: a,
  onExpandBlock: s,
  containerRef: n,
  stepSize: l = 10,
  largeStepSize: f = 50
}) {
  const h = D(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), x = D((d) => {
    if (!d) return null;
    const m = d.dataset.blockId;
    return t.find((p) => p.id === m) || null;
  }, [t]), w = D((d, m) => {
    if (!(n != null && n.current)) return null;
    const p = Array.from(
      n.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), S = d.getBoundingClientRect(), g = {
      x: S.left + S.width / 2,
      y: S.top + S.height / 2
    }, T = p.filter((E) => {
      if (E === d) return !1;
      const I = E.getBoundingClientRect(), M = {
        x: I.left + I.width / 2,
        y: I.top + I.height / 2
      };
      switch (m) {
        case "up":
          return M.y < g.y;
        case "down":
          return M.y > g.y;
        case "left":
          return M.x < g.x;
        case "right":
          return M.x > g.x;
        default:
          return !1;
      }
    });
    return T.length === 0 ? null : (T.sort((E, I) => {
      const M = E.getBoundingClientRect(), b = I.getBoundingClientRect(), P = {
        x: M.left + M.width / 2,
        y: M.top + M.height / 2
      }, $ = {
        x: b.left + b.width / 2,
        y: b.top + b.height / 2
      }, q = Math.sqrt(
        Math.pow(P.x - g.x, 2) + Math.pow(P.y - g.y, 2)
      ), F = Math.sqrt(
        Math.pow($.x - g.x, 2) + Math.pow($.y - g.y, 2)
      );
      return q - F;
    }), T[0]);
  }, [n]), k = D((d) => {
    if (!e) return;
    const m = h();
    if (!m) return;
    const p = x(m);
    if (!p) return;
    const S = d.ctrlKey || d.metaKey, g = d.shiftKey, T = g ? f : l;
    if (!S && !g)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const E = w(m, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const I = w(m, "down");
          I && (I.focus(), o == null || o(I.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const M = w(m, "left");
          M && (M.focus(), o == null || o(M.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const b = w(m, "right");
          b && (b.focus(), o == null || o(b.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), p.collapsible && (s == null || s(p.id));
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
          d.preventDefault(), a == null || a(p.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), s == null || s(p.id);
          break;
      }
  }, [
    e,
    h,
    x,
    w,
    r,
    o,
    a,
    s,
    l,
    f
  ]), u = D((d) => {
    if (!(n != null && n.current)) return;
    const m = n.current.querySelector(
      `[data-block-id="${d}"]`
    );
    m && (m.focus(), o == null || o(d));
  }, [n, o]), i = D(() => n != null && n.current ? Array.from(
    n.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [n]);
  return Z(() => {
    if (e)
      return document.addEventListener("keydown", k), () => {
        document.removeEventListener("keydown", k);
      };
  }, [k, e]), {
    focusBlock: u,
    getFocusableBlocks: i,
    getFocusedBlock: h,
    isEnabled: e
  };
}
const st = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: a,
  "aria-label": s
}) => {
  const n = ue(null), l = Oe(), { startResize: f, isDragging: h, activeDividerId: x } = it(), [w, k] = xe({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), u = l.blocks[e], i = r === "vertical", d = `${e}-${t}-divider`, m = h && x === d, p = D(() => {
    const g = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !T) return;
    const E = g.getBoundingClientRect(), I = T.getBoundingClientRect(), M = u == null ? void 0 : u.parentId, b = M ? document.querySelector(`[data-block-id="${M}"]`) : g;
    if (!b) return;
    const P = b.getBoundingClientRect();
    if (i) {
      const $ = t === "start" ? I.left - E.left : I.right - E.left;
      k({
        left: $ - o / 2,
        // Center on edge
        top: P.top - E.top,
        // Position relative to parent
        width: o,
        height: P.height
        // Use parent height to constrain divider
      });
    } else {
      const $ = t === "start" ? I.top - E.top : I.bottom - E.top;
      k({
        left: P.left - E.left,
        // Position relative to parent
        top: $ - o / 2,
        // Center on edge
        width: P.width,
        // Use parent width to constrain divider
        height: o
      });
    }
  }, [e, t, i, o, u == null ? void 0 : u.parentId]);
  wt(() => {
    const g = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !T) return;
    p();
    const E = new ResizeObserver(() => {
      p();
    });
    E.observe(g), E.observe(T);
    const I = u == null ? void 0 : u.parentId, M = I ? document.querySelector(`[data-block-id="${I}"]`) : null;
    return M && E.observe(M), () => {
      E.disconnect();
    };
  }, [e, p, u == null ? void 0 : u.parentId]), Z(() => {
    p();
  }, [l.blocks, p]);
  const S = D((g) => {
    g.preventDefault(), f(e, d, g);
  }, [e, d, f]);
  return u ? /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: n,
      className: ie(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        m && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        i ? "cursor-col-resize" : "cursor-row-resize",
        a
      ),
      style: {
        left: `${w.left}px`,
        top: `${w.top}px`,
        width: `${w.width}px`,
        height: `${w.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": d,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": r,
      role: "separator",
      "aria-label": s || `Resize ${e}`,
      "aria-valuenow": u == null ? void 0 : u.defaultSize,
      "aria-valuemin": u == null ? void 0 : u.minSize,
      "aria-valuemax": u == null ? void 0 : u.maxSize,
      tabIndex: 0,
      onMouseDown: S,
      onTouchStart: S
    }
  ) : null;
};
st.displayName = "Divider";
function kr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Sr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const a = Object.values(e).filter((l) => l.parentId === o.id).sort((l, f) => (l.order || 0) - (f.order || 0));
    if (a.length === 0) return;
    const n = o.direction === "row" ? "vertical" : "horizontal";
    a.forEach((l, f) => {
      if (f === 0) return;
      const h = a[f - 1], { targetId: x, position: w } = kr(h, l);
      t.push({
        id: `divider-${h.id}-${l.id}`,
        targetBlockId: x,
        position: w,
        direction: n
      });
    });
  }), t;
}
const zr = () => {
  const e = Oe(), t = X(() => Sr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ j.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ j.jsx(
        st,
        {
          targetId: r.targetBlockId,
          position: r.position,
          direction: r.direction
        },
        r.id
      ))
    }
  );
}, at = K(({ children: e, className: t, "aria-label": r }, o) => {
  const a = ue(null), {
    state: s,
    resizeBlock: n,
    collapseBlock: l,
    expandBlock: f,
    switchMode: h,
    persistState: x,
    resetState: w
  } = we(), k = s.resize.isDragging;
  kt(
    o,
    () => ({
      resizeBlock: n,
      collapseBlock: l,
      expandBlock: f,
      switchMode: h,
      persistState: x,
      resetState: w,
      getState: () => s
    }),
    [
      n,
      l,
      f,
      h,
      x,
      w,
      s
    ]
  );
  const u = X(() => Object.values(s.blocks).sort((g, T) => (g.order || 0) - (T.order || 0)), [s.blocks]), i = X(() => u.find((S) => !S.parentId), [u]);
  xr({
    blocks: u,
    containerRef: a,
    onSizeChange: n,
    direction: (i == null ? void 0 : i.direction) || "row"
  }), wr({
    enabled: !0,
    blocks: u,
    containerRef: a,
    onResizeBlock: (S, g) => {
      const T = s.blocks[S];
      if (T) {
        const E = T.defaultSize || 0, I = Math.max(0, E + g);
        n(S, I);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: f
  });
  const { gridStyles: d, cssVariables: m, modeStyles: p } = X(() => {
    if (!i)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const S = u.reduce((b, P) => {
      if (P.id === i.id) return b;
      const $ = P.parentId || i.id;
      return b[$] || (b[$] = []), b[$].push(P), b;
    }, {}), g = u.filter((b) => b.defaultSize !== void 0).map((b) => {
      const P = b.sizeUnit === "px" ? `${b.defaultSize}px` : `${b.defaultSize}fr`;
      return `--${i.id}-${b.id}-size: ${P};`;
    }).join(`
  `), T = () => "", E = (b, P = /* @__PURE__ */ new Set()) => {
      if (P.has(b))
        return console.warn(`Circular reference detected for parent: ${b}`), "";
      const $ = new Set(P);
      $.add(b);
      const q = S[b] || [];
      if (q.length === 0) return "";
      const F = [...q].sort(
        (c, A) => (c.order || 0) - (A.order || 0)
      ), N = u.find((c) => c.id === b) || i, C = (N == null ? void 0 : N.direction) || "row", U = F.map((c) => ({
        id: c.id,
        sizeUnit: c.sizeUnit || "fr",
        size: c.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), W = pr(U, i.id), H = C === "column" ? "grid-template-rows" : "grid-template-columns";
      let Q = `
${`[data-block-id="${b}"]`} {
  display: grid;
  ${H}: ${W};
  ${C === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const c of F)
        c.type === "group" && (Q += E(c.id, $));
      return Q;
    }, I = E(i.id), M = T();
    return {
      cssVariables: `:root {
  ${g}
}`,
      gridStyles: I,
      modeStyles: M
    };
  }, [u, i]);
  return i ? /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsxs("style", { type: "text/css", children: [
      m,
      d,
      p
    ] }),
    /* @__PURE__ */ j.jsxs(
      "div",
      {
        ref: a,
        className: ie(
          "group relative overflow-hidden",
          k && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": i.id,
        "data-block-id": i.id,
        "data-block-type": i.type,
        "data-active-mode": s.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (s.activeMode === "grid" || s.activeMode === "desktop") && /* @__PURE__ */ j.jsx(zr, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
at.displayName = "GridInternal";
const Er = K(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: a,
    onLayoutChange: s,
    onModeChange: n,
    className: l,
    dividers: f = "manual",
    dividerConfig: h,
    "aria-label": x
  }, w) => {
    const k = t.find((i) => !i.parentId), u = (k == null ? void 0 : k.id) || "root";
    return /* @__PURE__ */ j.jsx(
      yr,
      {
        blocks: t,
        modes: r,
        gridId: u,
        persist: o,
        persistKey: a,
        onLayoutChange: s,
        onModeChange: n,
        children: /* @__PURE__ */ j.jsx(
          at,
          {
            ref: w,
            className: l,
            dividers: f,
            dividerConfig: h,
            "aria-label": x,
            children: e
          }
        )
      }
    );
  }
);
Er.displayName = "Grid";
const lt = K(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, a) => {
    const s = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: a,
        className: ie(
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
lt.displayName = "Block.Content";
const ct = K(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, a) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: a,
      className: ie(
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
ct.displayName = "Block.Header";
const dt = K(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: o,
      className: ie(
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
dt.displayName = "Block.Footer";
const ut = K(
  ({ left: e, center: t, right: r, className: o, "aria-label": a }, s) => /* @__PURE__ */ j.jsxs(
    "div",
    {
      ref: s,
      className: ie(
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
      "aria-label": a || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ j.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ j.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
ut.displayName = "Block.Toolbar";
const ft = K(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: a,
    "aria-label": s,
    allowOverflow: n = !0
  }, l) => {
    const [f, h] = xe(null), x = (u, i) => {
      i.preventDefault(), u.disabled || r(u.id);
    }, w = (u, i) => {
      i.preventDefault(), i.stopPropagation(), o && u.closable && o(u.id);
    }, k = (u, i) => {
      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), u.disabled || r(u.id));
    };
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: l,
        className: ne(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-gray-200",
          "bg-white",
          n ? "overflow-x-auto" : "overflow-x-hidden",
          a
        ),
        role: "tablist",
        "aria-label": s || "Block tabs",
        children: /* @__PURE__ */ j.jsx("div", { className: "flex items-center min-w-0", children: e.map((u) => {
          const i = u.id === t, d = f === u.id, m = u.icon;
          return /* @__PURE__ */ j.jsxs(
            "div",
            {
              className: ne(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                i ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                u.disabled && "opacity-50 cursor-not-allowed",
                !n && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": i,
              "aria-disabled": u.disabled,
              tabIndex: u.disabled ? -1 : 0,
              onClick: (p) => x(u, p),
              onKeyDown: (p) => k(u, p),
              onMouseEnter: () => h(u.id),
              onMouseLeave: () => h(null),
              "data-tab-id": u.id,
              children: [
                m && /* @__PURE__ */ j.jsx(m, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ j.jsx("span", { className: "truncate min-w-0", children: u.label }),
                u.closable && o && /* @__PURE__ */ j.jsx(
                  "button",
                  {
                    className: ne(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || i ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (p) => w(u, p),
                    "aria-label": `Close ${u.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ j.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ j.jsx(
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
ft.displayName = "Block.Tabs";
const De = K(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": a }, s) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: s,
      className: ne(
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
      "aria-label": a || "Sidebar navigation",
      role: "navigation",
      children: o
    }
  )
);
De.displayName = "Block.Sidebar";
const pt = K(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: a,
    onClick: s,
    className: n,
    "aria-label": l
  }, f) => {
    const [h, x] = xe(!1), w = () => {
      t && !o && x(!0);
    }, k = () => {
      x(!1);
    }, u = () => {
      !o && s && s();
    }, i = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), u());
    };
    return /* @__PURE__ */ j.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ j.jsxs(
        "button",
        {
          ref: f,
          className: ne(
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
            n
          ),
          disabled: o,
          onClick: u,
          onKeyDown: i,
          onMouseEnter: w,
          onMouseLeave: k,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ j.jsx(
              e,
              {
                className: ne(
                  "w-5 h-5",
                  r ? "text-white" : "text-gray-400",
                  !o && "group-hover:text-white"
                )
              }
            ),
            a && /* @__PURE__ */ j.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof a == "number" && a > 99 ? "99+" : a }),
            r && /* @__PURE__ */ j.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      h && t && /* @__PURE__ */ j.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ j.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ j.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
pt.displayName = "Block.Sidebar.Item";
const mt = K(
  ({ className: e }, t) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: t,
      className: ne(
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
mt.displayName = "Block.Sidebar.Spacer";
const bt = K(
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, a) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: a,
      className: ie(
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
bt.displayName = "Block.Layout";
const Ce = K(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: a,
    divider: s,
    noDivider: n,
    "aria-label": l
  }, f) => {
    const { gridId: h } = we(), x = Oe(), { collapseBlock: w, expandBlock: k } = vr(), { supportsFeature: u } = tt(), i = x == null ? void 0 : x.blocks[e], d = X(() => i != null && i.collapsible && i.collapseAt ? (i.size ?? i.defaultSize ?? 0) <= i.collapseAt : !1, [i]), m = () => {
      i != null && i.collapsible && i.collapseAt && ((i.size ?? i.defaultSize ?? 0) <= i.collapseAt ? k(e) : w(e));
    };
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: f,
        className: ie(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          d && "opacity-70",
          a
        ),
        "data-grid-id": h,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": i == null ? void 0 : i.defaultSize,
        "data-block-size-unit": i == null ? void 0 : i.sizeUnit,
        "data-block-size-min": i == null ? void 0 : i.minSize,
        "data-block-size-max": i == null ? void 0 : i.maxSize,
        "data-block-collapse-at": i == null ? void 0 : i.collapseAt,
        "data-block-collapse-to": i == null ? void 0 : i.collapseTo,
        "data-block-divider-position": i == null ? void 0 : i.dividerPosition,
        "data-block-divider-size": i == null ? void 0 : i.dividerSize,
        "data-block-divider": s !== void 0 ? JSON.stringify(s) : void 0,
        "data-block-no-divider": n,
        "aria-label": l,
        role: t === "group" ? "group" : void 0,
        tabIndex: u("resizing") ? 0 : void 0,
        onDoubleClick: u("collapse") ? m : void 0,
        children: o
      }
    );
  }
);
Ce.displayName = "Block";
const gt = K(
  (e, t) => /* @__PURE__ */ j.jsx(Ce, { ref: t, ...e, type: "group" })
);
gt.displayName = "Block.Group";
Object.assign(Ce, {
  Group: gt,
  Layout: bt,
  Header: ct,
  Content: lt,
  Footer: dt,
  Toolbar: ut,
  Tabs: ft,
  Sidebar: De
});
Object.assign(De, {
  Item: pt,
  Spacer: mt
});
function _r(e, t, r) {
  const o = [];
  let a = e;
  const s = t.minSize ?? 0, n = t.maxSize ?? 1 / 0;
  if (e < s && (o.push(`Size ${e} is below minimum ${s}`), a = s), e > n && (o.push(`Size ${e} exceeds maximum ${n}`), a = n), a = fe(a, s, n), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, h = t.defaultSize ?? a;
    a = ur(
      a,
      r,
      l,
      f,
      h
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: a,
    violations: o
  };
}
function Nr(e, t, r, o, a = 1) {
  const s = [];
  let n = r, l = o;
  const f = ce(e.minSize ?? 0, e.sizeUnit, a), h = ce(e.maxSize ?? 1 / 0, e.sizeUnit, a), x = ce(t.minSize ?? 0, t.sizeUnit, a), w = ce(t.maxSize ?? 1 / 0, t.sizeUnit, a), k = ce(e.defaultSize ?? 0, e.sizeUnit, a), u = ce(t.defaultSize ?? 0, t.sizeUnit, a), i = k + r, d = u + o;
  let m = fe(i, f, h), p = fe(d, x, w);
  n = m - k, l = p - u;
  const S = n + l;
  if (Math.abs(S) > 1e-3) {
    const E = Math.abs(n) < Math.abs(r), I = Math.abs(l) < Math.abs(o);
    if (E && !I) {
      const M = u - n;
      p = fe(M, x, w), l = p - u;
    } else if (I && !E) {
      const M = k - l;
      m = fe(M, f, h), n = m - k;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const g = n + l;
  return {
    isValid: Math.abs(g) <= 1e-3,
    adjustedTargetDelta: n,
    adjustedAdjacentDelta: l,
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
  const r = [], o = e.filter((s) => s.sizeUnit === "px").reduce((s, n) => s + (t[n.id] ?? n.defaultSize ?? 0), 0), a = e.filter((s) => s.sizeUnit === "fr").reduce((s, n) => s + (t[n.id] ?? n.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), a <= 0 && e.some((s) => s.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((s) => {
    const n = t[s.id] ?? s.defaultSize ?? 0, l = s.minSize ?? 0, f = s.maxSize ?? 1 / 0;
    l > f && r.push(`Block ${s.id}: minSize (${l}) > maxSize (${f})`), (n < l || n > f) && r.push(`Block ${s.id}: size ${n} violates constraints [${l}, ${f}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
export {
  Ce as Block,
  lt as BlockContent,
  dt as BlockFooter,
  gt as BlockGroup,
  ct as BlockHeader,
  bt as BlockLayout,
  De as BlockSidebar,
  pt as BlockSidebarItem,
  mt as BlockSidebarSpacer,
  ft as BlockTabs,
  ut as BlockToolbar,
  st as Divider,
  Er as Grid,
  yr as GridProvider,
  ur as applyCollapseLogic,
  fr as calculateConstrainedSize,
  fe as clamp,
  ie as cn,
  cr as createCustomAdapter,
  ir as defaultModes,
  Mr as findAdjacentBlock,
  jr as frToPx,
  pr as generateGridTemplate,
  Ar as getAllGridStates,
  ot as getFlexSpacePx,
  Ie as getStorageAdapter,
  Rr as isCollapsed,
  Pr as isZeroSum,
  ar as loadGridState,
  pe as localStorageAdapter,
  Ee as memoryStorageAdapter,
  Ir as pxPerFr,
  mr as pxToFr,
  lr as removeGridState,
  sr as saveGridState,
  rt as sessionStorageAdapter,
  vr as useGridActions,
  we as useGridContext,
  wr as useGridKeyboard,
  tt as useGridMode,
  dr as useGridPersistence,
  xr as useGridResize,
  Oe as useGridState,
  _r as validateBlockSize,
  Or as validateLayoutIntegrity,
  Nr as validateTwoWayResize
};
