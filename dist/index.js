var zt = Object.defineProperty;
var Et = (e, t, r) => t in e ? zt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => Et(e, typeof t != "symbol" ? t + "" : t, r);
import At, { useState as Q, useCallback as N, useMemo as X, useEffect as G, useRef as me, createContext as Ne, useContext as Oe, useReducer as Rt, useLayoutEffect as Tt, forwardRef as Z, useImperativeHandle as Ct } from "react";
var Me = { exports: {} }, we = {};
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
function It() {
  if (We) return we;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, n, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), n.key !== void 0 && (s = "" + n.key), "key" in n) {
      a = {};
      for (var l in n)
        l !== "key" && (a[l] = n[l]);
    } else a = n;
    return n = a.ref, {
      $$typeof: e,
      type: o,
      key: s,
      ref: n !== void 0 ? n : null,
      props: a
    };
  }
  return we.Fragment = t, we.jsx = r, we.jsxs = r, we;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function jt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
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
        case T:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case i:
            return "Portal";
          case b:
            return (c.displayName || "Context") + ".Provider";
          case S:
            return (c._context.displayName || "Context") + ".Consumer";
          case A:
            var R = c.render;
            return c = c.displayName, c || (c = R.displayName || R.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case j:
            return R = c.displayName || null, R !== null ? R : e(c.type) || "Memo";
          case g:
            R = c._payload, c = c._init;
            try {
              return e(c(R));
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
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var D = R.error, P = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return D.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(c);
      }
    }
    function o(c) {
      if (c === d) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === g)
        return "<...>";
      try {
        var R = e(c);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var c = q.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(c) {
      if (F.call(c, "key")) {
        var R = Object.getOwnPropertyDescriptor(c, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, R) {
      function D() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: D,
        configurable: !0
      });
    }
    function u() {
      var c = e(this.type);
      return W[c] || (W[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function h(c, R, D, P, L, Y, ce, V) {
      return D = Y.ref, c = {
        $$typeof: f,
        type: c,
        key: R,
        props: Y,
        _owner: L
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(c, "ref", {
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
        value: V
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function v(c, R, D, P, L, Y, ce, V) {
      var B = R.children;
      if (B !== void 0)
        if (P)
          if (_(B)) {
            for (P = 0; P < B.length; P++)
              y(B[P]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(B);
      if (F.call(R, "key")) {
        B = e(c);
        var J = Object.keys(R).filter(function(ve) {
          return ve !== "key";
        });
        P = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", ee[B + P] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          B,
          J,
          B
        ), ee[B + P] = !0);
      }
      if (B = null, D !== void 0 && (r(D), B = "" + D), s(R) && (r(R.key), B = "" + R.key), "key" in R) {
        D = {};
        for (var oe in R)
          oe !== "key" && (D[oe] = R[oe]);
      } else D = R;
      return B && l(
        D,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), h(
        c,
        B,
        Y,
        L,
        n(),
        D,
        ce,
        V
      );
    }
    function y(c) {
      typeof c == "object" && c !== null && c.$$typeof === f && c._store && (c._store.validated = 1);
    }
    var k = At, f = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), b = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), q = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, _ = Array.isArray, O = console.createTask ? console.createTask : function() {
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
    )(), z = O(o(a)), ee = {};
    xe.Fragment = d, xe.jsx = function(c, R, D, P, L) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return v(
        c,
        R,
        D,
        !1,
        P,
        L,
        Y ? Error("react-stack-top-frame") : H,
        Y ? O(o(c)) : z
      );
    }, xe.jsxs = function(c, R, D, P, L) {
      var Y = 1e4 > q.recentlyCreatedOwnerStacks++;
      return v(
        c,
        R,
        D,
        !0,
        P,
        L,
        Y ? Error("react-stack-top-frame") : H,
        Y ? O(o(c)) : z
      );
    };
  }()), xe;
}
process.env.NODE_ENV === "production" ? Me.exports = It() : Me.exports = jt();
var C = Me.exports;
function Ye(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Ye(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function se() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Ye(e)) && (o && (o += " "), o += t);
  return o;
}
const $e = "-", Mt = (e) => {
  const t = _t(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split($e);
      return l[0] === "" && l.length !== 1 && l.shift(), Ze(l, t) || Pt(s);
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
  const a = e.join($e);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}, Ke = /^\[(.+)\]$/, Pt = (e) => {
  if (Ke.test(e)) {
    const t = Ke.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
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
    Pe(r[n], o, n, t);
  return o;
}, Pe = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const a = n === "" ? t : Fe(t, n);
      a.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Dt(n)) {
        Pe(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([a, s]) => {
      Pe(s, Fe(t, a), r, o);
    });
  });
}, Fe = (e, t) => {
  let r = e;
  return t.split($e).forEach((o) => {
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
  const n = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = o.get(a)) !== void 0)
        return n(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : n(a, s);
    }
  };
}, _e = "!", De = ":", Ot = De.length, $t = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const a = [];
    let s = 0, l = 0, u = 0, h;
    for (let i = 0; i < n.length; i++) {
      let d = n[i];
      if (s === 0 && l === 0) {
        if (d === De) {
          a.push(n.slice(u, i)), u = i + Ot;
          continue;
        }
        if (d === "/") {
          h = i;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" ? s-- : d === "(" ? l++ : d === ")" && l--;
    }
    const v = a.length === 0 ? n : n.substring(u), y = Lt(v), k = y !== v, f = h && h > u ? h - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: k,
      baseClassName: y,
      maybePostfixModifierPosition: f
    };
  };
  if (t) {
    const n = t + De, a = o;
    o = (s) => s.startsWith(n) ? a(s.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = o;
    o = (a) => r({
      className: a,
      parseClassName: n
    });
  }
  return o;
}, Lt = (e) => e.endsWith(_e) ? e.substring(0, e.length - 1) : e.startsWith(_e) ? e.substring(1) : e, Vt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let a = [];
    return o.forEach((s) => {
      s[0] === "[" || t[s] ? (n.push(...a.sort(), s), a = []) : a.push(s);
    }), n.push(...a.sort()), n;
  };
}, Gt = (e) => ({
  cache: Nt(e.cacheSize),
  parseClassName: $t(e),
  sortModifiers: Vt(e),
  ...Mt(e)
}), Ut = /\s+/, Wt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(Ut);
  let u = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const v = l[h], {
      isExternal: y,
      modifiers: k,
      hasImportantModifier: f,
      baseClassName: i,
      maybePostfixModifierPosition: d
    } = r(v);
    if (y) {
      u = v + (u.length > 0 ? " " + u : u);
      continue;
    }
    let m = !!d, p = o(m ? i.substring(0, d) : i);
    if (!p) {
      if (!m) {
        u = v + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (p = o(i), !p) {
        u = v + (u.length > 0 ? " " + u : u);
        continue;
      }
      m = !1;
    }
    const S = a(k).join(":"), b = f ? S + _e : S, A = b + p;
    if (s.includes(A))
      continue;
    s.push(A);
    const E = n(p, m);
    for (let T = 0; T < E.length; ++T) {
      const j = E[T];
      s.push(b + j);
    }
    u = v + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Bt() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Je(t)) && (o && (o += " "), o += r);
  return o;
}
const Je = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Je(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Kt(e, ...t) {
  let r, o, n, a = s;
  function s(u) {
    const h = t.reduce((v, y) => y(v), e());
    return r = Gt(h), o = r.cache.get, n = r.cache.set, a = l, l(u);
  }
  function l(u) {
    const h = o(u);
    if (h)
      return h;
    const v = Wt(u, r);
    return n(u, v), v;
  }
  return function() {
    return a(Bt.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Xe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ft = /^\d+\/\d+$/, qt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ht = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Zt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, de = (e) => Ft.test(e), I = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => !!e && Number.isInteger(Number(e)), Ce = (e) => e.endsWith("%") && I(e.slice(0, -1)), re = (e) => qt.test(e), Xt = () => !0, Qt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ht.test(e) && !Yt.test(e)
), et = () => !1, er = (e) => Zt.test(e), tr = (e) => Jt.test(e), rr = (e) => !w(e) && !x(e), or = (e) => be(e, ot, et), w = (e) => Xe.test(e), le = (e) => be(e, nt, Qt), Ie = (e) => be(e, lr, I), qe = (e) => be(e, tt, et), nr = (e) => be(e, rt, tr), Ee = (e) => be(e, st, er), x = (e) => Qe.test(e), ke = (e) => he(e, nt), sr = (e) => he(e, cr), He = (e) => he(e, tt), ir = (e) => he(e, ot), ar = (e) => he(e, rt), Ae = (e) => he(e, st, !0), be = (e, t, r) => {
  const o = Xe.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, he = (e, t, r = !1) => {
  const o = Qe.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, tt = (e) => e === "position" || e === "percentage", rt = (e) => e === "image" || e === "url", ot = (e) => e === "length" || e === "size" || e === "bg-size", nt = (e) => e === "length", lr = (e) => e === "number", cr = (e) => e === "family-name", st = (e) => e === "shadow", dr = () => {
  const e = K("color"), t = K("font"), r = K("text"), o = K("font-weight"), n = K("tracking"), a = K("leading"), s = K("breakpoint"), l = K("container"), u = K("spacing"), h = K("radius"), v = K("shadow"), y = K("inset-shadow"), k = K("text-shadow"), f = K("drop-shadow"), i = K("blur"), d = K("perspective"), m = K("aspect"), p = K("ease"), S = K("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [
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
  ], E = () => [...A(), x, w], T = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], g = () => [x, w, u], M = () => [de, "full", "auto", ...g()], $ = () => [ne, "none", "subgrid", x, w], q = () => ["auto", {
    span: ["full", ne, x, w]
  }, ne, x, w], F = () => [ne, "auto", x, w], _ = () => ["auto", "min", "max", "fr", x, w], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...g()], H = () => [de, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], z = () => [e, x, w], ee = () => [...A(), He, qe, {
    position: [x, w]
  }], c = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", ir, or, {
    size: [x, w]
  }], D = () => [Ce, ke, le], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    x,
    w
  ], L = () => ["", I, ke, le], Y = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => [I, Ce, He, qe], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    i,
    x,
    w
  ], J = () => ["none", I, x, w], oe = () => ["none", I, x, w], ve = () => [I, x, w], ze = () => [de, "full", ...g()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [re],
      breakpoint: [re],
      color: [Xt],
      container: [re],
      "drop-shadow": [re],
      ease: ["in", "out", "in-out"],
      font: [rr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [re],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [re],
      shadow: [re],
      spacing: ["px", I],
      text: [re],
      "text-shadow": [re],
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
        aspect: ["auto", "square", de, w, x, m]
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
        columns: [I, w, x, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
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
        z: [ne, "auto", x, w]
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
        flex: [I, de, "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, x, w]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, x, w]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ne, "first", "last", "none", x, w]
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
        "auto-cols": _()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": _()
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
        content: ["normal", ...O()]
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
        "place-content": O()
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
        text: ["base", r, ke, le]
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
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ce, w]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [sr, w, t]
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
        tracking: [n, x, w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [I, "none", x, Ie]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...g()
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [I, "from-font", "auto", x, le]
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
        "underline-offset": [I, "auto", x, w]
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
        bg: ee()
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
          }, ne, x, w],
          radial: ["", x, w],
          conic: [ne, x, w]
        }, ar, nr]
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
        from: D()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: D()
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
        "outline-offset": [I, x, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", I, ke, le]
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
          Ae,
          Ee
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
        "inset-shadow": ["none", y, Ae, Ee]
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
        "ring-offset": [I, le]
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
        "text-shadow": ["none", k, Ae, Ee]
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
        opacity: [I, x, w]
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
        "mask-linear": [I]
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
        "mask-conic": [I]
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
        mask: ee()
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
        blur: B()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [I, x, w]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, x, w]
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
          Ee
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
        grayscale: ["", I, x, w]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, x, w]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, x, w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, x, w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, x, w]
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
        "backdrop-blur": B()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [I, x, w]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, x, w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, x, w]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, x, w]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, x, w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, x, w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, x, w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, x, w]
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
        duration: [I, "initial", x, w]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", p, x, w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, x, w]
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
        stroke: [I, ke, le, Ie]
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
}, ur = /* @__PURE__ */ Kt(dr);
function ie(...e) {
  return ur(se(e));
}
const fr = {
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
function it(e = fr) {
  const [t, r] = Q(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, n] = Q(null), a = N(() => {
    if (typeof window > "u") return;
    const i = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(i);
  }, []), s = X(() => {
    var d;
    if (o && e[o])
      return o;
    const i = Object.entries(e).filter(([m, p]) => {
      if (p.matcher)
        return p.matcher(t);
      const S = !p.minWidth || t.width >= p.minWidth, b = !p.maxWidth || t.width <= p.maxWidth;
      return S && b;
    });
    return i.sort(([, m], [, p]) => {
      const S = (m.minWidth ? 1 : 0) + (m.maxWidth ? 1 : 0);
      return (p.minWidth ? 1 : 0) + (p.maxWidth ? 1 : 0) - S;
    }), ((d = i[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = X(() => e[s], [e, s]), u = X(() => (l == null ? void 0 : l.type) || "grid", [l]), h = N((i) => {
    if (i && !e[i]) {
      console.warn(`Mode "${i}" not found in configuration`);
      return;
    }
    n(i);
  }, [e]), v = N((i) => s === i, [s]), y = X(() => Object.keys(e), [e]), k = N((i) => {
    switch (u) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(i);
      case "tabs":
        return i === "tabs";
      case "dock":
        return i === "dock";
      default:
        return !1;
    }
  }, [u]), f = X(() => {
    const i = Object.entries(e).map(([S, b]) => ({ name: S, ...b })).sort((S, b) => (S.breakpoint || 0) - (b.breakpoint || 0)), d = i.findIndex((S) => S.name === s), m = i[d + 1], p = i[d - 1];
    return {
      current: s,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: m == null ? void 0 : m.name,
      nextBreakpoint: m == null ? void 0 : m.breakpoint,
      prevMode: p == null ? void 0 : p.name,
      prevBreakpoint: p == null ? void 0 : p.breakpoint,
      isSmallest: d === 0,
      isLargest: d === i.length - 1
    };
  }, [e, s, l]);
  return G(() => {
    if (typeof window > "u") return;
    const i = () => a(), d = () => {
      setTimeout(a, 100);
    };
    return window.addEventListener("resize", i), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", i), window.removeEventListener("orientationchange", d);
    };
  }, [a]), {
    // Current state
    viewport: t,
    activeMode: s,
    currentModeConfig: l,
    currentLayoutType: u,
    // Mode management
    setMode: h,
    isMode: v,
    availableModes: y,
    // Features and capabilities
    supportsFeature: k,
    breakpointInfo: f,
    // Utilities
    isForced: !!o,
    updateViewport: a
  };
}
const te = "pretty-poly-grid-", ge = {
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
}, at = {
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
}, fe = /* @__PURE__ */ new Map(), Re = {
  save: (e, t) => {
    fe.set(e, t);
  },
  load: (e) => fe.get(e) || null,
  remove: (e) => {
    fe.delete(e);
  },
  clear: () => {
    for (const e of fe.keys())
      e.startsWith(te) && fe.delete(e);
  }
};
function je(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? ge : Re;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? at : Re;
    case "memory":
    default:
      return Re;
  }
}
function Le(e) {
  return `${te}${e}`;
}
function mr(e, t, r = ge) {
  const o = Le(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function pr(e, t = ge) {
  const r = Le(e);
  return t.load(r);
}
function gr(e, t = ge) {
  const r = Le(e);
  t.remove(r);
}
function Or(e = ge) {
  const t = {};
  try {
    if (e === ge && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(te)) {
          const n = o.substring(te.length), a = e.load(o);
          a && (t[n] = a);
        }
      }
    else if (e === at && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(te)) {
          const n = o.substring(te.length), a = e.load(o);
          a && (t[n] = a);
        }
      }
    else if (e === Re) {
      for (const r of fe.keys())
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
function hr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: n = !0,
  saveDelay: a = 500
}) {
  const s = me(null), l = me(), u = me(""), h = me(!1);
  G(() => {
    if (!t) {
      s.current = null;
      return;
    }
    typeof t == "function" ? s.current = br(t) : t === "localStorage" ? s.current = je("localStorage") : t === "sessionStorage" ? s.current = je("sessionStorage") : s.current = je("localStorage");
  }, [t]), G(() => {
    if (!s.current || !t || typeof t == "function" || h.current)
      return;
    const i = pr(e, s.current);
    i && (o == null || o(i), h.current = !0);
  }, [e, t]);
  const v = N((i = r) => {
    if (!s.current || !t)
      return;
    const d = JSON.stringify(i);
    if (d !== u.current)
      try {
        mr(e, i, s.current), u.current = d;
      } catch (m) {
        console.warn("Failed to save grid state:", m);
      }
  }, [e, t, r]), y = N((i = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      v(i);
    }, a);
  }, [v, a, r]), k = N(() => {
    if (!(!s.current || !t || typeof t == "function"))
      try {
        gr(e, s.current), u.current = "";
      } catch (i) {
        console.warn("Failed to clear grid state:", i);
      }
  }, [e, t]), f = N((i = r) => {
    l.current && clearTimeout(l.current), v(i);
  }, [v, r]);
  return G(() => {
    if (!(!n || !t))
      return y(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, n, t, y]), G(() => {
    if (!t || typeof t == "function")
      return;
    const i = () => {
      f();
    };
    return window.addEventListener("beforeunload", i), () => {
      window.removeEventListener("beforeunload", i);
    };
  }, [f, t]), G(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: f,
    debouncedSave: y,
    clearState: k,
    isEnabled: !!t
  };
}
function lt(e, t, r) {
  return Math.max(0, e - t - r);
}
function $r(e, t) {
  return t > 0 ? e / t : 0;
}
function pe(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Lr(e, t) {
  return t > 0 && e <= t;
}
function yr(e, t, r, o, n) {
  if (r === 0)
    return e;
  const a = t <= r, s = o * 2.5;
  return a && e > s ? n : e < r && !a ? o : e;
}
function vr(e, t, r = 0, o = 1 / 0, n = !1) {
  const a = n ? -e : e, s = t + a;
  return pe(s, r, o);
}
function wr(e, t) {
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
function Vr(e, t) {
  return e * t;
}
function xr(e, t) {
  return t > 0 ? e / t : 0;
}
function Gr(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Ur(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function kr(e, t) {
  const r = N((s) => "touches" in s ? {
    x: s.touches[0].clientX,
    y: s.touches[0].clientY
  } : {
    x: s.clientX,
    y: s.clientY
  }, []), o = N((s, l, u) => {
    const h = e.blocks[s];
    if (!h) return;
    if (h.resizable === !1) {
      console.warn(`Cannot resize block "${s}" - block is marked as non-resizable.`);
      return;
    }
    const v = r(u), y = document.querySelector(`[data-divider-id="${l}"]`), k = (y == null ? void 0 : y.getAttribute("data-divider-position")) || "end", i = Object.values(e.blocks).filter(
      (b) => b.parentId === h.parentId
    ).sort(
      (b, A) => (b.order || 0) - (A.order || 0)
    ), d = i.findIndex((b) => b.id === s);
    let m = null;
    if (k === "start" && d > 0 ? m = i[d - 1] : k === "end" && d < i.length - 1 && (m = i[d + 1]), m && m.resizable === !1) {
      console.warn(
        `Cannot resize block "${s}" - adjacent block "${m.id}" is marked as non-resizable.`
      );
      return;
    }
    if (m && h.sizeUnit === "fr" && m.sizeUnit === "px") {
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
        startPosition: v,
        initialSize: h.defaultSize || 0,
        initialAdjacentBlockId: m == null ? void 0 : m.id,
        initialAdjacentSize: m ? m.originalDefaultSize || m.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const p = h.parentId ? e.blocks[h.parentId] : null, S = (p == null ? void 0 : p.direction) || "row";
    document.body.style.cursor = S === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), n = N((s) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const u = r(s), h = l.parentId ? e.blocks[l.parentId] : null, v = (h == null ? void 0 : h.direction) || "row", y = v === "row" ? u.x - e.resize.startPosition.x : u.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const k = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), i = ((k == null ? void 0 : k.getAttribute("data-divider-position")) || "end") === "start", d = vr(
        y,
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
        (_) => _.parentId === l.parentId
      ), f = k.filter((_) => _.sizeUnit === "fr"), i = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = i ? v === "row" ? i.clientWidth : i.clientHeight : 1200, m = k.filter((_) => _.sizeUnit === "px").reduce((_, O) => {
        const U = document.querySelector(`[data-block-id="${O.id}"]`);
        if (!U) return _;
        const W = v === "row" ? U.clientWidth : U.clientHeight;
        return _ + W;
      }, 0), S = Array.from(
        (i == null ? void 0 : i.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((_, O) => {
        if (!(O instanceof HTMLElement)) return _;
        const U = v === "row" ? O.clientWidth : O.clientHeight;
        return _ + U;
      }, 0), A = lt(d, m, S), E = f.reduce(
        (_, O) => _ + (O.defaultSize || 1),
        0
      ), T = E > 0 ? A / E : 0;
      if (T === 0) return;
      const j = xr(y, T), g = f.sort(
        (_, O) => (_.order || 0) - (O.order || 0)
      ), M = g.findIndex(
        (_) => _.id === e.resize.activeBlockId
      ), $ = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), q = ($ == null ? void 0 : $.getAttribute("data-divider-position")) || "end";
      let F = null;
      if (q === "start" && M > 0 ? F = g[M - 1] : q === "end" && M < g.length - 1 && (F = g[M + 1]), F) {
        let _, O;
        _ = j, O = -j;
        const U = 0.1, W = Math.max(
          U,
          e.resize.initialSize + _
        ), H = Math.max(
          U,
          (e.resize.initialAdjacentSize || 1) + O
        ), z = W - e.resize.initialSize, ee = H - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + ee) < 0.01 && (t({
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
  }, [e.resize, e.blocks, t, r]), a = N(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: n,
    endResize: a
  };
}
function Sr(e, t) {
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
      const n = o.collapseTo ?? 0, a = o.minSize ?? 0, s = Math.max(n, a);
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
function zr(e, t, r) {
  return {
    blocks: e.reduce((n, a) => (n[a.id] = {
      ...a,
      size: a.defaultSize,
      originalDefaultSize: a.defaultSize
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
const ct = Ne(null);
function Er({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: n = !1,
  persistKey: a,
  onModeChange: s,
  onLayoutChange: l
}) {
  const { activeMode: u, viewport: h, setMode: v } = it(r), [y, k] = Rt(
    Sr,
    zr(t, h, u)
  );
  G(() => {
    k({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), G(() => {
    const b = y.activeMode;
    u !== b && (k({
      type: "SWITCH_MODE",
      payload: { mode: u }
    }), s == null || s(u, b));
  }, [u, y.activeMode, s]);
  const { saveState: f, clearState: i } = hr({
    gridId: a || o,
    enabled: n,
    state: y,
    onStateLoad: (b) => {
      k({ type: "LOAD_STATE", payload: { state: b } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: m, endResize: p } = kr(y, k), S = X(
    () => ({
      gridId: o,
      state: {
        ...y,
        activeMode: u,
        viewport: h
      },
      dispatch: k,
      // Grid operations
      resizeBlock: (b, A) => {
        k({
          type: "RESIZE_BLOCK",
          payload: { blockId: b, size: A }
        });
      },
      collapseBlock: (b) => {
        k({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: b }
        });
      },
      expandBlock: (b) => {
        k({
          type: "EXPAND_BLOCK",
          payload: { blockId: b }
        });
      },
      switchMode: (b) => {
        v(b);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: m,
      endResize: p,
      // Persistence
      persistState: () => f(y),
      resetState: () => {
        k({ type: "RESET_STATE" }), i();
      }
    }),
    [o, y, u, h, f, i, v, d, m, p]
  );
  return G(() => {
    if (l) {
      const b = Object.values(y.blocks);
      l(b);
    }
  }, [y.blocks, l]), /* @__PURE__ */ C.jsx(ct.Provider, { value: S, children: e });
}
function Se() {
  const e = Oe(ct);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Ve() {
  const { state: e } = Se();
  return e;
}
function Ar() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: a
  } = Se();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: a
  };
}
function dt() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = Se();
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
    updateResize: a,
    endResize: s,
    isDragging: l,
    activeBlockId: u,
    activeDividerId: h
  } = dt(), v = N(() => {
    if (!t.current) return 0;
    const m = t.current.getBoundingClientRect();
    return o === "column" ? m.width : m.height;
  }, [o, t]), y = N(() => {
    const m = v();
    if (m === 0) return 0;
    const p = e.filter((E) => E.sizeUnit === "px").reduce((E, T) => E + (T.defaultSize || 0), 0), S = 0, b = e.filter((E) => E.sizeUnit === "fr").reduce((E, T) => E + (T.defaultSize || 1), 0), A = lt(m, p, S);
    return b > 0 ? A / b : 0;
  }, [e, v]), k = N((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), f = N((m) => {
    const p = e.find((S) => S.id === m);
    p && p.collapseTo !== void 0 && (r == null || r(m, p.collapseTo));
  }, [e, r]), i = N((m) => {
    const p = e.find((S) => S.id === m);
    p && p.defaultSize !== void 0 && (r == null || r(m, p.defaultSize));
  }, [e, r]), d = N((m) => {
    const p = e.find((S) => S.id === m);
    return !p || !p.collapseAt ? !1 : (p.defaultSize || 0) <= p.collapseAt;
  }, [e]);
  return G(() => {
    const m = (A) => {
      A.preventDefault(), a(A);
    }, p = (A) => {
      A.preventDefault(), a(A);
    }, S = () => {
      s();
    }, b = () => {
      s();
    };
    if (l)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", S), document.addEventListener("touchmove", p), document.addEventListener("touchend", b), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", p), document.removeEventListener("touchend", b);
      };
  }, [l, a, s]), {
    // State
    isDragging: l,
    activeBlockId: u,
    activeDividerId: h,
    // Actions
    startResize: n,
    resetBlock: k,
    collapseBlock: f,
    expandBlock: i,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: v,
    calculatePixelsPerFr: y
  };
}
function Tr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: a,
  containerRef: s,
  stepSize: l = 10,
  largeStepSize: u = 50
}) {
  const h = N(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), v = N((d) => {
    if (!d) return null;
    const m = d.dataset.blockId;
    return t.find((p) => p.id === m) || null;
  }, [t]), y = N((d, m) => {
    if (!(s != null && s.current)) return null;
    const p = Array.from(
      s.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), S = d.getBoundingClientRect(), b = {
      x: S.left + S.width / 2,
      y: S.top + S.height / 2
    }, A = p.filter((E) => {
      if (E === d) return !1;
      const T = E.getBoundingClientRect(), j = {
        x: T.left + T.width / 2,
        y: T.top + T.height / 2
      };
      switch (m) {
        case "up":
          return j.y < b.y;
        case "down":
          return j.y > b.y;
        case "left":
          return j.x < b.x;
        case "right":
          return j.x > b.x;
        default:
          return !1;
      }
    });
    return A.length === 0 ? null : (A.sort((E, T) => {
      const j = E.getBoundingClientRect(), g = T.getBoundingClientRect(), M = {
        x: j.left + j.width / 2,
        y: j.top + j.height / 2
      }, $ = {
        x: g.left + g.width / 2,
        y: g.top + g.height / 2
      }, q = Math.sqrt(
        Math.pow(M.x - b.x, 2) + Math.pow(M.y - b.y, 2)
      ), F = Math.sqrt(
        Math.pow($.x - b.x, 2) + Math.pow($.y - b.y, 2)
      );
      return q - F;
    }), A[0]);
  }, [s]), k = N((d) => {
    if (!e) return;
    const m = h();
    if (!m) return;
    const p = v(m);
    if (!p) return;
    const S = d.ctrlKey || d.metaKey, b = d.shiftKey, A = b ? u : l;
    if (!S && !b)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const E = y(m, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const T = y(m, "down");
          T && (T.focus(), o == null || o(T.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const j = y(m, "left");
          j && (j.focus(), o == null || o(j.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const g = y(m, "right");
          g && (g.focus(), o == null || o(g.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), p.collapsible && (a == null || a(p.id));
          break;
        case "Escape":
          d.preventDefault(), m.blur();
          break;
      }
    if (S && r)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), r(p.id, -A);
          break;
        case "ArrowDown":
          d.preventDefault(), r(p.id, A);
          break;
        case "ArrowLeft":
          d.preventDefault(), r(p.id, -A);
          break;
        case "ArrowRight":
          d.preventDefault(), r(p.id, A);
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
          d.preventDefault(), a == null || a(p.id);
          break;
      }
  }, [
    e,
    h,
    v,
    y,
    r,
    o,
    n,
    a,
    l,
    u
  ]), f = N((d) => {
    if (!(s != null && s.current)) return;
    const m = s.current.querySelector(
      `[data-block-id="${d}"]`
    );
    m && (m.focus(), o == null || o(d));
  }, [s, o]), i = N(() => s != null && s.current ? Array.from(
    s.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [s]);
  return G(() => {
    if (e)
      return document.addEventListener("keydown", k), () => {
        document.removeEventListener("keydown", k);
      };
  }, [k, e]), {
    focusBlock: f,
    getFocusableBlocks: i,
    getFocusedBlock: h,
    isEnabled: e
  };
}
const ut = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: n,
  "aria-label": a
}) => {
  const s = me(null), l = Ve(), { startResize: u, isDragging: h, activeDividerId: v } = dt(), [y, k] = Q({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), f = l.blocks[e], i = r === "vertical", d = `${e}-${t}-divider`, m = h && v === d, p = N(() => {
    const b = document.querySelector("[data-grid-id]"), A = document.querySelector(`[data-block-id="${e}"]`);
    if (!b || !A) return;
    const E = b.getBoundingClientRect(), T = A.getBoundingClientRect(), j = f == null ? void 0 : f.parentId, g = j ? document.querySelector(`[data-block-id="${j}"]`) : b;
    if (!g) return;
    const M = g.getBoundingClientRect();
    if (i) {
      const $ = t === "start" ? T.left - E.left : T.right - E.left;
      k({
        left: $ - o / 2,
        // Center on edge
        top: M.top - E.top,
        // Position relative to parent
        width: o,
        height: M.height
        // Use parent height to constrain divider
      });
    } else {
      const $ = t === "start" ? T.top - E.top : T.bottom - E.top;
      k({
        left: M.left - E.left,
        // Position relative to parent
        top: $ - o / 2,
        // Center on edge
        width: M.width,
        // Use parent width to constrain divider
        height: o
      });
    }
  }, [e, t, i, o, f == null ? void 0 : f.parentId]);
  Tt(() => {
    const b = document.querySelector("[data-grid-id]"), A = document.querySelector(`[data-block-id="${e}"]`);
    if (!b || !A) return;
    p();
    const E = new ResizeObserver(() => {
      p();
    });
    E.observe(b), E.observe(A);
    const T = f == null ? void 0 : f.parentId, j = T ? document.querySelector(`[data-block-id="${T}"]`) : null;
    return j && E.observe(j), () => {
      E.disconnect();
    };
  }, [e, p, f == null ? void 0 : f.parentId]), G(() => {
    p();
  }, [l.blocks, p]);
  const S = N((b) => {
    b.preventDefault(), u(e, d, b);
  }, [e, d, u]);
  return f ? /* @__PURE__ */ C.jsx(
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
        m && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        i ? "cursor-col-resize" : "cursor-row-resize",
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
      "aria-label": a || `Resize ${e}`,
      "aria-valuenow": f == null ? void 0 : f.defaultSize,
      "aria-valuemin": f == null ? void 0 : f.minSize,
      "aria-valuemax": f == null ? void 0 : f.maxSize,
      tabIndex: 0,
      onMouseDown: S,
      onTouchStart: S
    }
  ) : null;
};
ut.displayName = "Divider";
function Cr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Ir(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const n = Object.values(e).filter((l) => l.parentId === o.id).sort((l, u) => (l.order || 0) - (u.order || 0));
    if (n.length === 0) return;
    const s = o.direction === "row" ? "vertical" : "horizontal";
    n.forEach((l, u) => {
      if (u === 0) return;
      const h = n[u - 1], v = h.resizable !== !1, y = l.resizable !== !1;
      if (!v && !y)
        return;
      const { targetId: k, position: f } = Cr(h, l), i = e[k];
      i && i.resizable === !1 || t.push({
        id: `divider-${h.id}-${l.id}`,
        targetBlockId: k,
        position: f,
        direction: s
      });
    });
  }), t;
}
const jr = () => {
  const e = Ve(), t = X(() => Ir(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ C.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ C.jsx(
        ut,
        {
          targetId: r.targetBlockId,
          position: r.position,
          direction: r.direction
        },
        r.id
      ))
    }
  );
}, ft = Z(({ children: e, className: t, "aria-label": r }, o) => {
  const n = me(null), {
    state: a,
    resizeBlock: s,
    collapseBlock: l,
    expandBlock: u,
    switchMode: h,
    persistState: v,
    resetState: y
  } = Se(), k = a.resize.isDragging;
  Ct(
    o,
    () => ({
      resizeBlock: s,
      collapseBlock: l,
      expandBlock: u,
      switchMode: h,
      persistState: v,
      resetState: y,
      getState: () => a
    }),
    [
      s,
      l,
      u,
      h,
      v,
      y,
      a
    ]
  );
  const f = X(() => Object.values(a.blocks).sort((b, A) => (b.order || 0) - (A.order || 0)), [a.blocks]), i = X(() => f.find((S) => !S.parentId), [f]);
  Rr({
    blocks: f,
    containerRef: n,
    onSizeChange: s,
    direction: (i == null ? void 0 : i.direction) || "row"
  }), Tr({
    enabled: !0,
    blocks: f,
    containerRef: n,
    onResizeBlock: (S, b) => {
      const A = a.blocks[S];
      if (A) {
        const E = A.defaultSize || 0, T = Math.max(0, E + b);
        s(S, T);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: u
  });
  const { gridStyles: d, cssVariables: m, modeStyles: p } = X(() => {
    if (!i)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const S = f.reduce((g, M) => {
      if (M.id === i.id) return g;
      const $ = M.parentId || i.id;
      return g[$] || (g[$] = []), g[$].push(M), g;
    }, {}), b = f.filter((g) => g.defaultSize !== void 0).map((g) => {
      const M = g.sizeUnit === "px" ? `${g.defaultSize}px` : `${g.defaultSize}fr`;
      return `--${i.id}-${g.id}-size: ${M};`;
    }).join(`
  `), A = () => "", E = (g, M = /* @__PURE__ */ new Set()) => {
      if (M.has(g))
        return console.warn(`Circular reference detected for parent: ${g}`), "";
      const $ = new Set(M);
      $.add(g);
      const q = S[g] || [];
      if (q.length === 0) return "";
      const F = [...q].sort(
        (c, R) => (c.order || 0) - (R.order || 0)
      ), _ = f.find((c) => c.id === g) || i, O = (_ == null ? void 0 : _.direction) || "row", U = F.map((c) => ({
        id: c.id,
        sizeUnit: c.sizeUnit || "fr",
        size: c.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), W = wr(U, i.id), H = O === "column" ? "grid-template-rows" : "grid-template-columns";
      let ee = `
${`[data-block-id="${g}"]`} {
  display: grid;
  ${H}: ${W};
  ${O === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
      for (const c of F)
        c.type === "group" && (ee += E(c.id, $));
      return ee;
    }, T = E(i.id), j = A();
    return {
      cssVariables: `:root {
  ${b}
}`,
      gridStyles: T,
      modeStyles: j
    };
  }, [f, i]);
  return i ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs("style", { type: "text/css", children: [
      m,
      d,
      p
    ] }),
    /* @__PURE__ */ C.jsxs(
      "div",
      {
        ref: n,
        className: ie(
          "group relative overflow-hidden",
          k && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": i.id,
        "data-block-id": i.id,
        "data-block-type": i.type,
        "data-active-mode": a.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (a.activeMode === "grid" || a.activeMode === "desktop") && /* @__PURE__ */ C.jsx(jr, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
ft.displayName = "GridInternal";
const Mr = Z(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: n,
    onLayoutChange: a,
    onModeChange: s,
    className: l,
    dividers: u = "manual",
    dividerConfig: h,
    "aria-label": v
  }, y) => {
    const k = t.find((i) => !i.parentId), f = (k == null ? void 0 : k.id) || "root";
    return /* @__PURE__ */ C.jsx(
      Er,
      {
        blocks: t,
        modes: r,
        gridId: f,
        persist: o,
        persistKey: n,
        onLayoutChange: a,
        onModeChange: s,
        children: /* @__PURE__ */ C.jsx(
          ft,
          {
            ref: y,
            className: l,
            dividers: u,
            dividerConfig: h,
            "aria-label": v,
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
    const a = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ C.jsx(
      "div",
      {
        ref: n,
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
mt.displayName = "Block.Content";
const pt = Z(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ C.jsx(
    "div",
    {
      ref: n,
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
const gt = Z(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ C.jsx(
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
gt.displayName = "Block.Footer";
const bt = Z(
  ({ left: e, center: t, right: r, className: o, "aria-label": n }, a) => /* @__PURE__ */ C.jsxs(
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
      "aria-label": n || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ C.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ C.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ C.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
bt.displayName = "Block.Toolbar";
const ht = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": a,
    allowOverflow: s = !0
  }, l) => {
    const [u, h] = Q(null), v = (f, i) => {
      i.preventDefault(), f.disabled || r(f.id);
    }, y = (f, i) => {
      i.preventDefault(), i.stopPropagation(), o && f.closable && o(f.id);
    }, k = (f, i) => {
      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), f.disabled || r(f.id));
    };
    return /* @__PURE__ */ C.jsx(
      "div",
      {
        ref: l,
        className: se(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          s ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": a || "Block tabs",
        children: /* @__PURE__ */ C.jsx("div", { className: "flex items-center min-w-0", children: e.map((f) => {
          const i = f.id === t, d = u === f.id, m = f.icon;
          return /* @__PURE__ */ C.jsxs(
            "div",
            {
              className: se(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                i ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                f.disabled && "opacity-50 cursor-not-allowed",
                !s && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": i,
              "aria-disabled": f.disabled,
              tabIndex: f.disabled ? -1 : 0,
              onClick: (p) => v(f, p),
              onKeyDown: (p) => k(f, p),
              onMouseEnter: () => h(f.id),
              onMouseLeave: () => h(null),
              "data-tab-id": f.id,
              children: [
                m && /* @__PURE__ */ C.jsx(m, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ C.jsx("span", { className: "truncate min-w-0", children: f.label }),
                f.closable && o && /* @__PURE__ */ C.jsx(
                  "button",
                  {
                    className: se(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || i ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (p) => y(f, p),
                    "aria-label": `Close ${f.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ C.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ C.jsx(
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
ht.displayName = "Block.Tabs";
const Ge = Z(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": n }, a) => /* @__PURE__ */ C.jsx(
    "div",
    {
      ref: a,
      className: se(
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
const yt = Z(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: n,
    onClick: a,
    className: s,
    "aria-label": l
  }, u) => {
    const [h, v] = Q(!1), y = () => {
      t && !o && v(!0);
    }, k = () => {
      v(!1);
    }, f = () => {
      !o && a && a();
    }, i = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), f());
    };
    return /* @__PURE__ */ C.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ C.jsxs(
        "button",
        {
          ref: u,
          className: se(
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
          onKeyDown: i,
          onMouseEnter: y,
          onMouseLeave: k,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ C.jsx(
              e,
              {
                className: se(
                  "w-5 h-5",
                  r ? "text-primary" : "text-muted-foreground",
                  !o && "group-hover:text-foreground"
                )
              }
            ),
            n && /* @__PURE__ */ C.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            r && /* @__PURE__ */ C.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      h && t && /* @__PURE__ */ C.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ C.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ C.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
yt.displayName = "Block.Sidebar.Item";
const vt = Z(
  ({ className: e }, t) => /* @__PURE__ */ C.jsx(
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
vt.displayName = "Block.Sidebar.Spacer";
const wt = Z(
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ C.jsx(
    "div",
    {
      ref: n,
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
wt.displayName = "Block.Layout";
const Ue = Z(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: n,
    divider: a,
    noDivider: s,
    "aria-label": l
  }, u) => {
    const { gridId: h } = Se(), v = Ve(), { collapseBlock: y, expandBlock: k } = Ar(), { supportsFeature: f } = it(), i = v == null ? void 0 : v.blocks[e], d = X(() => i != null && i.collapsible && i.collapseAt ? (i.size ?? i.defaultSize ?? 0) <= i.collapseAt : !1, [i]), m = () => {
      i != null && i.collapsible && i.collapseAt && ((i.size ?? i.defaultSize ?? 0) <= i.collapseAt ? k(e) : y(e));
    };
    return /* @__PURE__ */ C.jsx(
      "div",
      {
        ref: u,
        className: ie(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          d && "opacity-70",
          n
        ),
        "data-grid-id": h,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": i == null ? void 0 : i.defaultSize,
        "data-block-size-unit": i == null ? void 0 : i.sizeUnit,
        "data-block-size-min": i == null ? void 0 : i.minSize,
        "data-block-size-max": i == null ? void 0 : i.maxSize,
        "data-block-resizable": (i == null ? void 0 : i.resizable) !== !1,
        "data-block-collapse-at": i == null ? void 0 : i.collapseAt,
        "data-block-collapse-to": i == null ? void 0 : i.collapseTo,
        "data-block-divider-position": i == null ? void 0 : i.dividerPosition,
        "data-block-divider-size": i == null ? void 0 : i.dividerSize,
        "data-block-divider": a !== void 0 ? JSON.stringify(a) : void 0,
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
const xt = Z(
  (e, t) => /* @__PURE__ */ C.jsx(Ue, { ref: t, ...e, type: "group" })
);
xt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: xt,
  Layout: wt,
  Header: pt,
  Content: mt,
  Footer: gt,
  Toolbar: bt,
  Tabs: ht,
  Sidebar: Ge
});
Object.assign(Ge, {
  Item: yt,
  Spacer: vt
});
function Wr(e, t, r) {
  const o = [];
  let n = e;
  const a = t.minSize ?? 0, s = t.maxSize ?? 1 / 0;
  if (e < a && (o.push(`Size ${e} is below minimum ${a}`), n = a), e > s && (o.push(`Size ${e} exceeds maximum ${s}`), n = s), n = pe(n, a, s), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, u = t.collapseTo ?? 0, h = t.defaultSize ?? n;
    n = yr(
      n,
      r,
      l,
      u,
      h
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: n,
    violations: o
  };
}
function Br(e, t, r, o, n = 1) {
  const a = [];
  let s = r, l = o;
  const u = ue(e.minSize ?? 0, e.sizeUnit, n), h = ue(e.maxSize ?? 1 / 0, e.sizeUnit, n), v = ue(t.minSize ?? 0, t.sizeUnit, n), y = ue(t.maxSize ?? 1 / 0, t.sizeUnit, n), k = ue(e.defaultSize ?? 0, e.sizeUnit, n), f = ue(t.defaultSize ?? 0, t.sizeUnit, n), i = k + r, d = f + o;
  let m = pe(i, u, h), p = pe(d, v, y);
  s = m - k, l = p - f;
  const S = s + l;
  if (Math.abs(S) > 1e-3) {
    const E = Math.abs(s) < Math.abs(r), T = Math.abs(l) < Math.abs(o);
    if (E && !T) {
      const j = f - s;
      p = pe(j, v, y), l = p - f;
    } else if (T && !E) {
      const j = k - l;
      m = pe(j, u, h), s = m - k;
    }
    a.push("Zero-sum constraint violated, deltas adjusted");
  }
  const b = s + l;
  return {
    isValid: Math.abs(b) <= 1e-3,
    adjustedTargetDelta: s,
    adjustedAdjacentDelta: l,
    violations: a
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
function Kr(e, t) {
  const r = [], o = e.filter((a) => a.sizeUnit === "px").reduce((a, s) => a + (t[s.id] ?? s.defaultSize ?? 0), 0), n = e.filter((a) => a.sizeUnit === "fr").reduce((a, s) => a + (t[s.id] ?? s.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((a) => a.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((a) => {
    const s = t[a.id] ?? a.defaultSize ?? 0, l = a.minSize ?? 0, u = a.maxSize ?? 1 / 0;
    l > u && r.push(`Block ${a.id}: minSize (${l}) > maxSize (${u})`), (s < l || s > u) && r.push(`Block ${a.id}: size ${s} violates constraints [${l}, ${u}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
class Pr {
  constructor() {
    ae(this, "views", /* @__PURE__ */ new Map());
    ae(this, "listeners", /* @__PURE__ */ new Set());
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
const kt = Ne(null);
function Te() {
  const e = Oe(kt);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function Fr(e) {
  const t = Te(), [r, o] = Q(() => t.getView(e));
  return G(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function qr(e) {
  const t = Te(), [r, o] = Q(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return G(() => {
    const n = () => {
      e != null && e.category ? o(t.getViewsByCategory(e.category)) : o(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function Hr({ children: e, registry: t }) {
  const [r] = Q(() => t ?? new Pr());
  return /* @__PURE__ */ C.jsx(kt.Provider, { value: r, children: e });
}
function Yr(e) {
  const t = Te();
  G(() => t.registerViews(e), [t, e]);
}
function Zr(e) {
  const t = Te();
  G(() => t.registerView(e), [t, e]);
}
class _r {
  constructor() {
    ae(this, "commands", /* @__PURE__ */ new Map());
    ae(this, "executionListeners", /* @__PURE__ */ new Map());
    ae(this, "registrationListeners", /* @__PURE__ */ new Set());
    ae(this, "keybindingMap", /* @__PURE__ */ new Map());
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
      const a = o.category || "", s = n.category || "";
      if (a !== s) return a.localeCompare(s);
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
const St = Ne(null);
function ye() {
  const e = Oe(St);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function Jr(e) {
  const t = ye(), [r, o] = Q(() => t.getCommand(e));
  return G(() => {
    const n = () => {
      o(t.getCommand(e));
    };
    return t.onDidChangeCommands(n);
  }, [t, e]), r;
}
function Xr(e) {
  const t = ye(), [r, o] = Q(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return G(() => {
    const n = () => {
      e != null && e.category ? o(t.getCommandsByCategory(e.category)) : o(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function Qr(e) {
  const t = ye();
  return N(
    (...r) => t.executeCommand(e, ...r),
    [t, e]
  );
}
function eo(e) {
  const t = ye();
  G(() => t.registerCommands(e), [t, e]);
}
function to(e) {
  const t = ye();
  G(() => t.registerCommand(e), [t, e]);
}
function ro(e = !0) {
  const t = ye();
  G(() => {
    if (!e) return;
    const r = (o) => {
      t.handleKeyboardEvent(o);
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, e]);
}
function oo({
  children: e,
  service: t,
  enableKeyboardShortcuts: r = !0
}) {
  const [o] = Q(() => t ?? new _r());
  return G(() => {
    if (!r) return;
    const n = (a) => {
      o.handleKeyboardEvent(a);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, [o, r]), /* @__PURE__ */ C.jsx(St.Provider, { value: o, children: e });
}
export {
  Ue as Block,
  mt as BlockContent,
  gt as BlockFooter,
  xt as BlockGroup,
  pt as BlockHeader,
  wt as BlockLayout,
  Ge as BlockSidebar,
  yt as BlockSidebarItem,
  vt as BlockSidebarSpacer,
  ht as BlockTabs,
  bt as BlockToolbar,
  _r as CommandService,
  oo as CommandServiceProvider,
  ut as Divider,
  Mr as Grid,
  Er as GridProvider,
  Pr as ViewRegistry,
  Hr as ViewRegistryProvider,
  yr as applyCollapseLogic,
  vr as calculateConstrainedSize,
  pe as clamp,
  ie as cn,
  br as createCustomAdapter,
  fr as defaultModes,
  Gr as findAdjacentBlock,
  Vr as frToPx,
  wr as generateGridTemplate,
  Or as getAllGridStates,
  lt as getFlexSpacePx,
  je as getStorageAdapter,
  Lr as isCollapsed,
  Ur as isZeroSum,
  pr as loadGridState,
  ge as localStorageAdapter,
  Re as memoryStorageAdapter,
  $r as pxPerFr,
  xr as pxToFr,
  gr as removeGridState,
  mr as saveGridState,
  at as sessionStorageAdapter,
  Jr as useCommand,
  ro as useCommandKeyboardShortcuts,
  ye as useCommandService,
  Xr as useCommands,
  Qr as useExecuteCommand,
  Ar as useGridActions,
  Se as useGridContext,
  Tr as useGridKeyboard,
  it as useGridMode,
  hr as useGridPersistence,
  Rr as useGridResize,
  Ve as useGridState,
  to as useRegisterCommand,
  eo as useRegisterCommands,
  Zr as useRegisterView,
  Yr as useRegisterViews,
  Fr as useViewDescriptor,
  Te as useViewRegistry,
  qr as useViews,
  Wr as validateBlockSize,
  Kr as validateLayoutIntegrity,
  Br as validateTwoWayResize
};
