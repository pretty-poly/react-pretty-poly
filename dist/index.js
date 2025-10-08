import vt, { useState as xe, useCallback as $, useMemo as Y, useEffect as Z, useRef as ue, createContext as xt, useContext as wt, useReducer as kt, useLayoutEffect as St, forwardRef as J, useImperativeHandle as zt, Children as Fe, isValidElement as He } from "react";
var je = { exports: {} }, he = {};
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
function Et() {
  if (Ce) return he;
  Ce = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, n, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      s = {};
      for (var l in n)
        l !== "key" && (s[l] = n[l]);
    } else s = n;
    return n = s.ref, {
      $$typeof: e,
      type: o,
      key: i,
      ref: n !== void 0 ? n : null,
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
function Tt() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === K ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case c:
          return "Fragment";
        case a:
          return "Profiler";
        case u:
          return "StrictMode";
        case E:
          return "Suspense";
        case A:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case d:
            return "Portal";
          case y:
            return (p.displayName || "Context") + ".Provider";
          case h:
            return (p._context.displayName || "Context") + ".Consumer";
          case I:
            var T = p.render;
            return p = p.displayName, p || (p = T.displayName || T.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case R:
            return T = p.displayName || null, T !== null ? T : e(p.type) || "Memo";
          case g:
            T = p._payload, p = p._init;
            try {
              return e(p(T));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function r(p) {
      try {
        t(p);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var N = T.error, P = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return N.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(p);
      }
    }
    function o(p) {
      if (p === c) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === g)
        return "<...>";
      try {
        var T = e(p);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var p = M.A;
      return p === null ? null : p.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(p) {
      if (L.call(p, "key")) {
        var T = Object.getOwnPropertyDescriptor(p, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function l(p, T) {
      function N() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: N,
        configurable: !0
      });
    }
    function f() {
      var p = e(this.type);
      return W[p] || (W[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function b(p, T, N, P, G, q, ae, B) {
      return N = q.ref, p = {
        $$typeof: m,
        type: p,
        key: T,
        props: q,
        _owner: G
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: f
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
        value: ae
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function S(p, T, N, P, G, q, ae, B) {
      var V = T.children;
      if (V !== void 0)
        if (P)
          if (O(V)) {
            for (P = 0; P < V.length; P++)
              k(V[P]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(V);
      if (L.call(T, "key")) {
        V = e(p);
        var X = Object.keys(T).filter(function(ge) {
          return ge !== "key";
        });
        P = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", ee[V + P] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          V,
          X,
          V
        ), ee[V + P] = !0);
      }
      if (V = null, N !== void 0 && (r(N), V = "" + N), i(T) && (r(T.key), V = "" + T.key), "key" in T) {
        N = {};
        for (var re in T)
          re !== "key" && (N[re] = T[re]);
      } else N = T;
      return V && l(
        N,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), b(
        p,
        V,
        q,
        G,
        n(),
        N,
        ae,
        B
      );
    }
    function k(p) {
      typeof p == "object" && p !== null && p.$$typeof === m && p._store && (p._store.validated = 1);
    }
    var v = vt, m = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), y = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), M = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, O = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(p) {
        return p();
      }
    };
    var U, W = {}, H = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), z = C(o(s)), ee = {};
    ye.Fragment = c, ye.jsx = function(p, T, N, P, G) {
      var q = 1e4 > M.recentlyCreatedOwnerStacks++;
      return S(
        p,
        T,
        N,
        !1,
        P,
        G,
        q ? Error("react-stack-top-frame") : H,
        q ? C(o(p)) : z
      );
    }, ye.jsxs = function(p, T, N, P, G) {
      var q = 1e4 > M.recentlyCreatedOwnerStacks++;
      return S(
        p,
        T,
        N,
        !0,
        P,
        G,
        q ? Error("react-stack-top-frame") : H,
        q ? C(o(p)) : z
      );
    };
  }()), ye;
}
process.env.NODE_ENV === "production" ? je.exports = Et() : je.exports = Tt();
var j = je.exports;
function qe(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = qe(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ie() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = qe(e)) && (o && (o += " "), o += t);
  return o;
}
const _e = "-", At = (e) => {
  const t = jt(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split(_e);
      return l[0] === "" && l.length !== 1 && l.shift(), Ye(l, t) || Rt(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const f = r[i] || [];
      return l && o[i] ? [...f, ...o[i]] : f;
    }
  };
}, Ye = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Ye(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join(_e);
  return (i = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : i.classGroupId;
}, Ge = /^\[(.+)\]$/, Rt = (e) => {
  if (Ge.test(e)) {
    const t = Ge.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, jt = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    Ie(r[n], o, n, t);
  return o;
}, Ie = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? t : Be(t, n);
      s.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (It(n)) {
        Ie(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([s, i]) => {
      Ie(i, Be(t, s), r, o);
    });
  });
}, Be = (e, t) => {
  let r = e;
  return t.split(_e).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, It = (e) => e.isThemeGetter, Mt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (s, i) => {
    r.set(s, i), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = o.get(s)) !== void 0)
        return n(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : n(s, i);
    }
  };
}, Me = "!", Pe = ":", Pt = Pe.length, _t = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const s = [];
    let i = 0, l = 0, f = 0, b;
    for (let d = 0; d < n.length; d++) {
      let c = n[d];
      if (i === 0 && l === 0) {
        if (c === Pe) {
          s.push(n.slice(f, d)), f = d + Pt;
          continue;
        }
        if (c === "/") {
          b = d;
          continue;
        }
      }
      c === "[" ? i++ : c === "]" ? i-- : c === "(" ? l++ : c === ")" && l--;
    }
    const S = s.length === 0 ? n : n.substring(f), k = Nt(S), v = k !== S, m = b && b > f ? b - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: k,
      maybePostfixModifierPosition: m
    };
  };
  if (t) {
    const n = t + Pe, s = o;
    o = (i) => i.startsWith(n) ? s(i.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = o;
    o = (s) => r({
      className: s,
      parseClassName: n
    });
  }
  return o;
}, Nt = (e) => e.endsWith(Me) ? e.substring(0, e.length - 1) : e.startsWith(Me) ? e.substring(1) : e, Ot = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let s = [];
    return o.forEach((i) => {
      i[0] === "[" || t[i] ? (n.push(...s.sort(), i), s = []) : s.push(i);
    }), n.push(...s.sort()), n;
  };
}, $t = (e) => ({
  cache: Mt(e.cacheSize),
  parseClassName: _t(e),
  sortModifiers: Ot(e),
  ...At(e)
}), Dt = /\s+/, Ct = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = t, i = [], l = e.trim().split(Dt);
  let f = "";
  for (let b = l.length - 1; b >= 0; b -= 1) {
    const S = l[b], {
      isExternal: k,
      modifiers: v,
      hasImportantModifier: m,
      baseClassName: d,
      maybePostfixModifierPosition: c
    } = r(S);
    if (k) {
      f = S + (f.length > 0 ? " " + f : f);
      continue;
    }
    let u = !!c, a = o(u ? d.substring(0, c) : d);
    if (!a) {
      if (!u) {
        f = S + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (a = o(d), !a) {
        f = S + (f.length > 0 ? " " + f : f);
        continue;
      }
      u = !1;
    }
    const h = s(v).join(":"), y = m ? h + Me : h, I = y + a;
    if (i.includes(I))
      continue;
    i.push(I);
    const E = n(a, u);
    for (let A = 0; A < E.length; ++A) {
      const R = E[A];
      i.push(y + R);
    }
    f = S + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function Lt() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ke(t)) && (o && (o += " "), o += r);
  return o;
}
const Ke = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ke(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Gt(e, ...t) {
  let r, o, n, s = i;
  function i(f) {
    const b = t.reduce((S, k) => k(S), e());
    return r = $t(b), o = r.cache.get, n = r.cache.set, s = l, l(f);
  }
  function l(f) {
    const b = o(f);
    if (b)
      return b;
    const S = Ct(f, r);
    return n(f, S), S;
  }
  return function() {
    return s(Lt.apply(null, arguments));
  };
}
const F = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ze = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Je = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Bt = /^\d+\/\d+$/, Ut = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ft = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ht = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, le = (e) => Bt.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), oe = (e) => !!e && Number.isInteger(Number(e)), Te = (e) => e.endsWith("%") && _(e.slice(0, -1)), te = (e) => Ut.test(e), qt = () => !0, Yt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wt.test(e) && !Vt.test(e)
), Xe = () => !1, Kt = (e) => Ft.test(e), Zt = (e) => Ht.test(e), Jt = (e) => !x(e) && !w(e), Xt = (e) => me(e, tt, Xe), x = (e) => Ze.test(e), ne = (e) => me(e, rt, Yt), Ae = (e) => me(e, or, _), Ue = (e) => me(e, Qe, Xe), Qt = (e) => me(e, et, Zt), Se = (e) => me(e, ot, Kt), w = (e) => Je.test(e), ve = (e) => be(e, rt), er = (e) => be(e, ir), We = (e) => be(e, Qe), tr = (e) => be(e, tt), rr = (e) => be(e, et), ze = (e) => be(e, ot, !0), me = (e, t, r) => {
  const o = Ze.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, be = (e, t, r = !1) => {
  const o = Je.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, Qe = (e) => e === "position" || e === "percentage", et = (e) => e === "image" || e === "url", tt = (e) => e === "length" || e === "size" || e === "bg-size", rt = (e) => e === "length", or = (e) => e === "number", ir = (e) => e === "family-name", ot = (e) => e === "shadow", nr = () => {
  const e = F("color"), t = F("font"), r = F("text"), o = F("font-weight"), n = F("tracking"), s = F("leading"), i = F("breakpoint"), l = F("container"), f = F("spacing"), b = F("radius"), S = F("shadow"), k = F("inset-shadow"), v = F("text-shadow"), m = F("drop-shadow"), d = F("blur"), c = F("perspective"), u = F("aspect"), a = F("ease"), h = F("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
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
  ], E = () => [...I(), w, x], A = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], g = () => [w, x, f], D = () => [le, "full", "auto", ...g()], K = () => [oe, "none", "subgrid", w, x], M = () => ["auto", {
    span: ["full", oe, w, x]
  }, oe, w, x], L = () => [oe, "auto", w, x], O = () => ["auto", "min", "max", "fr", w, x], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...g()], H = () => [le, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], z = () => [e, w, x], ee = () => [...I(), We, Ue, {
    position: [w, x]
  }], p = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], T = () => ["auto", "cover", "contain", tr, Xt, {
    size: [w, x]
  }], N = () => [Te, ve, ne], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    w,
    x
  ], G = () => ["", _, ve, ne], q = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [_, Te, We, Ue], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    d,
    w,
    x
  ], X = () => ["none", _, w, x], re = () => ["none", _, w, x], ge = () => [_, w, x], ke = () => [le, "full", ...g()];
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
      font: [Jt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [te],
      shadow: [te],
      spacing: ["px", _],
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
        aspect: ["auto", "square", le, x, w, u]
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
        columns: [_, x, w, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        basis: [le, "full", "auto", l, ...g()]
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
        flex: [_, le, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _, w, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _, w, x]
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
        "grid-cols": K()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: M()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": K()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: M()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": O()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": O()
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
            screen: [i]
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
        font: [er, x, t]
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
        tracking: [n, w, x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_, "none", w, Ae]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...g()
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [_, "from-font", "auto", w, ne]
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
        "underline-offset": [_, "auto", w, x]
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
        bg: ee()
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
          }, oe, w, x],
          radial: ["", w, x],
          conic: [oe, w, x]
        }, rr, Qt]
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
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
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
        border: G()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
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
        "divide-y": G()
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
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
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
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_, w, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _, ve, ne]
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
          S,
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
        "inset-shadow": ["none", k, ze, Se]
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
        ring: G()
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
        "ring-offset": [_, ne]
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
        "inset-ring": G()
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
        "text-shadow": ["none", v, ze, Se]
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
        opacity: [_, w, x]
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
        "mask-linear": [_]
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
        "mask-radial": [w, x]
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
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [_]
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
        mask: ee()
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
        brightness: [_, w, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_, w, x]
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
          m,
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
        grayscale: ["", _, w, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_, w, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _, w, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_, w, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _, w, x]
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
        "backdrop-brightness": [_, w, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_, w, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _, w, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_, w, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _, w, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_, w, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_, w, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _, w, x]
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
        duration: [_, "initial", w, x]
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
        delay: [_, w, x]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", h, w, x]
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
        perspective: [c, w, x]
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
        stroke: [_, ve, ne, Ae]
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
}, sr = /* @__PURE__ */ Gt(nr);
function se(...e) {
  return sr(ie(e));
}
const ar = {
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
function it(e = ar) {
  const [t, r] = xe(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, n] = xe(null), s = $(() => {
    if (typeof window > "u") return;
    const d = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(d);
  }, []), i = Y(() => {
    var c;
    if (o && e[o])
      return o;
    const d = Object.entries(e).filter(([u, a]) => {
      if (a.matcher)
        return a.matcher(t);
      const h = !a.minWidth || t.width >= a.minWidth, y = !a.maxWidth || t.width <= a.maxWidth;
      return h && y;
    });
    return d.sort(([, u], [, a]) => {
      const h = (u.minWidth ? 1 : 0) + (u.maxWidth ? 1 : 0);
      return (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0) - h;
    }), ((c = d[0]) == null ? void 0 : c[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = Y(() => e[i], [e, i]), f = Y(() => (l == null ? void 0 : l.type) || "grid", [l]), b = $((d) => {
    if (d && !e[d]) {
      console.warn(`Mode "${d}" not found in configuration`);
      return;
    }
    n(d);
  }, [e]), S = $((d) => i === d, [i]), k = Y(() => Object.keys(e), [e]), v = $((d) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(d);
      case "tabs":
        return d === "tabs";
      case "dock":
        return d === "dock";
      default:
        return !1;
    }
  }, [f]), m = Y(() => {
    const d = Object.entries(e).map(([h, y]) => ({ name: h, ...y })).sort((h, y) => (h.breakpoint || 0) - (y.breakpoint || 0)), c = d.findIndex((h) => h.name === i), u = d[c + 1], a = d[c - 1];
    return {
      current: i,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: u == null ? void 0 : u.name,
      nextBreakpoint: u == null ? void 0 : u.breakpoint,
      prevMode: a == null ? void 0 : a.name,
      prevBreakpoint: a == null ? void 0 : a.breakpoint,
      isSmallest: c === 0,
      isLargest: c === d.length - 1
    };
  }, [e, i, l]);
  return Z(() => {
    if (typeof window > "u") return;
    const d = () => s(), c = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", d), window.addEventListener("orientationchange", c), () => {
      window.removeEventListener("resize", d), window.removeEventListener("orientationchange", c);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: i,
    currentModeConfig: l,
    currentLayoutType: f,
    // Mode management
    setMode: b,
    isMode: S,
    availableModes: k,
    // Features and capabilities
    supportsFeature: v,
    breakpointInfo: m,
    // Utilities
    isForced: !!o,
    updateViewport: s
  };
}
const Q = "pretty-poly-grid-", pe = {
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
        r && r.startsWith(Q) && e.push(r);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, nt = {
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
        r && r.startsWith(Q) && e.push(r);
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
      e.startsWith(Q) && de.delete(e);
  }
};
function Re(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? pe : Ee;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? nt : Ee;
    case "memory":
    default:
      return Ee;
  }
}
function Ne(e) {
  return `${Q}${e}`;
}
function lr(e, t, r = pe) {
  const o = Ne(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function cr(e, t = pe) {
  const r = Ne(e);
  return t.load(r);
}
function dr(e, t = pe) {
  const r = Ne(e);
  t.remove(r);
}
function Mr(e = pe) {
  const t = {};
  try {
    if (e === pe && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(Q)) {
          const n = o.substring(Q.length), s = e.load(o);
          s && (t[n] = s);
        }
      }
    else if (e === nt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(Q)) {
          const n = o.substring(Q.length), s = e.load(o);
          s && (t[n] = s);
        }
      }
    else if (e === Ee) {
      for (const r of de.keys())
        if (r.startsWith(Q)) {
          const o = r.substring(Q.length), n = e.load(r);
          n && (t[o] = n);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function ur(e) {
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
function fr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: n = !0,
  saveDelay: s = 500
}) {
  const i = ue(null), l = ue(), f = ue(""), b = ue(!1);
  Z(() => {
    if (!t) {
      i.current = null;
      return;
    }
    typeof t == "function" ? i.current = ur(t) : t === "localStorage" ? i.current = Re("localStorage") : t === "sessionStorage" ? i.current = Re("sessionStorage") : i.current = Re("localStorage");
  }, [t]), Z(() => {
    if (!i.current || !t || typeof t == "function" || b.current)
      return;
    const d = cr(e, i.current);
    d && (o == null || o(d), b.current = !0);
  }, [e, t]);
  const S = $((d = r) => {
    if (!i.current || !t)
      return;
    const c = JSON.stringify(d);
    if (c !== f.current)
      try {
        lr(e, d, i.current), f.current = c;
      } catch (u) {
        console.warn("Failed to save grid state:", u);
      }
  }, [e, t, r]), k = $((d = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      S(d);
    }, s);
  }, [S, s, r]), v = $(() => {
    if (!(!i.current || !t || typeof t == "function"))
      try {
        dr(e, i.current), f.current = "";
      } catch (d) {
        console.warn("Failed to clear grid state:", d);
      }
  }, [e, t]), m = $((d = r) => {
    l.current && clearTimeout(l.current), S(d);
  }, [S, r]);
  return Z(() => {
    if (!(!n || !t))
      return k(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, n, t, k]), Z(() => {
    if (!t || typeof t == "function")
      return;
    const d = () => {
      m();
    };
    return window.addEventListener("beforeunload", d), () => {
      window.removeEventListener("beforeunload", d);
    };
  }, [m, t]), Z(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: m,
    debouncedSave: k,
    clearState: v,
    isEnabled: !!t
  };
}
function st(e, t, r) {
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
function pr(e, t, r, o, n) {
  if (r === 0)
    return e;
  const s = t <= r, i = o * 2.5;
  return s && e > i ? n : e < r && !s ? o : e;
}
function mr(e, t, r = 0, o = 1 / 0, n = !1) {
  const s = n ? -e : e, i = t + s;
  return fe(i, r, o);
}
function br(e, t) {
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
function Ve(e, t) {
  const r = [];
  return e.forEach((o) => {
    if (o.type !== "divider")
      if (o.sizeUnit === "auto")
        r.push("auto");
      else if (o.sizeUnit === "px") {
        const n = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
        r.push(`var(${n}, ${o.size || 1}px)`);
      } else {
        const n = t ? `--${t}-${o.id}-size` : `--${o.id}-size`;
        r.push(`var(${n}, ${o.size || 1}fr)`);
      }
  }), r.join(" ");
}
function Nr(e, t) {
  return e * t;
}
function gr(e, t) {
  return t > 0 ? e / t : 0;
}
function Or(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function $r(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function hr(e, t) {
  const r = $((i) => "touches" in i ? {
    x: i.touches[0].clientX,
    y: i.touches[0].clientY
  } : {
    x: i.clientX,
    y: i.clientY
  }, []), o = $((i, l, f) => {
    const b = e.blocks[i];
    if (!b) return;
    const S = r(f), v = Object.values(e.blocks).filter(
      (a) => a.parentId === b.parentId
    ).sort(
      (a, h) => (a.order || 0) - (h.order || 0)
    ), m = v.findIndex((a) => a.id === i);
    let d = null;
    if (b.dividerPosition === "start" && m > 0 ? d = v[m - 1] : b.dividerPosition === "end" && m < v.length - 1 && (d = v[m + 1]), d && b.sizeUnit === "fr" && d.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${i}" when adjacent to px block "${d.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: i,
        dividerId: l,
        startPosition: S,
        initialSize: b.defaultSize || 0,
        initialAdjacentBlockId: d == null ? void 0 : d.id,
        initialAdjacentSize: d ? d.originalDefaultSize || d.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const c = b.parentId ? e.blocks[b.parentId] : null, u = (c == null ? void 0 : c.direction) || "row";
    document.body.style.cursor = u === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), n = $((i) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const f = r(i), b = l.parentId ? e.blocks[l.parentId] : null, S = (b == null ? void 0 : b.direction) || "row", k = S === "row" ? f.x - e.resize.startPosition.x : f.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const v = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), d = ((v == null ? void 0 : v.getAttribute("data-block-divider-position")) || "end") === "start", c = mr(
        k,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        d
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: c }
      });
    } else if (l.sizeUnit === "fr") {
      const v = Object.values(e.blocks).filter(
        (O) => O.parentId === l.parentId
      ), m = v.filter((O) => O.sizeUnit === "fr"), d = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), c = d ? S === "row" ? d.clientWidth : d.clientHeight : 1200, u = v.filter((O) => O.sizeUnit === "px").reduce((O, C) => {
        const U = document.querySelector(`[data-block-id="${C.id}"]`);
        if (!U) return O;
        const W = S === "row" ? U.clientWidth : U.clientHeight;
        return O + W;
      }, 0), h = Array.from(
        (d == null ? void 0 : d.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((O, C) => {
        if (!(C instanceof HTMLElement)) return O;
        const U = S === "row" ? C.clientWidth : C.clientHeight;
        return O + U;
      }, 0), I = st(c, u, h), E = m.reduce(
        (O, C) => O + (C.defaultSize || 1),
        0
      ), A = E > 0 ? I / E : 0;
      if (A === 0) return;
      const R = gr(k, A), g = m.sort(
        (O, C) => (O.order || 0) - (C.order || 0)
      ), D = g.findIndex(
        (O) => O.id === e.resize.activeBlockId
      ), K = document.querySelector(`[data-block-id="${e.resize.activeDividerId}"]`), M = (K == null ? void 0 : K.getAttribute("data-block-divider-position")) || "end";
      let L = null;
      if (M === "start" && D > 0 ? L = g[D - 1] : M === "end" && D < g.length - 1 && (L = g[D + 1]), L) {
        let O, C;
        O = R, C = -R;
        const U = 0.1, W = Math.max(
          U,
          e.resize.initialSize + O
        ), H = Math.max(
          U,
          (e.resize.initialAdjacentSize || 1) + C
        ), z = W - e.resize.initialSize, ee = H - (e.resize.initialAdjacentSize || 1);
        Math.abs(z + ee) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: W
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: L.id, size: H }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), s = $(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: n,
    endResize: s
  };
}
function yr(e, t) {
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
      const n = o.collapseTo || 0;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            // Preserve original size for expand
            originalDefaultSize: o.originalDefaultSize || o.defaultSize,
            defaultSize: n,
            size: n
          }
        }
      };
    case "EXPAND_BLOCK":
      const s = e.blocks[t.payload.blockId];
      if (!s) return e;
      const i = s.originalDefaultSize || s.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...s,
            defaultSize: i,
            size: i
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
        Object.entries(e.blocks).map(([f, b]) => [
          f,
          {
            ...b,
            size: b.defaultSize
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
function vr(e, t, r) {
  return {
    blocks: e.reduce((n, s) => (n[s.id] = {
      ...s,
      size: s.defaultSize,
      originalDefaultSize: s.defaultSize
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
const at = xt(null);
function xr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: n = !1,
  persistKey: s,
  onModeChange: i,
  onLayoutChange: l
}) {
  const { activeMode: f, viewport: b, setMode: S } = it(r), [k, v] = kt(
    yr,
    vr(t, b, f)
  );
  Z(() => {
    v({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: b }
    });
  }, [b]), Z(() => {
    const y = k.activeMode;
    f !== y && (v({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), i == null || i(f, y));
  }, [f, k.activeMode, i]);
  const { saveState: m, clearState: d } = fr({
    gridId: s || o,
    enabled: n,
    state: k,
    onStateLoad: (y) => {
      v({ type: "LOAD_STATE", payload: { state: y } });
    },
    autoSave: !0
  }), { startResize: c, updateResize: u, endResize: a } = hr(k, v), h = Y(
    () => ({
      gridId: o,
      state: {
        ...k,
        activeMode: f,
        viewport: b
      },
      dispatch: v,
      // Grid operations
      resizeBlock: (y, I) => {
        v({
          type: "RESIZE_BLOCK",
          payload: { blockId: y, size: I }
        });
      },
      collapseBlock: (y) => {
        v({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: y }
        });
      },
      expandBlock: (y) => {
        v({
          type: "EXPAND_BLOCK",
          payload: { blockId: y }
        });
      },
      switchMode: (y) => {
        S(y);
      },
      // Resize operations (using extracted hook)
      startResize: c,
      updateResize: u,
      endResize: a,
      // Persistence
      persistState: () => m(k),
      resetState: () => {
        v({ type: "RESET_STATE" }), d();
      }
    }),
    [o, k, f, b, m, d, S, c, u, a]
  );
  return Z(() => {
    if (l) {
      const y = Object.values(k.blocks);
      l(y);
    }
  }, [k.blocks, l]), /* @__PURE__ */ j.jsx(at.Provider, { value: h, children: e });
}
function we() {
  const e = wt(at);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Oe() {
  const { state: e } = we();
  return e;
}
function wr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: s
  } = we();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    switchMode: o,
    persistState: n,
    resetState: s
  };
}
function lt() {
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
function kr({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: n,
    updateResize: s,
    endResize: i,
    isDragging: l,
    activeBlockId: f,
    activeDividerId: b
  } = lt(), S = $(() => {
    if (!t.current) return 0;
    const u = t.current.getBoundingClientRect();
    return o === "column" ? u.width : u.height;
  }, [o, t]), k = $(() => {
    const u = S();
    if (u === 0) return 0;
    const a = e.filter((E) => E.sizeUnit === "px").reduce((E, A) => E + (A.defaultSize || 0), 0), h = 0, y = e.filter((E) => E.sizeUnit === "fr").reduce((E, A) => E + (A.defaultSize || 1), 0), I = st(u, a, h);
    return y > 0 ? I / y : 0;
  }, [e, S]), v = $((u) => {
    const a = e.find((h) => h.id === u);
    a && a.defaultSize !== void 0 && (r == null || r(u, a.defaultSize));
  }, [e, r]), m = $((u) => {
    const a = e.find((h) => h.id === u);
    a && a.collapseTo !== void 0 && (r == null || r(u, a.collapseTo));
  }, [e, r]), d = $((u) => {
    const a = e.find((h) => h.id === u);
    a && a.defaultSize !== void 0 && (r == null || r(u, a.defaultSize));
  }, [e, r]), c = $((u) => {
    const a = e.find((h) => h.id === u);
    return !a || !a.collapseAt ? !1 : (a.defaultSize || 0) <= a.collapseAt;
  }, [e]);
  return Z(() => {
    const u = (I) => {
      I.preventDefault(), s(I);
    }, a = (I) => {
      I.preventDefault(), s(I);
    }, h = () => {
      i();
    }, y = () => {
      i();
    };
    if (l)
      return document.addEventListener("mousemove", u), document.addEventListener("mouseup", h), document.addEventListener("touchmove", a), document.addEventListener("touchend", y), () => {
        document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", h), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", y);
      };
  }, [l, s, i]), {
    // State
    isDragging: l,
    activeBlockId: f,
    activeDividerId: b,
    // Actions
    startResize: n,
    resetBlock: v,
    collapseBlock: m,
    expandBlock: d,
    // Utilities
    isBlockCollapsed: c,
    getContainerSize: S,
    calculatePixelsPerFr: k
  };
}
function Sr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: s,
  containerRef: i,
  stepSize: l = 10,
  largeStepSize: f = 50
}) {
  const b = $(() => {
    const c = document.activeElement;
    return (c == null ? void 0 : c.dataset.blockType) === "block" || (c == null ? void 0 : c.dataset.blockType) === "group" ? c : (c == null ? void 0 : c.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), S = $((c) => {
    if (!c) return null;
    const u = c.dataset.blockId;
    return t.find((a) => a.id === u) || null;
  }, [t]), k = $((c, u) => {
    if (!(i != null && i.current)) return null;
    const a = Array.from(
      i.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), h = c.getBoundingClientRect(), y = {
      x: h.left + h.width / 2,
      y: h.top + h.height / 2
    }, I = a.filter((E) => {
      if (E === c) return !1;
      const A = E.getBoundingClientRect(), R = {
        x: A.left + A.width / 2,
        y: A.top + A.height / 2
      };
      switch (u) {
        case "up":
          return R.y < y.y;
        case "down":
          return R.y > y.y;
        case "left":
          return R.x < y.x;
        case "right":
          return R.x > y.x;
        default:
          return !1;
      }
    });
    return I.length === 0 ? null : (I.sort((E, A) => {
      const R = E.getBoundingClientRect(), g = A.getBoundingClientRect(), D = {
        x: R.left + R.width / 2,
        y: R.top + R.height / 2
      }, K = {
        x: g.left + g.width / 2,
        y: g.top + g.height / 2
      }, M = Math.sqrt(
        Math.pow(D.x - y.x, 2) + Math.pow(D.y - y.y, 2)
      ), L = Math.sqrt(
        Math.pow(K.x - y.x, 2) + Math.pow(K.y - y.y, 2)
      );
      return M - L;
    }), I[0]);
  }, [i]), v = $((c) => {
    if (!e) return;
    const u = b();
    if (!u) return;
    const a = S(u);
    if (!a) return;
    const h = c.ctrlKey || c.metaKey, y = c.shiftKey, I = y ? f : l;
    if (!h && !y)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault();
          const E = k(u, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "ArrowDown":
          c.preventDefault();
          const A = k(u, "down");
          A && (A.focus(), o == null || o(A.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          c.preventDefault();
          const R = k(u, "left");
          R && (R.focus(), o == null || o(R.dataset.blockId || ""));
          break;
        case "ArrowRight":
          c.preventDefault();
          const g = k(u, "right");
          g && (g.focus(), o == null || o(g.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          c.preventDefault(), a.collapsible && (s == null || s(a.id));
          break;
        case "Escape":
          c.preventDefault(), u.blur();
          break;
      }
    if (h && r)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault(), r(a.id, -I);
          break;
        case "ArrowDown":
          c.preventDefault(), r(a.id, I);
          break;
        case "ArrowLeft":
          c.preventDefault(), r(a.id, -I);
          break;
        case "ArrowRight":
          c.preventDefault(), r(a.id, I);
          break;
      }
    if (h)
      switch (c.key) {
        case "Minus":
        case "-":
          c.preventDefault(), n == null || n(a.id);
          break;
        case "Plus":
        case "+":
        case "=":
          c.preventDefault(), s == null || s(a.id);
          break;
      }
  }, [
    e,
    b,
    S,
    k,
    r,
    o,
    n,
    s,
    l,
    f
  ]), m = $((c) => {
    if (!(i != null && i.current)) return;
    const u = i.current.querySelector(
      `[data-block-id="${c}"]`
    );
    u && (u.focus(), o == null || o(c));
  }, [i, o]), d = $(() => i != null && i.current ? Array.from(
    i.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [i]);
  return Z(() => {
    if (e)
      return document.addEventListener("keydown", v), () => {
        document.removeEventListener("keydown", v);
      };
  }, [v, e]), {
    focusBlock: m,
    getFocusableBlocks: d,
    getFocusedBlock: b,
    isEnabled: e
  };
}
const ct = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: n,
  "aria-label": s
}) => {
  const i = ue(null), l = Oe(), { startResize: f, isDragging: b, activeDividerId: S } = lt(), [k, v] = xe({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), m = l.blocks[e], d = r === "vertical", c = `${e}-${t}-divider`, u = b && S === c, a = $(() => {
    const y = document.querySelector("[data-grid-id]"), I = document.querySelector(`[data-block-id="${e}"]`);
    if (!y || !I) return;
    const E = y.getBoundingClientRect(), A = I.getBoundingClientRect();
    if (d) {
      const R = t === "start" ? A.left - E.left : A.right - E.left;
      v({
        left: R - o / 2,
        // Center on edge
        top: 0,
        width: o,
        height: E.height
        // Use container height, not scrollHeight
      });
    } else {
      const R = t === "start" ? A.top - E.top : A.bottom - E.top;
      v({
        left: 0,
        top: R - o / 2,
        // Center on edge
        width: E.width,
        // Use container width
        height: o
      });
    }
  }, [e, t, d, o]);
  St(() => {
    const y = document.querySelector("[data-grid-id]"), I = document.querySelector(`[data-block-id="${e}"]`);
    if (!y || !I) return;
    a();
    const E = new ResizeObserver(() => {
      a();
    });
    return E.observe(y), E.observe(I), () => {
      E.disconnect();
    };
  }, [e, a]), Z(() => {
    a();
  }, [l.blocks, a]);
  const h = $((y) => {
    y.preventDefault(), f(e, c, y);
  }, [e, c, f]);
  return m ? /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: i,
      className: se(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        u && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        d ? "cursor-col-resize" : "cursor-row-resize",
        n
      ),
      style: {
        left: `${k.left}px`,
        top: `${k.top}px`,
        width: `${k.width}px`,
        height: `${k.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": c,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": r,
      role: "separator",
      "aria-label": s || `Resize ${e}`,
      "aria-valuenow": m == null ? void 0 : m.defaultSize,
      "aria-valuemin": m == null ? void 0 : m.minSize,
      "aria-valuemax": m == null ? void 0 : m.maxSize,
      tabIndex: 0,
      onMouseDown: h,
      onTouchStart: h
    }
  ) : null;
};
ct.displayName = "Divider";
function zr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const n = Object.values(e).filter((l) => l.parentId === o.id).sort((l, f) => (l.order || 0) - (f.order || 0));
    if (n.length === 0) return;
    const i = o.direction === "row" ? "vertical" : "horizontal";
    n.forEach((l, f) => {
      f !== 0 && t.push({
        id: `${l.id}-start-divider`,
        targetBlockId: l.id,
        position: "start",
        direction: i
      });
    });
  }), t;
}
const Er = () => {
  const e = Oe(), t = Y(() => zr(e.blocks), [e.blocks]);
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
        ct,
        {
          targetId: r.targetBlockId,
          position: r.position,
          direction: r.direction
        },
        r.id
      ))
    }
  );
}, dt = J(
  ({ children: e, className: t, dividers: r = "manual", dividerConfig: o, "aria-label": n }, s) => {
    const i = ue(null), { state: l, resizeBlock: f, collapseBlock: b, expandBlock: S, switchMode: k, persistState: v, resetState: m } = we(), d = l.resize.isDragging;
    zt(s, () => ({
      resizeBlock: f,
      collapseBlock: b,
      expandBlock: S,
      switchMode: k,
      persistState: v,
      resetState: m,
      getState: () => l
    }), [f, b, S, k, v, m, l]);
    const c = Y(() => Object.values(l.blocks).sort((A, R) => (A.order || 0) - (R.order || 0)), [l.blocks]), u = Y(() => c.find((E) => !E.parentId), [c]);
    kr({
      blocks: c,
      containerRef: i,
      onSizeChange: f,
      direction: (u == null ? void 0 : u.direction) || "row"
    }), Sr({
      enabled: !0,
      blocks: c,
      containerRef: i,
      onResizeBlock: (E, A) => {
        const R = l.blocks[E];
        if (R) {
          const g = R.defaultSize || 0, D = Math.max(0, g + A);
          f(E, D);
        }
      },
      onCollapseBlock: b,
      onExpandBlock: S
    });
    const a = Y(() => ({
      children: e,
      templateItems: [],
      templateItemsByGroup: {}
    }), [e]), { gridStyles: h, cssVariables: y, modeStyles: I } = Y(() => {
      if (!u)
        return { gridStyles: "", cssVariables: "", modeStyles: "" };
      const E = c.reduce((M, L) => {
        if (L.id === "root") return M;
        const O = L.parentId || "root";
        return M[O] || (M[O] = []), M[O].push(L), M;
      }, {}), A = c.filter((M) => M.defaultSize !== void 0).map((M) => {
        const L = M.sizeUnit === "px" ? `${M.defaultSize}px` : `${M.defaultSize}fr`;
        return `--${u.id}-${M.id}-size: ${L};`;
      }).join(`
  `), R = () => {
        let M = "";
        return M += `
[data-grid-id="${u.id}"][data-active-mode="dock"],
[data-grid-id="${u.id}"][data-active-mode="mobile"] {
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
`, M += `
[data-grid-id="${u.id}"][data-active-mode="tabs"],
[data-grid-id="${u.id}"][data-active-mode="tablet"] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
`, M += `
[data-grid-id="${u.id}"][data-active-mode="dock"] .pretty-poly-divider,
[data-grid-id="${u.id}"][data-active-mode="tabs"] .pretty-poly-divider,
[data-grid-id="${u.id}"][data-active-mode="mobile"] .pretty-poly-divider,
[data-grid-id="${u.id}"][data-active-mode="tablet"] .pretty-poly-divider {
  display: none;
}
`, M;
      }, g = (M, L = /* @__PURE__ */ new Set()) => {
        var T;
        if (L.has(M))
          return console.warn(`Circular reference detected for parent: ${M}`), "";
        const O = new Set(L);
        O.add(M);
        const C = E[M] || [];
        if (C.length === 0) return "";
        const U = [...C].sort((N, P) => (N.order || 0) - (P.order || 0)), W = c.find((N) => N.id === M) || u, H = (W == null ? void 0 : W.direction) || "row";
        let z;
        if (r === "auto" && M === u.id)
          z = Ve(a.templateItems, u.id);
        else if (r === "auto" && ((T = a.templateItemsByGroup) != null && T[M]))
          z = Ve(a.templateItemsByGroup[M], u.id);
        else {
          const N = U.map((P) => ({
            id: P.id,
            sizeUnit: P.sizeUnit || "fr",
            size: P.defaultSize || 1,
            dividerPosition: P.dividerPosition === "auto" ? "none" : P.dividerPosition || "none",
            dividerSize: P.dividerSize || (o == null ? void 0 : o.defaultSize) || 8
          }));
          z = br(N, u.id);
        }
        const ee = H === "column" ? "grid-template-rows" : "grid-template-columns";
        let p = `
[data-grid-id="${u.id}"][data-block-id="${M}"][data-active-mode="grid"],
[data-grid-id="${u.id}"][data-block-id="${M}"][data-active-mode="desktop"] {
  display: grid;
  ${ee}: ${z};
  ${H === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
        for (const N of U)
          N.type === "group" && (p += g(N.id, O));
        return p;
      }, D = g("root"), K = R();
      return {
        cssVariables: `:root {
  ${A}
}`,
        gridStyles: D,
        modeStyles: K
      };
    }, [c, u, a, r, o]);
    return u ? /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
      /* @__PURE__ */ j.jsxs("style", { type: "text/css", children: [
        y,
        h,
        I
      ] }),
      /* @__PURE__ */ j.jsxs(
        "div",
        {
          ref: i,
          className: se(
            "group relative overflow-hidden",
            d && "select-none cursor-grabbing pretty-poly-grid--dragging",
            t
          ),
          "data-grid-id": u.id,
          "data-block-id": u.id,
          "data-active-mode": l.activeMode,
          "aria-label": n || "Resizable grid layout",
          role: "application",
          style: { isolation: "isolate" },
          children: [
            /* @__PURE__ */ j.jsx("div", { className: "pretty-poly-grid-content", children: a.children }),
            (l.activeMode === "grid" || l.activeMode === "desktop") && /* @__PURE__ */ j.jsx(Er, {})
          ]
        }
      )
    ] }) : (console.warn("No root block found in grid configuration"), null);
  }
);
dt.displayName = "GridInternal";
const Tr = J(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: n,
    onLayoutChange: s,
    onModeChange: i,
    className: l,
    dividers: f = "manual",
    dividerConfig: b,
    "aria-label": S
  }, k) => {
    const v = t.find((d) => !d.parentId), m = (v == null ? void 0 : v.id) || "root";
    return /* @__PURE__ */ j.jsx(
      xr,
      {
        blocks: t,
        modes: r,
        gridId: m,
        persist: o,
        persistKey: n,
        onLayoutChange: s,
        onModeChange: i,
        children: /* @__PURE__ */ j.jsx(
          dt,
          {
            ref: k,
            className: l,
            dividers: f,
            dividerConfig: b,
            "aria-label": S,
            children: e
          }
        )
      }
    );
  }
);
Tr.displayName = "Grid";
const ut = J(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, n) => {
    const s = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: n,
        className: se(
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
ut.displayName = "Block.Content";
const ft = J(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: n,
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
ft.displayName = "Block.Header";
const pt = J(
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
pt.displayName = "Block.Footer";
const mt = J(
  ({ left: e, center: t, right: r, className: o, "aria-label": n }, s) => /* @__PURE__ */ j.jsxs(
    "div",
    {
      ref: s,
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
      "aria-label": n || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ j.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ j.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
mt.displayName = "Block.Toolbar";
const bt = J(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": s,
    allowOverflow: i = !0
  }, l) => {
    const [f, b] = xe(null), S = (m, d) => {
      d.preventDefault(), m.disabled || r(m.id);
    }, k = (m, d) => {
      d.preventDefault(), d.stopPropagation(), o && m.closable && o(m.id);
    }, v = (m, d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), m.disabled || r(m.id));
    };
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        ref: l,
        className: ie(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-gray-200",
          "bg-white",
          i ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": s || "Block tabs",
        children: /* @__PURE__ */ j.jsx("div", { className: "flex items-center min-w-0", children: e.map((m) => {
          const d = m.id === t, c = f === m.id, u = m.icon;
          return /* @__PURE__ */ j.jsxs(
            "div",
            {
              className: ie(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                d ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                m.disabled && "opacity-50 cursor-not-allowed",
                !i && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": d,
              "aria-disabled": m.disabled,
              tabIndex: m.disabled ? -1 : 0,
              onClick: (a) => S(m, a),
              onKeyDown: (a) => v(m, a),
              onMouseEnter: () => b(m.id),
              onMouseLeave: () => b(null),
              "data-tab-id": m.id,
              children: [
                u && /* @__PURE__ */ j.jsx(u, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ j.jsx("span", { className: "truncate min-w-0", children: m.label }),
                m.closable && o && /* @__PURE__ */ j.jsx(
                  "button",
                  {
                    className: ie(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      c || d ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (a) => k(m, a),
                    "aria-label": `Close ${m.label} tab`,
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
            m.id
          );
        }) })
      }
    );
  }
);
bt.displayName = "Block.Tabs";
const $e = J(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": n }, s) => /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: s,
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
      "aria-label": n || "Sidebar navigation",
      role: "navigation",
      children: o
    }
  )
);
$e.displayName = "Block.Sidebar";
const gt = J(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: n,
    onClick: s,
    className: i,
    "aria-label": l
  }, f) => {
    const [b, S] = xe(!1), k = () => {
      t && !o && S(!0);
    }, v = () => {
      S(!1);
    }, m = () => {
      !o && s && s();
    }, d = (c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), m());
    };
    return /* @__PURE__ */ j.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ j.jsxs(
        "button",
        {
          ref: f,
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
            i
          ),
          disabled: o,
          onClick: m,
          onKeyDown: d,
          onMouseEnter: k,
          onMouseLeave: v,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ j.jsx(
              e,
              {
                className: ie(
                  "w-5 h-5",
                  r ? "text-white" : "text-gray-400",
                  !o && "group-hover:text-white"
                )
              }
            ),
            n && /* @__PURE__ */ j.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            r && /* @__PURE__ */ j.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      b && t && /* @__PURE__ */ j.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ j.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ j.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
gt.displayName = "Block.Sidebar.Item";
const ht = J(
  ({ className: e }, t) => /* @__PURE__ */ j.jsx(
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
ht.displayName = "Block.Sidebar.Spacer";
function Ar(e, t) {
  const r = e[t] || {}, { id: o, type: n, direction: s, children: i, className: l, divider: f, noDivider: b, "aria-label": S, ...k } = e;
  return {
    ...Object.fromEntries(
      Object.entries(k).filter(
        ([m]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion", "divider", "noDivider"].includes(m)
      )
    ),
    ...r
  };
}
function Rr(e) {
  let t = !1;
  return Fe.forEach(e, (r) => {
    var o, n;
    if (He(r)) {
      const s = ((o = r.type) == null ? void 0 : o.displayName) || ((n = r.type) == null ? void 0 : n.name);
      s && (s === "Block.Header" || s === "Block.Content" || s === "Block.Footer" || s === "Block.Toolbar" || s === "Block.Tabs" || s === "Block.Sidebar") && (t = !0);
    }
  }), t;
}
function jr(e) {
  let t = !1;
  return Fe.forEach(e, (r) => {
    var o, n;
    He(r) && (((o = r.type) == null ? void 0 : o.displayName) || ((n = r.type) == null ? void 0 : n.name)) === "Block.Sidebar" && (t = !0);
  }), t;
}
const De = J(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: n,
    divider: s,
    noDivider: i,
    "aria-label": l,
    ...f
  }, b) => {
    const { gridId: S } = we(), k = Oe(), { collapseBlock: v, expandBlock: m } = wr(), { activeMode: d, currentLayoutType: c, supportsFeature: u } = it(), a = k == null ? void 0 : k.blocks[e], h = Ar({ id: e, type: t, direction: r, children: o, className: n, "aria-label": l, ...f }, d), y = Y(() => Rr(o), [o]), I = Y(() => jr(o), [o]), E = Y(() => h.hidden ? !1 : c === "dock" ? !!(h.icon || h.label) : !0, [c, h]), A = Y(() => a != null && a.collapsible && a.collapseAt ? (a.size ?? a.defaultSize ?? 0) <= a.collapseAt : !1, [a]), R = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? m(e) : v(e));
    };
    if (!E)
      return null;
    const g = h.icon;
    return /* @__PURE__ */ j.jsxs(
      "div",
      {
        ref: b,
        className: se(
          // Base styles (always applied)
          "relative transition-opacity duration-150",
          // Grid mode styles (default)
          "overflow-hidden",
          y && !I && "flex flex-col h-full",
          y && I && "flex flex-row h-full",
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
          h.className,
          n
        ),
        "data-grid-id": S,
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
        "data-block-divider": s !== void 0 ? JSON.stringify(s) : void 0,
        "data-block-no-divider": i,
        "data-structured": y,
        "data-has-sidebar": I,
        "data-dock-order": h.dockOrder,
        "aria-label": l || (c === "dock" ? h.label : c === "tabs" ? h.tabLabel : void 0),
        role: c === "dock" ? "button" : c === "tabs" ? "tabpanel" : t === "group" ? "group" : void 0,
        tabIndex: c === "dock" || u("resizing") ? 0 : void 0,
        onDoubleClick: u("collapse") ? R : void 0,
        style: {
          ...h.style,
          // CSS Grid area assignment handled by parent in grid mode
          // Dock order controlled by data attribute and CSS
          order: c === "dock" ? h.dockOrder : void 0
        },
        children: [
          c === "dock" && /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
            g && /* @__PURE__ */ j.jsx(g, { className: "w-6 h-6 mb-1" }),
            h.label && /* @__PURE__ */ j.jsx("span", { className: "text-xs font-medium text-center", children: h.label })
          ] }),
          c !== "dock" && o
        ]
      }
    );
  }
);
De.displayName = "Block";
const yt = J(
  (e, t) => /* @__PURE__ */ j.jsx(De, { ref: t, ...e, type: "group" })
);
yt.displayName = "Block.Group";
Object.assign(De, {
  Group: yt,
  Header: ft,
  Content: ut,
  Footer: pt,
  Toolbar: mt,
  Tabs: bt,
  Sidebar: $e
});
Object.assign($e, {
  Item: gt,
  Spacer: ht
});
function Dr(e, t, r) {
  const o = [];
  let n = e;
  const s = t.minSize ?? 0, i = t.maxSize ?? 1 / 0;
  if (e < s && (o.push(`Size ${e} is below minimum ${s}`), n = s), e > i && (o.push(`Size ${e} exceeds maximum ${i}`), n = i), n = fe(n, s, i), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, b = t.defaultSize ?? n;
    n = pr(
      n,
      r,
      l,
      f,
      b
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: n,
    violations: o
  };
}
function Cr(e, t, r, o, n = 1) {
  const s = [];
  let i = r, l = o;
  const f = ce(e.minSize ?? 0, e.sizeUnit, n), b = ce(e.maxSize ?? 1 / 0, e.sizeUnit, n), S = ce(t.minSize ?? 0, t.sizeUnit, n), k = ce(t.maxSize ?? 1 / 0, t.sizeUnit, n), v = ce(e.defaultSize ?? 0, e.sizeUnit, n), m = ce(t.defaultSize ?? 0, t.sizeUnit, n), d = v + r, c = m + o;
  let u = fe(d, f, b), a = fe(c, S, k);
  i = u - v, l = a - m;
  const h = i + l;
  if (Math.abs(h) > 1e-3) {
    const E = Math.abs(i) < Math.abs(r), A = Math.abs(l) < Math.abs(o);
    if (E && !A) {
      const R = m - i;
      a = fe(R, S, k), l = a - m;
    } else if (A && !E) {
      const R = v - l;
      u = fe(R, f, b), i = u - v;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const y = i + l;
  return {
    isValid: Math.abs(y) <= 1e-3,
    adjustedTargetDelta: i,
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
function Lr(e, t) {
  const r = [], o = e.filter((s) => s.sizeUnit === "px").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0), n = e.filter((s) => s.sizeUnit === "fr").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((s) => s.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((s) => {
    const i = t[s.id] ?? s.defaultSize ?? 0, l = s.minSize ?? 0, f = s.maxSize ?? 1 / 0;
    l > f && r.push(`Block ${s.id}: minSize (${l}) > maxSize (${f})`), (i < l || i > f) && r.push(`Block ${s.id}: size ${i} violates constraints [${l}, ${f}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
export {
  De as Block,
  ut as BlockContent,
  pt as BlockFooter,
  yt as BlockGroup,
  ft as BlockHeader,
  $e as BlockSidebar,
  gt as BlockSidebarItem,
  ht as BlockSidebarSpacer,
  bt as BlockTabs,
  mt as BlockToolbar,
  ct as Divider,
  Tr as Grid,
  xr as GridProvider,
  pr as applyCollapseLogic,
  mr as calculateConstrainedSize,
  fe as clamp,
  se as cn,
  ur as createCustomAdapter,
  ar as defaultModes,
  Or as findAdjacentBlock,
  Nr as frToPx,
  br as generateGridTemplate,
  Mr as getAllGridStates,
  st as getFlexSpacePx,
  Re as getStorageAdapter,
  _r as isCollapsed,
  $r as isZeroSum,
  cr as loadGridState,
  pe as localStorageAdapter,
  Ee as memoryStorageAdapter,
  Pr as pxPerFr,
  gr as pxToFr,
  dr as removeGridState,
  lr as saveGridState,
  nt as sessionStorageAdapter,
  wr as useGridActions,
  we as useGridContext,
  Sr as useGridKeyboard,
  it as useGridMode,
  fr as useGridPersistence,
  kr as useGridResize,
  Oe as useGridState,
  Dr as validateBlockSize,
  Lr as validateLayoutIntegrity,
  Cr as validateTwoWayResize
};
