import Je, { useState as me, useCallback as G, useMemo as Z, useEffect as J, useRef as fe, createContext as zt, useContext as Et, useReducer as It, Children as be, isValidElement as ae, cloneElement as We, forwardRef as X, useImperativeHandle as At } from "react";
var Pe = { exports: {} }, ve = {};
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
  if (Ve) return ve;
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
  return ve.Fragment = t, ve.jsx = o, ve.jsxs = o, ve;
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
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === V ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case d:
          return "Fragment";
        case a:
          return "Profiler";
        case p:
          return "StrictMode";
        case I:
          return "Suspense";
        case T:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case c:
            return "Portal";
          case x:
            return (u.displayName || "Context") + ".Provider";
          case v:
            return (u._context.displayName || "Context") + ".Consumer";
          case E:
            var j = u.render;
            return u = u.displayName, u || (u = j.displayName || j.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case P:
            return j = u.displayName || null, j !== null ? j : e(u.type) || "Memo";
          case b:
            j = u._payload, u = u._init;
            try {
              return e(u(j));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function o(u) {
      try {
        t(u);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var $ = j.error, A = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return $.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(u);
      }
    }
    function r(u) {
      if (u === d) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === b)
        return "<...>";
      try {
        var j = e(u);
        return j ? "<" + j + ">" : "<...>";
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
        var j = Object.getOwnPropertyDescriptor(u, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function l(u, j) {
      function $() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: $,
        configurable: !0
      });
    }
    function f() {
      var u = e(this.type);
      return C[u] || (C[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function m(u, j, $, A, U, K, le, B) {
      return $ = K.ref, u = {
        $$typeof: h,
        type: u,
        key: j,
        props: K,
        _owner: U
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: f
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
        value: le
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function y(u, j, $, A, U, K, le, B) {
      var H = j.children;
      if (H !== void 0)
        if (A)
          if (R(H)) {
            for (A = 0; A < H.length; A++)
              w(H[A]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(H);
      if (F.call(j, "key")) {
        H = e(u);
        var Q = Object.keys(j).filter(function(xe) {
          return xe !== "key";
        });
        A = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", L[H + A] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          H,
          Q,
          H
        ), L[H + A] = !0);
      }
      if (H = null, $ !== void 0 && (o($), H = "" + $), n(j) && (o(j.key), H = "" + j.key), "key" in j) {
        $ = {};
        for (var oe in j)
          oe !== "key" && ($[oe] = j[oe]);
      } else $ = j;
      return H && l(
        $,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), m(
        u,
        H,
        K,
        U,
        s(),
        $,
        le,
        B
      );
    }
    function w(u) {
      typeof u == "object" && u !== null && u.$$typeof === h && u._store && (u._store.validated = 1);
    }
    var g = Je, h = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), x = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, R = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var _, C = {}, W = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), z = M(r(i)), L = {};
    we.Fragment = d, we.jsx = function(u, j, $, A, U) {
      var K = 1e4 > q.recentlyCreatedOwnerStacks++;
      return y(
        u,
        j,
        $,
        !1,
        A,
        U,
        K ? Error("react-stack-top-frame") : W,
        K ? M(r(u)) : z
      );
    }, we.jsxs = function(u, j, $, A, U) {
      var K = 1e4 > q.recentlyCreatedOwnerStacks++;
      return y(
        u,
        j,
        $,
        !0,
        A,
        U,
        K ? Error("react-stack-top-frame") : W,
        K ? M(r(u)) : z
      );
    };
  }()), we;
}
process.env.NODE_ENV === "production" ? Pe.exports = Tt() : Pe.exports = jt();
var N = Pe.exports;
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
  const t = Pt(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (n) => {
      const l = n.split(Ge);
      return l[0] === "" && l.length !== 1 && l.shift(), Qe(l, t) || Nt(n);
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
}, He = /^\[(.+)\]$/, Nt = (e) => {
  if (He.test(e)) {
    const t = He.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Pt = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in o)
    Me(o[s], r, s, t);
  return r;
}, Me = (e, t, o, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : Ye(t, s);
      i.classGroupId = o;
      return;
    }
    if (typeof s == "function") {
      if (Mt(s)) {
        Me(s(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: o
      });
      return;
    }
    Object.entries(s).forEach(([i, n]) => {
      Me(n, Ye(t, i), o, r);
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
}, Mt = (e) => e.isThemeGetter, Ot = (e) => {
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
}, Oe = "!", _e = ":", _t = _e.length, $t = (e) => {
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
        if (d === _e) {
          i.push(s.slice(f, c)), f = c + _t;
          continue;
        }
        if (d === "/") {
          m = c;
          continue;
        }
      }
      d === "[" ? n++ : d === "]" ? n-- : d === "(" ? l++ : d === ")" && l--;
    }
    const y = i.length === 0 ? s : s.substring(f), w = Dt(y), g = w !== y, h = m && m > f ? m - f : void 0;
    return {
      modifiers: i,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const s = t + _e, i = r;
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
}, Dt = (e) => e.endsWith(Oe) ? e.substring(0, e.length - 1) : e.startsWith(Oe) ? e.substring(1) : e, Gt = (e) => {
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
}, Ct = (e) => ({
  cache: Ot(e.cacheSize),
  parseClassName: $t(e),
  sortModifiers: Gt(e),
  ...Rt(e)
}), Ut = /\s+/, Lt = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, n = [], l = e.trim().split(Ut);
  let f = "";
  for (let m = l.length - 1; m >= 0; m -= 1) {
    const y = l[m], {
      isExternal: w,
      modifiers: g,
      hasImportantModifier: h,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = o(y);
    if (w) {
      f = y + (f.length > 0 ? " " + f : f);
      continue;
    }
    let p = !!d, a = r(p ? c.substring(0, d) : c);
    if (!a) {
      if (!p) {
        f = y + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (a = r(c), !a) {
        f = y + (f.length > 0 ? " " + f : f);
        continue;
      }
      p = !1;
    }
    const v = i(g).join(":"), x = h ? v + Oe : v, E = x + a;
    if (n.includes(E))
      continue;
    n.push(E);
    const I = s(a, p);
    for (let T = 0; T < I.length; ++T) {
      const P = I[T];
      n.push(x + P);
    }
    f = y + (f.length > 0 ? " " + f : f);
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
    const m = t.reduce((y, w) => w(y), e());
    return o = Ct(m), r = o.cache.get, s = o.cache.set, i = l, l(f);
  }
  function l(f) {
    const m = r(f);
    if (m)
      return m;
    const y = Lt(f, o);
    return s(f, y), y;
  }
  return function() {
    return i(Bt.apply(null, arguments));
  };
}
const Y = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, tt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Vt = /^\d+\/\d+$/, Ft = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ht = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, qt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (e) => Vt.test(e), O = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => !!e && Number.isInteger(Number(e)), Te = (e) => e.endsWith("%") && O(e.slice(0, -1)), re = (e) => Ft.test(e), Zt = () => !0, Jt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ht.test(e) && !Yt.test(e)
), ot = () => !1, Xt = (e) => qt.test(e), Qt = (e) => Kt.test(e), er = (e) => !k(e) && !S(e), tr = (e) => ye(e, it, ot), k = (e) => tt.test(e), ie = (e) => ye(e, at, Jt), je = (e) => ye(e, ir, O), qe = (e) => ye(e, nt, ot), rr = (e) => ye(e, st, Qt), Ee = (e) => ye(e, lt, Xt), S = (e) => rt.test(e), ke = (e) => ge(e, at), or = (e) => ge(e, ar), Ke = (e) => ge(e, nt), nr = (e) => ge(e, it), sr = (e) => ge(e, st), Ie = (e) => ge(e, lt, !0), ye = (e, t, o) => {
  const r = tt.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ge = (e, t, o = !1) => {
  const r = rt.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, nt = (e) => e === "position" || e === "percentage", st = (e) => e === "image" || e === "url", it = (e) => e === "length" || e === "size" || e === "bg-size", at = (e) => e === "length", ir = (e) => e === "number", ar = (e) => e === "family-name", lt = (e) => e === "shadow", lr = () => {
  const e = Y("color"), t = Y("font"), o = Y("text"), r = Y("font-weight"), s = Y("tracking"), i = Y("leading"), n = Y("breakpoint"), l = Y("container"), f = Y("spacing"), m = Y("radius"), y = Y("shadow"), w = Y("inset-shadow"), g = Y("text-shadow"), h = Y("drop-shadow"), c = Y("blur"), d = Y("perspective"), p = Y("aspect"), a = Y("ease"), v = Y("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], I = () => [...E(), S, k], T = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], b = () => [S, k, f], D = () => [ce, "full", "auto", ...b()], V = () => [ne, "none", "subgrid", S, k], q = () => ["auto", {
    span: ["full", ne, S, k]
  }, ne, S, k], F = () => [ne, "auto", S, k], R = () => ["auto", "min", "max", "fr", S, k], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], _ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], C = () => ["auto", ...b()], W = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], z = () => [e, S, k], L = () => [...E(), Ke, qe, {
    position: [S, k]
  }], u = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", nr, tr, {
    size: [S, k]
  }], $ = () => [Te, ke, ie], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    S,
    k
  ], U = () => ["", O, ke, ie], K = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [O, Te, Ke, qe], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    S,
    k
  ], Q = () => ["none", O, S, k], oe = () => ["none", O, S, k], xe = () => [O, S, k], ze = () => [ce, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [re],
      breakpoint: [re],
      color: [Zt],
      container: [re],
      "drop-shadow": [re],
      ease: ["in", "out", "in-out"],
      font: [er],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [re],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [re],
      shadow: [re],
      spacing: ["px", O],
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
        aspect: ["auto", "square", ce, k, S, p]
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
        columns: [O, k, S, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        inset: D()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: D()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
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
        z: [ne, "auto", S, k]
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
        flex: [O, ce, "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", O, S, k]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", O, S, k]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ne, "first", "last", "none", S, k]
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
        "grid-rows": V()
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
        "auto-cols": R()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": R()
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
        justify: [...M(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [..._(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ..._()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...M()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [..._(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ..._(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": M()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [..._(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ..._()]
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
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...W()]
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
          ...W()
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
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
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
        font: [r, S, je]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Te, k]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [or, k, t]
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
        tracking: [s, S, k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [O, "none", S, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", S, k]
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
        list: ["disc", "decimal", "none", S, k]
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
        decoration: [O, "from-font", "auto", S, ie]
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
        "underline-offset": [O, "auto", S, k]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", S, k]
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
        content: ["none", S, k]
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
        bg: L()
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
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ne, S, k],
          radial: ["", S, k],
          conic: [ne, S, k]
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
        from: $()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $()
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
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
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
        "outline-offset": [O, S, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", O, ke, ie]
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
          y,
          Ie,
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
        "inset-shadow": ["none", w, Ie, Ee]
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
        ring: z()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [O, ie]
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
        "inset-ring": U()
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
        "text-shadow": ["none", g, Ie, Ee]
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
        opacity: [O, S, k]
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
        "mask-linear": [O]
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
        "mask-radial": [S, k]
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
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [O]
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
        mask: L()
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
        mask: j()
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
        mask: ["none", S, k]
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
          S,
          k
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [O, S, k]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O, S, k]
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
          h,
          Ie,
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
        grayscale: ["", O, S, k]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [O, S, k]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", O, S, k]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O, S, k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", O, S, k]
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
          S,
          k
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [O, S, k]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O, S, k]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", O, S, k]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [O, S, k]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", O, S, k]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O, S, k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O, S, k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", O, S, k]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", S, k]
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
        duration: [O, "initial", S, k]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", a, S, k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [O, S, k]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, S, k]
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
        perspective: [d, S, k]
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
        transform: [S, k, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", S, k]
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
        "will-change": ["auto", "scroll", "contents", "transform", S, k]
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
        stroke: [O, ke, ie, je]
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
function ee(...e) {
  return cr(se(e));
}
const dr = {
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
function Ce(e = dr) {
  const [t, o] = me(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [r, s] = me(null), i = G(() => {
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
    const c = Object.entries(e).filter(([p, a]) => {
      if (a.matcher)
        return a.matcher(t);
      const v = !a.minWidth || t.width >= a.minWidth, x = !a.maxWidth || t.width <= a.maxWidth;
      return v && x;
    });
    return c.sort(([, p], [, a]) => {
      const v = (p.minWidth ? 1 : 0) + (p.maxWidth ? 1 : 0);
      return (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0) - v;
    }), ((d = c[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, r]), l = Z(() => e[n], [e, n]), f = Z(() => (l == null ? void 0 : l.type) || "grid", [l]), m = G((c) => {
    if (c && !e[c]) {
      console.warn(`Mode "${c}" not found in configuration`);
      return;
    }
    s(c);
  }, [e]), y = G((c) => n === c, [n]), w = Z(() => Object.keys(e), [e]), g = G((c) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(c);
      case "sidebar":
        return ["resizing", "collapse"].includes(c);
      case "tabs":
        return c === "tabs";
      case "dock":
        return c === "dock";
      case "stack":
      case "accordion":
        return !1;
      default:
        return !1;
    }
  }, [f]), h = Z(() => {
    const c = Object.entries(e).map(([v, x]) => ({ name: v, ...x })).sort((v, x) => (v.breakpoint || 0) - (x.breakpoint || 0)), d = c.findIndex((v) => v.name === n), p = c[d + 1], a = c[d - 1];
    return {
      current: n,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: p == null ? void 0 : p.name,
      nextBreakpoint: p == null ? void 0 : p.breakpoint,
      prevMode: a == null ? void 0 : a.name,
      prevBreakpoint: a == null ? void 0 : a.breakpoint,
      isSmallest: d === 0,
      isLargest: d === c.length - 1
    };
  }, [e, n, l]);
  return J(() => {
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
    isMode: y,
    availableModes: w,
    // Features and capabilities
    supportsFeature: g,
    breakpointInfo: h,
    // Utilities
    isForced: !!r,
    updateViewport: i
  };
}
const te = "pretty-poly-grid-", he = {
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
        o && o.startsWith(te) && e.push(o);
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
        o && o.startsWith(te) && e.push(o);
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
      e.startsWith(te) && ue.delete(e);
  }
};
function Re(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? he : Ae;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? ct : Ae;
    case "memory":
    default:
      return Ae;
  }
}
function Ue(e) {
  return `${te}${e}`;
}
function ur(e, t, o = he) {
  const r = Ue(e), s = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  o.save(r, s);
}
function fr(e, t = he) {
  const o = Ue(e);
  return t.load(o);
}
function pr(e, t = he) {
  const o = Ue(e);
  t.remove(o);
}
function Dr(e = he) {
  const t = {};
  try {
    if (e === he && typeof localStorage < "u")
      for (let o = 0; o < localStorage.length; o++) {
        const r = localStorage.key(o);
        if (r && r.startsWith(te)) {
          const s = r.substring(te.length), i = e.load(r);
          i && (t[s] = i);
        }
      }
    else if (e === ct && typeof sessionStorage < "u")
      for (let o = 0; o < sessionStorage.length; o++) {
        const r = sessionStorage.key(o);
        if (r && r.startsWith(te)) {
          const s = r.substring(te.length), i = e.load(r);
          i && (t[s] = i);
        }
      }
    else if (e === Ae) {
      for (const o of ue.keys())
        if (o.startsWith(te)) {
          const r = o.substring(te.length), s = e.load(o);
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
  J(() => {
    if (!t) {
      n.current = null;
      return;
    }
    typeof t == "function" ? n.current = mr(t) : t === "localStorage" ? n.current = Re("localStorage") : t === "sessionStorage" ? n.current = Re("sessionStorage") : n.current = Re("localStorage");
  }, [t]), J(() => {
    if (!n.current || !t || typeof t == "function" || m.current)
      return;
    const c = fr(e, n.current);
    c && (r == null || r(c), m.current = !0);
  }, [e, t]);
  const y = G((c = o) => {
    if (!n.current || !t)
      return;
    const d = JSON.stringify(c);
    if (d !== f.current)
      try {
        ur(e, c, n.current), f.current = d;
      } catch (p) {
        console.warn("Failed to save grid state:", p);
      }
  }, [e, t, o]), w = G((c = o) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      y(c);
    }, i);
  }, [y, i, o]), g = G(() => {
    if (!(!n.current || !t || typeof t == "function"))
      try {
        pr(e, n.current), f.current = "";
      } catch (c) {
        console.warn("Failed to clear grid state:", c);
      }
  }, [e, t]), h = G((c = o) => {
    l.current && clearTimeout(l.current), y(c);
  }, [y, o]);
  return J(() => {
    if (!(!s || !t))
      return w(o), () => {
        l.current && clearTimeout(l.current);
      };
  }, [o, s, t, w]), J(() => {
    if (!t || typeof t == "function")
      return;
    const c = () => {
      h();
    };
    return window.addEventListener("beforeunload", c), () => {
      window.removeEventListener("beforeunload", c);
    };
  }, [h, t]), J(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: h,
    debouncedSave: w,
    clearState: g,
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
function Cr(e, t) {
  return t > 0 && e <= t;
}
function hr(e, t, o, r, s) {
  if (o === 0)
    return e;
  const i = t <= o, n = r * 2.5;
  return i && e > n ? s : e < o && !i ? r : e;
}
function yr(e, t, o = 0, r = 1 / 0, s = !1) {
  const i = s ? -e : e, n = t + i;
  return pe(n, o, r);
}
function gr(e, t) {
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
function Ur(e, t) {
  return e * t;
}
function xr(e, t) {
  return t > 0 ? e / t : 0;
}
function Lr(e, t, o) {
  return o === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Br(e, t, o = 1e-3) {
  return Math.abs(e + t) <= o;
}
function vr(e, t) {
  const o = G((n) => "touches" in n ? {
    x: n.touches[0].clientX,
    y: n.touches[0].clientY
  } : {
    x: n.clientX,
    y: n.clientY
  }, []), r = G((n, l, f) => {
    const m = e.blocks[n];
    if (!m) return;
    const y = o(f), g = Object.values(e.blocks).filter(
      (a) => a.parentId === m.parentId
    ).sort(
      (a, v) => (a.order || 0) - (v.order || 0)
    ), h = g.findIndex((a) => a.id === n);
    let c = null;
    if (m.dividerPosition === "start" && h > 0 ? c = g[h - 1] : m.dividerPosition === "end" && h < g.length - 1 && (c = g[h + 1]), c && m.sizeUnit === "fr" && c.sizeUnit === "px") {
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
        startPosition: y,
        initialSize: m.defaultSize || 0,
        initialAdjacentBlockId: c == null ? void 0 : c.id,
        initialAdjacentSize: c ? c.originalDefaultSize || c.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const d = m.parentId ? e.blocks[m.parentId] : null, p = (d == null ? void 0 : d.direction) || "row";
    document.body.style.cursor = p === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, o]), s = G((n) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const f = o(n), m = l.parentId ? e.blocks[l.parentId] : null, y = (m == null ? void 0 : m.direction) || "row", w = y === "row" ? f.x - e.resize.startPosition.x : f.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const g = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), c = ((g == null ? void 0 : g.getAttribute("data-block-divider-position")) || "end") === "start", d = yr(
        w,
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
      const g = Object.values(e.blocks).filter(
        (R) => R.parentId === l.parentId
      ), h = g.filter((R) => R.sizeUnit === "fr"), c = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = c ? y === "row" ? c.clientWidth : c.clientHeight : 1200, p = g.filter((R) => R.sizeUnit === "px").reduce((R, M) => {
        const _ = document.querySelector(`[data-block-id="${M.id}"]`);
        if (!_) return R;
        const C = y === "row" ? _.clientWidth : _.clientHeight;
        return R + C;
      }, 0), v = Array.from(
        (c == null ? void 0 : c.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((R, M) => {
        if (!(M instanceof HTMLElement)) return R;
        const _ = y === "row" ? M.clientWidth : M.clientHeight;
        return R + _;
      }, 0), E = dt(d, p, v), I = h.reduce(
        (R, M) => R + (M.defaultSize || 1),
        0
      ), T = I > 0 ? E / I : 0;
      if (T === 0) return;
      const P = xr(w, T), b = h.sort(
        (R, M) => (R.order || 0) - (M.order || 0)
      ), D = b.findIndex(
        (R) => R.id === e.resize.activeBlockId
      ), V = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), q = (V == null ? void 0 : V.getAttribute("data-block-divider-position")) || "end";
      let F = null;
      if (q === "start" && D > 0 ? F = b[D - 1] : q === "end" && D < b.length - 1 && (F = b[D + 1]), F) {
        let R, M;
        R = P, M = -P;
        const _ = 0.1, C = Math.max(
          _,
          e.resize.initialSize + R
        ), W = Math.max(
          _,
          (e.resize.initialAdjacentSize || 1) + M
        ), z = C - e.resize.initialSize, L = W - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + L) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: C
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: F.id, size: W }
        }));
      }
    }
  }, [e.resize, e.blocks, t, o]), i = G(() => {
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
  const { activeMode: f, viewport: m, setMode: y } = Ce(o), [w, g] = It(
    wr,
    kr(t, m, f)
  );
  J(() => {
    g({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: m }
    });
  }, [m]), J(() => {
    const x = w.activeMode;
    f !== x && (g({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), n == null || n(f, x));
  }, [f, w.activeMode, n]);
  const { saveState: h, clearState: c } = br({
    gridId: i || r,
    enabled: s,
    state: w,
    onStateLoad: (x) => {
      g({ type: "LOAD_STATE", payload: { state: x } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: p, endResize: a } = vr(w, g), v = Z(
    () => ({
      gridId: r,
      state: {
        ...w,
        activeMode: f,
        viewport: m
      },
      dispatch: g,
      // Grid operations
      resizeBlock: (x, E) => {
        g({
          type: "RESIZE_BLOCK",
          payload: { blockId: x, size: E }
        });
      },
      collapseBlock: (x) => {
        g({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: x }
        });
      },
      expandBlock: (x) => {
        g({
          type: "EXPAND_BLOCK",
          payload: { blockId: x }
        });
      },
      switchMode: (x) => {
        y(x);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: p,
      endResize: a,
      // Persistence
      persistState: () => h(w),
      resetState: () => {
        g({ type: "RESET_STATE" }), c();
      }
    }),
    [r, w, f, m, h, c, y, d, p, a]
  );
  return J(() => {
    if (l) {
      const x = Object.values(w.blocks);
      l(x);
    }
  }, [w.blocks, l]), /* @__PURE__ */ N.jsx(ut.Provider, { value: v, children: e });
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
  } = pt(), y = G(() => {
    if (!t.current) return 0;
    const p = t.current.getBoundingClientRect();
    return r === "column" ? p.width : p.height;
  }, [r]), w = G(() => {
    const p = y();
    if (p === 0) return 0;
    const a = e.filter((I) => I.sizeUnit === "px").reduce((I, T) => I + (T.defaultSize || 0), 0), v = e.filter((I) => I.dividerPosition !== "none").reduce((I, T) => I + (T.dividerSize || 8), 0), x = e.filter((I) => I.sizeUnit === "fr").reduce((I, T) => I + (T.defaultSize || 1), 0), E = dt(p, a, v);
    return x > 0 ? E / x : 0;
  }, [e, y]), g = G((p) => {
    const a = e.find((v) => v.id === p);
    a && a.defaultSize !== void 0 && (o == null || o(p, a.defaultSize));
  }, [e, o]), h = G((p) => {
    const a = e.find((v) => v.id === p);
    a && a.collapseTo !== void 0 && (o == null || o(p, a.collapseTo));
  }, [e, o]), c = G((p) => {
    const a = e.find((v) => v.id === p);
    a && a.defaultSize !== void 0 && (o == null || o(p, a.defaultSize));
  }, [e, o]), d = G((p) => {
    const a = e.find((v) => v.id === p);
    return !a || !a.collapseAt ? !1 : (a.defaultSize || 0) <= a.collapseAt;
  }, [e]);
  return J(() => {
    const p = (E) => {
      E.preventDefault(), i(E);
    }, a = (E) => {
      E.preventDefault(), i(E);
    }, v = () => {
      n();
    }, x = () => {
      n();
    };
    if (l)
      return document.addEventListener("mousemove", p), document.addEventListener("mouseup", v), document.addEventListener("touchmove", a), document.addEventListener("touchend", x), () => {
        document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", v), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", x);
      };
  }, [l, i, n]), {
    // State
    isDragging: l,
    activeBlockId: f,
    activeDividerId: m,
    // Actions
    startResize: s,
    resetBlock: g,
    collapseBlock: h,
    expandBlock: c,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: y,
    calculatePixelsPerFr: w
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
  const m = G(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), y = G((d) => {
    if (!d) return null;
    const p = d.dataset.blockId;
    return t.find((a) => a.id === p) || null;
  }, [t]), w = G((d, p) => {
    if (!(n != null && n.current)) return null;
    const a = Array.from(
      n.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), v = d.getBoundingClientRect(), x = {
      x: v.left + v.width / 2,
      y: v.top + v.height / 2
    }, E = a.filter((I) => {
      if (I === d) return !1;
      const T = I.getBoundingClientRect(), P = {
        x: T.left + T.width / 2,
        y: T.top + T.height / 2
      };
      switch (p) {
        case "up":
          return P.y < x.y;
        case "down":
          return P.y > x.y;
        case "left":
          return P.x < x.x;
        case "right":
          return P.x > x.x;
        default:
          return !1;
      }
    });
    return E.length === 0 ? null : (E.sort((I, T) => {
      const P = I.getBoundingClientRect(), b = T.getBoundingClientRect(), D = {
        x: P.left + P.width / 2,
        y: P.top + P.height / 2
      }, V = {
        x: b.left + b.width / 2,
        y: b.top + b.height / 2
      }, q = Math.sqrt(
        Math.pow(D.x - x.x, 2) + Math.pow(D.y - x.y, 2)
      ), F = Math.sqrt(
        Math.pow(V.x - x.x, 2) + Math.pow(V.y - x.y, 2)
      );
      return q - F;
    }), E[0]);
  }, [n]), g = G((d) => {
    if (!e) return;
    const p = m();
    if (!p) return;
    const a = y(p);
    if (!a) return;
    const v = d.ctrlKey || d.metaKey, x = d.shiftKey, E = x ? f : l;
    if (!v && !x)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const I = w(p, "up");
          I && (I.focus(), r == null || r(I.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const T = w(p, "down");
          T && (T.focus(), r == null || r(T.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const P = w(p, "left");
          P && (P.focus(), r == null || r(P.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const b = w(p, "right");
          b && (b.focus(), r == null || r(b.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), a.collapsible && (i == null || i(a.id));
          break;
        case "Escape":
          d.preventDefault(), p.blur();
          break;
      }
    if (v && o)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), o(a.id, -E);
          break;
        case "ArrowDown":
          d.preventDefault(), o(a.id, E);
          break;
        case "ArrowLeft":
          d.preventDefault(), o(a.id, -E);
          break;
        case "ArrowRight":
          d.preventDefault(), o(a.id, E);
          break;
      }
    if (v)
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
    y,
    w,
    o,
    r,
    s,
    i,
    l,
    f
  ]), h = G((d) => {
    if (!(n != null && n.current)) return;
    const p = n.current.querySelector(
      `[data-block-id="${d}"]`
    );
    p && (p.focus(), r == null || r(d));
  }, [n, r]), c = G(() => n != null && n.current ? Array.from(
    n.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [n]);
  return J(() => {
    if (e)
      return document.addEventListener("keydown", g), () => {
        document.removeEventListener("keydown", g);
      };
  }, [g, e]), {
    focusBlock: h,
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
function Ne(e) {
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
    const m = be.toArray(e).filter(ae).map((y) => {
      const w = Ne(y);
      if (!w) return null;
      const g = r == null ? void 0 : r[w.id];
      return {
        id: w.id,
        type: "block",
        sizeUnit: (g == null ? void 0 : g.sizeUnit) || "fr",
        size: (g == null ? void 0 : g.defaultSize) || 1
      };
    }).filter((y) => y !== null);
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
    const y = Ne(f);
    if (!y) {
      n.push(f);
      return;
    }
    n.push(f);
    const w = {
      id: y.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    };
    r != null && r[y.id] && Object.assign(w, r[y.id]), l.push({
      id: w.id,
      type: "block",
      sizeUnit: w.sizeUnit || "fr",
      size: w.defaultSize || 1
    });
    const g = m === i.length - 1, h = m < i.length - 1 ? i[m + 1] : null;
    let c = null;
    if (ae(h)) {
      const a = Ne(h);
      a && (c = { id: a.id });
    }
    const d = c ? {
      id: c.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    } : null;
    if (d && (r != null && r[d.id]) && Object.assign(d, r[d.id]), Tr(
      w,
      g,
      t,
      y.divider,
      y.noDivider
    )) {
      const a = jr(
        w,
        d,
        y.divider,
        o
      ), v = Rr(
        a,
        `${y.id}-${m}`,
        s
      );
      n.push(v), l.push({
        id: `${y.id}-divider-${m}`,
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
      var w, g;
      if (!ae(l))
        return l;
      const f = ((w = l.type) == null ? void 0 : w.displayName) || ((g = l.type) == null ? void 0 : g.name), m = f === "Block.Group" || f === "BlockGroup", y = f === "Block";
      if (m) {
        const h = mt(
          l.props.children,
          t,
          o,
          r,
          s
        ), c = l.props.id;
        c && (i[c] = h.templateItems);
        const d = $e(
          h.children,
          t,
          o,
          r,
          s
        );
        return Object.assign(i, d.templateItemsByGroup), We(l, {
          ...l.props,
          children: d.children
        });
      } else if (y && be.toArray(l.props.children).some((c) => {
        var p, a;
        if (!ae(c)) return !1;
        const d = ((p = c.type) == null ? void 0 : p.displayName) || ((a = c.type) == null ? void 0 : a.name);
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
const Nr = ({
  className: e,
  direction: t
}) => /* @__PURE__ */ N.jsx(
  "div",
  {
    className: ee(
      "pretty-poly-divider-handle",
      t === "column" ? "w-[1px] h-full" : "w-full h-[1px]",
      "bg-border transition-colors",
      e
    )
  }
), De = X(
  ({
    targetId: e,
    position: t,
    size: o = 8,
    className: r,
    handle: s,
    "aria-label": i
  }, n) => {
    const l = fe(null), f = n || l, m = ft(), { startResize: y, isDragging: w, activeDividerId: g } = pt(), { supportsFeature: h } = Ce(), [c, d] = me(""), [p, a] = me("end"), v = G(() => {
      const R = l.current;
      if (!R) return;
      if (e && t && t !== "auto" && t !== "none") {
        e !== c && d(e), t !== p && a(t);
        return;
      }
      let M = e, _ = t === "start" || t === "end" ? t : "end";
      if (e) {
        const C = document.querySelector(`[data-block-id="${e}"]`);
        C && (_ = C.compareDocumentPosition(R) & Node.DOCUMENT_POSITION_FOLLOWING ? "start" : "end");
      } else {
        const C = R.previousElementSibling, W = R.nextElementSibling, z = C == null ? void 0 : C.getAttribute("data-block-id"), L = W == null ? void 0 : W.getAttribute("data-block-id"), u = z ? m.blocks[z] : null, j = L ? m.blocks[L] : null;
        if (u && j)
          u.sizeUnit === "fr" && j.sizeUnit === "px" ? (M = L, _ = "start") : (u.sizeUnit === "px" && j.sizeUnit, M = z, _ = "end");
        else if (u)
          if (u.type === "group") {
            const $ = Object.values(m.blocks).filter((A) => A.parentId === z).sort((A, U) => (A.order || 0) - (U.order || 0)).filter((A) => A.type === "block" && (A.sizeUnit === "px" || A.sizeUnit === "fr"));
            $.length > 0 ? (M = $[$.length - 1].id, _ = "end") : (M = z, _ = "end");
          } else
            M = z, _ = "end";
        else if (j)
          if (j.type === "group") {
            const $ = Object.values(m.blocks).filter((A) => A.parentId === L).sort((A, U) => (A.order || 0) - (U.order || 0)).filter((A) => A.type === "block" && (A.sizeUnit === "px" || A.sizeUnit === "fr"));
            $.length > 0 ? (M = $[0].id, _ = "start") : (M = L, _ = "start");
          } else
            M = L, _ = "start";
      }
      M && M !== c && d(M), _ !== p && a(_);
    }, [e, t, c, p, m.blocks]);
    J(() => {
      v();
    }, [v]), J(() => {
      v();
    }, [m.blocks]);
    const x = c ? m.blocks[c] : null, E = x != null && x.parentId ? m.blocks[x.parentId] : null, I = ((E == null ? void 0 : E.type) === "group" ? E.direction : void 0) || "row", T = I === "column", P = w && c && g === `${c}-${p}-divider`, b = T ? "row-resize" : "col-resize", D = G((R) => {
      if (!c) return;
      R.preventDefault();
      const M = `${c}-${p}-divider`;
      y(c, M, R);
    }, [c, p, y]), V = G(() => {
      x == null || x.defaultSize;
    }, [x]);
    if (!x && c && console.warn(`Divider target block "${c}" not found`), !h("resizing"))
      return null;
    const F = s || Nr;
    return /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: f,
        className: ee(
          "pretty-poly-divider",
          "flex items-center justify-center",
          "select-none touch-none transition-colors",
          "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:bg-accent",
          T ? "cursor-row-resize" : "cursor-col-resize",
          P && "pretty-poly-divider--dragging",
          p === "start" && "pretty-poly-divider--start",
          p === "end" && "pretty-poly-divider--end",
          r
        ),
        "data-block-id": c ? `${c}-${p}-divider` : "loading-divider",
        "data-block-type": "divider",
        "data-block-target": c || "",
        "data-block-direction": I,
        "data-block-divider-position": p,
        style: {
          [T ? "height" : "width"]: `${o}px`,
          cursor: b
        },
        role: "separator",
        "aria-label": i || `Resize ${c || "block"}`,
        "aria-valuenow": x == null ? void 0 : x.defaultSize,
        "aria-valuemin": x == null ? void 0 : x.minSize,
        "aria-valuemax": x == null ? void 0 : x.maxSize,
        tabIndex: 0,
        onMouseDown: D,
        onTouchStart: D,
        onDoubleClick: V,
        onKeyDown: (R) => {
          (R.key === "ArrowLeft" || R.key === "ArrowRight" || R.key === "ArrowUp" || R.key === "ArrowDown") && R.preventDefault();
        },
        children: /* @__PURE__ */ N.jsx(
          F,
          {
            className: ee(
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
const bt = X(
  ({ children: e, className: t, dividers: o = "manual", dividerConfig: r, "aria-label": s }, i) => {
    const n = fe(null), { state: l, resizeBlock: f, collapseBlock: m, expandBlock: y, switchMode: w, persistState: g, resetState: h } = Se(), c = l.resize.isDragging;
    At(i, () => ({
      resizeBlock: f,
      collapseBlock: m,
      expandBlock: y,
      switchMode: w,
      persistState: g,
      resetState: h,
      getState: () => l
    }), [f, m, y, w, g, h, l]);
    const d = Z(() => Object.values(l.blocks).sort((I, T) => (I.order || 0) - (T.order || 0)), [l.blocks]), p = Z(() => d.find((E) => !E.parentId), [d]);
    Er({
      blocks: d,
      containerRef: n,
      onSizeChange: f,
      direction: (p == null ? void 0 : p.direction) || "row"
    }), Ir({
      enabled: !0,
      blocks: d,
      containerRef: n,
      onResizeBlock: (E, I) => {
        const T = l.blocks[E];
        if (T) {
          const P = T.defaultSize || 0, b = Math.max(0, P + I);
          f(E, b);
        }
      },
      onCollapseBlock: m,
      onExpandBlock: y
    });
    const a = Z(() => {
      const E = mt(
        e,
        o,
        r,
        l.blocks,
        De
      );
      if (o === "auto") {
        const I = $e(
          E.children,
          o,
          r,
          l.blocks,
          De
        );
        return {
          children: I.children,
          templateItems: E.templateItems,
          templateItemsByGroup: I.templateItemsByGroup
        };
      }
      return E;
    }, [e, o, r, l.blocks]), { gridStyles: v, cssVariables: x } = Z(() => {
      if (!p)
        return { gridStyles: "", cssVariables: "" };
      const E = d.reduce((b, D) => {
        if (D.id === "root") return b;
        const V = D.parentId || "root";
        return b[V] || (b[V] = []), b[V].push(D), b;
      }, {}), I = d.filter((b) => b.defaultSize !== void 0).map((b) => {
        const D = b.sizeUnit === "px" ? `${b.defaultSize}px` : `${b.defaultSize}fr`;
        return `--${p.id}-${b.id}-size: ${D};`;
      }).join(`
  `), T = (b, D = /* @__PURE__ */ new Set()) => {
        var z;
        if (D.has(b))
          return console.warn(`Circular reference detected for parent: ${b}`), "";
        const V = new Set(D);
        V.add(b);
        const q = E[b] || [];
        if (q.length === 0) return "";
        const F = [...q].sort((L, u) => (L.order || 0) - (u.order || 0)), R = d.find((L) => L.id === b) || p, M = (R == null ? void 0 : R.direction) || "row";
        let _;
        if (o === "auto" && b === p.id)
          _ = Ze(a.templateItems, p.id);
        else if (o === "auto" && ((z = a.templateItemsByGroup) != null && z[b]))
          _ = Ze(a.templateItemsByGroup[b], p.id);
        else {
          const L = F.map((u) => ({
            id: u.id,
            sizeUnit: u.sizeUnit || "fr",
            size: u.defaultSize || 1,
            dividerPosition: u.dividerPosition === "auto" ? "none" : u.dividerPosition || "none",
            dividerSize: u.dividerSize || (r == null ? void 0 : r.defaultSize) || 8
          }));
          _ = gr(L, p.id);
        }
        const C = M === "column" ? "grid-template-rows" : "grid-template-columns";
        let W = `
[data-grid-id="${p.id}"][data-block-id="${b}"] {
  display: grid;
  ${C}: ${_};
  ${M === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
        for (const L of F)
          L.type === "group" && (W += T(L.id, V));
        return W;
      }, P = T("root");
      return {
        cssVariables: `:root {
  ${I}
}`,
        gridStyles: P
      };
    }, [d, p, a, o, r]);
    return p ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsxs("style", { type: "text/css", children: [
        x,
        v
      ] }),
      /* @__PURE__ */ N.jsx(
        "div",
        {
          ref: n,
          className: ee(
            "pretty-poly-grid relative overflow-hidden",
            c && "pretty-poly-grid--dragging",
            t
          ),
          "data-grid-id": p.id,
          "data-block-id": p.id,
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
const Pr = X(
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
    "aria-label": y
  }, w) => {
    const g = t.find((c) => !c.parentId), h = (g == null ? void 0 : g.id) || "root";
    return /* @__PURE__ */ N.jsx(
      Sr,
      {
        blocks: t,
        modes: o,
        gridId: h,
        persist: r,
        persistKey: s,
        onLayoutChange: i,
        onModeChange: n,
        children: /* @__PURE__ */ N.jsx(
          bt,
          {
            ref: w,
            className: l,
            dividers: f,
            dividerConfig: m,
            "aria-label": y,
            children: e
          }
        )
      }
    );
  }
);
Pr.displayName = "Grid";
const ht = X(
  ({ scrollMode: e = "vertical", className: t, children: o, "aria-label": r }, s) => {
    const i = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: s,
        className: ee(
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
ht.displayName = "Block.Content";
const yt = X(
  ({ position: e = "top", className: t, children: o, "aria-label": r }, s) => /* @__PURE__ */ N.jsx(
    "div",
    {
      ref: s,
      className: ee(
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
yt.displayName = "Block.Header";
const gt = X(
  ({ className: e, children: t, "aria-label": o }, r) => /* @__PURE__ */ N.jsx(
    "div",
    {
      ref: r,
      className: ee(
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
gt.displayName = "Block.Footer";
const xt = X(
  ({ left: e, center: t, right: o, className: r, "aria-label": s }, i) => /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: i,
      className: ee(
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
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: o })
      ]
    }
  )
);
xt.displayName = "Block.Toolbar";
const vt = X(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: o,
    onTabClose: r,
    className: s,
    "aria-label": i,
    allowOverflow: n = !0
  }, l) => {
    const [f, m] = me(null), y = (h, c) => {
      c.preventDefault(), h.disabled || o(h.id);
    }, w = (h, c) => {
      c.preventDefault(), c.stopPropagation(), r && h.closable && r(h.id);
    }, g = (h, c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), h.disabled || o(h.id));
    };
    return /* @__PURE__ */ N.jsx(
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
        children: /* @__PURE__ */ N.jsx("div", { className: "flex items-center min-w-0", children: e.map((h) => {
          const c = h.id === t, d = f === h.id, p = h.icon;
          return /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: se(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                c ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                h.disabled && "opacity-50 cursor-not-allowed",
                !n && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": c,
              "aria-disabled": h.disabled,
              tabIndex: h.disabled ? -1 : 0,
              onClick: (a) => y(h, a),
              onKeyDown: (a) => g(h, a),
              onMouseEnter: () => m(h.id),
              onMouseLeave: () => m(null),
              "data-tab-id": h.id,
              children: [
                p && /* @__PURE__ */ N.jsx(p, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ N.jsx("span", { className: "truncate min-w-0", children: h.label }),
                h.closable && r && /* @__PURE__ */ N.jsx(
                  "button",
                  {
                    className: se(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || c ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (a) => w(h, a),
                    "aria-label": `Close ${h.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ N.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ N.jsx(
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
            h.id
          );
        }) })
      }
    );
  }
);
vt.displayName = "Block.Tabs";
const Le = X(
  ({ position: e = "left", width: t = 48, className: o, children: r, "aria-label": s }, i) => /* @__PURE__ */ N.jsx(
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
Le.displayName = "Block.Sidebar";
const wt = X(
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
    const [m, y] = me(!1), w = () => {
      t && !r && y(!0);
    }, g = () => {
      y(!1);
    }, h = () => {
      !r && i && i();
    }, c = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), h());
    };
    return /* @__PURE__ */ N.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ N.jsxs(
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
          onClick: h,
          onKeyDown: c,
          onMouseEnter: w,
          onMouseLeave: g,
          "aria-label": l || t,
          "aria-pressed": o,
          tabIndex: r ? -1 : 0,
          children: [
            /* @__PURE__ */ N.jsx(
              e,
              {
                className: se(
                  "w-5 h-5",
                  o ? "text-white" : "text-gray-400",
                  !r && "group-hover:text-white"
                )
              }
            ),
            s && /* @__PURE__ */ N.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof s == "number" && s > 99 ? "99+" : s }),
            o && /* @__PURE__ */ N.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      m && t && /* @__PURE__ */ N.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ N.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ N.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
wt.displayName = "Block.Sidebar.Item";
const kt = X(
  ({ className: e }, t) => /* @__PURE__ */ N.jsx(
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
function Mr(e, t) {
  const o = e[t] || {}, { id: r, type: s, direction: i, children: n, className: l, divider: f, noDivider: m, "aria-label": y, ...w } = e;
  return {
    ...Object.fromEntries(
      Object.entries(w).filter(
        ([h]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion", "divider", "noDivider"].includes(h)
      )
    ),
    ...o
  };
}
function Or(e) {
  let t = !1;
  return be.forEach(e, (o) => {
    var r, s;
    if (ae(o)) {
      const i = ((r = o.type) == null ? void 0 : r.displayName) || ((s = o.type) == null ? void 0 : s.name);
      i && (i === "Block.Header" || i === "Block.Content" || i === "Block.Footer" || i === "Block.Toolbar" || i === "Block.Tabs" || i === "Block.Sidebar") && (t = !0);
    }
  }), t;
}
function _r(e) {
  let t = !1;
  return be.forEach(e, (o) => {
    var r, s;
    ae(o) && (((r = o.type) == null ? void 0 : r.displayName) || ((s = o.type) == null ? void 0 : s.name)) === "Block.Sidebar" && (t = !0);
  }), t;
}
const Be = X(
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
    const { gridId: y } = Se(), w = ft(), { collapseBlock: g, expandBlock: h } = zr(), { activeMode: c, currentLayoutType: d, supportsFeature: p } = Ce(), a = w == null ? void 0 : w.blocks[e], v = Mr({ id: e, type: t, direction: o, children: r, className: s, "aria-label": l, ...f }, c), x = Z(() => Or(r), [r]), E = Z(() => _r(r), [r]), I = Z(() => v.hidden ? !1 : d === "dock" ? !!(v.icon || v.label) : !0, [d, v]), T = Z(() => {
      const b = [
        "pretty-poly-block",
        `pretty-poly-block--${t}`,
        `pretty-poly-block--mode-${c}`
      ];
      return a && (a.sizeUnit && b.push(`pretty-poly-block--${a.sizeUnit}`), a.collapsible && b.push("pretty-poly-block--collapsible"), a.collapsible && a.collapseAt && (a.size ?? a.defaultSize ?? 0) <= a.collapseAt && b.push("pretty-poly-block--collapsed")), d === "dock" && v.dockOrder !== void 0 && b.push(`pretty-poly-block--dock-order-${v.dockOrder}`), b;
    }, [t, c, a, d, v]), P = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? h(e) : g(e));
    };
    if (!I)
      return null;
    if (d === "dock") {
      const b = v.icon;
      return /* @__PURE__ */ N.jsxs(
        "div",
        {
          ref: m,
          className: ee(
            ...T,
            "pretty-poly-dock-item",
            "flex flex-col items-center p-2 rounded-md transition-colors cursor-pointer min-w-12",
            "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
            v.className,
            s
          ),
          "data-block-id": e,
          "data-block-type": t,
          "data-dock-order": v.dockOrder,
          "aria-label": l || v.label,
          role: "button",
          tabIndex: 0,
          style: v.style,
          children: [
            b && /* @__PURE__ */ N.jsx(b, { className: "pretty-poly-dock-icon w-6 h-6 mb-1" }),
            v.label && /* @__PURE__ */ N.jsx("span", { className: "pretty-poly-dock-label text-xs font-medium text-center", children: v.label })
          ]
        }
      );
    }
    return d === "tabs" ? /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: m,
        className: ee(
          ...T,
          "pretty-poly-tab-panel",
          "flex-1 overflow-auto",
          v.className,
          s
        ),
        "data-block-id": e,
        "data-block-type": t,
        "aria-label": l || v.tabLabel,
        role: "tabpanel",
        style: v.style,
        children: r
      }
    ) : /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: m,
        className: ee(
          ...T,
          "relative overflow-hidden",
          // Apply flex layout for structured content
          x && !E && "flex flex-col h-full",
          // Apply horizontal flex layout when sidebar is present
          x && E && "flex flex-row h-full",
          "transition-opacity duration-150",
          v.className,
          s
        ),
        "data-grid-id": y,
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
        "data-structured": x,
        "data-has-sidebar": E,
        "aria-label": l,
        role: t === "group" ? "group" : void 0,
        tabIndex: p("resizing") ? 0 : void 0,
        onDoubleClick: p("collapse") ? P : void 0,
        style: {
          ...v.style
          // CSS Grid area assignment handled by parent
        },
        children: r
      }
    );
  }
);
Be.displayName = "Block";
const St = X(
  (e, t) => /* @__PURE__ */ N.jsx(Be, { ref: t, ...e, type: "group" })
);
St.displayName = "Block.Group";
Object.assign(Be, {
  Group: St,
  Header: yt,
  Content: ht,
  Footer: gt,
  Toolbar: xt,
  Tabs: vt,
  Sidebar: Le
});
Object.assign(Le, {
  Item: wt,
  Spacer: kt
});
function Wr(e, t, o) {
  const r = [];
  let s = e;
  const i = t.minSize ?? 0, n = t.maxSize ?? 1 / 0;
  if (e < i && (r.push(`Size ${e} is below minimum ${i}`), s = i), e > n && (r.push(`Size ${e} exceeds maximum ${n}`), s = n), s = pe(s, i, n), t.sizeUnit === "px" && t.collapsible && o !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, m = t.defaultSize ?? s;
    s = hr(
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
  const f = de(e.minSize ?? 0, e.sizeUnit, s), m = de(e.maxSize ?? 1 / 0, e.sizeUnit, s), y = de(t.minSize ?? 0, t.sizeUnit, s), w = de(t.maxSize ?? 1 / 0, t.sizeUnit, s), g = de(e.defaultSize ?? 0, e.sizeUnit, s), h = de(t.defaultSize ?? 0, t.sizeUnit, s), c = g + o, d = h + r;
  let p = pe(c, f, m), a = pe(d, y, w);
  n = p - g, l = a - h;
  const v = n + l;
  if (Math.abs(v) > 1e-3) {
    const I = Math.abs(n) < Math.abs(o), T = Math.abs(l) < Math.abs(r);
    if (I && !T) {
      const P = h - n;
      a = pe(P, y, w), l = a - h;
    } else if (T && !I) {
      const P = g - l;
      p = pe(P, f, m), n = p - g;
    }
    i.push("Zero-sum constraint violated, deltas adjusted");
  }
  const x = n + l;
  return {
    isValid: Math.abs(x) <= 1e-3,
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
  ht as BlockContent,
  gt as BlockFooter,
  St as BlockGroup,
  yt as BlockHeader,
  Le as BlockSidebar,
  wt as BlockSidebarItem,
  kt as BlockSidebarSpacer,
  vt as BlockTabs,
  xt as BlockToolbar,
  De as Divider,
  Pr as Grid,
  Sr as GridProvider,
  hr as applyCollapseLogic,
  yr as calculateConstrainedSize,
  pe as clamp,
  ee as cn,
  mr as createCustomAdapter,
  dr as defaultModes,
  Lr as findAdjacentBlock,
  Ur as frToPx,
  gr as generateGridTemplate,
  Dr as getAllGridStates,
  dt as getFlexSpacePx,
  Re as getStorageAdapter,
  Cr as isCollapsed,
  Br as isZeroSum,
  fr as loadGridState,
  he as localStorageAdapter,
  Ae as memoryStorageAdapter,
  Gr as pxPerFr,
  xr as pxToFr,
  pr as removeGridState,
  ur as saveGridState,
  ct as sessionStorageAdapter,
  zr as useGridActions,
  Se as useGridContext,
  Ir as useGridKeyboard,
  Ce as useGridMode,
  br as useGridPersistence,
  Er as useGridResize,
  ft as useGridState,
  Wr as validateBlockSize,
  Fr as validateLayoutIntegrity,
  Vr as validateTwoWayResize
};
