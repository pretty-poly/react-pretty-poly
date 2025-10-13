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
  function r(o, i, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      a = {};
      for (var l in i)
        l !== "key" && (a[l] = i[l]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: o,
      key: s,
      ref: i !== void 0 ? i : null,
      props: a
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
        case m:
          return "Profiler";
        case p:
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
          case n:
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
    function i() {
      var c = q.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
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
    function v(c, A, O, _, L, Y, ae, G) {
      var V = A.children;
      if (V !== void 0)
        if (_)
          if (N(V)) {
            for (_ = 0; _ < V.length; _++)
              y(V[_]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(V);
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
      if (V = null, O !== void 0 && (r(O), V = "" + O), s(A) && (r(A.key), V = "" + A.key), "key" in A) {
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
        i(),
        O,
        ae,
        G
      );
    }
    function y(c) {
      typeof c == "object" && c !== null && c.$$typeof === u && c._store && (c._store.validated = 1);
    }
    var k = ht, u = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), g = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), q = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, N = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var U, W = {}, H = k.react_stack_bottom_frame.bind(
      k,
      a
    )(), z = C(o(a)), Q = {};
    ye.Fragment = d, ye.jsx = function(c, A, O, _, L) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return v(
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
      return v(
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
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Be(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ne() {
  for (var e, t, r = 0, o = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Be(e)) && (o && (o += " "), o += t);
  return o;
}
const _e = "-", Et = (e) => {
  const t = At(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(_e);
      return l[0] === "" && l.length !== 1 && l.shift(), Fe(l, t) || Tt(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const f = r[s] || [];
      return l && o[s] ? [...f, ...o[s]] : f;
    }
  };
}, Fe = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), i = o ? Fe(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(_e);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
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
  for (const i in r)
    je(r[i], o, i, t);
  return o;
}, je = (e, t, r, o) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : Ue(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (It(i)) {
        je(i(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, s]) => {
      je(s, Ue(t, a), r, o);
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
  const i = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = o.get(a)) !== void 0)
        return i(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : i(a, s);
    }
  };
}, Me = "!", Pe = ":", jt = Pe.length, Mt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (i) => {
    const a = [];
    let s = 0, l = 0, f = 0, h;
    for (let n = 0; n < i.length; n++) {
      let d = i[n];
      if (s === 0 && l === 0) {
        if (d === Pe) {
          a.push(i.slice(f, n)), f = n + jt;
          continue;
        }
        if (d === "/") {
          h = n;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" ? s-- : d === "(" ? l++ : d === ")" && l--;
    }
    const v = a.length === 0 ? i : i.substring(f), y = Pt(v), k = y !== v, u = h && h > f ? h - f : void 0;
    return {
      modifiers: a,
      hasImportantModifier: k,
      baseClassName: y,
      maybePostfixModifierPosition: u
    };
  };
  if (t) {
    const i = t + Pe, a = o;
    o = (s) => s.startsWith(i) ? a(s.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const i = o;
    o = (a) => r({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, Pt = (e) => e.endsWith(Me) ? e.substring(0, e.length - 1) : e.startsWith(Me) ? e.substring(1) : e, _t = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const i = [];
    let a = [];
    return o.forEach((s) => {
      s[0] === "[" || t[s] ? (i.push(...a.sort(), s), a = []) : a.push(s);
    }), i.push(...a.sort()), i;
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
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(Ot);
  let f = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const v = l[h], {
      isExternal: y,
      modifiers: k,
      hasImportantModifier: u,
      baseClassName: n,
      maybePostfixModifierPosition: d
    } = r(v);
    if (y) {
      f = v + (f.length > 0 ? " " + f : f);
      continue;
    }
    let p = !!d, m = o(p ? n.substring(0, d) : n);
    if (!m) {
      if (!p) {
        f = v + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (m = o(n), !m) {
        f = v + (f.length > 0 ? " " + f : f);
        continue;
      }
      p = !1;
    }
    const S = a(k).join(":"), g = u ? S + Me : S, T = g + m;
    if (s.includes(T))
      continue;
    s.push(T);
    const E = i(m, p);
    for (let I = 0; I < E.length; ++I) {
      const M = E[I];
      s.push(g + M);
    }
    f = v + (f.length > 0 ? " " + f : f);
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
  let r, o, i, a = s;
  function s(f) {
    const h = t.reduce((v, y) => y(v), e());
    return r = Nt(h), o = r.cache.get, i = r.cache.set, a = l, l(f);
  }
  function l(f) {
    const h = o(f);
    if (h)
      return h;
    const v = Dt(f, r);
    return i(f, v), v;
  }
  return function() {
    return a(Ct.apply(null, arguments));
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
), Ke = () => !1, Ht = (e) => Vt.test(e), Yt = (e) => Bt.test(e), Kt = (e) => !x(e) && !w(e), Zt = (e) => me(e, Xe, Ke), x = (e) => He.test(e), ie = (e) => me(e, Qe, qt), Ae = (e) => me(e, tr, R), We = (e) => me(e, Ze, Ke), Jt = (e) => me(e, Je, Yt), Se = (e) => me(e, et, Ht), w = (e) => Ye.test(e), ve = (e) => be(e, Qe), Xt = (e) => be(e, rr), Ve = (e) => be(e, Ze), Qt = (e) => be(e, Xe), er = (e) => be(e, Je), ze = (e) => be(e, et, !0), me = (e, t, r) => {
  const o = He.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = Ye.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, Ze = (e) => e === "position" || e === "percentage", Je = (e) => e === "image" || e === "url", Xe = (e) => e === "length" || e === "size" || e === "bg-size", Qe = (e) => e === "length", tr = (e) => e === "number", rr = (e) => e === "family-name", et = (e) => e === "shadow", or = () => {
  const e = B("color"), t = B("font"), r = B("text"), o = B("font-weight"), i = B("tracking"), a = B("leading"), s = B("breakpoint"), l = B("container"), f = B("spacing"), h = B("radius"), v = B("shadow"), y = B("inset-shadow"), k = B("text-shadow"), u = B("drop-shadow"), n = B("blur"), d = B("perspective"), p = B("aspect"), m = B("ease"), S = B("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
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
  ], E = () => [...T(), w, x], I = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], b = () => [w, x, f], P = () => [le, "full", "auto", ...b()], $ = () => [oe, "none", "subgrid", w, x], q = () => ["auto", {
    span: ["full", oe, w, x]
  }, oe, w, x], F = () => [oe, "auto", w, x], N = () => ["auto", "min", "max", "fr", w, x], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...b()], H = () => [le, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], z = () => [e, w, x], Q = () => [...T(), Ve, We, {
    position: [w, x]
  }], c = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", Qt, Zt, {
    size: [w, x]
  }], O = () => [Te, ve, ie], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    w,
    x
  ], L = () => ["", R, ve, ie], Y = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => [R, Te, Ve, We], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    n,
    w,
    x
  ], J = () => ["none", R, w, x], re = () => ["none", R, w, x], ge = () => [R, w, x], ke = () => [le, "full", ...b()];
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
        aspect: ["auto", "square", le, x, w, p]
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
        columns: [R, x, w, l]
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
        z: [oe, "auto", w, x]
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
        flex: [R, le, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", R, w, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", R, w, x]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [oe, "first", "last", "none", w, x]
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
        text: ["base", r, ve, ie]
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
        font: [o, w, Ae]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Te, x]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xt, x, t]
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
        tracking: [i, w, x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [R, "none", w, Ae]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", w, x]
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
        list: ["disc", "decimal", "none", w, x]
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
        decoration: [R, "from-font", "auto", w, ie]
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
        "underline-offset": [R, "auto", w, x]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w, x]
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
        content: ["none", w, x]
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
          }, oe, w, x],
          radial: ["", w, x],
          conic: [oe, w, x]
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
        "outline-offset": [R, w, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", R, ve, ie]
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
          v,
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
        "inset-shadow": ["none", y, ze, Se]
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
        "ring-offset": [R, ie]
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
        opacity: [R, w, x]
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
        "mask-radial": [w, x]
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
        mask: ["none", w, x]
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
          w,
          x
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
        brightness: [R, w, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [R, w, x]
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
        grayscale: ["", R, w, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [R, w, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", R, w, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [R, w, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", R, w, x]
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
          w,
          x
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
        "backdrop-brightness": [R, w, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [R, w, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", R, w, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [R, w, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", R, w, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [R, w, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [R, w, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", R, w, x]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", w, x]
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
        duration: [R, "initial", w, x]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", m, w, x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [R, w, x]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, w, x]
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
        perspective: [d, w, x]
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
        transform: [w, x, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w, x]
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
        "will-change": ["auto", "scroll", "contents", "transform", w, x]
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
        stroke: [R, ve, ie, Ae]
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
function se(...e) {
  return nr(ne(e));
}
const sr = {
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
function tt(e = sr) {
  const [t, r] = xe(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, i] = xe(null), a = D(() => {
    if (typeof window > "u") return;
    const n = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(n);
  }, []), s = X(() => {
    var d;
    if (o && e[o])
      return o;
    const n = Object.entries(e).filter(([p, m]) => {
      if (m.matcher)
        return m.matcher(t);
      const S = !m.minWidth || t.width >= m.minWidth, g = !m.maxWidth || t.width <= m.maxWidth;
      return S && g;
    });
    return n.sort(([, p], [, m]) => {
      const S = (p.minWidth ? 1 : 0) + (p.maxWidth ? 1 : 0);
      return (m.minWidth ? 1 : 0) + (m.maxWidth ? 1 : 0) - S;
    }), ((d = n[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = X(() => e[s], [e, s]), f = X(() => (l == null ? void 0 : l.type) || "grid", [l]), h = D((n) => {
    if (n && !e[n]) {
      console.warn(`Mode "${n}" not found in configuration`);
      return;
    }
    i(n);
  }, [e]), v = D((n) => s === n, [s]), y = X(() => Object.keys(e), [e]), k = D((n) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(n);
      case "tabs":
        return n === "tabs";
      case "dock":
        return n === "dock";
      default:
        return !1;
    }
  }, [f]), u = X(() => {
    const n = Object.entries(e).map(([S, g]) => ({ name: S, ...g })).sort((S, g) => (S.breakpoint || 0) - (g.breakpoint || 0)), d = n.findIndex((S) => S.name === s), p = n[d + 1], m = n[d - 1];
    return {
      current: s,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: p == null ? void 0 : p.name,
      nextBreakpoint: p == null ? void 0 : p.breakpoint,
      prevMode: m == null ? void 0 : m.name,
      prevBreakpoint: m == null ? void 0 : m.breakpoint,
      isSmallest: d === 0,
      isLargest: d === n.length - 1
    };
  }, [e, s, l]);
  return Z(() => {
    if (typeof window > "u") return;
    const n = () => a(), d = () => {
      setTimeout(a, 100);
    };
    return window.addEventListener("resize", n), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", n), window.removeEventListener("orientationchange", d);
    };
  }, [a]), {
    // Current state
    viewport: t,
    activeMode: s,
    currentModeConfig: l,
    currentLayoutType: f,
    // Mode management
    setMode: h,
    isMode: v,
    availableModes: y,
    // Features and capabilities
    supportsFeature: k,
    breakpointInfo: u,
    // Utilities
    isForced: !!o,
    updateViewport: a
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
function ir(e, t, r = pe) {
  const o = Ne(e), i = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, i);
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
          const i = o.substring(ee.length), a = e.load(o);
          a && (t[i] = a);
        }
      }
    else if (e === rt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(ee)) {
          const i = o.substring(ee.length), a = e.load(o);
          a && (t[i] = a);
        }
      }
    else if (e === Ee) {
      for (const r of de.keys())
        if (r.startsWith(ee)) {
          const o = r.substring(ee.length), i = e.load(r);
          i && (t[o] = i);
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
  autoSave: i = !0,
  saveDelay: a = 500
}) {
  const s = ue(null), l = ue(), f = ue(""), h = ue(!1);
  Z(() => {
    if (!t) {
      s.current = null;
      return;
    }
    typeof t == "function" ? s.current = cr(t) : t === "localStorage" ? s.current = Ie("localStorage") : t === "sessionStorage" ? s.current = Ie("sessionStorage") : s.current = Ie("localStorage");
  }, [t]), Z(() => {
    if (!s.current || !t || typeof t == "function" || h.current)
      return;
    const n = ar(e, s.current);
    n && (o == null || o(n), h.current = !0);
  }, [e, t]);
  const v = D((n = r) => {
    if (!s.current || !t)
      return;
    const d = JSON.stringify(n);
    if (d !== f.current)
      try {
        ir(e, n, s.current), f.current = d;
      } catch (p) {
        console.warn("Failed to save grid state:", p);
      }
  }, [e, t, r]), y = D((n = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      v(n);
    }, a);
  }, [v, a, r]), k = D(() => {
    if (!(!s.current || !t || typeof t == "function"))
      try {
        lr(e, s.current), f.current = "";
      } catch (n) {
        console.warn("Failed to clear grid state:", n);
      }
  }, [e, t]), u = D((n = r) => {
    l.current && clearTimeout(l.current), v(n);
  }, [v, r]);
  return Z(() => {
    if (!(!i || !t))
      return y(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, i, t, y]), Z(() => {
    if (!t || typeof t == "function")
      return;
    const n = () => {
      u();
    };
    return window.addEventListener("beforeunload", n), () => {
      window.removeEventListener("beforeunload", n);
    };
  }, [u, t]), Z(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: u,
    debouncedSave: y,
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
function ur(e, t, r, o, i) {
  if (r === 0)
    return e;
  const a = t <= r, s = o * 2.5;
  return a && e > s ? i : e < r && !a ? o : e;
}
function fr(e, t, r = 0, o = 1 / 0, i = !1) {
  const a = i ? -e : e, s = t + a;
  return fe(s, r, o);
}
function pr(e, t) {
  const r = [];
  return e.forEach((o) => {
    if (o.sizeUnit === "auto")
      r.push("auto");
    else if (o.sizeUnit === "px") {
      const i = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${i}, ${o.size}px)`);
    } else {
      const i = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${i}, ${o.size}fr)`);
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
  const r = D((s) => "touches" in s ? {
    x: s.touches[0].clientX,
    y: s.touches[0].clientY
  } : {
    x: s.clientX,
    y: s.clientY
  }, []), o = D((s, l, f) => {
    const h = e.blocks[s];
    if (!h) return;
    if (h.resizable === !1) {
      console.warn(`Cannot resize block "${s}" - block is marked as non-resizable.`);
      return;
    }
    const v = r(f), y = document.querySelector(`[data-divider-id="${l}"]`), k = (y == null ? void 0 : y.getAttribute("data-divider-position")) || "end", n = Object.values(e.blocks).filter(
      (g) => g.parentId === h.parentId
    ).sort(
      (g, T) => (g.order || 0) - (T.order || 0)
    ), d = n.findIndex((g) => g.id === s);
    let p = null;
    if (k === "start" && d > 0 ? p = n[d - 1] : k === "end" && d < n.length - 1 && (p = n[d + 1]), p && p.resizable === !1) {
      console.warn(
        `Cannot resize block "${s}" - adjacent block "${p.id}" is marked as non-resizable.`
      );
      return;
    }
    if (p && h.sizeUnit === "fr" && p.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${s}" when adjacent to px block "${p.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: s,
        dividerId: l,
        startPosition: v,
        initialSize: h.defaultSize || 0,
        initialAdjacentBlockId: p == null ? void 0 : p.id,
        initialAdjacentSize: p ? p.originalDefaultSize || p.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const m = h.parentId ? e.blocks[h.parentId] : null, S = (m == null ? void 0 : m.direction) || "row";
    document.body.style.cursor = S === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), i = D((s) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const f = r(s), h = l.parentId ? e.blocks[l.parentId] : null, v = (h == null ? void 0 : h.direction) || "row", y = v === "row" ? f.x - e.resize.startPosition.x : f.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const k = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), n = ((k == null ? void 0 : k.getAttribute("data-divider-position")) || "end") === "start", d = fr(
        y,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        n
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: d }
      });
    } else if (l.sizeUnit === "fr") {
      const k = Object.values(e.blocks).filter(
        (N) => N.parentId === l.parentId
      ), u = k.filter((N) => N.sizeUnit === "fr"), n = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = n ? v === "row" ? n.clientWidth : n.clientHeight : 1200, p = k.filter((N) => N.sizeUnit === "px").reduce((N, C) => {
        const U = document.querySelector(`[data-block-id="${C.id}"]`);
        if (!U) return N;
        const W = v === "row" ? U.clientWidth : U.clientHeight;
        return N + W;
      }, 0), S = Array.from(
        (n == null ? void 0 : n.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((N, C) => {
        if (!(C instanceof HTMLElement)) return N;
        const U = v === "row" ? C.clientWidth : C.clientHeight;
        return N + U;
      }, 0), T = ot(d, p, S), E = u.reduce(
        (N, C) => N + (C.defaultSize || 1),
        0
      ), I = E > 0 ? T / E : 0;
      if (I === 0) return;
      const M = mr(y, I), b = u.sort(
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
  }, [e.resize, e.blocks, t, r]), a = D(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: i,
    endResize: a
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
      const i = o.collapseTo ?? 0, a = o.minSize ?? 0, s = Math.max(i, a);
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
      const f = l.originalDefaultSize || l.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...l,
            defaultSize: f,
            size: f
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
      const h = Object.fromEntries(
        Object.entries(e.blocks).map(([v, y]) => [
          v,
          {
            ...y,
            size: y.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: h,
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
    blocks: e.reduce((i, a) => (i[a.id] = {
      ...a,
      size: a.defaultSize,
      originalDefaultSize: a.defaultSize
      // Store original size for expand functionality
    }, i), {}),
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
  persist: i = !1,
  persistKey: a,
  onModeChange: s,
  onLayoutChange: l
}) {
  const { activeMode: f, viewport: h, setMode: v } = tt(r), [y, k] = xt(
    gr,
    hr(t, h, f)
  );
  Z(() => {
    k({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), Z(() => {
    const g = y.activeMode;
    f !== g && (k({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), s == null || s(f, g));
  }, [f, y.activeMode, s]);
  const { saveState: u, clearState: n } = dr({
    gridId: a || o,
    enabled: i,
    state: y,
    onStateLoad: (g) => {
      k({ type: "LOAD_STATE", payload: { state: g } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: p, endResize: m } = br(y, k), S = X(
    () => ({
      gridId: o,
      state: {
        ...y,
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
        v(g);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: p,
      endResize: m,
      // Persistence
      persistState: () => u(y),
      resetState: () => {
        k({ type: "RESET_STATE" }), n();
      }
    }),
    [o, y, f, h, u, n, v, d, p, m]
  );
  return Z(() => {
    if (l) {
      const g = Object.values(y.blocks);
      l(g);
    }
  }, [y.blocks, l]), /* @__PURE__ */ j.jsx(nt.Provider, { value: S, children: e });
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
    persistState: i,
    resetState: a
  } = we();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: i,
    resetState: a
  };
}
function st() {
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
    startResize: i,
    updateResize: a,
    endResize: s,
    isDragging: l,
    activeBlockId: f,
    activeDividerId: h
  } = st(), v = D(() => {
    if (!t.current) return 0;
    const p = t.current.getBoundingClientRect();
    return o === "column" ? p.width : p.height;
  }, [o, t]), y = D(() => {
    const p = v();
    if (p === 0) return 0;
    const m = e.filter((E) => E.sizeUnit === "px").reduce((E, I) => E + (I.defaultSize || 0), 0), S = 0, g = e.filter((E) => E.sizeUnit === "fr").reduce((E, I) => E + (I.defaultSize || 1), 0), T = ot(p, m, S);
    return g > 0 ? T / g : 0;
  }, [e, v]), k = D((p) => {
    const m = e.find((S) => S.id === p);
    m && m.defaultSize !== void 0 && (r == null || r(p, m.defaultSize));
  }, [e, r]), u = D((p) => {
    const m = e.find((S) => S.id === p);
    m && m.collapseTo !== void 0 && (r == null || r(p, m.collapseTo));
  }, [e, r]), n = D((p) => {
    const m = e.find((S) => S.id === p);
    m && m.defaultSize !== void 0 && (r == null || r(p, m.defaultSize));
  }, [e, r]), d = D((p) => {
    const m = e.find((S) => S.id === p);
    return !m || !m.collapseAt ? !1 : (m.defaultSize || 0) <= m.collapseAt;
  }, [e]);
  return Z(() => {
    const p = (T) => {
      T.preventDefault(), a(T);
    }, m = (T) => {
      T.preventDefault(), a(T);
    }, S = () => {
      s();
    }, g = () => {
      s();
    };
    if (l)
      return document.addEventListener("mousemove", p), document.addEventListener("mouseup", S), document.addEventListener("touchmove", m), document.addEventListener("touchend", g), () => {
        document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", m), document.removeEventListener("touchend", g);
      };
  }, [l, a, s]), {
    // State
    isDragging: l,
    activeBlockId: f,
    activeDividerId: h,
    // Actions
    startResize: i,
    resetBlock: k,
    collapseBlock: u,
    expandBlock: n,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: v,
    calculatePixelsPerFr: y
  };
}
function wr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: i,
  onExpandBlock: a,
  containerRef: s,
  stepSize: l = 10,
  largeStepSize: f = 50
}) {
  const h = D(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), v = D((d) => {
    if (!d) return null;
    const p = d.dataset.blockId;
    return t.find((m) => m.id === p) || null;
  }, [t]), y = D((d, p) => {
    if (!(s != null && s.current)) return null;
    const m = Array.from(
      s.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), S = d.getBoundingClientRect(), g = {
      x: S.left + S.width / 2,
      y: S.top + S.height / 2
    }, T = m.filter((E) => {
      if (E === d) return !1;
      const I = E.getBoundingClientRect(), M = {
        x: I.left + I.width / 2,
        y: I.top + I.height / 2
      };
      switch (p) {
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
  }, [s]), k = D((d) => {
    if (!e) return;
    const p = h();
    if (!p) return;
    const m = v(p);
    if (!m) return;
    const S = d.ctrlKey || d.metaKey, g = d.shiftKey, T = g ? f : l;
    if (!S && !g)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const E = y(p, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const I = y(p, "down");
          I && (I.focus(), o == null || o(I.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const M = y(p, "left");
          M && (M.focus(), o == null || o(M.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const b = y(p, "right");
          b && (b.focus(), o == null || o(b.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), m.collapsible && (a == null || a(m.id));
          break;
        case "Escape":
          d.preventDefault(), p.blur();
          break;
      }
    if (S && r)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), r(m.id, -T);
          break;
        case "ArrowDown":
          d.preventDefault(), r(m.id, T);
          break;
        case "ArrowLeft":
          d.preventDefault(), r(m.id, -T);
          break;
        case "ArrowRight":
          d.preventDefault(), r(m.id, T);
          break;
      }
    if (S)
      switch (d.key) {
        case "Minus":
        case "-":
          d.preventDefault(), i == null || i(m.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), a == null || a(m.id);
          break;
      }
  }, [
    e,
    h,
    v,
    y,
    r,
    o,
    i,
    a,
    l,
    f
  ]), u = D((d) => {
    if (!(s != null && s.current)) return;
    const p = s.current.querySelector(
      `[data-block-id="${d}"]`
    );
    p && (p.focus(), o == null || o(d));
  }, [s, o]), n = D(() => s != null && s.current ? Array.from(
    s.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [s]);
  return Z(() => {
    if (e)
      return document.addEventListener("keydown", k), () => {
        document.removeEventListener("keydown", k);
      };
  }, [k, e]), {
    focusBlock: u,
    getFocusableBlocks: n,
    getFocusedBlock: h,
    isEnabled: e
  };
}
const it = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: i,
  "aria-label": a
}) => {
  const s = ue(null), l = Oe(), { startResize: f, isDragging: h, activeDividerId: v } = st(), [y, k] = xe({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), u = l.blocks[e], n = r === "vertical", d = `${e}-${t}-divider`, p = h && v === d, m = D(() => {
    const g = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !T) return;
    const E = g.getBoundingClientRect(), I = T.getBoundingClientRect(), M = u == null ? void 0 : u.parentId, b = M ? document.querySelector(`[data-block-id="${M}"]`) : g;
    if (!b) return;
    const P = b.getBoundingClientRect();
    if (n) {
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
  }, [e, t, n, o, u == null ? void 0 : u.parentId]);
  wt(() => {
    const g = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !T) return;
    m();
    const E = new ResizeObserver(() => {
      m();
    });
    E.observe(g), E.observe(T);
    const I = u == null ? void 0 : u.parentId, M = I ? document.querySelector(`[data-block-id="${I}"]`) : null;
    return M && E.observe(M), () => {
      E.disconnect();
    };
  }, [e, m, u == null ? void 0 : u.parentId]), Z(() => {
    m();
  }, [l.blocks, m]);
  const S = D((g) => {
    g.preventDefault(), f(e, d, g);
  }, [e, d, f]);
  return u ? /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: s,
      className: se(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        p && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        n ? "cursor-col-resize" : "cursor-row-resize",
        i
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
      "aria-label": a || `Resize ${e}`,
      "aria-valuenow": u == null ? void 0 : u.defaultSize,
      "aria-valuemin": u == null ? void 0 : u.minSize,
      "aria-valuemax": u == null ? void 0 : u.maxSize,
      tabIndex: 0,
      onMouseDown: S,
      onTouchStart: S
    }
  ) : null;
};
it.displayName = "Divider";
function kr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Sr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const i = Object.values(e).filter((l) => l.parentId === o.id).sort((l, f) => (l.order || 0) - (f.order || 0));
    if (i.length === 0) return;
    const s = o.direction === "row" ? "vertical" : "horizontal";
    i.forEach((l, f) => {
      if (f === 0) return;
      const h = i[f - 1], v = h.resizable !== !1, y = l.resizable !== !1;
      if (!v && !y)
        return;
      const { targetId: k, position: u } = kr(h, l), n = e[k];
      n && n.resizable === !1 || t.push({
        id: `divider-${h.id}-${l.id}`,
        targetBlockId: k,
        position: u,
        direction: s
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
        it,
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
  const i = ue(null), {
    state: a,
    resizeBlock: s,
    collapseBlock: l,
    expandBlock: f,
    switchMode: h,
    persistState: v,
    resetState: y
  } = we(), k = a.resize.isDragging;
  kt(
    o,
    () => ({
      resizeBlock: s,
      collapseBlock: l,
      expandBlock: f,
      switchMode: h,
      persistState: v,
      resetState: y,
      getState: () => a
    }),
    [
      s,
      l,
      f,
      h,
      v,
      y,
      a
    ]
  );
  const u = X(() => Object.values(a.blocks).sort((g, T) => (g.order || 0) - (T.order || 0)), [a.blocks]), n = X(() => u.find((S) => !S.parentId), [u]);
  xr({
    blocks: u,
    containerRef: i,
    onSizeChange: s,
    direction: (n == null ? void 0 : n.direction) || "row"
  }), wr({
    enabled: !0,
    blocks: u,
    containerRef: i,
    onResizeBlock: (S, g) => {
      const T = a.blocks[S];
      if (T) {
        const E = T.defaultSize || 0, I = Math.max(0, E + g);
        s(S, I);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: f
  });
  const { gridStyles: d, cssVariables: p, modeStyles: m } = X(() => {
    if (!n)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const S = u.reduce((b, P) => {
      if (P.id === n.id) return b;
      const $ = P.parentId || n.id;
      return b[$] || (b[$] = []), b[$].push(P), b;
    }, {}), g = u.filter((b) => b.defaultSize !== void 0).map((b) => {
      const P = b.sizeUnit === "px" ? `${b.defaultSize}px` : `${b.defaultSize}fr`;
      return `--${n.id}-${b.id}-size: ${P};`;
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
      ), N = u.find((c) => c.id === b) || n, C = (N == null ? void 0 : N.direction) || "row", U = F.map((c) => ({
        id: c.id,
        sizeUnit: c.sizeUnit || "fr",
        size: c.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), W = pr(U, n.id), H = C === "column" ? "grid-template-rows" : "grid-template-columns";
      let Q = `
${`[data-block-id="${b}"]`} {
  display: grid;
  ${H}: ${W};
  ${C === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const c of F)
        c.type === "group" && (Q += E(c.id, $));
      return Q;
    }, I = E(n.id), M = T();
    return {
      cssVariables: `:root {
  ${g}
}`,
      gridStyles: I,
      modeStyles: M
    };
  }, [u, n]);
  return n ? /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsxs("style", { type: "text/css", children: [
      p,
      d,
      m
    ] }),
    /* @__PURE__ */ j.jsxs(
      "div",
      {
        ref: i,
        className: se(
          "group relative overflow-hidden",
          k && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": n.id,
        "data-block-id": n.id,
        "data-block-type": n.type,
        "data-active-mode": a.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (a.activeMode === "grid" || a.activeMode === "desktop") && /* @__PURE__ */ j.jsx(zr, {})
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
    persistKey: i,
    onLayoutChange: a,
    onModeChange: s,
    className: l,
    dividers: f = "manual",
    dividerConfig: h,
    "aria-label": v
  }, y) => {
    const k = t.find((n) => !n.parentId), u = (k == null ? void 0 : k.id) || "root";
    return /* @__PURE__ */ j.jsx(
      yr,
      {
        blocks: t,
        modes: r,
        gridId: u,
        persist: o,
        persistKey: i,
        onLayoutChange: a,
        onModeChange: s,
        children: /* @__PURE__ */ j.jsx(
          at,
          {
            ref: y,
            className: l,
            dividers: f,
            dividerConfig: h,
            "aria-label": v,
            children: e
          }
        )
      }
    );
  }
);
Er.displayName = "Grid";
const lt = K(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, i) => {
    const a = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: i,
        className: se(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          a[e],
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
  ({ position: e = "top", className: t, children: r, "aria-label": o }, i) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: i,
      className: se(
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
      className: se(
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
  ({ left: e, center: t, right: r, className: o, "aria-label": i }, a) => /* @__PURE__ */ j.jsxs(
    "div",
    {
      ref: a,
      className: se(
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
      "aria-label": i || "Toolbar",
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
    className: i,
    "aria-label": a,
    allowOverflow: s = !0
  }, l) => {
    const [f, h] = xe(null), v = (u, n) => {
      n.preventDefault(), u.disabled || r(u.id);
    }, y = (u, n) => {
      n.preventDefault(), n.stopPropagation(), o && u.closable && o(u.id);
    }, k = (u, n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), u.disabled || r(u.id));
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
          s ? "overflow-x-auto" : "overflow-x-hidden",
          i
        ),
        role: "tablist",
        "aria-label": a || "Block tabs",
        children: /* @__PURE__ */ j.jsx("div", { className: "flex items-center min-w-0", children: e.map((u) => {
          const n = u.id === t, d = f === u.id, p = u.icon;
          return /* @__PURE__ */ j.jsxs(
            "div",
            {
              className: ne(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                n ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                u.disabled && "opacity-50 cursor-not-allowed",
                !s && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": n,
              "aria-disabled": u.disabled,
              tabIndex: u.disabled ? -1 : 0,
              onClick: (m) => v(u, m),
              onKeyDown: (m) => k(u, m),
              onMouseEnter: () => h(u.id),
              onMouseLeave: () => h(null),
              "data-tab-id": u.id,
              children: [
                p && /* @__PURE__ */ j.jsx(p, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ j.jsx("span", { className: "truncate min-w-0", children: u.label }),
                u.closable && o && /* @__PURE__ */ j.jsx(
                  "button",
                  {
                    className: ne(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || n ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (m) => y(u, m),
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
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": i }, a) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: a,
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
      "aria-label": i || "Sidebar navigation",
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
    badge: i,
    onClick: a,
    className: s,
    "aria-label": l
  }, f) => {
    const [h, v] = xe(!1), y = () => {
      t && !o && v(!0);
    }, k = () => {
      v(!1);
    }, u = () => {
      !o && a && a();
    }, n = (d) => {
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
            s
          ),
          disabled: o,
          onClick: u,
          onKeyDown: n,
          onMouseEnter: y,
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
            i && /* @__PURE__ */ j.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof i == "number" && i > 99 ? "99+" : i }),
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
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, i) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: i,
      className: se(
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
    className: i,
    divider: a,
    noDivider: s,
    "aria-label": l
  }, f) => {
    const { gridId: h } = we(), v = Oe(), { collapseBlock: y, expandBlock: k } = vr(), { supportsFeature: u } = tt(), n = v == null ? void 0 : v.blocks[e], d = X(() => n != null && n.collapsible && n.collapseAt ? (n.size ?? n.defaultSize ?? 0) <= n.collapseAt : !1, [n]), p = () => {
      n != null && n.collapsible && n.collapseAt && ((n.size ?? n.defaultSize ?? 0) <= n.collapseAt ? k(e) : y(e));
    };
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: f,
        className: se(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          d && "opacity-70",
          i
        ),
        "data-grid-id": h,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": n == null ? void 0 : n.defaultSize,
        "data-block-size-unit": n == null ? void 0 : n.sizeUnit,
        "data-block-size-min": n == null ? void 0 : n.minSize,
        "data-block-size-max": n == null ? void 0 : n.maxSize,
        "data-block-resizable": (n == null ? void 0 : n.resizable) !== !1,
        "data-block-collapse-at": n == null ? void 0 : n.collapseAt,
        "data-block-collapse-to": n == null ? void 0 : n.collapseTo,
        "data-block-divider-position": n == null ? void 0 : n.dividerPosition,
        "data-block-divider-size": n == null ? void 0 : n.dividerSize,
        "data-block-divider": a !== void 0 ? JSON.stringify(a) : void 0,
        "data-block-no-divider": s,
        "aria-label": l,
        role: t === "group" ? "group" : void 0,
        tabIndex: u("resizing") ? 0 : void 0,
        onDoubleClick: u("collapse") ? p : void 0,
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
  let i = e;
  const a = t.minSize ?? 0, s = t.maxSize ?? 1 / 0;
  if (e < a && (o.push(`Size ${e} is below minimum ${a}`), i = a), e > s && (o.push(`Size ${e} exceeds maximum ${s}`), i = s), i = fe(i, a, s), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, h = t.defaultSize ?? i;
    i = ur(
      i,
      r,
      l,
      f,
      h
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: i,
    violations: o
  };
}
function Nr(e, t, r, o, i = 1) {
  const a = [];
  let s = r, l = o;
  const f = ce(e.minSize ?? 0, e.sizeUnit, i), h = ce(e.maxSize ?? 1 / 0, e.sizeUnit, i), v = ce(t.minSize ?? 0, t.sizeUnit, i), y = ce(t.maxSize ?? 1 / 0, t.sizeUnit, i), k = ce(e.defaultSize ?? 0, e.sizeUnit, i), u = ce(t.defaultSize ?? 0, t.sizeUnit, i), n = k + r, d = u + o;
  let p = fe(n, f, h), m = fe(d, v, y);
  s = p - k, l = m - u;
  const S = s + l;
  if (Math.abs(S) > 1e-3) {
    const E = Math.abs(s) < Math.abs(r), I = Math.abs(l) < Math.abs(o);
    if (E && !I) {
      const M = u - s;
      m = fe(M, v, y), l = m - u;
    } else if (I && !E) {
      const M = k - l;
      p = fe(M, f, h), s = p - k;
    }
    a.push("Zero-sum constraint violated, deltas adjusted");
  }
  const g = s + l;
  return {
    isValid: Math.abs(g) <= 1e-3,
    adjustedTargetDelta: s,
    adjustedAdjacentDelta: l,
    violations: a
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
  const r = [], o = e.filter((a) => a.sizeUnit === "px").reduce((a, s) => a + (t[s.id] ?? s.defaultSize ?? 0), 0), i = e.filter((a) => a.sizeUnit === "fr").reduce((a, s) => a + (t[s.id] ?? s.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), i <= 0 && e.some((a) => a.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((a) => {
    const s = t[a.id] ?? a.defaultSize ?? 0, l = a.minSize ?? 0, f = a.maxSize ?? 1 / 0;
    l > f && r.push(`Block ${a.id}: minSize (${l}) > maxSize (${f})`), (s < l || s > f) && r.push(`Block ${a.id}: size ${s} violates constraints [${l}, ${f}]`);
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
  it as Divider,
  Er as Grid,
  yr as GridProvider,
  ur as applyCollapseLogic,
  fr as calculateConstrainedSize,
  fe as clamp,
  se as cn,
  cr as createCustomAdapter,
  sr as defaultModes,
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
  ir as saveGridState,
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
