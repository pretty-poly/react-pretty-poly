import yt, { useState as xe, useCallback as D, useMemo as Z, useEffect as J, useRef as ue, createContext as vt, useContext as xt, useReducer as wt, useLayoutEffect as kt, forwardRef as X, useImperativeHandle as St, Children as Ve, isValidElement as Fe } from "react";
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
var Ce;
function zt() {
  if (Ce) return he;
  Ce = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, s, i) {
    var n = null;
    if (i !== void 0 && (n = "" + i), s.key !== void 0 && (n = "" + s.key), "key" in s) {
      i = {};
      for (var c in s)
        c !== "key" && (i[c] = s[c]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: o,
      key: n,
      ref: s !== void 0 ? s : null,
      props: i
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
function Et() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === U ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case d:
          return "Fragment";
        case a:
          return "Profiler";
        case p:
          return "StrictMode";
        case T:
          return "Suspense";
        case I:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case l:
            return "Portal";
          case g:
            return (f.displayName || "Context") + ".Provider";
          case y:
            return (f._context.displayName || "Context") + ".Consumer";
          case E:
            var R = f.render;
            return f = f.displayName, f || (f = R.displayName || R.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case M:
            return R = f.displayName || null, R !== null ? R : e(f.type) || "Memo";
          case m:
            R = f._payload, f = f._init;
            try {
              return e(f(R));
            } catch {
            }
        }
      return null;
    }
    function t(f) {
      return "" + f;
    }
    function r(f) {
      try {
        t(f);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var O = R.error, P = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return O.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(f);
      }
    }
    function o(f) {
      if (f === d) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === m)
        return "<...>";
      try {
        var R = e(f);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var f = H.A;
      return f === null ? null : f.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function n(f) {
      if (q.call(f, "key")) {
        var R = Object.getOwnPropertyDescriptor(f, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function c(f, R) {
      function O() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: O,
        configurable: !0
      });
    }
    function u() {
      var f = e(this.type);
      return B[f] || (B[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function h(f, R, O, P, C, K, ae, L) {
      return O = K.ref, f = {
        $$typeof: b,
        type: f,
        key: R,
        props: K,
        _owner: C
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function k(f, R, O, P, C, K, ae, L) {
      var W = R.children;
      if (W !== void 0)
        if (P)
          if (N(W)) {
            for (P = 0; P < W.length; P++)
              v(W[P]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(W);
      if (q.call(R, "key")) {
        W = e(f);
        var Q = Object.keys(R).filter(function(ge) {
          return ge !== "key";
        });
        P = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", F[W + P] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          W,
          Q,
          W
        ), F[W + P] = !0);
      }
      if (W = null, O !== void 0 && (r(O), W = "" + O), n(R) && (r(R.key), W = "" + R.key), "key" in R) {
        O = {};
        for (var re in R)
          re !== "key" && (O[re] = R[re]);
      } else O = R;
      return W && c(
        O,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), h(
        f,
        W,
        K,
        C,
        s(),
        O,
        ae,
        L
      );
    }
    function v(f) {
      typeof f == "object" && f !== null && f.$$typeof === b && f._store && (f._store.validated = 1);
    }
    var S = yt, b = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), g = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), H = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, N = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var G, B = {}, Y = S.react_stack_bottom_frame.bind(
      S,
      i
    )(), z = $(o(i)), F = {};
    ye.Fragment = d, ye.jsx = function(f, R, O, P, C) {
      var K = 1e4 > H.recentlyCreatedOwnerStacks++;
      return k(
        f,
        R,
        O,
        !1,
        P,
        C,
        K ? Error("react-stack-top-frame") : Y,
        K ? $(o(f)) : z
      );
    }, ye.jsxs = function(f, R, O, P, C) {
      var K = 1e4 > H.recentlyCreatedOwnerStacks++;
      return k(
        f,
        R,
        O,
        !0,
        P,
        C,
        K ? Error("react-stack-top-frame") : Y,
        K ? $(o(f)) : z
      );
    };
  }()), ye;
}
process.env.NODE_ENV === "production" ? Re.exports = zt() : Re.exports = Et();
var A = Re.exports;
function qe(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = qe(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ie() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = qe(e)) && (o && (o += " "), o += t);
  return o;
}
const _e = "-", Tt = (e) => {
  const t = It(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (n) => {
      const c = n.split(_e);
      return c[0] === "" && c.length !== 1 && c.shift(), He(c, t) || At(n);
    },
    getConflictingClassGroupIds: (n, c) => {
      const u = r[n] || [];
      return c && o[n] ? [...u, ...o[n]] : u;
    }
  };
}, He = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? He(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(_e);
  return (n = t.validators.find(({
    validator: c
  }) => c(i))) == null ? void 0 : n.classGroupId;
}, Ge = /^\[(.+)\]$/, At = (e) => {
  if (Ge.test(e)) {
    const t = Ge.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, It = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in r)
    je(r[s], o, s, t);
  return o;
}, je = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : Ue(t, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Rt(s)) {
        je(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, n]) => {
      je(n, Ue(t, i), r, o);
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
}, Rt = (e) => e.isThemeGetter, jt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (i, n) => {
    r.set(i, n), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let n = r.get(i);
      if (n !== void 0)
        return n;
      if ((n = o.get(i)) !== void 0)
        return s(i, n), n;
    },
    set(i, n) {
      r.has(i) ? r.set(i, n) : s(i, n);
    }
  };
}, Me = "!", Pe = ":", Mt = Pe.length, Pt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (s) => {
    const i = [];
    let n = 0, c = 0, u = 0, h;
    for (let l = 0; l < s.length; l++) {
      let d = s[l];
      if (n === 0 && c === 0) {
        if (d === Pe) {
          i.push(s.slice(u, l)), u = l + Mt;
          continue;
        }
        if (d === "/") {
          h = l;
          continue;
        }
      }
      d === "[" ? n++ : d === "]" ? n-- : d === "(" ? c++ : d === ")" && c--;
    }
    const k = i.length === 0 ? s : s.substring(u), v = _t(k), S = v !== k, b = h && h > u ? h - u : void 0;
    return {
      modifiers: i,
      hasImportantModifier: S,
      baseClassName: v,
      maybePostfixModifierPosition: b
    };
  };
  if (t) {
    const s = t + Pe, i = o;
    o = (n) => n.startsWith(s) ? i(n.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: n,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = o;
    o = (i) => r({
      className: i,
      parseClassName: s
    });
  }
  return o;
}, _t = (e) => e.endsWith(Me) ? e.substring(0, e.length - 1) : e.startsWith(Me) ? e.substring(1) : e, Nt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const s = [];
    let i = [];
    return o.forEach((n) => {
      n[0] === "[" || t[n] ? (s.push(...i.sort(), n), i = []) : i.push(n);
    }), s.push(...i.sort()), s;
  };
}, Ot = (e) => ({
  cache: jt(e.cacheSize),
  parseClassName: Pt(e),
  sortModifiers: Nt(e),
  ...Tt(e)
}), Dt = /\s+/, $t = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, n = [], c = e.trim().split(Dt);
  let u = "";
  for (let h = c.length - 1; h >= 0; h -= 1) {
    const k = c[h], {
      isExternal: v,
      modifiers: S,
      hasImportantModifier: b,
      baseClassName: l,
      maybePostfixModifierPosition: d
    } = r(k);
    if (v) {
      u = k + (u.length > 0 ? " " + u : u);
      continue;
    }
    let p = !!d, a = o(p ? l.substring(0, d) : l);
    if (!a) {
      if (!p) {
        u = k + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (a = o(l), !a) {
        u = k + (u.length > 0 ? " " + u : u);
        continue;
      }
      p = !1;
    }
    const y = i(S).join(":"), g = b ? y + Me : y, E = g + a;
    if (n.includes(E))
      continue;
    n.push(E);
    const T = s(a, p);
    for (let I = 0; I < T.length; ++I) {
      const M = T[I];
      n.push(g + M);
    }
    u = k + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Ct() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ye(t)) && (o && (o += " "), o += r);
  return o;
}
const Ye = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ye(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Lt(e, ...t) {
  let r, o, s, i = n;
  function n(u) {
    const h = t.reduce((k, v) => v(k), e());
    return r = Ot(h), o = r.cache.get, s = r.cache.set, i = c, c(u);
  }
  function c(u) {
    const h = o(u);
    if (h)
      return h;
    const k = $t(u, r);
    return s(u, k), k;
  }
  return function() {
    return i(Ct.apply(null, arguments));
  };
}
const V = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ke = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ze = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Gt = /^\d+\/\d+$/, Ut = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Bt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Vt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ft = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, le = (e) => Gt.test(e), j = (e) => !!e && !Number.isNaN(Number(e)), oe = (e) => !!e && Number.isInteger(Number(e)), Te = (e) => e.endsWith("%") && j(e.slice(0, -1)), te = (e) => Ut.test(e), qt = () => !0, Ht = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Bt.test(e) && !Wt.test(e)
), Je = () => !1, Yt = (e) => Vt.test(e), Kt = (e) => Ft.test(e), Zt = (e) => !x(e) && !w(e), Jt = (e) => me(e, et, Je), x = (e) => Ke.test(e), ne = (e) => me(e, tt, Ht), Ae = (e) => me(e, rr, j), Be = (e) => me(e, Xe, Je), Xt = (e) => me(e, Qe, Kt), Se = (e) => me(e, rt, Yt), w = (e) => Ze.test(e), ve = (e) => be(e, tt), Qt = (e) => be(e, or), We = (e) => be(e, Xe), er = (e) => be(e, et), tr = (e) => be(e, Qe), ze = (e) => be(e, rt, !0), me = (e, t, r) => {
  const o = Ke.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = Ze.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, Xe = (e) => e === "position" || e === "percentage", Qe = (e) => e === "image" || e === "url", et = (e) => e === "length" || e === "size" || e === "bg-size", tt = (e) => e === "length", rr = (e) => e === "number", or = (e) => e === "family-name", rt = (e) => e === "shadow", ir = () => {
  const e = V("color"), t = V("font"), r = V("text"), o = V("font-weight"), s = V("tracking"), i = V("leading"), n = V("breakpoint"), c = V("container"), u = V("spacing"), h = V("radius"), k = V("shadow"), v = V("inset-shadow"), S = V("text-shadow"), b = V("drop-shadow"), l = V("blur"), d = V("perspective"), p = V("aspect"), a = V("ease"), y = V("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], T = () => [...E(), w, x], I = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], m = () => [w, x, u], _ = () => [le, "full", "auto", ...m()], U = () => [oe, "none", "subgrid", w, x], H = () => ["auto", {
    span: ["full", oe, w, x]
  }, oe, w, x], q = () => [oe, "auto", w, x], N = () => ["auto", "min", "max", "fr", w, x], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...m()], Y = () => [le, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], z = () => [e, w, x], F = () => [...E(), We, Be, {
    position: [w, x]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", er, Jt, {
    size: [w, x]
  }], O = () => [Te, ve, ne], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    w,
    x
  ], C = () => ["", j, ve, ne], K = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [j, Te, We, Be], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    l,
    w,
    x
  ], Q = () => ["none", j, w, x], re = () => ["none", j, w, x], ge = () => [j, w, x], ke = () => [le, "full", ...m()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [te],
      breakpoint: [te],
      color: [qt],
      container: [te],
      "drop-shadow": [te],
      ease: ["in", "out", "in-out"],
      font: [Zt],
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
        columns: [j, x, w, c]
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
        object: T()
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
        inset: _()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: _()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
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
        basis: [le, "full", "auto", c, ...m()]
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
        flex: [j, le, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", j, w, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", j, w, x]
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
        "grid-cols": U()
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
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": U()
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
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
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
        gap: m()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": m()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": m()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$(), "normal"]
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
        content: ["normal", ...$()]
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
        "place-content": $()
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
        p: m()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: m()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: m()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: m()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: m()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: m()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: m()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: m()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: m()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": m()
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
        "space-y": m()
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
        w: [c, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
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
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [n]
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
        text: ["base", r, ve, ne]
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
        font: [Qt, x, t]
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
        tracking: [s, w, x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [j, "none", w, Ae]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...m()
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [j, "from-font", "auto", w, ne]
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
        "underline-offset": [j, "auto", w, x]
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
        indent: m()
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
        bg: F()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: f()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: R()
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
        }, tr, Xt]
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
        border: C()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": C()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": C()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": C()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": C()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": C()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": C()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": C()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": C()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": C()
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
        "divide-y": C()
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
        "outline-offset": [j, w, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", j, ve, ne]
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
          k,
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
        "inset-shadow": ["none", v, ze, Se]
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
        ring: C()
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
        "ring-offset": [j, ne]
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
        "inset-ring": C()
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
        "text-shadow": ["none", S, ze, Se]
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
        opacity: [j, w, x]
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
        "mask-linear": [j]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": L()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": z()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": z()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": z()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": z()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": z()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": z()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
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
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": L()
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
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [j]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": L()
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
        mask: F()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: f()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: R()
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
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [j, w, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j, w, x]
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
        grayscale: ["", j, w, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [j, w, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", j, w, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j, w, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", j, w, x]
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
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [j, w, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j, w, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", j, w, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [j, w, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", j, w, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j, w, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j, w, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", j, w, x]
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
        "border-spacing": m()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": m()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": m()
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
        duration: [j, "initial", w, x]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", a, w, x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [j, w, x]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, w, x]
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
        "perspective-origin": T()
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
        origin: T()
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
        "scroll-m": m()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": m()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": m()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": m()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": m()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": m()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": m()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": m()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": m()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": m()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": m()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": m()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": m()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": m()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": m()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": m()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": m()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": m()
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
        stroke: [j, ve, ne, Ae]
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
}, nr = /* @__PURE__ */ Lt(ir);
function se(...e) {
  return nr(ie(e));
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
function ot(e = sr) {
  const [t, r] = xe(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, s] = xe(null), i = D(() => {
    if (typeof window > "u") return;
    const l = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(l);
  }, []), n = Z(() => {
    var d;
    if (o && e[o])
      return o;
    const l = Object.entries(e).filter(([p, a]) => {
      if (a.matcher)
        return a.matcher(t);
      const y = !a.minWidth || t.width >= a.minWidth, g = !a.maxWidth || t.width <= a.maxWidth;
      return y && g;
    });
    return l.sort(([, p], [, a]) => {
      const y = (p.minWidth ? 1 : 0) + (p.maxWidth ? 1 : 0);
      return (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0) - y;
    }), ((d = l[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), c = Z(() => e[n], [e, n]), u = Z(() => (c == null ? void 0 : c.type) || "grid", [c]), h = D((l) => {
    if (l && !e[l]) {
      console.warn(`Mode "${l}" not found in configuration`);
      return;
    }
    s(l);
  }, [e]), k = D((l) => n === l, [n]), v = Z(() => Object.keys(e), [e]), S = D((l) => {
    switch (u) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(l);
      case "tabs":
        return l === "tabs";
      case "dock":
        return l === "dock";
      default:
        return !1;
    }
  }, [u]), b = Z(() => {
    const l = Object.entries(e).map(([y, g]) => ({ name: y, ...g })).sort((y, g) => (y.breakpoint || 0) - (g.breakpoint || 0)), d = l.findIndex((y) => y.name === n), p = l[d + 1], a = l[d - 1];
    return {
      current: n,
      currentBreakpoint: (c == null ? void 0 : c.breakpoint) || 0,
      nextMode: p == null ? void 0 : p.name,
      nextBreakpoint: p == null ? void 0 : p.breakpoint,
      prevMode: a == null ? void 0 : a.name,
      prevBreakpoint: a == null ? void 0 : a.breakpoint,
      isSmallest: d === 0,
      isLargest: d === l.length - 1
    };
  }, [e, n, c]);
  return J(() => {
    if (typeof window > "u") return;
    const l = () => i(), d = () => {
      setTimeout(i, 100);
    };
    return window.addEventListener("resize", l), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", l), window.removeEventListener("orientationchange", d);
    };
  }, [i]), {
    // Current state
    viewport: t,
    activeMode: n,
    currentModeConfig: c,
    currentLayoutType: u,
    // Mode management
    setMode: h,
    isMode: k,
    availableModes: v,
    // Features and capabilities
    supportsFeature: S,
    breakpointInfo: b,
    // Utilities
    isForced: !!o,
    updateViewport: i
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
      return typeof sessionStorage < "u" ? it : Ee;
    case "memory":
    default:
      return Ee;
  }
}
function Ne(e) {
  return `${ee}${e}`;
}
function ar(e, t, r = pe) {
  const o = Ne(e), s = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, s);
}
function lr(e, t = pe) {
  const r = Ne(e);
  return t.load(r);
}
function cr(e, t = pe) {
  const r = Ne(e);
  t.remove(r);
}
function Mr(e = pe) {
  const t = {};
  try {
    if (e === pe && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(ee)) {
          const s = o.substring(ee.length), i = e.load(o);
          i && (t[s] = i);
        }
      }
    else if (e === it && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(ee)) {
          const s = o.substring(ee.length), i = e.load(o);
          i && (t[s] = i);
        }
      }
    else if (e === Ee) {
      for (const r of de.keys())
        if (r.startsWith(ee)) {
          const o = r.substring(ee.length), s = e.load(r);
          s && (t[o] = s);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function dr(e) {
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
function ur({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: s = !0,
  saveDelay: i = 500
}) {
  const n = ue(null), c = ue(), u = ue(""), h = ue(!1);
  J(() => {
    if (!t) {
      n.current = null;
      return;
    }
    typeof t == "function" ? n.current = dr(t) : t === "localStorage" ? n.current = Ie("localStorage") : t === "sessionStorage" ? n.current = Ie("sessionStorage") : n.current = Ie("localStorage");
  }, [t]), J(() => {
    if (!n.current || !t || typeof t == "function" || h.current)
      return;
    const l = lr(e, n.current);
    l && (o == null || o(l), h.current = !0);
  }, [e, t]);
  const k = D((l = r) => {
    if (!n.current || !t)
      return;
    const d = JSON.stringify(l);
    if (d !== u.current)
      try {
        ar(e, l, n.current), u.current = d;
      } catch (p) {
        console.warn("Failed to save grid state:", p);
      }
  }, [e, t, r]), v = D((l = r) => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      k(l);
    }, i);
  }, [k, i, r]), S = D(() => {
    if (!(!n.current || !t || typeof t == "function"))
      try {
        cr(e, n.current), u.current = "";
      } catch (l) {
        console.warn("Failed to clear grid state:", l);
      }
  }, [e, t]), b = D((l = r) => {
    c.current && clearTimeout(c.current), k(l);
  }, [k, r]);
  return J(() => {
    if (!(!s || !t))
      return v(r), () => {
        c.current && clearTimeout(c.current);
      };
  }, [r, s, t, v]), J(() => {
    if (!t || typeof t == "function")
      return;
    const l = () => {
      b();
    };
    return window.addEventListener("beforeunload", l), () => {
      window.removeEventListener("beforeunload", l);
    };
  }, [b, t]), J(() => () => {
    c.current && clearTimeout(c.current);
  }, []), {
    saveState: b,
    debouncedSave: v,
    clearState: S,
    isEnabled: !!t
  };
}
function nt(e, t, r) {
  return Math.max(0, e - t - r);
}
function Pr(e, t) {
  return t > 0 ? e / t : 0;
}
function fe(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function _r(e, t) {
  return t > 0 && e <= t;
}
function fr(e, t, r, o, s) {
  if (r === 0)
    return e;
  const i = t <= r, n = o * 2.5;
  return i && e > n ? s : e < r && !i ? o : e;
}
function pr(e, t, r = 0, o = 1 / 0, s = !1) {
  const i = s ? -e : e, n = t + i;
  return fe(n, r, o);
}
function mr(e, t) {
  const r = [];
  return e.forEach((o) => {
    if (o.sizeUnit === "auto")
      r.push("auto");
    else if (o.sizeUnit === "px") {
      const s = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${s}, ${o.size}px)`);
    } else {
      const s = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
      r.push(`var(${s}, ${o.size}fr)`);
    }
  }), r.join(" ");
}
function Nr(e, t) {
  return e * t;
}
function br(e, t) {
  return t > 0 ? e / t : 0;
}
function Or(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Dr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function gr(e, t) {
  const r = D((n) => "touches" in n ? {
    x: n.touches[0].clientX,
    y: n.touches[0].clientY
  } : {
    x: n.clientX,
    y: n.clientY
  }, []), o = D((n, c, u) => {
    const h = e.blocks[n];
    if (!h) return;
    const k = r(u), v = document.querySelector(`[data-divider-id="${c}"]`), S = (v == null ? void 0 : v.getAttribute("data-divider-position")) || "end", l = Object.values(e.blocks).filter(
      (g) => g.parentId === h.parentId
    ).sort(
      (g, E) => (g.order || 0) - (E.order || 0)
    ), d = l.findIndex((g) => g.id === n);
    let p = null;
    if (S === "start" && d > 0 ? p = l[d - 1] : S === "end" && d < l.length - 1 && (p = l[d + 1]), p && h.sizeUnit === "fr" && p.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${n}" when adjacent to px block "${p.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: n,
        dividerId: c,
        startPosition: k,
        initialSize: h.defaultSize || 0,
        initialAdjacentBlockId: p == null ? void 0 : p.id,
        initialAdjacentSize: p ? p.originalDefaultSize || p.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const a = h.parentId ? e.blocks[h.parentId] : null, y = (a == null ? void 0 : a.direction) || "row";
    document.body.style.cursor = y === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), s = D((n) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const c = e.blocks[e.resize.activeBlockId];
    if (!c) return;
    const u = r(n), h = c.parentId ? e.blocks[c.parentId] : null, k = (h == null ? void 0 : h.direction) || "row", v = k === "row" ? u.x - e.resize.startPosition.x : u.y - e.resize.startPosition.y;
    if (c.sizeUnit === "px") {
      const S = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), l = ((S == null ? void 0 : S.getAttribute("data-divider-position")) || "end") === "start", d = pr(
        v,
        e.resize.initialSize,
        c.minSize,
        c.maxSize,
        l
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: d }
      });
    } else if (c.sizeUnit === "fr") {
      const S = Object.values(e.blocks).filter(
        (N) => N.parentId === c.parentId
      ), b = S.filter((N) => N.sizeUnit === "fr"), l = c.parentId ? document.querySelector(`[data-block-id="${c.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = l ? k === "row" ? l.clientWidth : l.clientHeight : 1200, p = S.filter((N) => N.sizeUnit === "px").reduce((N, $) => {
        const G = document.querySelector(`[data-block-id="${$.id}"]`);
        if (!G) return N;
        const B = k === "row" ? G.clientWidth : G.clientHeight;
        return N + B;
      }, 0), y = Array.from(
        (l == null ? void 0 : l.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((N, $) => {
        if (!($ instanceof HTMLElement)) return N;
        const G = k === "row" ? $.clientWidth : $.clientHeight;
        return N + G;
      }, 0), E = nt(d, p, y), T = b.reduce(
        (N, $) => N + ($.defaultSize || 1),
        0
      ), I = T > 0 ? E / T : 0;
      if (I === 0) return;
      const M = br(v, I), m = b.sort(
        (N, $) => (N.order || 0) - ($.order || 0)
      ), _ = m.findIndex(
        (N) => N.id === e.resize.activeBlockId
      ), U = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), H = (U == null ? void 0 : U.getAttribute("data-divider-position")) || "end";
      let q = null;
      if (H === "start" && _ > 0 ? q = m[_ - 1] : H === "end" && _ < m.length - 1 && (q = m[_ + 1]), q) {
        let N, $;
        N = M, $ = -M;
        const G = 0.1, B = Math.max(
          G,
          e.resize.initialSize + N
        ), Y = Math.max(
          G,
          (e.resize.initialAdjacentSize || 1) + $
        ), z = B - e.resize.initialSize, F = Y - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + F) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: B
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: q.id, size: Y }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), i = D(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: s,
    endResize: i
  };
}
function hr(e, t) {
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
      const s = o.collapseTo || 0;
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
      const c = Object.fromEntries(
        Object.entries(e.blocks).map(([u, h]) => [
          u,
          {
            ...h,
            size: h.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: c,
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
function yr(e, t, r) {
  return {
    blocks: e.reduce((s, i) => (s[i.id] = {
      ...i,
      size: i.defaultSize,
      originalDefaultSize: i.defaultSize
      // Store original size for expand functionality
    }, s), {}),
    activeMode: r,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const st = vt(null);
function vr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: s = !1,
  persistKey: i,
  onModeChange: n,
  onLayoutChange: c
}) {
  const { activeMode: u, viewport: h, setMode: k } = ot(r), [v, S] = wt(
    hr,
    yr(t, h, u)
  );
  J(() => {
    S({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), J(() => {
    const g = v.activeMode;
    u !== g && (S({
      type: "SWITCH_MODE",
      payload: { mode: u }
    }), n == null || n(u, g));
  }, [u, v.activeMode, n]);
  const { saveState: b, clearState: l } = ur({
    gridId: i || o,
    enabled: s,
    state: v,
    onStateLoad: (g) => {
      S({ type: "LOAD_STATE", payload: { state: g } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: p, endResize: a } = gr(v, S), y = Z(
    () => ({
      gridId: o,
      state: {
        ...v,
        activeMode: u,
        viewport: h
      },
      dispatch: S,
      // Grid operations
      resizeBlock: (g, E) => {
        S({
          type: "RESIZE_BLOCK",
          payload: { blockId: g, size: E }
        });
      },
      collapseBlock: (g) => {
        S({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: g }
        });
      },
      expandBlock: (g) => {
        S({
          type: "EXPAND_BLOCK",
          payload: { blockId: g }
        });
      },
      switchMode: (g) => {
        k(g);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: p,
      endResize: a,
      // Persistence
      persistState: () => b(v),
      resetState: () => {
        S({ type: "RESET_STATE" }), l();
      }
    }),
    [o, v, u, h, b, l, k, d, p, a]
  );
  return J(() => {
    if (c) {
      const g = Object.values(v.blocks);
      c(g);
    }
  }, [v.blocks, c]), /* @__PURE__ */ A.jsx(st.Provider, { value: y, children: e });
}
function we() {
  const e = xt(st);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Oe() {
  const { state: e } = we();
  return e;
}
function xr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: s,
    resetState: i
  } = we();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: s,
    resetState: i
  };
}
function at() {
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
function wr({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: s,
    updateResize: i,
    endResize: n,
    isDragging: c,
    activeBlockId: u,
    activeDividerId: h
  } = at(), k = D(() => {
    if (!t.current) return 0;
    const p = t.current.getBoundingClientRect();
    return o === "column" ? p.width : p.height;
  }, [o, t]), v = D(() => {
    const p = k();
    if (p === 0) return 0;
    const a = e.filter((T) => T.sizeUnit === "px").reduce((T, I) => T + (I.defaultSize || 0), 0), y = 0, g = e.filter((T) => T.sizeUnit === "fr").reduce((T, I) => T + (I.defaultSize || 1), 0), E = nt(p, a, y);
    return g > 0 ? E / g : 0;
  }, [e, k]), S = D((p) => {
    const a = e.find((y) => y.id === p);
    a && a.defaultSize !== void 0 && (r == null || r(p, a.defaultSize));
  }, [e, r]), b = D((p) => {
    const a = e.find((y) => y.id === p);
    a && a.collapseTo !== void 0 && (r == null || r(p, a.collapseTo));
  }, [e, r]), l = D((p) => {
    const a = e.find((y) => y.id === p);
    a && a.defaultSize !== void 0 && (r == null || r(p, a.defaultSize));
  }, [e, r]), d = D((p) => {
    const a = e.find((y) => y.id === p);
    return !a || !a.collapseAt ? !1 : (a.defaultSize || 0) <= a.collapseAt;
  }, [e]);
  return J(() => {
    const p = (E) => {
      E.preventDefault(), i(E);
    }, a = (E) => {
      E.preventDefault(), i(E);
    }, y = () => {
      n();
    }, g = () => {
      n();
    };
    if (c)
      return document.addEventListener("mousemove", p), document.addEventListener("mouseup", y), document.addEventListener("touchmove", a), document.addEventListener("touchend", g), () => {
        document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", y), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", g);
      };
  }, [c, i, n]), {
    // State
    isDragging: c,
    activeBlockId: u,
    activeDividerId: h,
    // Actions
    startResize: s,
    resetBlock: S,
    collapseBlock: b,
    expandBlock: l,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: k,
    calculatePixelsPerFr: v
  };
}
function kr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: s,
  onExpandBlock: i,
  containerRef: n,
  stepSize: c = 10,
  largeStepSize: u = 50
}) {
  const h = D(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), k = D((d) => {
    if (!d) return null;
    const p = d.dataset.blockId;
    return t.find((a) => a.id === p) || null;
  }, [t]), v = D((d, p) => {
    if (!(n != null && n.current)) return null;
    const a = Array.from(
      n.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), y = d.getBoundingClientRect(), g = {
      x: y.left + y.width / 2,
      y: y.top + y.height / 2
    }, E = a.filter((T) => {
      if (T === d) return !1;
      const I = T.getBoundingClientRect(), M = {
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
    return E.length === 0 ? null : (E.sort((T, I) => {
      const M = T.getBoundingClientRect(), m = I.getBoundingClientRect(), _ = {
        x: M.left + M.width / 2,
        y: M.top + M.height / 2
      }, U = {
        x: m.left + m.width / 2,
        y: m.top + m.height / 2
      }, H = Math.sqrt(
        Math.pow(_.x - g.x, 2) + Math.pow(_.y - g.y, 2)
      ), q = Math.sqrt(
        Math.pow(U.x - g.x, 2) + Math.pow(U.y - g.y, 2)
      );
      return H - q;
    }), E[0]);
  }, [n]), S = D((d) => {
    if (!e) return;
    const p = h();
    if (!p) return;
    const a = k(p);
    if (!a) return;
    const y = d.ctrlKey || d.metaKey, g = d.shiftKey, E = g ? u : c;
    if (!y && !g)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const T = v(p, "up");
          T && (T.focus(), o == null || o(T.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const I = v(p, "down");
          I && (I.focus(), o == null || o(I.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const M = v(p, "left");
          M && (M.focus(), o == null || o(M.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const m = v(p, "right");
          m && (m.focus(), o == null || o(m.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), a.collapsible && (i == null || i(a.id));
          break;
        case "Escape":
          d.preventDefault(), p.blur();
          break;
      }
    if (y && r)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), r(a.id, -E);
          break;
        case "ArrowDown":
          d.preventDefault(), r(a.id, E);
          break;
        case "ArrowLeft":
          d.preventDefault(), r(a.id, -E);
          break;
        case "ArrowRight":
          d.preventDefault(), r(a.id, E);
          break;
      }
    if (y)
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
    h,
    k,
    v,
    r,
    o,
    s,
    i,
    c,
    u
  ]), b = D((d) => {
    if (!(n != null && n.current)) return;
    const p = n.current.querySelector(
      `[data-block-id="${d}"]`
    );
    p && (p.focus(), o == null || o(d));
  }, [n, o]), l = D(() => n != null && n.current ? Array.from(
    n.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [n]);
  return J(() => {
    if (e)
      return document.addEventListener("keydown", S), () => {
        document.removeEventListener("keydown", S);
      };
  }, [S, e]), {
    focusBlock: b,
    getFocusableBlocks: l,
    getFocusedBlock: h,
    isEnabled: e
  };
}
const lt = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: s,
  "aria-label": i
}) => {
  const n = ue(null), c = Oe(), { startResize: u, isDragging: h, activeDividerId: k } = at(), [v, S] = xe({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), b = c.blocks[e], l = r === "vertical", d = `${e}-${t}-divider`, p = h && k === d, a = D(() => {
    const g = document.querySelector("[data-grid-id]"), E = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !E) return;
    const T = g.getBoundingClientRect(), I = E.getBoundingClientRect();
    if (l) {
      const M = t === "start" ? I.left - T.left : I.right - T.left;
      S({
        left: M - o / 2,
        // Center on edge
        top: 0,
        width: o,
        height: T.height
        // Use container height, not scrollHeight
      });
    } else {
      const M = t === "start" ? I.top - T.top : I.bottom - T.top;
      S({
        left: 0,
        top: M - o / 2,
        // Center on edge
        width: T.width,
        // Use container width
        height: o
      });
    }
  }, [e, t, l, o]);
  kt(() => {
    const g = document.querySelector("[data-grid-id]"), E = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !E) return;
    a();
    const T = new ResizeObserver(() => {
      a();
    });
    return T.observe(g), T.observe(E), () => {
      T.disconnect();
    };
  }, [e, a]), J(() => {
    a();
  }, [c.blocks, a]);
  const y = D((g) => {
    g.preventDefault(), u(e, d, g);
  }, [e, d, u]);
  return b ? /* @__PURE__ */ A.jsx(
    "div",
    {
      ref: n,
      className: se(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        p && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        l ? "cursor-col-resize" : "cursor-row-resize",
        s
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
      "aria-valuenow": b == null ? void 0 : b.defaultSize,
      "aria-valuemin": b == null ? void 0 : b.minSize,
      "aria-valuemax": b == null ? void 0 : b.maxSize,
      tabIndex: 0,
      onMouseDown: y,
      onTouchStart: y
    }
  ) : null;
};
lt.displayName = "Divider";
function Sr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function zr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const s = Object.values(e).filter((c) => c.parentId === o.id).sort((c, u) => (c.order || 0) - (u.order || 0));
    if (s.length === 0) return;
    const n = o.direction === "row" ? "vertical" : "horizontal";
    s.forEach((c, u) => {
      if (u === 0) return;
      const h = s[u - 1], { targetId: k, position: v } = Sr(h, c);
      t.push({
        id: `divider-${h.id}-${c.id}`,
        targetBlockId: k,
        position: v,
        direction: n
      });
    });
  }), t;
}
const Er = () => {
  const e = Oe(), t = Z(() => zr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ A.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ A.jsx(
        lt,
        {
          targetId: r.targetBlockId,
          position: r.position,
          direction: r.direction
        },
        r.id
      ))
    }
  );
}, ct = X(({ children: e, className: t, "aria-label": r }, o) => {
  const s = ue(null), {
    state: i,
    resizeBlock: n,
    collapseBlock: c,
    expandBlock: u,
    switchMode: h,
    persistState: k,
    resetState: v
  } = we(), S = i.resize.isDragging;
  St(
    o,
    () => ({
      resizeBlock: n,
      collapseBlock: c,
      expandBlock: u,
      switchMode: h,
      persistState: k,
      resetState: v,
      getState: () => i
    }),
    [
      n,
      c,
      u,
      h,
      k,
      v,
      i
    ]
  );
  const b = Z(() => Object.values(i.blocks).sort((g, E) => (g.order || 0) - (E.order || 0)), [i.blocks]), l = Z(() => b.find((y) => !y.parentId), [b]);
  wr({
    blocks: b,
    containerRef: s,
    onSizeChange: n,
    direction: (l == null ? void 0 : l.direction) || "row"
  }), kr({
    enabled: !0,
    blocks: b,
    containerRef: s,
    onResizeBlock: (y, g) => {
      const E = i.blocks[y];
      if (E) {
        const T = E.defaultSize || 0, I = Math.max(0, T + g);
        n(y, I);
      }
    },
    onCollapseBlock: c,
    onExpandBlock: u
  });
  const { gridStyles: d, cssVariables: p, modeStyles: a } = Z(() => {
    if (!l)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const y = b.reduce((m, _) => {
      if (_.id === l.id) return m;
      const U = _.parentId || l.id;
      return m[U] || (m[U] = []), m[U].push(_), m;
    }, {}), g = b.filter((m) => m.defaultSize !== void 0).map((m) => {
      const _ = m.sizeUnit === "px" ? `${m.defaultSize}px` : `${m.defaultSize}fr`;
      return `--${l.id}-${m.id}-size: ${_};`;
    }).join(`
  `), E = () => {
      let m = "";
      return m += `
[data-grid-id="${l.id}"][data-active-mode="dock"],
[data-grid-id="${l.id}"][data-active-mode="mobile"] {
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
`, m += `
[data-grid-id="${l.id}"][data-active-mode="tabs"],
[data-grid-id="${l.id}"][data-active-mode="tablet"] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
`, m += `
[data-grid-id="${l.id}"][data-active-mode="dock"] .pretty-poly-divider,
[data-grid-id="${l.id}"][data-active-mode="tabs"] .pretty-poly-divider,
[data-grid-id="${l.id}"][data-active-mode="mobile"] .pretty-poly-divider,
[data-grid-id="${l.id}"][data-active-mode="tablet"] .pretty-poly-divider {
  display: none;
}
`, m;
    }, T = (m, _ = /* @__PURE__ */ new Set()) => {
      if (_.has(m))
        return console.warn(`Circular reference detected for parent: ${m}`), "";
      const U = new Set(_);
      U.add(m);
      const H = y[m] || [];
      if (H.length === 0) return "";
      const q = [...H].sort(
        (F, f) => (F.order || 0) - (f.order || 0)
      ), N = b.find((F) => F.id === m) || l, $ = (N == null ? void 0 : N.direction) || "row", G = q.map((F) => ({
        id: F.id,
        sizeUnit: F.sizeUnit || "fr",
        size: F.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), B = mr(G, l.id), Y = $ === "column" ? "grid-template-rows" : "grid-template-columns";
      let z = `
[data-grid-id="${l.id}"][data-block-id="${m}"][data-active-mode="grid"],
[data-grid-id="${l.id}"][data-block-id="${m}"][data-active-mode="desktop"] {
  display: grid;
  ${Y}: ${B};
  ${$ === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const F of q)
        F.type === "group" && (z += T(F.id, U));
      return z;
    }, I = T(l.id), M = E();
    return {
      cssVariables: `:root {
  ${g}
}`,
      gridStyles: I,
      modeStyles: M
    };
  }, [b, l]);
  return l ? /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("style", { type: "text/css", children: [
      p,
      d,
      a
    ] }),
    /* @__PURE__ */ A.jsxs(
      "div",
      {
        ref: s,
        className: se(
          "group relative overflow-hidden",
          S && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": l.id,
        "data-block-id": l.id,
        "data-active-mode": i.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (i.activeMode === "grid" || i.activeMode === "desktop") && /* @__PURE__ */ A.jsx(Er, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
ct.displayName = "GridInternal";
const Tr = X(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: s,
    onLayoutChange: i,
    onModeChange: n,
    className: c,
    dividers: u = "manual",
    dividerConfig: h,
    "aria-label": k
  }, v) => {
    const S = t.find((l) => !l.parentId), b = (S == null ? void 0 : S.id) || "root";
    return /* @__PURE__ */ A.jsx(
      vr,
      {
        blocks: t,
        modes: r,
        gridId: b,
        persist: o,
        persistKey: s,
        onLayoutChange: i,
        onModeChange: n,
        children: /* @__PURE__ */ A.jsx(
          ct,
          {
            ref: v,
            className: c,
            dividers: u,
            dividerConfig: h,
            "aria-label": k,
            children: e
          }
        )
      }
    );
  }
);
Tr.displayName = "Grid";
const dt = X(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, s) => {
    const i = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ A.jsx(
      "div",
      {
        ref: s,
        className: se(
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
dt.displayName = "Block.Content";
const ut = X(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, s) => /* @__PURE__ */ A.jsx(
    "div",
    {
      ref: s,
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
ut.displayName = "Block.Header";
const ft = X(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ A.jsx(
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
ft.displayName = "Block.Footer";
const pt = X(
  ({ left: e, center: t, right: r, className: o, "aria-label": s }, i) => /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: i,
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
      "aria-label": s || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ A.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ A.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ A.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
pt.displayName = "Block.Toolbar";
const mt = X(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: s,
    "aria-label": i,
    allowOverflow: n = !0
  }, c) => {
    const [u, h] = xe(null), k = (b, l) => {
      l.preventDefault(), b.disabled || r(b.id);
    }, v = (b, l) => {
      l.preventDefault(), l.stopPropagation(), o && b.closable && o(b.id);
    }, S = (b, l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), b.disabled || r(b.id));
    };
    return /* @__PURE__ */ A.jsx(
      "div",
      {
        ref: c,
        className: ie(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-gray-200",
          "bg-white",
          n ? "overflow-x-auto" : "overflow-x-hidden",
          s
        ),
        role: "tablist",
        "aria-label": i || "Block tabs",
        children: /* @__PURE__ */ A.jsx("div", { className: "flex items-center min-w-0", children: e.map((b) => {
          const l = b.id === t, d = u === b.id, p = b.icon;
          return /* @__PURE__ */ A.jsxs(
            "div",
            {
              className: ie(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                l ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                b.disabled && "opacity-50 cursor-not-allowed",
                !n && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": l,
              "aria-disabled": b.disabled,
              tabIndex: b.disabled ? -1 : 0,
              onClick: (a) => k(b, a),
              onKeyDown: (a) => S(b, a),
              onMouseEnter: () => h(b.id),
              onMouseLeave: () => h(null),
              "data-tab-id": b.id,
              children: [
                p && /* @__PURE__ */ A.jsx(p, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ A.jsx("span", { className: "truncate min-w-0", children: b.label }),
                b.closable && o && /* @__PURE__ */ A.jsx(
                  "button",
                  {
                    className: ie(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || l ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (a) => v(b, a),
                    "aria-label": `Close ${b.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ A.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ A.jsx(
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
mt.displayName = "Block.Tabs";
const De = X(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": s }, i) => /* @__PURE__ */ A.jsx(
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
      "aria-label": s || "Sidebar navigation",
      role: "navigation",
      children: o
    }
  )
);
De.displayName = "Block.Sidebar";
const bt = X(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: s,
    onClick: i,
    className: n,
    "aria-label": c
  }, u) => {
    const [h, k] = xe(!1), v = () => {
      t && !o && k(!0);
    }, S = () => {
      k(!1);
    }, b = () => {
      !o && i && i();
    }, l = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), b());
    };
    return /* @__PURE__ */ A.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ A.jsxs(
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
          onClick: b,
          onKeyDown: l,
          onMouseEnter: v,
          onMouseLeave: S,
          "aria-label": c || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ A.jsx(
              e,
              {
                className: ie(
                  "w-5 h-5",
                  r ? "text-white" : "text-gray-400",
                  !o && "group-hover:text-white"
                )
              }
            ),
            s && /* @__PURE__ */ A.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof s == "number" && s > 99 ? "99+" : s }),
            r && /* @__PURE__ */ A.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      h && t && /* @__PURE__ */ A.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ A.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ A.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
bt.displayName = "Block.Sidebar.Item";
const gt = X(
  ({ className: e }, t) => /* @__PURE__ */ A.jsx(
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
gt.displayName = "Block.Sidebar.Spacer";
function Ar(e, t) {
  const r = e[t] || {}, { id: o, type: s, direction: i, children: n, className: c, divider: u, noDivider: h, "aria-label": k, ...v } = e;
  return {
    ...Object.fromEntries(
      Object.entries(v).filter(
        ([b]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion", "divider", "noDivider"].includes(b)
      )
    ),
    ...r
  };
}
function Ir(e) {
  let t = !1;
  return Ve.forEach(e, (r) => {
    var o, s;
    if (Fe(r)) {
      const i = ((o = r.type) == null ? void 0 : o.displayName) || ((s = r.type) == null ? void 0 : s.name);
      i && (i === "Block.Header" || i === "Block.Content" || i === "Block.Footer" || i === "Block.Toolbar" || i === "Block.Tabs" || i === "Block.Sidebar") && (t = !0);
    }
  }), t;
}
function Rr(e) {
  let t = !1;
  return Ve.forEach(e, (r) => {
    var o, s;
    Fe(r) && (((o = r.type) == null ? void 0 : o.displayName) || ((s = r.type) == null ? void 0 : s.name)) === "Block.Sidebar" && (t = !0);
  }), t;
}
const $e = X(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: s,
    divider: i,
    noDivider: n,
    "aria-label": c,
    ...u
  }, h) => {
    const { gridId: k } = we(), v = Oe(), { collapseBlock: S, expandBlock: b } = xr(), { activeMode: l, currentLayoutType: d, supportsFeature: p } = ot(), a = v == null ? void 0 : v.blocks[e], y = Ar({ id: e, type: t, direction: r, children: o, className: s, "aria-label": c, ...u }, l), g = Z(() => Ir(o), [o]), E = Z(() => Rr(o), [o]), T = Z(() => y.hidden ? !1 : d === "dock" ? !!(y.icon || y.label) : !0, [d, y]), I = Z(() => a != null && a.collapsible && a.collapseAt ? (a.size ?? a.defaultSize ?? 0) <= a.collapseAt : !1, [a]), M = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? b(e) : S(e));
    };
    if (!T)
      return null;
    const m = y.icon;
    return /* @__PURE__ */ A.jsxs(
      "div",
      {
        ref: h,
        className: se(
          // Base styles (always applied)
          "relative transition-opacity duration-150",
          // Grid mode styles (default)
          "overflow-hidden",
          g && !E && "flex flex-col h-full",
          g && E && "flex flex-row h-full",
          I && "opacity-70",
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
          y.className,
          s
        ),
        "data-grid-id": k,
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
        "data-block-divider": i !== void 0 ? JSON.stringify(i) : void 0,
        "data-block-no-divider": n,
        "data-structured": g,
        "data-has-sidebar": E,
        "data-dock-order": y.dockOrder,
        "aria-label": c || (d === "dock" ? y.label : d === "tabs" ? y.tabLabel : void 0),
        role: d === "dock" ? "button" : d === "tabs" ? "tabpanel" : t === "group" ? "group" : void 0,
        tabIndex: d === "dock" || p("resizing") ? 0 : void 0,
        onDoubleClick: p("collapse") ? M : void 0,
        style: {
          ...y.style,
          // CSS Grid area assignment handled by parent in grid mode
          // Dock order controlled by data attribute and CSS
          order: d === "dock" ? y.dockOrder : void 0
        },
        children: [
          d === "dock" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            m && /* @__PURE__ */ A.jsx(m, { className: "w-6 h-6 mb-1" }),
            y.label && /* @__PURE__ */ A.jsx("span", { className: "text-xs font-medium text-center", children: y.label })
          ] }),
          d !== "dock" && o
        ]
      }
    );
  }
);
$e.displayName = "Block";
const ht = X(
  (e, t) => /* @__PURE__ */ A.jsx($e, { ref: t, ...e, type: "group" })
);
ht.displayName = "Block.Group";
Object.assign($e, {
  Group: ht,
  Header: ut,
  Content: dt,
  Footer: ft,
  Toolbar: pt,
  Tabs: mt,
  Sidebar: De
});
Object.assign(De, {
  Item: bt,
  Spacer: gt
});
function $r(e, t, r) {
  const o = [];
  let s = e;
  const i = t.minSize ?? 0, n = t.maxSize ?? 1 / 0;
  if (e < i && (o.push(`Size ${e} is below minimum ${i}`), s = i), e > n && (o.push(`Size ${e} exceeds maximum ${n}`), s = n), s = fe(s, i, n), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const c = t.collapseAt ?? 0, u = t.collapseTo ?? 0, h = t.defaultSize ?? s;
    s = fr(
      s,
      r,
      c,
      u,
      h
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: s,
    violations: o
  };
}
function Cr(e, t, r, o, s = 1) {
  const i = [];
  let n = r, c = o;
  const u = ce(e.minSize ?? 0, e.sizeUnit, s), h = ce(e.maxSize ?? 1 / 0, e.sizeUnit, s), k = ce(t.minSize ?? 0, t.sizeUnit, s), v = ce(t.maxSize ?? 1 / 0, t.sizeUnit, s), S = ce(e.defaultSize ?? 0, e.sizeUnit, s), b = ce(t.defaultSize ?? 0, t.sizeUnit, s), l = S + r, d = b + o;
  let p = fe(l, u, h), a = fe(d, k, v);
  n = p - S, c = a - b;
  const y = n + c;
  if (Math.abs(y) > 1e-3) {
    const T = Math.abs(n) < Math.abs(r), I = Math.abs(c) < Math.abs(o);
    if (T && !I) {
      const M = b - n;
      a = fe(M, k, v), c = a - b;
    } else if (I && !T) {
      const M = S - c;
      p = fe(M, u, h), n = p - S;
    }
    i.push("Zero-sum constraint violated, deltas adjusted");
  }
  const g = n + c;
  return {
    isValid: Math.abs(g) <= 1e-3,
    adjustedTargetDelta: n,
    adjustedAdjacentDelta: c,
    violations: i
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
function Lr(e, t) {
  const r = [], o = e.filter((i) => i.sizeUnit === "px").reduce((i, n) => i + (t[n.id] ?? n.defaultSize ?? 0), 0), s = e.filter((i) => i.sizeUnit === "fr").reduce((i, n) => i + (t[n.id] ?? n.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), s <= 0 && e.some((i) => i.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((i) => {
    const n = t[i.id] ?? i.defaultSize ?? 0, c = i.minSize ?? 0, u = i.maxSize ?? 1 / 0;
    c > u && r.push(`Block ${i.id}: minSize (${c}) > maxSize (${u})`), (n < c || n > u) && r.push(`Block ${i.id}: size ${n} violates constraints [${c}, ${u}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
export {
  $e as Block,
  dt as BlockContent,
  ft as BlockFooter,
  ht as BlockGroup,
  ut as BlockHeader,
  De as BlockSidebar,
  bt as BlockSidebarItem,
  gt as BlockSidebarSpacer,
  mt as BlockTabs,
  pt as BlockToolbar,
  lt as Divider,
  Tr as Grid,
  vr as GridProvider,
  fr as applyCollapseLogic,
  pr as calculateConstrainedSize,
  fe as clamp,
  se as cn,
  dr as createCustomAdapter,
  sr as defaultModes,
  Or as findAdjacentBlock,
  Nr as frToPx,
  mr as generateGridTemplate,
  Mr as getAllGridStates,
  nt as getFlexSpacePx,
  Ie as getStorageAdapter,
  _r as isCollapsed,
  Dr as isZeroSum,
  lr as loadGridState,
  pe as localStorageAdapter,
  Ee as memoryStorageAdapter,
  Pr as pxPerFr,
  br as pxToFr,
  cr as removeGridState,
  ar as saveGridState,
  it as sessionStorageAdapter,
  xr as useGridActions,
  we as useGridContext,
  kr as useGridKeyboard,
  ot as useGridMode,
  ur as useGridPersistence,
  wr as useGridResize,
  Oe as useGridState,
  $r as validateBlockSize,
  Lr as validateLayoutIntegrity,
  Cr as validateTwoWayResize
};
