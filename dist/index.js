import Ke, { useState as me, useCallback as C, useMemo as Z, useEffect as J, useRef as fe, createContext as St, useContext as zt, useReducer as Et, Children as be, isValidElement as ae, cloneElement as Be, forwardRef as X, useImperativeHandle as At } from "react";
var Pe = { exports: {} }, xe = {};
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
function Tt() {
  if (We) return xe;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, i, s) {
    var n = null;
    if (s !== void 0 && (n = "" + s), i.key !== void 0 && (n = "" + i.key), "key" in i) {
      s = {};
      for (var c in i)
        c !== "key" && (s[c] = i[c]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: r,
      key: n,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return xe.Fragment = t, xe.jsx = o, xe.jsxs = o, xe;
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
var Ve;
function It() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === V ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case d:
          return "Fragment";
        case a:
          return "Profiler";
        case f:
          return "StrictMode";
        case T:
          return "Suspense";
        case I:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case l:
            return "Portal";
          case v:
            return (p.displayName || "Context") + ".Provider";
          case x:
            return (p._context.displayName || "Context") + ".Consumer";
          case E:
            var j = p.render;
            return p = p.displayName, p || (p = j.displayName || j.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case P:
            return j = p.displayName || null, j !== null ? j : e(p.type) || "Memo";
          case b:
            j = p._payload, p = p._init;
            try {
              return e(p(j));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function o(p) {
      try {
        t(p);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var $ = j.error, A = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return $.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(p);
      }
    }
    function r(p) {
      if (p === d) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === b)
        return "<...>";
      try {
        var j = e(p);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var p = q.A;
      return p === null ? null : p.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function n(p) {
      if (F.call(p, "key")) {
        var j = Object.getOwnPropertyDescriptor(p, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function c(p, j) {
      function $() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: $,
        configurable: !0
      });
    }
    function u() {
      var p = e(this.type);
      return G[p] || (G[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function m(p, j, $, A, U, K, le, B) {
      return $ = K.ref, p = {
        $$typeof: h,
        type: p,
        key: j,
        props: K,
        _owner: U
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function g(p, j, $, A, U, K, le, B) {
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
        H = e(p);
        var Q = Object.keys(j).filter(function(ve) {
          return ve !== "key";
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
      return H && c(
        $,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), m(
        p,
        H,
        K,
        U,
        i(),
        $,
        le,
        B
      );
    }
    function w(p) {
      typeof p == "object" && p !== null && p.$$typeof === h && p._store && (p._store.validated = 1);
    }
    var y = Ke, h = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), q = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, R = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(p) {
        return p();
      }
    };
    var _, G = {}, W = y.react_stack_bottom_frame.bind(
      y,
      s
    )(), k = M(r(s)), L = {};
    we.Fragment = d, we.jsx = function(p, j, $, A, U) {
      var K = 1e4 > q.recentlyCreatedOwnerStacks++;
      return g(
        p,
        j,
        $,
        !1,
        A,
        U,
        K ? Error("react-stack-top-frame") : W,
        K ? M(r(p)) : k
      );
    }, we.jsxs = function(p, j, $, A, U) {
      var K = 1e4 > q.recentlyCreatedOwnerStacks++;
      return g(
        p,
        j,
        $,
        !0,
        A,
        U,
        K ? Error("react-stack-top-frame") : W,
        K ? M(r(p)) : k
      );
    };
  }()), we;
}
process.env.NODE_ENV === "production" ? Pe.exports = Tt() : Pe.exports = It();
var N = Pe.exports;
function Ze(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (o = Ze(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function se() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (t = Ze(e)) && (r && (r += " "), r += t);
  return r;
}
const De = "-", jt = (e) => {
  const t = Nt(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (n) => {
      const c = n.split(De);
      return c[0] === "" && c.length !== 1 && c.shift(), Je(c, t) || Rt(n);
    },
    getConflictingClassGroupIds: (n, c) => {
      const u = o[n] || [];
      return c && r[n] ? [...u, ...r[n]] : u;
    }
  };
}, Je = (e, t) => {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], r = t.nextPart.get(o), i = r ? Je(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const s = e.join(De);
  return (n = t.validators.find(({
    validator: c
  }) => c(s))) == null ? void 0 : n.classGroupId;
}, Fe = /^\[(.+)\]$/, Rt = (e) => {
  if (Fe.test(e)) {
    const t = Fe.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Nt = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in o)
    Me(o[i], r, i, t);
  return r;
}, Me = (e, t, o, r) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : He(t, i);
      s.classGroupId = o;
      return;
    }
    if (typeof i == "function") {
      if (Pt(i)) {
        Me(i(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: o
      });
      return;
    }
    Object.entries(i).forEach(([s, n]) => {
      Me(n, He(t, s), o, r);
    });
  });
}, He = (e, t) => {
  let o = e;
  return t.split(De).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, Pt = (e) => e.isThemeGetter, Mt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (s, n) => {
    o.set(s, n), t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let n = o.get(s);
      if (n !== void 0)
        return n;
      if ((n = r.get(s)) !== void 0)
        return i(s, n), n;
    },
    set(s, n) {
      o.has(s) ? o.set(s, n) : i(s, n);
    }
  };
}, Oe = "!", _e = ":", Ot = _e.length, _t = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (i) => {
    const s = [];
    let n = 0, c = 0, u = 0, m;
    for (let l = 0; l < i.length; l++) {
      let d = i[l];
      if (n === 0 && c === 0) {
        if (d === _e) {
          s.push(i.slice(u, l)), u = l + Ot;
          continue;
        }
        if (d === "/") {
          m = l;
          continue;
        }
      }
      d === "[" ? n++ : d === "]" ? n-- : d === "(" ? c++ : d === ")" && c--;
    }
    const g = s.length === 0 ? i : i.substring(u), w = $t(g), y = w !== g, h = m && m > u ? m - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: w,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const i = t + _e, s = r;
    r = (n) => n.startsWith(i) ? s(n.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: n,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const i = r;
    r = (s) => o({
      className: s,
      parseClassName: i
    });
  }
  return r;
}, $t = (e) => e.endsWith(Oe) ? e.substring(0, e.length - 1) : e.startsWith(Oe) ? e.substring(1) : e, Dt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const i = [];
    let s = [];
    return r.forEach((n) => {
      n[0] === "[" || t[n] ? (i.push(...s.sort(), n), s = []) : s.push(n);
    }), i.push(...s.sort()), i;
  };
}, Ct = (e) => ({
  cache: Mt(e.cacheSize),
  parseClassName: _t(e),
  sortModifiers: Dt(e),
  ...jt(e)
}), Gt = /\s+/, Ut = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: i,
    sortModifiers: s
  } = t, n = [], c = e.trim().split(Gt);
  let u = "";
  for (let m = c.length - 1; m >= 0; m -= 1) {
    const g = c[m], {
      isExternal: w,
      modifiers: y,
      hasImportantModifier: h,
      baseClassName: l,
      maybePostfixModifierPosition: d
    } = o(g);
    if (w) {
      u = g + (u.length > 0 ? " " + u : u);
      continue;
    }
    let f = !!d, a = r(f ? l.substring(0, d) : l);
    if (!a) {
      if (!f) {
        u = g + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (a = r(l), !a) {
        u = g + (u.length > 0 ? " " + u : u);
        continue;
      }
      f = !1;
    }
    const x = s(y).join(":"), v = h ? x + Oe : x, E = v + a;
    if (n.includes(E))
      continue;
    n.push(E);
    const T = i(a, f);
    for (let I = 0; I < T.length; ++I) {
      const P = T[I];
      n.push(v + P);
    }
    u = g + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Lt() {
  let e = 0, t, o, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Xe(t)) && (r && (r += " "), r += o);
  return r;
}
const Xe = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xe(e[r])) && (o && (o += " "), o += t);
  return o;
};
function Bt(e, ...t) {
  let o, r, i, s = n;
  function n(u) {
    const m = t.reduce((g, w) => w(g), e());
    return o = Ct(m), r = o.cache.get, i = o.cache.set, s = c, c(u);
  }
  function c(u) {
    const m = r(u);
    if (m)
      return m;
    const g = Ut(u, o);
    return i(u, g), g;
  }
  return function() {
    return s(Lt.apply(null, arguments));
  };
}
const Y = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Wt = /^\d+\/\d+$/, Vt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ft = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ht = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (e) => Wt.test(e), O = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => !!e && Number.isInteger(Number(e)), Ie = (e) => e.endsWith("%") && O(e.slice(0, -1)), re = (e) => Vt.test(e), Kt = () => !0, Zt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ft.test(e) && !Ht.test(e)
), tt = () => !1, Jt = (e) => Yt.test(e), Xt = (e) => qt.test(e), Qt = (e) => !S(e) && !z(e), er = (e) => ge(e, nt, tt), S = (e) => Qe.test(e), ie = (e) => ge(e, st, Zt), je = (e) => ge(e, sr, O), Ye = (e) => ge(e, rt, tt), tr = (e) => ge(e, ot, Xt), Ee = (e) => ge(e, it, Jt), z = (e) => et.test(e), ke = (e) => ye(e, st), rr = (e) => ye(e, ir), qe = (e) => ye(e, rt), or = (e) => ye(e, nt), nr = (e) => ye(e, ot), Ae = (e) => ye(e, it, !0), ge = (e, t, o) => {
  const r = Qe.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ye = (e, t, o = !1) => {
  const r = et.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", nt = (e) => e === "length" || e === "size" || e === "bg-size", st = (e) => e === "length", sr = (e) => e === "number", ir = (e) => e === "family-name", it = (e) => e === "shadow", ar = () => {
  const e = Y("color"), t = Y("font"), o = Y("text"), r = Y("font-weight"), i = Y("tracking"), s = Y("leading"), n = Y("breakpoint"), c = Y("container"), u = Y("spacing"), m = Y("radius"), g = Y("shadow"), w = Y("inset-shadow"), y = Y("text-shadow"), h = Y("drop-shadow"), l = Y("blur"), d = Y("perspective"), f = Y("aspect"), a = Y("ease"), x = Y("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], T = () => [...E(), z, S], I = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], b = () => [z, S, u], D = () => [ce, "full", "auto", ...b()], V = () => [ne, "none", "subgrid", z, S], q = () => ["auto", {
    span: ["full", ne, z, S]
  }, ne, z, S], F = () => [ne, "auto", z, S], R = () => ["auto", "min", "max", "fr", z, S], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], _ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ...b()], W = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], k = () => [e, z, S], L = () => [...E(), qe, Ye, {
    position: [z, S]
  }], p = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", or, er, {
    size: [z, S]
  }], $ = () => [Ie, ke, ie], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    z,
    S
  ], U = () => ["", O, ke, ie], K = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [O, Ie, qe, Ye], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    l,
    z,
    S
  ], Q = () => ["none", O, z, S], oe = () => ["none", O, z, S], ve = () => [O, z, S], ze = () => [ce, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [re],
      breakpoint: [re],
      color: [Kt],
      container: [re],
      "drop-shadow": [re],
      ease: ["in", "out", "in-out"],
      font: [Qt],
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
        aspect: ["auto", "square", ce, S, z, f]
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
        columns: [O, S, z, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": v()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": v()
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
        z: [ne, "auto", z, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ce, "full", "auto", c, ...b()]
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
        flex: [O, ce, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", O, z, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", O, z, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ne, "first", "last", "none", z, S]
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
        m: G()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: G()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: G()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: G()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: G()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: G()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: G()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: G()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: G()
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
        w: [c, "screen", ...W()]
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
          ...W()
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
        font: [r, z, je]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ie, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rr, S, t]
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
        tracking: [i, z, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [O, "none", z, je]
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
        "list-image": ["none", z, S]
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
        list: ["disc", "decimal", "none", z, S]
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
        placeholder: k()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: k()
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
        decoration: [O, "from-font", "auto", z, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: k()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [O, "auto", z, S]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z, S]
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
        content: ["none", z, S]
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
        bg: p()
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
          }, ne, z, S],
          radial: ["", z, S],
          conic: [ne, z, S]
        }, nr, tr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: k()
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
        from: k()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: k()
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
        border: k()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": k()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": k()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": k()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": k()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": k()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": k()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": k()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": k()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: k()
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
        "outline-offset": [O, z, S]
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
        outline: k()
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
          g,
          Ae,
          Ee
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: k()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", w, Ae, Ee]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": k()
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
        ring: k()
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
        "ring-offset": k()
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
        "inset-ring": k()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, Ae, Ee]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": k()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O, z, S]
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
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": B()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": B()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": B()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": B()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": B()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": B()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": B()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": B()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": B()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": B()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": B()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": B()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": B()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": B()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": k()
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
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": k()
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
        mask: p()
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
        mask: ["none", z, S]
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
          z,
          S
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
        brightness: [O, z, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O, z, S]
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
          Ae,
          Ee
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": k()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", O, z, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [O, z, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", O, z, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O, z, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", O, z, S]
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
          z,
          S
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
        "backdrop-brightness": [O, z, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O, z, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", O, z, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [O, z, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", O, z, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O, z, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O, z, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", O, z, S]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", z, S]
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
        duration: [O, "initial", z, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", a, z, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [O, z, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, z, S]
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
        perspective: [d, z, S]
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
        transform: [z, S, "", "none", "gpu", "cpu"]
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
        accent: k()
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
        caret: k()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z, S]
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
        "will-change": ["auto", "scroll", "contents", "transform", z, S]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...k()]
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
        stroke: ["none", ...k()]
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
}, lr = /* @__PURE__ */ Bt(ar);
function ee(...e) {
  return lr(se(e));
}
const cr = {
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
function Ce(e = cr) {
  const [t, o] = me(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [r, i] = me(null), s = C(() => {
    if (typeof window > "u") return;
    const l = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    o(l);
  }, []), n = Z(() => {
    var d;
    if (r && e[r])
      return r;
    const l = Object.entries(e).filter(([f, a]) => {
      if (a.matcher)
        return a.matcher(t);
      const x = !a.minWidth || t.width >= a.minWidth, v = !a.maxWidth || t.width <= a.maxWidth;
      return x && v;
    });
    return l.sort(([, f], [, a]) => {
      const x = (f.minWidth ? 1 : 0) + (f.maxWidth ? 1 : 0);
      return (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0) - x;
    }), ((d = l[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, r]), c = Z(() => e[n], [e, n]), u = Z(() => (c == null ? void 0 : c.type) || "grid", [c]), m = C((l) => {
    if (l && !e[l]) {
      console.warn(`Mode "${l}" not found in configuration`);
      return;
    }
    i(l);
  }, [e]), g = C((l) => n === l, [n]), w = Z(() => Object.keys(e), [e]), y = C((l) => {
    switch (u) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(l);
      case "sidebar":
        return ["resizing", "collapse"].includes(l);
      case "tabs":
        return l === "tabs";
      case "dock":
        return l === "dock";
      case "stack":
      case "accordion":
        return !1;
      default:
        return !1;
    }
  }, [u]), h = Z(() => {
    const l = Object.entries(e).map(([x, v]) => ({ name: x, ...v })).sort((x, v) => (x.breakpoint || 0) - (v.breakpoint || 0)), d = l.findIndex((x) => x.name === n), f = l[d + 1], a = l[d - 1];
    return {
      current: n,
      currentBreakpoint: (c == null ? void 0 : c.breakpoint) || 0,
      nextMode: f == null ? void 0 : f.name,
      nextBreakpoint: f == null ? void 0 : f.breakpoint,
      prevMode: a == null ? void 0 : a.name,
      prevBreakpoint: a == null ? void 0 : a.breakpoint,
      isSmallest: d === 0,
      isLargest: d === l.length - 1
    };
  }, [e, n, c]);
  return J(() => {
    if (typeof window > "u") return;
    const l = () => s(), d = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", l), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", l), window.removeEventListener("orientationchange", d);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: n,
    currentModeConfig: c,
    currentLayoutType: u,
    // Mode management
    setMode: m,
    isMode: g,
    availableModes: w,
    // Features and capabilities
    supportsFeature: y,
    breakpointInfo: h,
    // Utilities
    isForced: !!r,
    updateViewport: s
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
}, at = {
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
}, ue = /* @__PURE__ */ new Map(), Te = {
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
      return typeof localStorage < "u" ? he : Te;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? at : Te;
    case "memory":
    default:
      return Te;
  }
}
function Ge(e) {
  return `${te}${e}`;
}
function dr(e, t, o = he) {
  const r = Ge(e), i = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  o.save(r, i);
}
function ur(e, t = he) {
  const o = Ge(e);
  return t.load(o);
}
function fr(e, t = he) {
  const o = Ge(e);
  t.remove(o);
}
function Dr(e = he) {
  const t = {};
  try {
    if (e === he && typeof localStorage < "u")
      for (let o = 0; o < localStorage.length; o++) {
        const r = localStorage.key(o);
        if (r && r.startsWith(te)) {
          const i = r.substring(te.length), s = e.load(r);
          s && (t[i] = s);
        }
      }
    else if (e === at && typeof sessionStorage < "u")
      for (let o = 0; o < sessionStorage.length; o++) {
        const r = sessionStorage.key(o);
        if (r && r.startsWith(te)) {
          const i = r.substring(te.length), s = e.load(r);
          s && (t[i] = s);
        }
      }
    else if (e === Te) {
      for (const o of ue.keys())
        if (o.startsWith(te)) {
          const r = o.substring(te.length), i = e.load(o);
          i && (t[r] = i);
        }
    }
  } catch (o) {
    console.warn("Failed to get all grid states:", o);
  }
  return t;
}
function pr(e) {
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
function mr({
  gridId: e,
  enabled: t,
  state: o,
  onStateLoad: r,
  autoSave: i = !0,
  saveDelay: s = 500
}) {
  const n = fe(null), c = fe(), u = fe(""), m = fe(!1);
  J(() => {
    if (!t) {
      n.current = null;
      return;
    }
    typeof t == "function" ? n.current = pr(t) : t === "localStorage" ? n.current = Re("localStorage") : t === "sessionStorage" ? n.current = Re("sessionStorage") : n.current = Re("localStorage");
  }, [t]), J(() => {
    if (!n.current || !t || typeof t == "function" || m.current)
      return;
    const l = ur(e, n.current);
    l && (r == null || r(l), m.current = !0);
  }, [e, t]);
  const g = C((l = o) => {
    if (!n.current || !t)
      return;
    const d = JSON.stringify(l);
    if (d !== u.current)
      try {
        dr(e, l, n.current), u.current = d;
      } catch (f) {
        console.warn("Failed to save grid state:", f);
      }
  }, [e, t, o]), w = C((l = o) => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      g(l);
    }, s);
  }, [g, s, o]), y = C(() => {
    if (!(!n.current || !t || typeof t == "function"))
      try {
        fr(e, n.current), u.current = "";
      } catch (l) {
        console.warn("Failed to clear grid state:", l);
      }
  }, [e, t]), h = C((l = o) => {
    c.current && clearTimeout(c.current), g(l);
  }, [g, o]);
  return J(() => {
    if (!(!i || !t))
      return w(o), () => {
        c.current && clearTimeout(c.current);
      };
  }, [o, i, t, w]), J(() => {
    if (!t || typeof t == "function")
      return;
    const l = () => {
      h();
    };
    return window.addEventListener("beforeunload", l), () => {
      window.removeEventListener("beforeunload", l);
    };
  }, [h, t]), J(() => () => {
    c.current && clearTimeout(c.current);
  }, []), {
    saveState: h,
    debouncedSave: w,
    clearState: y,
    isEnabled: !!t
  };
}
function lt(e, t, o) {
  return Math.max(0, e - t - o);
}
function Cr(e, t) {
  return t > 0 ? e / t : 0;
}
function pe(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
function Gr(e, t) {
  return t > 0 && e <= t;
}
function br(e, t, o, r, i) {
  if (o === 0)
    return e;
  const s = t <= o, n = r * 2.5;
  return s && e > n ? i : e < o && !s ? r : e;
}
function hr(e, t, o = 0, r = 1 / 0, i = !1) {
  const s = i ? -e : e, n = t + s;
  return pe(n, o, r);
}
function gr(e, t) {
  const o = [];
  return e.forEach((r) => {
    if (r.dividerPosition === "start" && o.push(`${r.dividerSize || 8}px`), r.sizeUnit === "auto")
      o.push("auto");
    else if (r.sizeUnit === "px") {
      const i = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${i}, ${r.size}px)`);
    } else {
      const i = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${i}, ${r.size}fr)`);
    }
    r.dividerPosition === "end" && o.push(`${r.dividerSize || 8}px`);
  }), o.join(" ");
}
function yr(e, t) {
  const o = [];
  return e.forEach((r) => {
    if (r.type === "divider")
      o.push(`${r.dividerSize || 8}px`);
    else if (r.sizeUnit === "auto")
      o.push("auto");
    else if (r.sizeUnit === "px") {
      const i = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${i}, ${r.size || 1}px)`);
    } else {
      const i = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${i}, ${r.size || 1}fr)`);
    }
  }), o.join(" ");
}
function Ur(e, t) {
  return e * t;
}
function vr(e, t) {
  return t > 0 ? e / t : 0;
}
function Lr(e, t, o) {
  return o === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Br(e, t, o = 1e-3) {
  return Math.abs(e + t) <= o;
}
function xr(e, t) {
  const o = C((n) => "touches" in n ? {
    x: n.touches[0].clientX,
    y: n.touches[0].clientY
  } : {
    x: n.clientX,
    y: n.clientY
  }, []), r = C((n, c, u) => {
    const m = e.blocks[n];
    if (!m) return;
    const g = o(u), y = Object.values(e.blocks).filter(
      (a) => a.parentId === m.parentId
    ).sort(
      (a, x) => (a.order || 0) - (x.order || 0)
    ), h = y.findIndex((a) => a.id === n);
    let l = null;
    if (m.dividerPosition === "start" && h > 0 ? l = y[h - 1] : m.dividerPosition === "end" && h < y.length - 1 && (l = y[h + 1]), l && m.sizeUnit === "fr" && l.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${n}" when adjacent to px block "${l.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: n,
        dividerId: c,
        startPosition: g,
        initialSize: m.defaultSize || 0,
        initialAdjacentBlockId: l == null ? void 0 : l.id,
        initialAdjacentSize: l ? l.originalDefaultSize || l.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const d = m.parentId ? e.blocks[m.parentId] : null, f = (d == null ? void 0 : d.direction) || "row";
    document.body.style.cursor = f === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, o]), i = C((n) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const c = e.blocks[e.resize.activeBlockId];
    if (!c) return;
    const u = o(n), m = c.parentId ? e.blocks[c.parentId] : null, g = (m == null ? void 0 : m.direction) || "row", w = g === "row" ? u.x - e.resize.startPosition.x : u.y - e.resize.startPosition.y;
    if (c.sizeUnit === "px") {
      const y = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), l = ((y == null ? void 0 : y.getAttribute("data-block-divider-position")) || "end") === "start", d = hr(
        w,
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
      const y = Object.values(e.blocks).filter(
        (R) => R.parentId === c.parentId
      ), h = y.filter((R) => R.sizeUnit === "fr"), l = c.parentId ? document.querySelector(`[data-block-id="${c.parentId}"]`) : document.querySelector('[data-block-id="root"]'), d = l ? g === "row" ? l.clientWidth : l.clientHeight : 1200, f = y.filter((R) => R.sizeUnit === "px").reduce((R, M) => {
        const _ = document.querySelector(`[data-block-id="${M.id}"]`);
        if (!_) return R;
        const G = g === "row" ? _.clientWidth : _.clientHeight;
        return R + G;
      }, 0), x = Array.from(
        (l == null ? void 0 : l.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((R, M) => {
        if (!(M instanceof HTMLElement)) return R;
        const _ = g === "row" ? M.clientWidth : M.clientHeight;
        return R + _;
      }, 0), E = lt(d, f, x), T = h.reduce(
        (R, M) => R + (M.defaultSize || 1),
        0
      ), I = T > 0 ? E / T : 0;
      if (I === 0) return;
      const P = vr(w, I), b = h.sort(
        (R, M) => (R.order || 0) - (M.order || 0)
      ), D = b.findIndex(
        (R) => R.id === e.resize.activeBlockId
      ), V = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), q = (V == null ? void 0 : V.getAttribute("data-block-divider-position")) || "end";
      let F = null;
      if (q === "start" && D > 0 ? F = b[D - 1] : q === "end" && D < b.length - 1 && (F = b[D + 1]), F) {
        let R, M;
        R = P, M = -P;
        const _ = 0.1, G = Math.max(
          _,
          e.resize.initialSize + R
        ), W = Math.max(
          _,
          (e.resize.initialAdjacentSize || 1) + M
        ), k = G - e.resize.initialSize, L = W - (e.resize.initialAdjacentSize || 1);
        Math.abs(k + L) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: G
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: F.id, size: W }
        }));
      }
    }
  }, [e.resize, e.blocks, t, o]), s = C(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: r,
    updateResize: i,
    endResize: s
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
      const i = r.collapseTo || 0;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...r,
            // Preserve original size for expand
            originalDefaultSize: r.originalDefaultSize || r.defaultSize,
            defaultSize: i,
            size: i
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
      const c = Object.fromEntries(
        Object.entries(e.blocks).map(([u, m]) => [
          u,
          {
            ...m,
            size: m.defaultSize
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
function kr(e, t, o) {
  return {
    blocks: e.reduce((i, s) => (i[s.id] = {
      ...s,
      size: s.defaultSize,
      originalDefaultSize: s.defaultSize
      // Store original size for expand functionality
    }, i), {}),
    activeMode: o,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const ct = St(null);
function Sr({
  children: e,
  blocks: t,
  modes: o,
  gridId: r = "default",
  persist: i = !1,
  persistKey: s,
  onModeChange: n,
  onLayoutChange: c
}) {
  const { activeMode: u, viewport: m, setMode: g } = Ce(o), [w, y] = Et(
    wr,
    kr(t, m, u)
  );
  J(() => {
    y({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: m }
    });
  }, [m]), J(() => {
    const v = w.activeMode;
    u !== v && (y({
      type: "SWITCH_MODE",
      payload: { mode: u }
    }), n == null || n(u, v));
  }, [u, w.activeMode, n]);
  const { saveState: h, clearState: l } = mr({
    gridId: s || r,
    enabled: i,
    state: w,
    onStateLoad: (v) => {
      y({ type: "LOAD_STATE", payload: { state: v } });
    },
    autoSave: !0
  }), { startResize: d, updateResize: f, endResize: a } = xr(w, y), x = Z(
    () => ({
      gridId: r,
      state: {
        ...w,
        activeMode: u,
        viewport: m
      },
      dispatch: y,
      // Grid operations
      resizeBlock: (v, E) => {
        y({
          type: "RESIZE_BLOCK",
          payload: { blockId: v, size: E }
        });
      },
      collapseBlock: (v) => {
        y({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: v }
        });
      },
      expandBlock: (v) => {
        y({
          type: "EXPAND_BLOCK",
          payload: { blockId: v }
        });
      },
      switchMode: (v) => {
        g(v);
      },
      // Resize operations (using extracted hook)
      startResize: d,
      updateResize: f,
      endResize: a,
      // Persistence
      persistState: () => h(w),
      resetState: () => {
        y({ type: "RESET_STATE" }), l();
      }
    }),
    [r, w, u, m, h, l, g, d, f, a]
  );
  return J(() => {
    if (c) {
      const v = Object.values(w.blocks);
      c(v);
    }
  }, [w.blocks, c]), /* @__PURE__ */ N.jsx(ct.Provider, { value: x, children: e });
}
function Se() {
  const e = zt(ct);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function dt() {
  const { state: e } = Se();
  return e;
}
function zr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    switchMode: r,
    persistState: i,
    resetState: s
  } = Se();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    switchMode: r,
    persistState: i,
    resetState: s
  };
}
function ut() {
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
    startResize: i,
    updateResize: s,
    endResize: n,
    isDragging: c,
    activeBlockId: u,
    activeDividerId: m
  } = ut(), g = C(() => {
    if (!t.current) return 0;
    const f = t.current.getBoundingClientRect();
    return r === "column" ? f.width : f.height;
  }, [r]), w = C(() => {
    const f = g();
    if (f === 0) return 0;
    const a = e.filter((T) => T.sizeUnit === "px").reduce((T, I) => T + (I.defaultSize || 0), 0), x = e.filter((T) => T.dividerPosition !== "none").reduce((T, I) => T + (I.dividerSize || 8), 0), v = e.filter((T) => T.sizeUnit === "fr").reduce((T, I) => T + (I.defaultSize || 1), 0), E = lt(f, a, x);
    return v > 0 ? E / v : 0;
  }, [e, g]), y = C((f) => {
    const a = e.find((x) => x.id === f);
    a && a.defaultSize !== void 0 && (o == null || o(f, a.defaultSize));
  }, [e, o]), h = C((f) => {
    const a = e.find((x) => x.id === f);
    a && a.collapseTo !== void 0 && (o == null || o(f, a.collapseTo));
  }, [e, o]), l = C((f) => {
    const a = e.find((x) => x.id === f);
    a && a.defaultSize !== void 0 && (o == null || o(f, a.defaultSize));
  }, [e, o]), d = C((f) => {
    const a = e.find((x) => x.id === f);
    return !a || !a.collapseAt ? !1 : (a.defaultSize || 0) <= a.collapseAt;
  }, [e]);
  return J(() => {
    const f = (E) => {
      E.preventDefault(), s(E);
    }, a = (E) => {
      E.preventDefault(), s(E);
    }, x = () => {
      n();
    }, v = () => {
      n();
    };
    if (c)
      return document.addEventListener("mousemove", f), document.addEventListener("mouseup", x), document.addEventListener("touchmove", a), document.addEventListener("touchend", v), () => {
        document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", x), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", v);
      };
  }, [c, s, n]), {
    // State
    isDragging: c,
    activeBlockId: u,
    activeDividerId: m,
    // Actions
    startResize: i,
    resetBlock: y,
    collapseBlock: h,
    expandBlock: l,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: g,
    calculatePixelsPerFr: w
  };
}
function Ar({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: o,
  onFocusBlock: r,
  onCollapseBlock: i,
  onExpandBlock: s,
  containerRef: n,
  stepSize: c = 10,
  largeStepSize: u = 50
}) {
  const m = C(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), g = C((d) => {
    if (!d) return null;
    const f = d.dataset.blockId;
    return t.find((a) => a.id === f) || null;
  }, [t]), w = C((d, f) => {
    if (!(n != null && n.current)) return null;
    const a = Array.from(
      n.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), x = d.getBoundingClientRect(), v = {
      x: x.left + x.width / 2,
      y: x.top + x.height / 2
    }, E = a.filter((T) => {
      if (T === d) return !1;
      const I = T.getBoundingClientRect(), P = {
        x: I.left + I.width / 2,
        y: I.top + I.height / 2
      };
      switch (f) {
        case "up":
          return P.y < v.y;
        case "down":
          return P.y > v.y;
        case "left":
          return P.x < v.x;
        case "right":
          return P.x > v.x;
        default:
          return !1;
      }
    });
    return E.length === 0 ? null : (E.sort((T, I) => {
      const P = T.getBoundingClientRect(), b = I.getBoundingClientRect(), D = {
        x: P.left + P.width / 2,
        y: P.top + P.height / 2
      }, V = {
        x: b.left + b.width / 2,
        y: b.top + b.height / 2
      }, q = Math.sqrt(
        Math.pow(D.x - v.x, 2) + Math.pow(D.y - v.y, 2)
      ), F = Math.sqrt(
        Math.pow(V.x - v.x, 2) + Math.pow(V.y - v.y, 2)
      );
      return q - F;
    }), E[0]);
  }, [n]), y = C((d) => {
    if (!e) return;
    const f = m();
    if (!f) return;
    const a = g(f);
    if (!a) return;
    const x = d.ctrlKey || d.metaKey, v = d.shiftKey, E = v ? u : c;
    if (!x && !v)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const T = w(f, "up");
          T && (T.focus(), r == null || r(T.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const I = w(f, "down");
          I && (I.focus(), r == null || r(I.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const P = w(f, "left");
          P && (P.focus(), r == null || r(P.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const b = w(f, "right");
          b && (b.focus(), r == null || r(b.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), a.collapsible && (s == null || s(a.id));
          break;
        case "Escape":
          d.preventDefault(), f.blur();
          break;
      }
    if (x && o)
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
    if (x)
      switch (d.key) {
        case "Minus":
        case "-":
          d.preventDefault(), i == null || i(a.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), s == null || s(a.id);
          break;
      }
  }, [
    e,
    m,
    g,
    w,
    o,
    r,
    i,
    s,
    c,
    u
  ]), h = C((d) => {
    if (!(n != null && n.current)) return;
    const f = n.current.querySelector(
      `[data-block-id="${d}"]`
    );
    f && (f.focus(), r == null || r(d));
  }, [n, r]), l = C(() => n != null && n.current ? Array.from(
    n.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [n]);
  return J(() => {
    if (e)
      return document.addEventListener("keydown", y), () => {
        document.removeEventListener("keydown", y);
      };
  }, [y, e]), {
    focusBlock: h,
    getFocusableBlocks: l,
    getFocusedBlock: m,
    isEnabled: e
  };
}
function Tr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const o = e.sizeUnit || "fr", r = t.sizeUnit || "fr";
  return o === "fr" && r === "px" ? { targetId: t.id, position: "start" } : o === "px" && r === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Ir(e, t, o, r, i) {
  return i || o === "none" ? !1 : o === "manual" ? !!r : o === "auto" ? t ? !1 : !i : !1;
}
function jr(e, t, o, r) {
  var u;
  const { targetId: i, position: s } = Tr(e, t), n = {
    targetId: i,
    position: s,
    size: (r == null ? void 0 : r.defaultSize) || 8,
    className: r == null ? void 0 : r.defaultClassName,
    handle: r == null ? void 0 : r.defaultHandle
  }, c = (u = r == null ? void 0 : r.overrides) == null ? void 0 : u[e.id];
  if (c && Object.assign(n, c), typeof o == "object" && o !== null) {
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
  return Ke.createElement(o, {
    key: `auto-divider-${t}`,
    targetId: e.targetId,
    position: e.position,
    size: e.size,
    className: e.className,
    handle: e.handle,
    "aria-label": e["aria-label"]
  });
}
function ft(e, t, o, r, i) {
  if (t !== "auto" || !i) {
    const m = be.toArray(e).filter(ae).map((g) => {
      const w = Ne(g);
      if (!w) return null;
      const y = r == null ? void 0 : r[w.id];
      return {
        id: w.id,
        type: "block",
        sizeUnit: (y == null ? void 0 : y.sizeUnit) || "fr",
        size: (y == null ? void 0 : y.defaultSize) || 1
      };
    }).filter((g) => g !== null);
    return {
      children: e,
      templateItems: m
    };
  }
  const s = be.toArray(e), n = [], c = [];
  return s.forEach((u, m) => {
    if (!ae(u)) {
      n.push(u);
      return;
    }
    const g = Ne(u);
    if (!g) {
      n.push(u);
      return;
    }
    n.push(u);
    const w = {
      id: g.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    };
    r != null && r[g.id] && Object.assign(w, r[g.id]), c.push({
      id: w.id,
      type: "block",
      sizeUnit: w.sizeUnit || "fr",
      size: w.defaultSize || 1
    });
    const y = m === s.length - 1, h = m < s.length - 1 ? s[m + 1] : null;
    let l = null;
    if (ae(h)) {
      const a = Ne(h);
      a && (l = { id: a.id });
    }
    const d = l ? {
      id: l.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    } : null;
    if (d && (r != null && r[d.id]) && Object.assign(d, r[d.id]), Ir(
      w,
      y,
      t,
      g.divider,
      g.noDivider
    )) {
      const a = jr(
        w,
        d,
        g.divider,
        o
      ), x = Rr(
        a,
        `${g.id}-${m}`,
        i
      );
      n.push(x), c.push({
        id: `${g.id}-divider-${m}`,
        type: "divider",
        dividerSize: a.size
      });
    }
  }), {
    children: n,
    templateItems: c
  };
}
function pt(e, t, o, r, i) {
  return t !== "auto" ? e : be.map(e, (s) => {
    var m, g;
    if (!ae(s))
      return s;
    const n = ((m = s.type) == null ? void 0 : m.displayName) || ((g = s.type) == null ? void 0 : g.name), c = n === "Block.Group" || n === "BlockGroup", u = n === "Block";
    if (c) {
      const w = ft(
        s.props.children,
        t,
        o,
        r,
        i
      );
      return Be(s, {
        ...s.props,
        children: w.children
      });
    } else if (u && be.toArray(s.props.children).some((y) => {
      var l, d;
      if (!ae(y)) return !1;
      const h = ((l = y.type) == null ? void 0 : l.displayName) || ((d = y.type) == null ? void 0 : d.name);
      return h === "Block.Group" || h === "BlockGroup";
    })) {
      const y = pt(
        s.props.children,
        t,
        o,
        r,
        i
      );
      return Be(s, {
        ...s.props,
        children: y
      });
    }
    return s;
  });
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
), $e = X(
  ({
    targetId: e,
    position: t,
    size: o = 8,
    className: r,
    handle: i,
    "aria-label": s
  }, n) => {
    const c = fe(null), u = n || c, m = dt(), { startResize: g, isDragging: w, activeDividerId: y } = ut(), { supportsFeature: h } = Ce(), [l, d] = me(""), [f, a] = me("end"), x = C(() => {
      const R = c.current;
      if (!R) return;
      if (e && t && t !== "auto" && t !== "none") {
        e !== l && d(e), t !== f && a(t);
        return;
      }
      let M = e, _ = t === "start" || t === "end" ? t : "end";
      if (e) {
        const G = document.querySelector(`[data-block-id="${e}"]`);
        G && (_ = G.compareDocumentPosition(R) & Node.DOCUMENT_POSITION_FOLLOWING ? "start" : "end");
      } else {
        const G = R.previousElementSibling, W = R.nextElementSibling, k = G == null ? void 0 : G.getAttribute("data-block-id"), L = W == null ? void 0 : W.getAttribute("data-block-id"), p = k ? m.blocks[k] : null, j = L ? m.blocks[L] : null;
        if (p && j)
          p.sizeUnit === "fr" && j.sizeUnit === "px" ? (M = L, _ = "start") : (p.sizeUnit === "px" && j.sizeUnit, M = k, _ = "end");
        else if (p)
          if (p.type === "group") {
            const $ = Object.values(m.blocks).filter((A) => A.parentId === k).sort((A, U) => (A.order || 0) - (U.order || 0)).filter((A) => A.type === "block" && (A.sizeUnit === "px" || A.sizeUnit === "fr"));
            $.length > 0 ? (M = $[$.length - 1].id, _ = "end") : (M = k, _ = "end");
          } else
            M = k, _ = "end";
        else if (j)
          if (j.type === "group") {
            const $ = Object.values(m.blocks).filter((A) => A.parentId === L).sort((A, U) => (A.order || 0) - (U.order || 0)).filter((A) => A.type === "block" && (A.sizeUnit === "px" || A.sizeUnit === "fr"));
            $.length > 0 ? (M = $[0].id, _ = "start") : (M = L, _ = "start");
          } else
            M = L, _ = "start";
      }
      M && M !== l && d(M), _ !== f && a(_);
    }, [e, t, l, f, m.blocks]);
    J(() => {
      x();
    }, [x]), J(() => {
      x();
    }, [m.blocks]);
    const v = l ? m.blocks[l] : null, E = v != null && v.parentId ? m.blocks[v.parentId] : null, T = ((E == null ? void 0 : E.type) === "group" ? E.direction : void 0) || "row", I = T === "column", P = w && l && y === `${l}-${f}-divider`, b = I ? "row-resize" : "col-resize", D = C((R) => {
      if (!l) return;
      R.preventDefault();
      const M = `${l}-${f}-divider`;
      g(l, M, R);
    }, [l, f, g]), V = C(() => {
      v == null || v.defaultSize;
    }, [v]);
    if (!v && l && console.warn(`Divider target block "${l}" not found`), !h("resizing"))
      return null;
    const F = i || Nr;
    return /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: u,
        className: ee(
          "pretty-poly-divider",
          "flex items-center justify-center",
          "select-none touch-none transition-colors",
          "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:bg-accent",
          I ? "cursor-row-resize" : "cursor-col-resize",
          P && "pretty-poly-divider--dragging",
          f === "start" && "pretty-poly-divider--start",
          f === "end" && "pretty-poly-divider--end",
          r
        ),
        "data-block-id": l ? `${l}-${f}-divider` : "loading-divider",
        "data-block-type": "divider",
        "data-block-target": l || "",
        "data-block-direction": T,
        "data-block-divider-position": f,
        style: {
          [I ? "height" : "width"]: `${o}px`,
          cursor: b
        },
        role: "separator",
        "aria-label": s || `Resize ${l || "block"}`,
        "aria-valuenow": v == null ? void 0 : v.defaultSize,
        "aria-valuemin": v == null ? void 0 : v.minSize,
        "aria-valuemax": v == null ? void 0 : v.maxSize,
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
            direction: T
          }
        )
      }
    );
  }
);
$e.displayName = "Divider";
const mt = X(
  ({ children: e, className: t, dividers: o = "manual", dividerConfig: r, "aria-label": i }, s) => {
    const n = fe(null), { state: c, resizeBlock: u, collapseBlock: m, expandBlock: g, switchMode: w, persistState: y, resetState: h } = Se(), l = c.resize.isDragging;
    At(s, () => ({
      resizeBlock: u,
      collapseBlock: m,
      expandBlock: g,
      switchMode: w,
      persistState: y,
      resetState: h,
      getState: () => c
    }), [u, m, g, w, y, h, c]);
    const d = Z(() => Object.values(c.blocks).sort((T, I) => (T.order || 0) - (I.order || 0)), [c.blocks]), f = Z(() => d.find((E) => !E.parentId), [d]);
    Er({
      blocks: d,
      containerRef: n,
      onSizeChange: u,
      direction: (f == null ? void 0 : f.direction) || "row"
    }), Ar({
      enabled: !0,
      blocks: d,
      containerRef: n,
      onResizeBlock: (E, T) => {
        const I = c.blocks[E];
        if (I) {
          const P = I.defaultSize || 0, b = Math.max(0, P + T);
          u(E, b);
        }
      },
      onCollapseBlock: m,
      onExpandBlock: g
    });
    const a = Z(() => {
      const E = ft(
        e,
        o,
        r,
        c.blocks,
        $e
      );
      return o === "auto" ? {
        children: pt(
          E.children,
          o,
          r,
          c.blocks,
          $e
        ),
        templateItems: E.templateItems
      } : E;
    }, [e, o, r, c.blocks]), { gridStyles: x, cssVariables: v } = Z(() => {
      if (!f)
        return { gridStyles: "", cssVariables: "" };
      const E = d.reduce((b, D) => {
        if (D.id === "root") return b;
        const V = D.parentId || "root";
        return b[V] || (b[V] = []), b[V].push(D), b;
      }, {}), T = d.filter((b) => b.defaultSize !== void 0).map((b) => {
        const D = b.sizeUnit === "px" ? `${b.defaultSize}px` : `${b.defaultSize}fr`;
        return `--${f.id}-${b.id}-size: ${D};`;
      }).join(`
  `), I = (b, D = /* @__PURE__ */ new Set()) => {
        if (D.has(b))
          return console.warn(`Circular reference detected for parent: ${b}`), "";
        const V = new Set(D);
        V.add(b);
        const q = E[b] || [];
        if (q.length === 0) return "";
        const F = [...q].sort((k, L) => (k.order || 0) - (L.order || 0)), R = d.find((k) => k.id === b) || f, M = (R == null ? void 0 : R.direction) || "row";
        let _;
        if (o === "auto" && b === f.id)
          _ = yr(a.templateItems, f.id);
        else {
          const k = F.map((L) => ({
            id: L.id,
            sizeUnit: L.sizeUnit || "fr",
            size: L.defaultSize || 1,
            dividerPosition: L.dividerPosition === "auto" ? "none" : L.dividerPosition || "none",
            dividerSize: L.dividerSize || (r == null ? void 0 : r.defaultSize) || 8
          }));
          _ = gr(k, f.id);
        }
        const G = M === "column" ? "grid-template-rows" : "grid-template-columns";
        let W = `
[data-grid-id="${f.id}"][data-block-id="${b}"] {
  display: grid;
  ${G}: ${_};
  ${M === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
        for (const k of F)
          k.type === "group" && (W += I(k.id, V));
        return W;
      }, P = I("root");
      return {
        cssVariables: `:root {
  ${T}
}`,
        gridStyles: P
      };
    }, [d, f, a, o, r]);
    return f ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsxs("style", { type: "text/css", children: [
        v,
        x
      ] }),
      /* @__PURE__ */ N.jsx(
        "div",
        {
          ref: n,
          className: ee(
            "pretty-poly-grid relative overflow-hidden",
            l && "pretty-poly-grid--dragging",
            t
          ),
          "data-grid-id": f.id,
          "data-block-id": f.id,
          "data-active-mode": c.activeMode,
          "aria-label": i || "Resizable grid layout",
          role: "application",
          children: a.children
        }
      )
    ] }) : (console.warn("No root block found in grid configuration"), null);
  }
);
mt.displayName = "GridInternal";
const Pr = X(
  ({
    children: e,
    defaultLayout: t = [],
    modes: o,
    persist: r = !1,
    persistKey: i,
    onLayoutChange: s,
    onModeChange: n,
    className: c,
    dividers: u = "manual",
    dividerConfig: m,
    "aria-label": g
  }, w) => {
    const y = t.find((l) => !l.parentId), h = (y == null ? void 0 : y.id) || "root";
    return /* @__PURE__ */ N.jsx(
      Sr,
      {
        blocks: t,
        modes: o,
        gridId: h,
        persist: r,
        persistKey: i,
        onLayoutChange: s,
        onModeChange: n,
        children: /* @__PURE__ */ N.jsx(
          mt,
          {
            ref: w,
            className: c,
            dividers: u,
            dividerConfig: m,
            "aria-label": g,
            children: e
          }
        )
      }
    );
  }
);
Pr.displayName = "Grid";
const bt = X(
  ({ scrollMode: e = "vertical", className: t, children: o, "aria-label": r }, i) => {
    const s = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: i,
        className: ee(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          s[e],
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
bt.displayName = "Block.Content";
const ht = X(
  ({ position: e = "top", className: t, children: o, "aria-label": r }, i) => /* @__PURE__ */ N.jsx(
    "div",
    {
      ref: i,
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
ht.displayName = "Block.Header";
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
const yt = X(
  ({ left: e, center: t, right: o, className: r, "aria-label": i }, s) => /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: s,
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
      "aria-label": i || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: o })
      ]
    }
  )
);
yt.displayName = "Block.Toolbar";
const vt = X(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: o,
    onTabClose: r,
    className: i,
    "aria-label": s,
    allowOverflow: n = !0
  }, c) => {
    const [u, m] = me(null), g = (h, l) => {
      l.preventDefault(), h.disabled || o(h.id);
    }, w = (h, l) => {
      l.preventDefault(), l.stopPropagation(), r && h.closable && r(h.id);
    }, y = (h, l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), h.disabled || o(h.id));
    };
    return /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: c,
        className: se(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-gray-200",
          "bg-white",
          n ? "overflow-x-auto" : "overflow-x-hidden",
          i
        ),
        role: "tablist",
        "aria-label": s || "Block tabs",
        children: /* @__PURE__ */ N.jsx("div", { className: "flex items-center min-w-0", children: e.map((h) => {
          const l = h.id === t, d = u === h.id, f = h.icon;
          return /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: se(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                l ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                h.disabled && "opacity-50 cursor-not-allowed",
                !n && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": l,
              "aria-disabled": h.disabled,
              tabIndex: h.disabled ? -1 : 0,
              onClick: (a) => g(h, a),
              onKeyDown: (a) => y(h, a),
              onMouseEnter: () => m(h.id),
              onMouseLeave: () => m(null),
              "data-tab-id": h.id,
              children: [
                f && /* @__PURE__ */ N.jsx(f, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ N.jsx("span", { className: "truncate min-w-0", children: h.label }),
                h.closable && r && /* @__PURE__ */ N.jsx(
                  "button",
                  {
                    className: se(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || l ? "opacity-100" : "opacity-0"
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
const Ue = X(
  ({ position: e = "left", width: t = 48, className: o, children: r, "aria-label": i }, s) => /* @__PURE__ */ N.jsx(
    "div",
    {
      ref: s,
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
      "aria-label": i || "Sidebar navigation",
      role: "navigation",
      children: r
    }
  )
);
Ue.displayName = "Block.Sidebar";
const xt = X(
  ({
    icon: e,
    tooltip: t,
    active: o = !1,
    disabled: r = !1,
    badge: i,
    onClick: s,
    className: n,
    "aria-label": c
  }, u) => {
    const [m, g] = me(!1), w = () => {
      t && !r && g(!0);
    }, y = () => {
      g(!1);
    }, h = () => {
      !r && s && s();
    }, l = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), h());
    };
    return /* @__PURE__ */ N.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ N.jsxs(
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
          onKeyDown: l,
          onMouseEnter: w,
          onMouseLeave: y,
          "aria-label": c || t,
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
            i && /* @__PURE__ */ N.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof i == "number" && i > 99 ? "99+" : i }),
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
xt.displayName = "Block.Sidebar.Item";
const wt = X(
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
wt.displayName = "Block.Sidebar.Spacer";
function Mr(e, t) {
  const o = e[t] || {}, { id: r, type: i, direction: s, children: n, className: c, divider: u, noDivider: m, "aria-label": g, ...w } = e;
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
    var r, i;
    if (ae(o)) {
      const s = ((r = o.type) == null ? void 0 : r.displayName) || ((i = o.type) == null ? void 0 : i.name);
      s && (s === "Block.Header" || s === "Block.Content" || s === "Block.Footer" || s === "Block.Toolbar" || s === "Block.Tabs" || s === "Block.Sidebar") && (t = !0);
    }
  }), t;
}
function _r(e) {
  let t = !1;
  return be.forEach(e, (o) => {
    var r, i;
    ae(o) && (((r = o.type) == null ? void 0 : r.displayName) || ((i = o.type) == null ? void 0 : i.name)) === "Block.Sidebar" && (t = !0);
  }), t;
}
const Le = X(
  ({
    id: e,
    type: t = "block",
    direction: o = "row",
    children: r,
    className: i,
    divider: s,
    noDivider: n,
    "aria-label": c,
    ...u
  }, m) => {
    const { gridId: g } = Se(), w = dt(), { collapseBlock: y, expandBlock: h } = zr(), { activeMode: l, currentLayoutType: d, supportsFeature: f } = Ce(), a = w == null ? void 0 : w.blocks[e], x = Mr({ id: e, type: t, direction: o, children: r, className: i, "aria-label": c, ...u }, l), v = Z(() => Or(r), [r]), E = Z(() => _r(r), [r]), T = Z(() => x.hidden ? !1 : d === "dock" ? !!(x.icon || x.label) : !0, [d, x]), I = Z(() => {
      const b = [
        "pretty-poly-block",
        `pretty-poly-block--${t}`,
        `pretty-poly-block--mode-${l}`
      ];
      return a && (a.sizeUnit && b.push(`pretty-poly-block--${a.sizeUnit}`), a.collapsible && b.push("pretty-poly-block--collapsible"), a.collapsible && a.collapseAt && (a.size ?? a.defaultSize ?? 0) <= a.collapseAt && b.push("pretty-poly-block--collapsed")), d === "dock" && x.dockOrder !== void 0 && b.push(`pretty-poly-block--dock-order-${x.dockOrder}`), b;
    }, [t, l, a, d, x]), P = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? h(e) : y(e));
    };
    if (!T)
      return null;
    if (d === "dock") {
      const b = x.icon;
      return /* @__PURE__ */ N.jsxs(
        "div",
        {
          ref: m,
          className: ee(
            ...I,
            "pretty-poly-dock-item",
            "flex flex-col items-center p-2 rounded-md transition-colors cursor-pointer min-w-12",
            "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
            x.className,
            i
          ),
          "data-block-id": e,
          "data-block-type": t,
          "data-dock-order": x.dockOrder,
          "aria-label": c || x.label,
          role: "button",
          tabIndex: 0,
          style: x.style,
          children: [
            b && /* @__PURE__ */ N.jsx(b, { className: "pretty-poly-dock-icon w-6 h-6 mb-1" }),
            x.label && /* @__PURE__ */ N.jsx("span", { className: "pretty-poly-dock-label text-xs font-medium text-center", children: x.label })
          ]
        }
      );
    }
    return d === "tabs" ? /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: m,
        className: ee(
          ...I,
          "pretty-poly-tab-panel",
          "flex-1 overflow-auto",
          x.className,
          i
        ),
        "data-block-id": e,
        "data-block-type": t,
        "aria-label": c || x.tabLabel,
        role: "tabpanel",
        style: x.style,
        children: r
      }
    ) : /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: m,
        className: ee(
          ...I,
          "relative overflow-hidden",
          // Apply flex layout for structured content
          v && !E && "flex flex-col h-full",
          // Apply horizontal flex layout when sidebar is present
          v && E && "flex flex-row h-full",
          "transition-opacity duration-150",
          x.className,
          i
        ),
        "data-grid-id": g,
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
        "data-block-divider": s !== void 0 ? JSON.stringify(s) : void 0,
        "data-block-no-divider": n,
        "data-structured": v,
        "data-has-sidebar": E,
        "aria-label": c,
        role: t === "group" ? "group" : void 0,
        tabIndex: f("resizing") ? 0 : void 0,
        onDoubleClick: f("collapse") ? P : void 0,
        style: {
          ...x.style
          // CSS Grid area assignment handled by parent
        },
        children: r
      }
    );
  }
);
Le.displayName = "Block";
const kt = X(
  (e, t) => /* @__PURE__ */ N.jsx(Le, { ref: t, ...e, type: "group" })
);
kt.displayName = "Block.Group";
Object.assign(Le, {
  Group: kt,
  Header: ht,
  Content: bt,
  Footer: gt,
  Toolbar: yt,
  Tabs: vt,
  Sidebar: Ue
});
Object.assign(Ue, {
  Item: xt,
  Spacer: wt
});
function Wr(e, t, o) {
  const r = [];
  let i = e;
  const s = t.minSize ?? 0, n = t.maxSize ?? 1 / 0;
  if (e < s && (r.push(`Size ${e} is below minimum ${s}`), i = s), e > n && (r.push(`Size ${e} exceeds maximum ${n}`), i = n), i = pe(i, s, n), t.sizeUnit === "px" && t.collapsible && o !== void 0) {
    const c = t.collapseAt ?? 0, u = t.collapseTo ?? 0, m = t.defaultSize ?? i;
    i = br(
      i,
      o,
      c,
      u,
      m
    );
  }
  return {
    isValid: r.length === 0,
    adjustedValue: i,
    violations: r
  };
}
function Vr(e, t, o, r, i = 1) {
  const s = [];
  let n = o, c = r;
  const u = de(e.minSize ?? 0, e.sizeUnit, i), m = de(e.maxSize ?? 1 / 0, e.sizeUnit, i), g = de(t.minSize ?? 0, t.sizeUnit, i), w = de(t.maxSize ?? 1 / 0, t.sizeUnit, i), y = de(e.defaultSize ?? 0, e.sizeUnit, i), h = de(t.defaultSize ?? 0, t.sizeUnit, i), l = y + o, d = h + r;
  let f = pe(l, u, m), a = pe(d, g, w);
  n = f - y, c = a - h;
  const x = n + c;
  if (Math.abs(x) > 1e-3) {
    const T = Math.abs(n) < Math.abs(o), I = Math.abs(c) < Math.abs(r);
    if (T && !I) {
      const P = h - n;
      a = pe(P, g, w), c = a - h;
    } else if (I && !T) {
      const P = y - c;
      f = pe(P, u, m), n = f - y;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const v = n + c;
  return {
    isValid: Math.abs(v) <= 1e-3,
    adjustedTargetDelta: n,
    adjustedAdjacentDelta: c,
    violations: s
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
  const o = [], r = e.filter((s) => s.sizeUnit === "px").reduce((s, n) => s + (t[n.id] ?? n.defaultSize ?? 0), 0), i = e.filter((s) => s.sizeUnit === "fr").reduce((s, n) => s + (t[n.id] ?? n.defaultSize ?? 0), 0);
  return r < 0 && o.push("Total fixed size cannot be negative"), i <= 0 && e.some((s) => s.sizeUnit === "fr") && o.push("Total fr units must be positive"), e.forEach((s) => {
    const n = t[s.id] ?? s.defaultSize ?? 0, c = s.minSize ?? 0, u = s.maxSize ?? 1 / 0;
    c > u && o.push(`Block ${s.id}: minSize (${c}) > maxSize (${u})`), (n < c || n > u) && o.push(`Block ${s.id}: size ${n} violates constraints [${c}, ${u}]`);
  }), {
    isValid: o.length === 0,
    violations: o
  };
}
export {
  Le as Block,
  bt as BlockContent,
  gt as BlockFooter,
  kt as BlockGroup,
  ht as BlockHeader,
  Ue as BlockSidebar,
  xt as BlockSidebarItem,
  wt as BlockSidebarSpacer,
  vt as BlockTabs,
  yt as BlockToolbar,
  $e as Divider,
  Pr as Grid,
  Sr as GridProvider,
  br as applyCollapseLogic,
  hr as calculateConstrainedSize,
  pe as clamp,
  ee as cn,
  pr as createCustomAdapter,
  cr as defaultModes,
  Lr as findAdjacentBlock,
  Ur as frToPx,
  gr as generateGridTemplate,
  Dr as getAllGridStates,
  lt as getFlexSpacePx,
  Re as getStorageAdapter,
  Gr as isCollapsed,
  Br as isZeroSum,
  ur as loadGridState,
  he as localStorageAdapter,
  Te as memoryStorageAdapter,
  Cr as pxPerFr,
  vr as pxToFr,
  fr as removeGridState,
  dr as saveGridState,
  at as sessionStorageAdapter,
  zr as useGridActions,
  Se as useGridContext,
  Ar as useGridKeyboard,
  Ce as useGridMode,
  mr as useGridPersistence,
  Er as useGridResize,
  dt as useGridState,
  Wr as validateBlockSize,
  Fr as validateLayoutIntegrity,
  Vr as validateTwoWayResize
};
