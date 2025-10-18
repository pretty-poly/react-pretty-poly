var kt = Object.defineProperty;
var St = (e, t, r) => t in e ? kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Te = (e, t, r) => St(e, typeof t != "symbol" ? t + "" : t, r);
import zt, { useState as se, useCallback as D, useMemo as X, useEffect as q, useRef as fe, createContext as qe, useContext as He, useReducer as Et, useLayoutEffect as At, forwardRef as Z, useImperativeHandle as Tt } from "react";
var Me = { exports: {} }, ye = {};
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
function Rt() {
  if (Ve) return ye;
  Ve = 1;
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
var Ge;
function It() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
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
        case R:
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
          case A:
            var T = c.render;
            return c = c.displayName, c || (c = T.displayName || T.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case M:
            return T = c.displayName || null, T !== null ? T : e(c.type) || "Memo";
          case b:
            T = c._payload, c = c._init;
            try {
              return e(c(T));
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
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var O = T.error, _ = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return O.call(
          T,
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
        var T = e(c);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = H.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(c) {
      if (F.call(c, "key")) {
        var T = Object.getOwnPropertyDescriptor(c, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, T) {
      function O() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
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
    function h(c, T, O, _, L, K, le, V) {
      return O = K.ref, c = {
        $$typeof: u,
        type: c,
        key: T,
        props: K,
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
        value: le
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function v(c, T, O, _, L, K, le, V) {
      var W = T.children;
      if (W !== void 0)
        if (_)
          if (N(W)) {
            for (_ = 0; _ < W.length; _++)
              y(W[_]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(W);
      if (F.call(T, "key")) {
        W = e(c);
        var J = Object.keys(T).filter(function(he) {
          return he !== "key";
        });
        _ = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", Q[W + _] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          W,
          J,
          W
        ), Q[W + _] = !0);
      }
      if (W = null, O !== void 0 && (r(O), W = "" + O), s(T) && (r(T.key), W = "" + T.key), "key" in T) {
        O = {};
        for (var re in T)
          re !== "key" && (O[re] = T[re]);
      } else O = T;
      return W && l(
        O,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), h(
        c,
        W,
        K,
        L,
        i(),
        O,
        le,
        V
      );
    }
    function y(c) {
      typeof c == "object" && c !== null && c.$$typeof === u && c._store && (c._store.validated = 1);
    }
    var k = zt, u = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), g = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), H = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, N = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var G, U = {}, Y = k.react_stack_bottom_frame.bind(
      k,
      a
    )(), z = C(o(a)), Q = {};
    ve.Fragment = d, ve.jsx = function(c, T, O, _, L) {
      var K = 1e4 > H.recentlyCreatedOwnerStacks++;
      return v(
        c,
        T,
        O,
        !1,
        _,
        L,
        K ? Error("react-stack-top-frame") : Y,
        K ? C(o(c)) : z
      );
    }, ve.jsxs = function(c, T, O, _, L) {
      var K = 1e4 > H.recentlyCreatedOwnerStacks++;
      return v(
        c,
        T,
        O,
        !0,
        _,
        L,
        K ? Error("react-stack-top-frame") : Y,
        K ? C(o(c)) : z
      );
    };
  }()), ve;
}
process.env.NODE_ENV === "production" ? Me.exports = Rt() : Me.exports = It();
var I = Me.exports;
function Ye(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Ye(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ne() {
  for (var e, t, r = 0, o = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Ye(e)) && (o && (o += " "), o += t);
  return o;
}
const Oe = "-", jt = (e) => {
  const t = Pt(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(Oe);
      return l[0] === "" && l.length !== 1 && l.shift(), Ke(l, t) || Mt(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const f = r[s] || [];
      return l && o[s] ? [...f, ...o[s]] : f;
    }
  };
}, Ke = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), i = o ? Ke(e.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(Oe);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}, Ue = /^\[(.+)\]$/, Mt = (e) => {
  if (Ue.test(e)) {
    const t = Ue.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Pt = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    Pe(r[i], o, i, t);
  return o;
}, Pe = (e, t, r, o) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : We(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (_t(i)) {
        Pe(i(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, s]) => {
      Pe(s, We(t, a), r, o);
    });
  });
}, We = (e, t) => {
  let r = e;
  return t.split(Oe).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, _t = (e) => e.isThemeGetter, Nt = (e) => {
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
}, _e = "!", Ne = ":", Ot = Ne.length, Dt = (e) => {
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
        if (d === Ne) {
          a.push(i.slice(f, n)), f = n + Ot;
          continue;
        }
        if (d === "/") {
          h = n;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" ? s-- : d === "(" ? l++ : d === ")" && l--;
    }
    const v = a.length === 0 ? i : i.substring(f), y = Ct(v), k = y !== v, u = h && h > f ? h - f : void 0;
    return {
      modifiers: a,
      hasImportantModifier: k,
      baseClassName: y,
      maybePostfixModifierPosition: u
    };
  };
  if (t) {
    const i = t + Ne, a = o;
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
}, Ct = (e) => e.endsWith(_e) ? e.substring(0, e.length - 1) : e.startsWith(_e) ? e.substring(1) : e, $t = (e) => {
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
}, Lt = (e) => ({
  cache: Nt(e.cacheSize),
  parseClassName: Dt(e),
  sortModifiers: $t(e),
  ...jt(e)
}), Vt = /\s+/, Gt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(Vt);
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
    const S = a(k).join(":"), g = u ? S + _e : S, A = g + m;
    if (s.includes(A))
      continue;
    s.push(A);
    const E = i(m, p);
    for (let R = 0; R < E.length; ++R) {
      const M = E[R];
      s.push(g + M);
    }
    f = v + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function Ut() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ze(t)) && (o && (o += " "), o += r);
  return o;
}
const Ze = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ze(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Wt(e, ...t) {
  let r, o, i, a = s;
  function s(f) {
    const h = t.reduce((v, y) => y(v), e());
    return r = Lt(h), o = r.cache.get, i = r.cache.set, a = l, l(f);
  }
  function l(f) {
    const h = o(f);
    if (h)
      return h;
    const v = Gt(f, r);
    return i(f, v), v;
  }
  return function() {
    return a(Ut.apply(null, arguments));
  };
}
const B = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Je = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Xe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Bt = /^\d+\/\d+$/, Ft = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ht = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (e) => Bt.test(e), j = (e) => !!e && !Number.isNaN(Number(e)), oe = (e) => !!e && Number.isInteger(Number(e)), Re = (e) => e.endsWith("%") && j(e.slice(0, -1)), te = (e) => Ft.test(e), Zt = () => !0, Jt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qt.test(e) && !Ht.test(e)
), Qe = () => !1, Xt = (e) => Yt.test(e), Qt = (e) => Kt.test(e), er = (e) => !w(e) && !x(e), tr = (e) => be(e, rt, Qe), w = (e) => Je.test(e), ae = (e) => be(e, ot, Jt), Ie = (e) => be(e, ir, j), Be = (e) => be(e, et, Qe), rr = (e) => be(e, tt, Qt), Se = (e) => be(e, nt, Xt), x = (e) => Xe.test(e), we = (e) => ge(e, ot), or = (e) => ge(e, ar), Fe = (e) => ge(e, et), nr = (e) => ge(e, rt), sr = (e) => ge(e, tt), ze = (e) => ge(e, nt, !0), be = (e, t, r) => {
  const o = Je.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ge = (e, t, r = !1) => {
  const o = Xe.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, et = (e) => e === "position" || e === "percentage", tt = (e) => e === "image" || e === "url", rt = (e) => e === "length" || e === "size" || e === "bg-size", ot = (e) => e === "length", ir = (e) => e === "number", ar = (e) => e === "family-name", nt = (e) => e === "shadow", lr = () => {
  const e = B("color"), t = B("font"), r = B("text"), o = B("font-weight"), i = B("tracking"), a = B("leading"), s = B("breakpoint"), l = B("container"), f = B("spacing"), h = B("radius"), v = B("shadow"), y = B("inset-shadow"), k = B("text-shadow"), u = B("drop-shadow"), n = B("blur"), d = B("perspective"), p = B("aspect"), m = B("ease"), S = B("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [
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
  ], E = () => [...A(), x, w], R = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], b = () => [x, w, f], P = () => [ce, "full", "auto", ...b()], $ = () => [oe, "none", "subgrid", x, w], H = () => ["auto", {
    span: ["full", oe, x, w]
  }, oe, x, w], F = () => [oe, "auto", x, w], N = () => ["auto", "min", "max", "fr", x, w], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], U = () => ["auto", ...b()], Y = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], z = () => [e, x, w], Q = () => [...A(), Fe, Be, {
    position: [x, w]
  }], c = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], T = () => ["auto", "cover", "contain", nr, tr, {
    size: [x, w]
  }], O = () => [Re, we, ae], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    x,
    w
  ], L = () => ["", j, we, ae], K = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => [j, Re, Fe, Be], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    n,
    x,
    w
  ], J = () => ["none", j, x, w], re = () => ["none", j, x, w], he = () => [j, x, w], ke = () => [ce, "full", ...b()];
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
      spacing: ["px", j],
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
        aspect: ["auto", "square", ce, w, x, p]
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
        columns: [j, w, x, l]
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
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
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
        z: [oe, "auto", x, w]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ce, "full", "auto", l, ...b()]
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
        flex: [j, ce, "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", j, x, w]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", j, x, w]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [oe, "first", "last", "none", x, w]
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
        col: H()
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
        row: H()
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
        content: ["normal", ...C()]
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
        "place-content": C()
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
            screen: [s]
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
        text: ["base", r, we, ae]
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
        font: [o, x, Ie]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Re, w]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [or, w, t]
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
        tracking: [i, x, w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [j, "none", x, Ie]
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
        "list-image": ["none", x, w]
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
        list: ["disc", "decimal", "none", x, w]
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [j, "from-font", "auto", x, ae]
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
        "underline-offset": [j, "auto", x, w]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x, w]
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
        content: ["none", x, w]
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
          }, oe, x, w],
          radial: ["", x, w],
          conic: [oe, x, w]
        }, sr, rr]
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
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [j, x, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", j, we, ae]
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
        "ring-offset": [j, ae]
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
        opacity: [j, x, w]
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
        "mask-linear": [j]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": V()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": V()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": V()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": V()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": V()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": V()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": V()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": z()
      }],
      "mask-image-radial": [{
        "mask-radial": [x, w]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": V()
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
        "mask-radial-at": A()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [j]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": V()
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
        mask: ["none", x, w]
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
          w
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
        brightness: [j, x, w]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j, x, w]
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
        grayscale: ["", j, x, w]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [j, x, w]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", j, x, w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j, x, w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", j, x, w]
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
          w
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
        "backdrop-brightness": [j, x, w]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j, x, w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", j, x, w]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [j, x, w]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", j, x, w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j, x, w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j, x, w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", j, x, w]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", x, w]
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
        duration: [j, "initial", x, w]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", m, x, w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [j, x, w]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, x, w]
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
        perspective: [d, x, w]
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
        transform: [x, w, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x, w]
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
        "will-change": ["auto", "scroll", "contents", "transform", x, w]
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
        stroke: [j, we, ae, Ie]
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
}, cr = /* @__PURE__ */ Wt(lr);
function ie(...e) {
  return cr(ne(e));
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
function st(e = dr) {
  const [t, r] = se(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, i] = se(null), a = D(() => {
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
  return q(() => {
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
const ee = "pretty-poly-grid-", me = {
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
}, it = {
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
}, ue = /* @__PURE__ */ new Map(), Ee = {
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
function je(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? me : Ee;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? it : Ee;
    case "memory":
    default:
      return Ee;
  }
}
function De(e) {
  return `${ee}${e}`;
}
function ur(e, t, r = me) {
  const o = De(e), i = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, i);
}
function fr(e, t = me) {
  const r = De(e);
  return t.load(r);
}
function pr(e, t = me) {
  const r = De(e);
  t.remove(r);
}
function Nr(e = me) {
  const t = {};
  try {
    if (e === me && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(ee)) {
          const i = o.substring(ee.length), a = e.load(o);
          a && (t[i] = a);
        }
      }
    else if (e === it && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(ee)) {
          const i = o.substring(ee.length), a = e.load(o);
          a && (t[i] = a);
        }
      }
    else if (e === Ee) {
      for (const r of ue.keys())
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
function mr(e) {
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
function br({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: i = !0,
  saveDelay: a = 500
}) {
  const s = fe(null), l = fe(), f = fe(""), h = fe(!1);
  q(() => {
    if (!t) {
      s.current = null;
      return;
    }
    typeof t == "function" ? s.current = mr(t) : t === "localStorage" ? s.current = je("localStorage") : t === "sessionStorage" ? s.current = je("sessionStorage") : s.current = je("localStorage");
  }, [t]), q(() => {
    if (!s.current || !t || typeof t == "function" || h.current)
      return;
    const n = fr(e, s.current);
    n && (o == null || o(n), h.current = !0);
  }, [e, t]);
  const v = D((n = r) => {
    if (!s.current || !t)
      return;
    const d = JSON.stringify(n);
    if (d !== f.current)
      try {
        ur(e, n, s.current), f.current = d;
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
        pr(e, s.current), f.current = "";
      } catch (n) {
        console.warn("Failed to clear grid state:", n);
      }
  }, [e, t]), u = D((n = r) => {
    l.current && clearTimeout(l.current), v(n);
  }, [v, r]);
  return q(() => {
    if (!(!i || !t))
      return y(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, i, t, y]), q(() => {
    if (!t || typeof t == "function")
      return;
    const n = () => {
      u();
    };
    return window.addEventListener("beforeunload", n), () => {
      window.removeEventListener("beforeunload", n);
    };
  }, [u, t]), q(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: u,
    debouncedSave: y,
    clearState: k,
    isEnabled: !!t
  };
}
function at(e, t, r) {
  return Math.max(0, e - t - r);
}
function Or(e, t) {
  return t > 0 ? e / t : 0;
}
function pe(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Dr(e, t) {
  return t > 0 && e <= t;
}
function gr(e, t, r, o, i) {
  if (r === 0)
    return e;
  const a = t <= r, s = o * 2.5;
  return a && e > s ? i : e < r && !a ? o : e;
}
function hr(e, t, r = 0, o = 1 / 0, i = !1) {
  const a = i ? -e : e, s = t + a;
  return pe(s, r, o);
}
function yr(e, t) {
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
function Cr(e, t) {
  return e * t;
}
function vr(e, t) {
  return t > 0 ? e / t : 0;
}
function $r(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Lr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function wr(e, t) {
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
      (g, A) => (g.order || 0) - (A.order || 0)
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
      const k = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), n = ((k == null ? void 0 : k.getAttribute("data-divider-position")) || "end") === "start", d = hr(
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
        const G = document.querySelector(`[data-block-id="${C.id}"]`);
        if (!G) return N;
        const U = v === "row" ? G.clientWidth : G.clientHeight;
        return N + U;
      }, 0), S = Array.from(
        (n == null ? void 0 : n.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((N, C) => {
        if (!(C instanceof HTMLElement)) return N;
        const G = v === "row" ? C.clientWidth : C.clientHeight;
        return N + G;
      }, 0), A = at(d, p, S), E = u.reduce(
        (N, C) => N + (C.defaultSize || 1),
        0
      ), R = E > 0 ? A / E : 0;
      if (R === 0) return;
      const M = vr(y, R), b = u.sort(
        (N, C) => (N.order || 0) - (C.order || 0)
      ), P = b.findIndex(
        (N) => N.id === e.resize.activeBlockId
      ), $ = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), H = ($ == null ? void 0 : $.getAttribute("data-divider-position")) || "end";
      let F = null;
      if (H === "start" && P > 0 ? F = b[P - 1] : H === "end" && P < b.length - 1 && (F = b[P + 1]), F) {
        let N, C;
        N = M, C = -M;
        const G = 0.1, U = Math.max(
          G,
          e.resize.initialSize + N
        ), Y = Math.max(
          G,
          (e.resize.initialAdjacentSize || 1) + C
        ), z = U - e.resize.initialSize, Q = Y - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + Q) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: U
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: F.id, size: Y }
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
function xr(e, t) {
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
function kr(e, t, r) {
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
const lt = qe(null);
function Sr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: i = !1,
  persistKey: a,
  onModeChange: s,
  onLayoutChange: l
}) {
  const { activeMode: f, viewport: h, setMode: v } = st(r), [y, k] = Et(
    xr,
    kr(t, h, f)
  );
  q(() => {
    k({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), q(() => {
    const g = y.activeMode;
    f !== g && (k({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), s == null || s(f, g));
  }, [f, y.activeMode, s]);
  const { saveState: u, clearState: n } = br({
    gridId: a || o,
    enabled: i,
    state: y,
    onStateLoad: (g) => {
      k({ type: "LOAD_STATE", payload: { state: g } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: p, endResize: m } = wr(y, k), S = X(
    () => ({
      gridId: o,
      state: {
        ...y,
        activeMode: f,
        viewport: h
      },
      dispatch: k,
      // Grid operations
      resizeBlock: (g, A) => {
        k({
          type: "RESIZE_BLOCK",
          payload: { blockId: g, size: A }
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
  return q(() => {
    if (l) {
      const g = Object.values(y.blocks);
      l(g);
    }
  }, [y.blocks, l]), /* @__PURE__ */ I.jsx(lt.Provider, { value: S, children: e });
}
function xe() {
  const e = He(lt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Ce() {
  const { state: e } = xe();
  return e;
}
function zr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: i,
    resetState: a
  } = xe();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: i,
    resetState: a
  };
}
function ct() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = xe();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function Er({
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
  } = ct(), v = D(() => {
    if (!t.current) return 0;
    const p = t.current.getBoundingClientRect();
    return o === "column" ? p.width : p.height;
  }, [o, t]), y = D(() => {
    const p = v();
    if (p === 0) return 0;
    const m = e.filter((E) => E.sizeUnit === "px").reduce((E, R) => E + (R.defaultSize || 0), 0), S = 0, g = e.filter((E) => E.sizeUnit === "fr").reduce((E, R) => E + (R.defaultSize || 1), 0), A = at(p, m, S);
    return g > 0 ? A / g : 0;
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
  return q(() => {
    const p = (A) => {
      A.preventDefault(), a(A);
    }, m = (A) => {
      A.preventDefault(), a(A);
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
function Ar({
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
    }, A = m.filter((E) => {
      if (E === d) return !1;
      const R = E.getBoundingClientRect(), M = {
        x: R.left + R.width / 2,
        y: R.top + R.height / 2
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
    return A.length === 0 ? null : (A.sort((E, R) => {
      const M = E.getBoundingClientRect(), b = R.getBoundingClientRect(), P = {
        x: M.left + M.width / 2,
        y: M.top + M.height / 2
      }, $ = {
        x: b.left + b.width / 2,
        y: b.top + b.height / 2
      }, H = Math.sqrt(
        Math.pow(P.x - g.x, 2) + Math.pow(P.y - g.y, 2)
      ), F = Math.sqrt(
        Math.pow($.x - g.x, 2) + Math.pow($.y - g.y, 2)
      );
      return H - F;
    }), A[0]);
  }, [s]), k = D((d) => {
    if (!e) return;
    const p = h();
    if (!p) return;
    const m = v(p);
    if (!m) return;
    const S = d.ctrlKey || d.metaKey, g = d.shiftKey, A = g ? f : l;
    if (!S && !g)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const E = y(p, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const R = y(p, "down");
          R && (R.focus(), o == null || o(R.dataset.blockId || ""));
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
          d.preventDefault(), r(m.id, -A);
          break;
        case "ArrowDown":
          d.preventDefault(), r(m.id, A);
          break;
        case "ArrowLeft":
          d.preventDefault(), r(m.id, -A);
          break;
        case "ArrowRight":
          d.preventDefault(), r(m.id, A);
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
  return q(() => {
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
const dt = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: i,
  "aria-label": a
}) => {
  const s = fe(null), l = Ce(), { startResize: f, isDragging: h, activeDividerId: v } = ct(), [y, k] = se({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), u = l.blocks[e], n = r === "vertical", d = `${e}-${t}-divider`, p = h && v === d, m = D(() => {
    const g = document.querySelector("[data-grid-id]"), A = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !A) return;
    const E = g.getBoundingClientRect(), R = A.getBoundingClientRect(), M = u == null ? void 0 : u.parentId, b = M ? document.querySelector(`[data-block-id="${M}"]`) : g;
    if (!b) return;
    const P = b.getBoundingClientRect();
    if (n) {
      const $ = t === "start" ? R.left - E.left : R.right - E.left;
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
      const $ = t === "start" ? R.top - E.top : R.bottom - E.top;
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
  At(() => {
    const g = document.querySelector("[data-grid-id]"), A = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !A) return;
    m();
    const E = new ResizeObserver(() => {
      m();
    });
    E.observe(g), E.observe(A);
    const R = u == null ? void 0 : u.parentId, M = R ? document.querySelector(`[data-block-id="${R}"]`) : null;
    return M && E.observe(M), () => {
      E.disconnect();
    };
  }, [e, m, u == null ? void 0 : u.parentId]), q(() => {
    m();
  }, [l.blocks, m]);
  const S = D((g) => {
    g.preventDefault(), f(e, d, g);
  }, [e, d, f]);
  return u ? /* @__PURE__ */ I.jsx(
    "div",
    {
      ref: s,
      className: ie(
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
dt.displayName = "Divider";
function Tr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Rr(e) {
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
      const { targetId: k, position: u } = Tr(h, l), n = e[k];
      n && n.resizable === !1 || t.push({
        id: `divider-${h.id}-${l.id}`,
        targetBlockId: k,
        position: u,
        direction: s
      });
    });
  }), t;
}
const Ir = () => {
  const e = Ce(), t = X(() => Rr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ I.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ I.jsx(
        dt,
        {
          targetId: r.targetBlockId,
          position: r.position,
          direction: r.direction
        },
        r.id
      ))
    }
  );
}, ut = Z(({ children: e, className: t, "aria-label": r }, o) => {
  const i = fe(null), {
    state: a,
    resizeBlock: s,
    collapseBlock: l,
    expandBlock: f,
    switchMode: h,
    persistState: v,
    resetState: y
  } = xe(), k = a.resize.isDragging;
  Tt(
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
  const u = X(() => Object.values(a.blocks).sort((g, A) => (g.order || 0) - (A.order || 0)), [a.blocks]), n = X(() => u.find((S) => !S.parentId), [u]);
  Er({
    blocks: u,
    containerRef: i,
    onSizeChange: s,
    direction: (n == null ? void 0 : n.direction) || "row"
  }), Ar({
    enabled: !0,
    blocks: u,
    containerRef: i,
    onResizeBlock: (S, g) => {
      const A = a.blocks[S];
      if (A) {
        const E = A.defaultSize || 0, R = Math.max(0, E + g);
        s(S, R);
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
  `), A = () => "", E = (b, P = /* @__PURE__ */ new Set()) => {
      if (P.has(b))
        return console.warn(`Circular reference detected for parent: ${b}`), "";
      const $ = new Set(P);
      $.add(b);
      const H = S[b] || [];
      if (H.length === 0) return "";
      const F = [...H].sort(
        (c, T) => (c.order || 0) - (T.order || 0)
      ), N = u.find((c) => c.id === b) || n, C = (N == null ? void 0 : N.direction) || "row", G = F.map((c) => ({
        id: c.id,
        sizeUnit: c.sizeUnit || "fr",
        size: c.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), U = yr(G, n.id), Y = C === "column" ? "grid-template-rows" : "grid-template-columns";
      let Q = `
${`[data-block-id="${b}"]`} {
  display: grid;
  ${Y}: ${U};
  ${C === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const c of F)
        c.type === "group" && (Q += E(c.id, $));
      return Q;
    }, R = E(n.id), M = A();
    return {
      cssVariables: `:root {
  ${g}
}`,
      gridStyles: R,
      modeStyles: M
    };
  }, [u, n]);
  return n ? /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsxs("style", { type: "text/css", children: [
      p,
      d,
      m
    ] }),
    /* @__PURE__ */ I.jsxs(
      "div",
      {
        ref: i,
        className: ie(
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
          (a.activeMode === "grid" || a.activeMode === "desktop") && /* @__PURE__ */ I.jsx(Ir, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
ut.displayName = "GridInternal";
const jr = Z(
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
    return /* @__PURE__ */ I.jsx(
      Sr,
      {
        blocks: t,
        modes: r,
        gridId: u,
        persist: o,
        persistKey: i,
        onLayoutChange: a,
        onModeChange: s,
        children: /* @__PURE__ */ I.jsx(
          ut,
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
jr.displayName = "Grid";
const ft = Z(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, i) => {
    const a = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ I.jsx(
      "div",
      {
        ref: i,
        className: ie(
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
ft.displayName = "Block.Content";
const pt = Z(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, i) => /* @__PURE__ */ I.jsx(
    "div",
    {
      ref: i,
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
pt.displayName = "Block.Header";
const mt = Z(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ I.jsx(
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
mt.displayName = "Block.Footer";
const bt = Z(
  ({ left: e, center: t, right: r, className: o, "aria-label": i }, a) => /* @__PURE__ */ I.jsxs(
    "div",
    {
      ref: a,
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
      "aria-label": i || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ I.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ I.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ I.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
bt.displayName = "Block.Toolbar";
const gt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: i,
    "aria-label": a,
    allowOverflow: s = !0
  }, l) => {
    const [f, h] = se(null), v = (u, n) => {
      n.preventDefault(), u.disabled || r(u.id);
    }, y = (u, n) => {
      n.preventDefault(), n.stopPropagation(), o && u.closable && o(u.id);
    }, k = (u, n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), u.disabled || r(u.id));
    };
    return /* @__PURE__ */ I.jsx(
      "div",
      {
        ref: l,
        className: ne(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          s ? "overflow-x-auto" : "overflow-x-hidden",
          i
        ),
        role: "tablist",
        "aria-label": a || "Block tabs",
        children: /* @__PURE__ */ I.jsx("div", { className: "flex items-center min-w-0", children: e.map((u) => {
          const n = u.id === t, d = f === u.id, p = u.icon;
          return /* @__PURE__ */ I.jsxs(
            "div",
            {
              className: ne(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                n ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
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
                p && /* @__PURE__ */ I.jsx(p, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ I.jsx("span", { className: "truncate min-w-0", children: u.label }),
                u.closable && o && /* @__PURE__ */ I.jsx(
                  "button",
                  {
                    className: ne(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || n ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (m) => y(u, m),
                    "aria-label": `Close ${u.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ I.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ I.jsx(
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
gt.displayName = "Block.Tabs";
const $e = Z(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": i }, a) => /* @__PURE__ */ I.jsx(
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
      "aria-label": i || "Sidebar navigation",
      role: "navigation",
      children: o
    }
  )
);
$e.displayName = "Block.Sidebar";
const ht = Z(
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
    const [h, v] = se(!1), y = () => {
      t && !o && v(!0);
    }, k = () => {
      v(!1);
    }, u = () => {
      !o && a && a();
    }, n = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), u());
    };
    return /* @__PURE__ */ I.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ I.jsxs(
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
          onKeyDown: n,
          onMouseEnter: y,
          onMouseLeave: k,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ I.jsx(
              e,
              {
                className: ne(
                  "w-5 h-5",
                  r ? "text-primary" : "text-muted-foreground",
                  !o && "group-hover:text-foreground"
                )
              }
            ),
            i && /* @__PURE__ */ I.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof i == "number" && i > 99 ? "99+" : i }),
            r && /* @__PURE__ */ I.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      h && t && /* @__PURE__ */ I.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ I.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ I.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
ht.displayName = "Block.Sidebar.Item";
const yt = Z(
  ({ className: e }, t) => /* @__PURE__ */ I.jsx(
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
yt.displayName = "Block.Sidebar.Spacer";
const vt = Z(
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, i) => /* @__PURE__ */ I.jsx(
    "div",
    {
      ref: i,
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
vt.displayName = "Block.Layout";
const Le = Z(
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
    const { gridId: h } = xe(), v = Ce(), { collapseBlock: y, expandBlock: k } = zr(), { supportsFeature: u } = st(), n = v == null ? void 0 : v.blocks[e], d = X(() => n != null && n.collapsible && n.collapseAt ? (n.size ?? n.defaultSize ?? 0) <= n.collapseAt : !1, [n]), p = () => {
      n != null && n.collapsible && n.collapseAt && ((n.size ?? n.defaultSize ?? 0) <= n.collapseAt ? k(e) : y(e));
    };
    return /* @__PURE__ */ I.jsx(
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
Le.displayName = "Block";
const wt = Z(
  (e, t) => /* @__PURE__ */ I.jsx(Le, { ref: t, ...e, type: "group" })
);
wt.displayName = "Block.Group";
Object.assign(Le, {
  Group: wt,
  Layout: vt,
  Header: pt,
  Content: ft,
  Footer: mt,
  Toolbar: bt,
  Tabs: gt,
  Sidebar: $e
});
Object.assign($e, {
  Item: ht,
  Spacer: yt
});
function Vr(e, t, r) {
  const o = [];
  let i = e;
  const a = t.minSize ?? 0, s = t.maxSize ?? 1 / 0;
  if (e < a && (o.push(`Size ${e} is below minimum ${a}`), i = a), e > s && (o.push(`Size ${e} exceeds maximum ${s}`), i = s), i = pe(i, a, s), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, h = t.defaultSize ?? i;
    i = gr(
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
function Gr(e, t, r, o, i = 1) {
  const a = [];
  let s = r, l = o;
  const f = de(e.minSize ?? 0, e.sizeUnit, i), h = de(e.maxSize ?? 1 / 0, e.sizeUnit, i), v = de(t.minSize ?? 0, t.sizeUnit, i), y = de(t.maxSize ?? 1 / 0, t.sizeUnit, i), k = de(e.defaultSize ?? 0, e.sizeUnit, i), u = de(t.defaultSize ?? 0, t.sizeUnit, i), n = k + r, d = u + o;
  let p = pe(n, f, h), m = pe(d, v, y);
  s = p - k, l = m - u;
  const S = s + l;
  if (Math.abs(S) > 1e-3) {
    const E = Math.abs(s) < Math.abs(r), R = Math.abs(l) < Math.abs(o);
    if (E && !R) {
      const M = u - s;
      m = pe(M, v, y), l = m - u;
    } else if (R && !E) {
      const M = k - l;
      p = pe(M, f, h), s = p - k;
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
function de(e, t, r) {
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
function Ur(e, t) {
  const r = [], o = e.filter((a) => a.sizeUnit === "px").reduce((a, s) => a + (t[s.id] ?? s.defaultSize ?? 0), 0), i = e.filter((a) => a.sizeUnit === "fr").reduce((a, s) => a + (t[s.id] ?? s.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), i <= 0 && e.some((a) => a.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((a) => {
    const s = t[a.id] ?? a.defaultSize ?? 0, l = a.minSize ?? 0, f = a.maxSize ?? 1 / 0;
    l > f && r.push(`Block ${a.id}: minSize (${l}) > maxSize (${f})`), (s < l || s > f) && r.push(`Block ${a.id}: size ${s} violates constraints [${l}, ${f}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
class Mr {
  constructor() {
    Te(this, "views", /* @__PURE__ */ new Map());
    Te(this, "listeners", /* @__PURE__ */ new Set());
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
    return t ? r.sort((o, i) => (o.order ?? 0) - (i.order ?? 0)) : r;
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
const xt = qe(null);
function Ae() {
  const e = He(xt);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function Wr(e) {
  const t = Ae(), [r, o] = se(() => t.getView(e));
  return q(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function Br(e) {
  const t = Ae(), [r, o] = se(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return q(() => {
    const i = () => {
      e != null && e.category ? o(t.getViewsByCategory(e.category)) : o(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(i);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function Fr({ children: e, registry: t }) {
  const [r] = se(() => t ?? new Mr());
  return /* @__PURE__ */ I.jsx(xt.Provider, { value: r, children: e });
}
function qr(e) {
  const t = Ae();
  q(() => t.registerViews(e), [t, e]);
}
function Hr(e) {
  const t = Ae();
  q(() => t.registerView(e), [t, e]);
}
export {
  Le as Block,
  ft as BlockContent,
  mt as BlockFooter,
  wt as BlockGroup,
  pt as BlockHeader,
  vt as BlockLayout,
  $e as BlockSidebar,
  ht as BlockSidebarItem,
  yt as BlockSidebarSpacer,
  gt as BlockTabs,
  bt as BlockToolbar,
  dt as Divider,
  jr as Grid,
  Sr as GridProvider,
  Mr as ViewRegistry,
  Fr as ViewRegistryProvider,
  gr as applyCollapseLogic,
  hr as calculateConstrainedSize,
  pe as clamp,
  ie as cn,
  mr as createCustomAdapter,
  dr as defaultModes,
  $r as findAdjacentBlock,
  Cr as frToPx,
  yr as generateGridTemplate,
  Nr as getAllGridStates,
  at as getFlexSpacePx,
  je as getStorageAdapter,
  Dr as isCollapsed,
  Lr as isZeroSum,
  fr as loadGridState,
  me as localStorageAdapter,
  Ee as memoryStorageAdapter,
  Or as pxPerFr,
  vr as pxToFr,
  pr as removeGridState,
  ur as saveGridState,
  it as sessionStorageAdapter,
  zr as useGridActions,
  xe as useGridContext,
  Ar as useGridKeyboard,
  st as useGridMode,
  br as useGridPersistence,
  Er as useGridResize,
  Ce as useGridState,
  Hr as useRegisterView,
  qr as useRegisterViews,
  Wr as useViewDescriptor,
  Ae as useViewRegistry,
  Br as useViews,
  Vr as validateBlockSize,
  Ur as validateLayoutIntegrity,
  Gr as validateTwoWayResize
};
