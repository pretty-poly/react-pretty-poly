import yt, { useState as xe, useCallback as D, useMemo as K, useEffect as Z, useRef as ue, createContext as vt, useContext as xt, useReducer as wt, useLayoutEffect as kt, forwardRef as J, useImperativeHandle as St, Children as Ve, isValidElement as Fe } from "react";
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
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === C ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case d:
          return "Fragment";
        case a:
          return "Profiler";
        case b:
          return "StrictMode";
        case E:
          return "Suspense";
        case A:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case l:
            return "Portal";
          case g:
            return (u.displayName || "Context") + ".Provider";
          case y:
            return (u._context.displayName || "Context") + ".Consumer";
          case T:
            var I = u.render;
            return u = u.displayName, u || (u = I.displayName || I.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case j:
            return I = u.displayName || null, I !== null ? I : e(u.type) || "Memo";
          case m:
            I = u._payload, u = u._init;
            try {
              return e(u(I));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var O = I.error, _ = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return O.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(u);
      }
    }
    function o(u) {
      if (u === d) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === m)
        return "<...>";
      try {
        var I = e(u);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = q.A;
      return u === null ? null : u.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function n(u) {
      if (F.call(u, "key")) {
        var I = Object.getOwnPropertyDescriptor(u, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, I) {
      function O() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: O,
        configurable: !0
      });
    }
    function p() {
      var u = e(this.type);
      return W[u] || (W[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function h(u, I, O, _, L, Y, ae, G) {
      return O = Y.ref, u = {
        $$typeof: f,
        type: u,
        key: I,
        props: Y,
        _owner: L
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function k(u, I, O, _, L, Y, ae, G) {
      var B = I.children;
      if (B !== void 0)
        if (_)
          if (N(B)) {
            for (_ = 0; _ < B.length; _++)
              v(B[_]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(B);
      if (F.call(I, "key")) {
        B = e(u);
        var X = Object.keys(I).filter(function(ge) {
          return ge !== "key";
        });
        _ = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", Q[B + _] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          B,
          X,
          B
        ), Q[B + _] = !0);
      }
      if (B = null, O !== void 0 && (r(O), B = "" + O), n(I) && (r(I.key), B = "" + I.key), "key" in I) {
        O = {};
        for (var re in I)
          re !== "key" && (O[re] = I[re]);
      } else O = I;
      return B && c(
        O,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), h(
        u,
        B,
        Y,
        L,
        s(),
        O,
        ae,
        G
      );
    }
    function v(u) {
      typeof u == "object" && u !== null && u.$$typeof === f && u._store && (u._store.validated = 1);
    }
    var S = yt, f = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), g = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), q = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, N = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var U, W = {}, H = S.react_stack_bottom_frame.bind(
      S,
      i
    )(), z = $(o(i)), Q = {};
    ye.Fragment = d, ye.jsx = function(u, I, O, _, L) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return k(
        u,
        I,
        O,
        !1,
        _,
        L,
        Y ? Error("react-stack-top-frame") : H,
        Y ? $(o(u)) : z
      );
    }, ye.jsxs = function(u, I, O, _, L) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return k(
        u,
        I,
        O,
        !0,
        _,
        L,
        Y ? Error("react-stack-top-frame") : H,
        Y ? $(o(u)) : z
      );
    };
  }()), ye;
}
process.env.NODE_ENV === "production" ? Re.exports = zt() : Re.exports = Et();
var R = Re.exports;
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
      const p = r[n] || [];
      return c && o[n] ? [...p, ...o[n]] : p;
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
    let n = 0, c = 0, p = 0, h;
    for (let l = 0; l < s.length; l++) {
      let d = s[l];
      if (n === 0 && c === 0) {
        if (d === Pe) {
          i.push(s.slice(p, l)), p = l + Mt;
          continue;
        }
        if (d === "/") {
          h = l;
          continue;
        }
      }
      d === "[" ? n++ : d === "]" ? n-- : d === "(" ? c++ : d === ")" && c--;
    }
    const k = i.length === 0 ? s : s.substring(p), v = _t(k), S = v !== k, f = h && h > p ? h - p : void 0;
    return {
      modifiers: i,
      hasImportantModifier: S,
      baseClassName: v,
      maybePostfixModifierPosition: f
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
  let p = "";
  for (let h = c.length - 1; h >= 0; h -= 1) {
    const k = c[h], {
      isExternal: v,
      modifiers: S,
      hasImportantModifier: f,
      baseClassName: l,
      maybePostfixModifierPosition: d
    } = r(k);
    if (v) {
      p = k + (p.length > 0 ? " " + p : p);
      continue;
    }
    let b = !!d, a = o(b ? l.substring(0, d) : l);
    if (!a) {
      if (!b) {
        p = k + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (a = o(l), !a) {
        p = k + (p.length > 0 ? " " + p : p);
        continue;
      }
      b = !1;
    }
    const y = i(S).join(":"), g = f ? y + Me : y, T = g + a;
    if (n.includes(T))
      continue;
    n.push(T);
    const E = s(a, b);
    for (let A = 0; A < E.length; ++A) {
      const j = E[A];
      n.push(g + j);
    }
    p = k + (p.length > 0 ? " " + p : p);
  }
  return p;
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
  function n(p) {
    const h = t.reduce((k, v) => v(k), e());
    return r = Ot(h), o = r.cache.get, s = r.cache.set, i = c, c(p);
  }
  function c(p) {
    const h = o(p);
    if (h)
      return h;
    const k = $t(p, r);
    return s(p, k), k;
  }
  return function() {
    return i(Ct.apply(null, arguments));
  };
}
const V = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ke = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ze = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Gt = /^\d+\/\d+$/, Ut = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Vt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ft = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, le = (e) => Gt.test(e), M = (e) => !!e && !Number.isNaN(Number(e)), oe = (e) => !!e && Number.isInteger(Number(e)), Te = (e) => e.endsWith("%") && M(e.slice(0, -1)), te = (e) => Ut.test(e), qt = () => !0, Ht = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wt.test(e) && !Bt.test(e)
), Je = () => !1, Yt = (e) => Vt.test(e), Kt = (e) => Ft.test(e), Zt = (e) => !x(e) && !w(e), Jt = (e) => me(e, et, Je), x = (e) => Ke.test(e), ne = (e) => me(e, tt, Ht), Ae = (e) => me(e, rr, M), We = (e) => me(e, Xe, Je), Xt = (e) => me(e, Qe, Kt), Se = (e) => me(e, rt, Yt), w = (e) => Ze.test(e), ve = (e) => be(e, tt), Qt = (e) => be(e, or), Be = (e) => be(e, Xe), er = (e) => be(e, et), tr = (e) => be(e, Qe), ze = (e) => be(e, rt, !0), me = (e, t, r) => {
  const o = Ke.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = Ze.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, Xe = (e) => e === "position" || e === "percentage", Qe = (e) => e === "image" || e === "url", et = (e) => e === "length" || e === "size" || e === "bg-size", tt = (e) => e === "length", rr = (e) => e === "number", or = (e) => e === "family-name", rt = (e) => e === "shadow", ir = () => {
  const e = V("color"), t = V("font"), r = V("text"), o = V("font-weight"), s = V("tracking"), i = V("leading"), n = V("breakpoint"), c = V("container"), p = V("spacing"), h = V("radius"), k = V("shadow"), v = V("inset-shadow"), S = V("text-shadow"), f = V("drop-shadow"), l = V("blur"), d = V("perspective"), b = V("aspect"), a = V("ease"), y = V("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
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
  ], E = () => [...T(), w, x], A = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], m = () => [w, x, p], P = () => [le, "full", "auto", ...m()], C = () => [oe, "none", "subgrid", w, x], q = () => ["auto", {
    span: ["full", oe, w, x]
  }, oe, w, x], F = () => [oe, "auto", w, x], N = () => ["auto", "min", "max", "fr", w, x], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...m()], H = () => [le, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], z = () => [e, w, x], Q = () => [...T(), Be, We, {
    position: [w, x]
  }], u = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], I = () => ["auto", "cover", "contain", er, Jt, {
    size: [w, x]
  }], O = () => [Te, ve, ne], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    w,
    x
  ], L = () => ["", M, ve, ne], Y = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => [M, Te, Be, We], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    l,
    w,
    x
  ], X = () => ["none", M, w, x], re = () => ["none", M, w, x], ge = () => [M, w, x], ke = () => [le, "full", ...m()];
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
      spacing: ["px", M],
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
        aspect: ["auto", "square", le, x, w, b]
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
        columns: [M, x, w, c]
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
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
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
        flex: [M, le, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", M, w, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", M, w, x]
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
        "grid-cols": C()
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
        "grid-rows": C()
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
        content: ["normal", ...$()]
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
        "place-content": $()
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
        size: H()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...H()]
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
          ...H()
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
        "line-clamp": [M, "none", w, Ae]
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [M, "from-font", "auto", w, ne]
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
        "underline-offset": [M, "auto", w, x]
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
        bg: Q()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: u()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: I()
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
        "outline-offset": [M, w, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", M, ve, ne]
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
        "ring-offset": [M, ne]
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
        opacity: [M, w, x]
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
        "mask-linear": [M]
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
        "mask-conic": [M]
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
        mask: u()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: I()
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
        blur: B()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [M, w, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [M, w, x]
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
        grayscale: ["", M, w, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [M, w, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", M, w, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M, w, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", M, w, x]
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
        "backdrop-blur": B()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [M, w, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [M, w, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", M, w, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [M, w, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", M, w, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [M, w, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M, w, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", M, w, x]
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
        duration: [M, "initial", w, x]
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
        delay: [M, w, x]
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
        stroke: [M, ve, ne, Ae]
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
  }, []), n = K(() => {
    var d;
    if (o && e[o])
      return o;
    const l = Object.entries(e).filter(([b, a]) => {
      if (a.matcher)
        return a.matcher(t);
      const y = !a.minWidth || t.width >= a.minWidth, g = !a.maxWidth || t.width <= a.maxWidth;
      return y && g;
    });
    return l.sort(([, b], [, a]) => {
      const y = (b.minWidth ? 1 : 0) + (b.maxWidth ? 1 : 0);
      return (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0) - y;
    }), ((d = l[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), c = K(() => e[n], [e, n]), p = K(() => (c == null ? void 0 : c.type) || "grid", [c]), h = D((l) => {
    if (l && !e[l]) {
      console.warn(`Mode "${l}" not found in configuration`);
      return;
    }
    s(l);
  }, [e]), k = D((l) => n === l, [n]), v = K(() => Object.keys(e), [e]), S = D((l) => {
    switch (p) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(l);
      case "tabs":
        return l === "tabs";
      case "dock":
        return l === "dock";
      default:
        return !1;
    }
  }, [p]), f = K(() => {
    const l = Object.entries(e).map(([y, g]) => ({ name: y, ...g })).sort((y, g) => (y.breakpoint || 0) - (g.breakpoint || 0)), d = l.findIndex((y) => y.name === n), b = l[d + 1], a = l[d - 1];
    return {
      current: n,
      currentBreakpoint: (c == null ? void 0 : c.breakpoint) || 0,
      nextMode: b == null ? void 0 : b.name,
      nextBreakpoint: b == null ? void 0 : b.breakpoint,
      prevMode: a == null ? void 0 : a.name,
      prevBreakpoint: a == null ? void 0 : a.breakpoint,
      isSmallest: d === 0,
      isLargest: d === l.length - 1
    };
  }, [e, n, c]);
  return Z(() => {
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
    currentLayoutType: p,
    // Mode management
    setMode: h,
    isMode: k,
    availableModes: v,
    // Features and capabilities
    supportsFeature: S,
    breakpointInfo: f,
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
  const n = ue(null), c = ue(), p = ue(""), h = ue(!1);
  Z(() => {
    if (!t) {
      n.current = null;
      return;
    }
    typeof t == "function" ? n.current = dr(t) : t === "localStorage" ? n.current = Ie("localStorage") : t === "sessionStorage" ? n.current = Ie("sessionStorage") : n.current = Ie("localStorage");
  }, [t]), Z(() => {
    if (!n.current || !t || typeof t == "function" || h.current)
      return;
    const l = lr(e, n.current);
    l && (o == null || o(l), h.current = !0);
  }, [e, t]);
  const k = D((l = r) => {
    if (!n.current || !t)
      return;
    const d = JSON.stringify(l);
    if (d !== p.current)
      try {
        ar(e, l, n.current), p.current = d;
      } catch (b) {
        console.warn("Failed to save grid state:", b);
      }
  }, [e, t, r]), v = D((l = r) => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      k(l);
    }, i);
  }, [k, i, r]), S = D(() => {
    if (!(!n.current || !t || typeof t == "function"))
      try {
        cr(e, n.current), p.current = "";
      } catch (l) {
        console.warn("Failed to clear grid state:", l);
      }
  }, [e, t]), f = D((l = r) => {
    c.current && clearTimeout(c.current), k(l);
  }, [k, r]);
  return Z(() => {
    if (!(!s || !t))
      return v(r), () => {
        c.current && clearTimeout(c.current);
      };
  }, [r, s, t, v]), Z(() => {
    if (!t || typeof t == "function")
      return;
    const l = () => {
      f();
    };
    return window.addEventListener("beforeunload", l), () => {
      window.removeEventListener("beforeunload", l);
    };
  }, [f, t]), Z(() => () => {
    c.current && clearTimeout(c.current);
  }, []), {
    saveState: f,
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
  }, []), o = D((n, c, p) => {
    const h = e.blocks[n];
    if (!h) return;
    const k = r(p), v = document.querySelector(`[data-divider-id="${c}"]`), S = (v == null ? void 0 : v.getAttribute("data-divider-position")) || "end", l = Object.values(e.blocks).filter(
      (g) => g.parentId === h.parentId
    ).sort(
      (g, T) => (g.order || 0) - (T.order || 0)
    ), d = l.findIndex((g) => g.id === n);
    let b = null;
    if (S === "start" && d > 0 ? b = l[d - 1] : S === "end" && d < l.length - 1 && (b = l[d + 1]), b && h.sizeUnit === "fr" && b.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${n}" when adjacent to px block "${b.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
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
        initialAdjacentBlockId: b == null ? void 0 : b.id,
        initialAdjacentSize: b ? b.originalDefaultSize || b.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const a = h.parentId ? e.blocks[h.parentId] : null, y = (a == null ? void 0 : a.direction) || "row";
    document.body.style.cursor = y === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), s = D((n) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const c = e.blocks[e.resize.activeBlockId];
    if (!c) return;
    const p = r(n), h = c.parentId ? e.blocks[c.parentId] : null, k = (h == null ? void 0 : h.direction) || "row", v = k === "row" ? p.x - e.resize.startPosition.x : p.y - e.resize.startPosition.y;
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
      ), f = S.filter((N) => N.sizeUnit === "fr"), l = c.parentId ? document.querySelector(`[data-block-id="${c.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = l ? k === "row" ? l.clientWidth : l.clientHeight : 1200, b = S.filter((N) => N.sizeUnit === "px").reduce((N, $) => {
        const U = document.querySelector(`[data-block-id="${$.id}"]`);
        if (!U) return N;
        const W = k === "row" ? U.clientWidth : U.clientHeight;
        return N + W;
      }, 0), y = Array.from(
        (l == null ? void 0 : l.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((N, $) => {
        if (!($ instanceof HTMLElement)) return N;
        const U = k === "row" ? $.clientWidth : $.clientHeight;
        return N + U;
      }, 0), T = nt(d, b, y), E = f.reduce(
        (N, $) => N + ($.defaultSize || 1),
        0
      ), A = E > 0 ? T / E : 0;
      if (A === 0) return;
      const j = br(v, A), m = f.sort(
        (N, $) => (N.order || 0) - ($.order || 0)
      ), P = m.findIndex(
        (N) => N.id === e.resize.activeBlockId
      ), C = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), q = (C == null ? void 0 : C.getAttribute("data-divider-position")) || "end";
      let F = null;
      if (q === "start" && P > 0 ? F = m[P - 1] : q === "end" && P < m.length - 1 && (F = m[P + 1]), F) {
        let N, $;
        N = j, $ = -j;
        const U = 0.1, W = Math.max(
          U,
          e.resize.initialSize + N
        ), H = Math.max(
          U,
          (e.resize.initialAdjacentSize || 1) + $
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
        Object.entries(e.blocks).map(([p, h]) => [
          p,
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
  const { activeMode: p, viewport: h, setMode: k } = ot(r), [v, S] = wt(
    hr,
    yr(t, h, p)
  );
  Z(() => {
    S({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), Z(() => {
    const g = v.activeMode;
    p !== g && (S({
      type: "SWITCH_MODE",
      payload: { mode: p }
    }), n == null || n(p, g));
  }, [p, v.activeMode, n]);
  const { saveState: f, clearState: l } = ur({
    gridId: i || o,
    enabled: s,
    state: v,
    onStateLoad: (g) => {
      S({ type: "LOAD_STATE", payload: { state: g } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: b, endResize: a } = gr(v, S), y = K(
    () => ({
      gridId: o,
      state: {
        ...v,
        activeMode: p,
        viewport: h
      },
      dispatch: S,
      // Grid operations
      resizeBlock: (g, T) => {
        S({
          type: "RESIZE_BLOCK",
          payload: { blockId: g, size: T }
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
      updateResize: b,
      endResize: a,
      // Persistence
      persistState: () => f(v),
      resetState: () => {
        S({ type: "RESET_STATE" }), l();
      }
    }),
    [o, v, p, h, f, l, k, d, b, a]
  );
  return Z(() => {
    if (c) {
      const g = Object.values(v.blocks);
      c(g);
    }
  }, [v.blocks, c]), /* @__PURE__ */ R.jsx(st.Provider, { value: y, children: e });
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
    activeBlockId: p,
    activeDividerId: h
  } = at(), k = D(() => {
    if (!t.current) return 0;
    const b = t.current.getBoundingClientRect();
    return o === "column" ? b.width : b.height;
  }, [o, t]), v = D(() => {
    const b = k();
    if (b === 0) return 0;
    const a = e.filter((E) => E.sizeUnit === "px").reduce((E, A) => E + (A.defaultSize || 0), 0), y = 0, g = e.filter((E) => E.sizeUnit === "fr").reduce((E, A) => E + (A.defaultSize || 1), 0), T = nt(b, a, y);
    return g > 0 ? T / g : 0;
  }, [e, k]), S = D((b) => {
    const a = e.find((y) => y.id === b);
    a && a.defaultSize !== void 0 && (r == null || r(b, a.defaultSize));
  }, [e, r]), f = D((b) => {
    const a = e.find((y) => y.id === b);
    a && a.collapseTo !== void 0 && (r == null || r(b, a.collapseTo));
  }, [e, r]), l = D((b) => {
    const a = e.find((y) => y.id === b);
    a && a.defaultSize !== void 0 && (r == null || r(b, a.defaultSize));
  }, [e, r]), d = D((b) => {
    const a = e.find((y) => y.id === b);
    return !a || !a.collapseAt ? !1 : (a.defaultSize || 0) <= a.collapseAt;
  }, [e]);
  return Z(() => {
    const b = (T) => {
      T.preventDefault(), i(T);
    }, a = (T) => {
      T.preventDefault(), i(T);
    }, y = () => {
      n();
    }, g = () => {
      n();
    };
    if (c)
      return document.addEventListener("mousemove", b), document.addEventListener("mouseup", y), document.addEventListener("touchmove", a), document.addEventListener("touchend", g), () => {
        document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", y), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", g);
      };
  }, [c, i, n]), {
    // State
    isDragging: c,
    activeBlockId: p,
    activeDividerId: h,
    // Actions
    startResize: s,
    resetBlock: S,
    collapseBlock: f,
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
  largeStepSize: p = 50
}) {
  const h = D(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), k = D((d) => {
    if (!d) return null;
    const b = d.dataset.blockId;
    return t.find((a) => a.id === b) || null;
  }, [t]), v = D((d, b) => {
    if (!(n != null && n.current)) return null;
    const a = Array.from(
      n.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), y = d.getBoundingClientRect(), g = {
      x: y.left + y.width / 2,
      y: y.top + y.height / 2
    }, T = a.filter((E) => {
      if (E === d) return !1;
      const A = E.getBoundingClientRect(), j = {
        x: A.left + A.width / 2,
        y: A.top + A.height / 2
      };
      switch (b) {
        case "up":
          return j.y < g.y;
        case "down":
          return j.y > g.y;
        case "left":
          return j.x < g.x;
        case "right":
          return j.x > g.x;
        default:
          return !1;
      }
    });
    return T.length === 0 ? null : (T.sort((E, A) => {
      const j = E.getBoundingClientRect(), m = A.getBoundingClientRect(), P = {
        x: j.left + j.width / 2,
        y: j.top + j.height / 2
      }, C = {
        x: m.left + m.width / 2,
        y: m.top + m.height / 2
      }, q = Math.sqrt(
        Math.pow(P.x - g.x, 2) + Math.pow(P.y - g.y, 2)
      ), F = Math.sqrt(
        Math.pow(C.x - g.x, 2) + Math.pow(C.y - g.y, 2)
      );
      return q - F;
    }), T[0]);
  }, [n]), S = D((d) => {
    if (!e) return;
    const b = h();
    if (!b) return;
    const a = k(b);
    if (!a) return;
    const y = d.ctrlKey || d.metaKey, g = d.shiftKey, T = g ? p : c;
    if (!y && !g)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const E = v(b, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const A = v(b, "down");
          A && (A.focus(), o == null || o(A.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const j = v(b, "left");
          j && (j.focus(), o == null || o(j.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const m = v(b, "right");
          m && (m.focus(), o == null || o(m.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), a.collapsible && (i == null || i(a.id));
          break;
        case "Escape":
          d.preventDefault(), b.blur();
          break;
      }
    if (y && r)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), r(a.id, -T);
          break;
        case "ArrowDown":
          d.preventDefault(), r(a.id, T);
          break;
        case "ArrowLeft":
          d.preventDefault(), r(a.id, -T);
          break;
        case "ArrowRight":
          d.preventDefault(), r(a.id, T);
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
    p
  ]), f = D((d) => {
    if (!(n != null && n.current)) return;
    const b = n.current.querySelector(
      `[data-block-id="${d}"]`
    );
    b && (b.focus(), o == null || o(d));
  }, [n, o]), l = D(() => n != null && n.current ? Array.from(
    n.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [n]);
  return Z(() => {
    if (e)
      return document.addEventListener("keydown", S), () => {
        document.removeEventListener("keydown", S);
      };
  }, [S, e]), {
    focusBlock: f,
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
  const n = ue(null), c = Oe(), { startResize: p, isDragging: h, activeDividerId: k } = at(), [v, S] = xe({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), f = c.blocks[e], l = r === "vertical", d = `${e}-${t}-divider`, b = h && k === d, a = D(() => {
    const g = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !T) return;
    const E = g.getBoundingClientRect(), A = T.getBoundingClientRect(), j = f == null ? void 0 : f.parentId, m = j ? document.querySelector(`[data-block-id="${j}"]`) : g;
    if (!m) return;
    const P = m.getBoundingClientRect();
    if (l) {
      const C = t === "start" ? A.left - E.left : A.right - E.left;
      S({
        left: C - o / 2,
        // Center on edge
        top: P.top - E.top,
        // Position relative to parent
        width: o,
        height: P.height
        // Use parent height to constrain divider
      });
    } else {
      const C = t === "start" ? A.top - E.top : A.bottom - E.top;
      S({
        left: P.left - E.left,
        // Position relative to parent
        top: C - o / 2,
        // Center on edge
        width: P.width,
        // Use parent width to constrain divider
        height: o
      });
    }
  }, [e, t, l, o, f == null ? void 0 : f.parentId]);
  kt(() => {
    const g = document.querySelector("[data-grid-id]"), T = document.querySelector(`[data-block-id="${e}"]`);
    if (!g || !T) return;
    a();
    const E = new ResizeObserver(() => {
      a();
    });
    E.observe(g), E.observe(T);
    const A = f == null ? void 0 : f.parentId, j = A ? document.querySelector(`[data-block-id="${A}"]`) : null;
    return j && E.observe(j), () => {
      E.disconnect();
    };
  }, [e, a, f == null ? void 0 : f.parentId]), Z(() => {
    a();
  }, [c.blocks, a]);
  const y = D((g) => {
    g.preventDefault(), p(e, d, g);
  }, [e, d, p]);
  return f ? /* @__PURE__ */ R.jsx(
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
        b && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
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
      "aria-valuenow": f == null ? void 0 : f.defaultSize,
      "aria-valuemin": f == null ? void 0 : f.minSize,
      "aria-valuemax": f == null ? void 0 : f.maxSize,
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
    const s = Object.values(e).filter((c) => c.parentId === o.id).sort((c, p) => (c.order || 0) - (p.order || 0));
    if (s.length === 0) return;
    const n = o.direction === "row" ? "vertical" : "horizontal";
    s.forEach((c, p) => {
      if (p === 0) return;
      const h = s[p - 1], { targetId: k, position: v } = Sr(h, c);
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
  const e = Oe(), t = K(() => zr(e.blocks), [e.blocks]);
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
}, ct = J(({ children: e, className: t, "aria-label": r }, o) => {
  const s = ue(null), {
    state: i,
    resizeBlock: n,
    collapseBlock: c,
    expandBlock: p,
    switchMode: h,
    persistState: k,
    resetState: v
  } = we(), S = i.resize.isDragging;
  St(
    o,
    () => ({
      resizeBlock: n,
      collapseBlock: c,
      expandBlock: p,
      switchMode: h,
      persistState: k,
      resetState: v,
      getState: () => i
    }),
    [
      n,
      c,
      p,
      h,
      k,
      v,
      i
    ]
  );
  const f = K(() => Object.values(i.blocks).sort((g, T) => (g.order || 0) - (T.order || 0)), [i.blocks]), l = K(() => f.find((y) => !y.parentId), [f]);
  wr({
    blocks: f,
    containerRef: s,
    onSizeChange: n,
    direction: (l == null ? void 0 : l.direction) || "row"
  }), kr({
    enabled: !0,
    blocks: f,
    containerRef: s,
    onResizeBlock: (y, g) => {
      const T = i.blocks[y];
      if (T) {
        const E = T.defaultSize || 0, A = Math.max(0, E + g);
        n(y, A);
      }
    },
    onCollapseBlock: c,
    onExpandBlock: p
  });
  const { gridStyles: d, cssVariables: b, modeStyles: a } = K(() => {
    if (!l)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const y = f.reduce((m, P) => {
      if (P.id === l.id) return m;
      const C = P.parentId || l.id;
      return m[C] || (m[C] = []), m[C].push(P), m;
    }, {}), g = f.filter((m) => m.defaultSize !== void 0).map((m) => {
      const P = m.sizeUnit === "px" ? `${m.defaultSize}px` : `${m.defaultSize}fr`;
      return `--${l.id}-${m.id}-size: ${P};`;
    }).join(`
  `), T = () => {
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
    }, E = (m, P = /* @__PURE__ */ new Set()) => {
      if (P.has(m))
        return console.warn(`Circular reference detected for parent: ${m}`), "";
      const C = new Set(P);
      C.add(m);
      const q = y[m] || [];
      if (q.length === 0) return "";
      const F = [...q].sort(
        (u, I) => (u.order || 0) - (I.order || 0)
      ), N = f.find((u) => u.id === m) || l, $ = (N == null ? void 0 : N.direction) || "row", U = F.map((u) => ({
        id: u.id,
        sizeUnit: u.sizeUnit || "fr",
        size: u.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), W = mr(U, l.id), H = $ === "column" ? "grid-template-rows" : "grid-template-columns";
      let Q = `
${m === l.id ? `[data-grid-id="${l.id}"][data-block-id="${m}"][data-active-mode="grid"],
[data-grid-id="${l.id}"][data-block-id="${m}"][data-active-mode="desktop"]` : `[data-grid-id="${l.id}"][data-active-mode="grid"] [data-block-id="${m}"],
[data-grid-id="${l.id}"][data-active-mode="desktop"] [data-block-id="${m}"]`} {
  display: grid;
  ${H}: ${W};
  ${$ === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const u of F)
        u.type === "group" && (Q += E(u.id, C));
      return Q;
    }, A = E(l.id), j = T();
    return {
      cssVariables: `:root {
  ${g}
}`,
      gridStyles: A,
      modeStyles: j
    };
  }, [f, l]);
  return l ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsxs("style", { type: "text/css", children: [
      b,
      d,
      a
    ] }),
    /* @__PURE__ */ R.jsxs(
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
          (i.activeMode === "grid" || i.activeMode === "desktop") && /* @__PURE__ */ R.jsx(Er, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
ct.displayName = "GridInternal";
const Tr = J(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: s,
    onLayoutChange: i,
    onModeChange: n,
    className: c,
    dividers: p = "manual",
    dividerConfig: h,
    "aria-label": k
  }, v) => {
    const S = t.find((l) => !l.parentId), f = (S == null ? void 0 : S.id) || "root";
    return /* @__PURE__ */ R.jsx(
      vr,
      {
        blocks: t,
        modes: r,
        gridId: f,
        persist: o,
        persistKey: s,
        onLayoutChange: i,
        onModeChange: n,
        children: /* @__PURE__ */ R.jsx(
          ct,
          {
            ref: v,
            className: c,
            dividers: p,
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
const dt = J(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, s) => {
    const i = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ R.jsx(
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
const ut = J(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, s) => /* @__PURE__ */ R.jsx(
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
const ft = J(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ R.jsx(
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
const pt = J(
  ({ left: e, center: t, right: r, className: o, "aria-label": s }, i) => /* @__PURE__ */ R.jsxs(
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
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
pt.displayName = "Block.Toolbar";
const mt = J(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: s,
    "aria-label": i,
    allowOverflow: n = !0
  }, c) => {
    const [p, h] = xe(null), k = (f, l) => {
      l.preventDefault(), f.disabled || r(f.id);
    }, v = (f, l) => {
      l.preventDefault(), l.stopPropagation(), o && f.closable && o(f.id);
    }, S = (f, l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), f.disabled || r(f.id));
    };
    return /* @__PURE__ */ R.jsx(
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
        children: /* @__PURE__ */ R.jsx("div", { className: "flex items-center min-w-0", children: e.map((f) => {
          const l = f.id === t, d = p === f.id, b = f.icon;
          return /* @__PURE__ */ R.jsxs(
            "div",
            {
              className: ie(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                l ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                f.disabled && "opacity-50 cursor-not-allowed",
                !n && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": l,
              "aria-disabled": f.disabled,
              tabIndex: f.disabled ? -1 : 0,
              onClick: (a) => k(f, a),
              onKeyDown: (a) => S(f, a),
              onMouseEnter: () => h(f.id),
              onMouseLeave: () => h(null),
              "data-tab-id": f.id,
              children: [
                b && /* @__PURE__ */ R.jsx(b, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ R.jsx("span", { className: "truncate min-w-0", children: f.label }),
                f.closable && o && /* @__PURE__ */ R.jsx(
                  "button",
                  {
                    className: ie(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || l ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (a) => v(f, a),
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
mt.displayName = "Block.Tabs";
const De = J(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": s }, i) => /* @__PURE__ */ R.jsx(
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
const bt = J(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: s,
    onClick: i,
    className: n,
    "aria-label": c
  }, p) => {
    const [h, k] = xe(!1), v = () => {
      t && !o && k(!0);
    }, S = () => {
      k(!1);
    }, f = () => {
      !o && i && i();
    }, l = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), f());
    };
    return /* @__PURE__ */ R.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ R.jsxs(
        "button",
        {
          ref: p,
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
          onClick: f,
          onKeyDown: l,
          onMouseEnter: v,
          onMouseLeave: S,
          "aria-label": c || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ R.jsx(
              e,
              {
                className: ie(
                  "w-5 h-5",
                  r ? "text-white" : "text-gray-400",
                  !o && "group-hover:text-white"
                )
              }
            ),
            s && /* @__PURE__ */ R.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof s == "number" && s > 99 ? "99+" : s }),
            r && /* @__PURE__ */ R.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      h && t && /* @__PURE__ */ R.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ R.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ R.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
bt.displayName = "Block.Sidebar.Item";
const gt = J(
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
gt.displayName = "Block.Sidebar.Spacer";
function Ar(e, t) {
  const r = e[t] || {}, { id: o, type: s, direction: i, children: n, className: c, divider: p, noDivider: h, "aria-label": k, ...v } = e;
  return {
    ...Object.fromEntries(
      Object.entries(v).filter(
        ([f]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion", "divider", "noDivider"].includes(f)
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
const $e = J(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: s,
    divider: i,
    noDivider: n,
    "aria-label": c,
    ...p
  }, h) => {
    const { gridId: k } = we(), v = Oe(), { collapseBlock: S, expandBlock: f } = xr(), { activeMode: l, currentLayoutType: d, supportsFeature: b } = ot(), a = v == null ? void 0 : v.blocks[e], y = Ar({ id: e, type: t, direction: r, children: o, className: s, "aria-label": c, ...p }, l), g = K(() => Ir(o), [o]), T = K(() => Rr(o), [o]), E = K(() => y.hidden ? !1 : d === "dock" ? !!(y.icon || y.label) : !0, [d, y]), A = K(() => a != null && a.collapsible && a.collapseAt ? (a.size ?? a.defaultSize ?? 0) <= a.collapseAt : !1, [a]), j = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? f(e) : S(e));
    };
    if (!E)
      return null;
    const m = y.icon;
    return /* @__PURE__ */ R.jsxs(
      "div",
      {
        ref: h,
        className: se(
          // Base styles (always applied)
          "relative transition-opacity duration-150",
          // Grid mode styles (default)
          "overflow-hidden",
          g && !T && "flex flex-col h-full",
          g && T && "flex flex-row h-full",
          A && "opacity-70",
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
        "data-has-sidebar": T,
        "data-dock-order": y.dockOrder,
        "aria-label": c || (d === "dock" ? y.label : d === "tabs" ? y.tabLabel : void 0),
        role: d === "dock" ? "button" : d === "tabs" ? "tabpanel" : t === "group" ? "group" : void 0,
        tabIndex: d === "dock" || b("resizing") ? 0 : void 0,
        onDoubleClick: b("collapse") ? j : void 0,
        style: {
          ...y.style,
          // CSS Grid area assignment handled by parent in grid mode
          // Dock order controlled by data attribute and CSS
          order: d === "dock" ? y.dockOrder : void 0
        },
        children: [
          d === "dock" && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
            m && /* @__PURE__ */ R.jsx(m, { className: "w-6 h-6 mb-1" }),
            y.label && /* @__PURE__ */ R.jsx("span", { className: "text-xs font-medium text-center", children: y.label })
          ] }),
          d !== "dock" && o
        ]
      }
    );
  }
);
$e.displayName = "Block";
const ht = J(
  (e, t) => /* @__PURE__ */ R.jsx($e, { ref: t, ...e, type: "group" })
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
    const c = t.collapseAt ?? 0, p = t.collapseTo ?? 0, h = t.defaultSize ?? s;
    s = fr(
      s,
      r,
      c,
      p,
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
  const p = ce(e.minSize ?? 0, e.sizeUnit, s), h = ce(e.maxSize ?? 1 / 0, e.sizeUnit, s), k = ce(t.minSize ?? 0, t.sizeUnit, s), v = ce(t.maxSize ?? 1 / 0, t.sizeUnit, s), S = ce(e.defaultSize ?? 0, e.sizeUnit, s), f = ce(t.defaultSize ?? 0, t.sizeUnit, s), l = S + r, d = f + o;
  let b = fe(l, p, h), a = fe(d, k, v);
  n = b - S, c = a - f;
  const y = n + c;
  if (Math.abs(y) > 1e-3) {
    const E = Math.abs(n) < Math.abs(r), A = Math.abs(c) < Math.abs(o);
    if (E && !A) {
      const j = f - n;
      a = fe(j, k, v), c = a - f;
    } else if (A && !E) {
      const j = S - c;
      b = fe(j, p, h), n = b - S;
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
    const n = t[i.id] ?? i.defaultSize ?? 0, c = i.minSize ?? 0, p = i.maxSize ?? 1 / 0;
    c > p && r.push(`Block ${i.id}: minSize (${c}) > maxSize (${p})`), (n < c || n > p) && r.push(`Block ${i.id}: size ${n} violates constraints [${c}, ${p}]`);
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
