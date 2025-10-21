var At = Object.defineProperty;
var jt = (e, t, r) => t in e ? At(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ee = (e, t, r) => jt(e, typeof t != "symbol" ? t + "" : t, r);
import Rt, { useState as J, useCallback as _, useMemo as te, useEffect as $, useRef as me, createContext as Re, useContext as Ie, useReducer as It, useLayoutEffect as Lt, forwardRef as Z, useImperativeHandle as Pt } from "react";
var Ne = { exports: {} }, ke = {};
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
function Mt() {
  if (We) return ke;
  We = 1;
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
function _t() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === V ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case k:
          return "Fragment";
        case p:
          return "Profiler";
        case d:
          return "StrictMode";
        case C:
          return "Suspense";
        case E:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case a:
            return "Portal";
          case f:
            return (m.displayName || "Context") + ".Provider";
          case S:
            return (m._context.displayName || "Context") + ".Consumer";
          case v:
            var j = m.render;
            return m = m.displayName, m || (m = j.displayName || j.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case L:
            return j = m.displayName || null, j !== null ? j : e(m.type) || "Memo";
          case w:
            j = m._payload, m = m._init;
            try {
              return e(m(j));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function r(m) {
      try {
        t(m);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var O = j.error, P = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return O.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(m);
      }
    }
    function o(m) {
      if (m === k) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === w)
        return "<...>";
      try {
        var j = e(m);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var m = N.A;
      return m === null ? null : m.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(m) {
      if (W.call(m, "key")) {
        var j = Object.getOwnPropertyDescriptor(m, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function l(m, j) {
      function O() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: O,
        configurable: !0
      });
    }
    function c() {
      var m = e(this.type);
      return K[m] || (K[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function h(m, j, O, P, G, Y, de, U) {
      return O = Y.ref, m = {
        $$typeof: u,
        type: m,
        key: j,
        props: Y,
        _owner: G
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function b(m, j, O, P, G, Y, de, U) {
      var H = j.children;
      if (H !== void 0)
        if (P)
          if (M(H)) {
            for (P = 0; P < H.length; P++)
              x(H[P]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(H);
      if (W.call(j, "key")) {
        H = e(m);
        var Q = Object.keys(j).filter(function(xe) {
          return xe !== "key";
        });
        P = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", oe[H + P] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          H,
          Q,
          H
        ), oe[H + P] = !0);
      }
      if (H = null, O !== void 0 && (r(O), H = "" + O), i(j) && (r(j.key), H = "" + j.key), "key" in j) {
        O = {};
        for (var ie in j)
          ie !== "key" && (O[ie] = j[ie]);
      } else O = j;
      return H && l(
        O,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), h(
        m,
        H,
        Y,
        G,
        n(),
        O,
        de,
        U
      );
    }
    function x(m) {
      typeof m == "object" && m !== null && m.$$typeof === u && m._store && (m._store.validated = 1);
    }
    var g = Rt, u = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), N = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, M = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var B, K = {}, q = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), A = D(o(s)), oe = {};
    Se.Fragment = k, Se.jsx = function(m, j, O, P, G) {
      var Y = 1e4 > N.recentlyCreatedOwnerStacks++;
      return b(
        m,
        j,
        O,
        !1,
        P,
        G,
        Y ? Error("react-stack-top-frame") : q,
        Y ? D(o(m)) : A
      );
    }, Se.jsxs = function(m, j, O, P, G) {
      var Y = 1e4 > N.recentlyCreatedOwnerStacks++;
      return b(
        m,
        j,
        O,
        !0,
        P,
        G,
        Y ? Error("react-stack-top-frame") : q,
        Y ? D(o(m)) : A
      );
    };
  }()), Se;
}
process.env.NODE_ENV === "production" ? Ne.exports = Mt() : Ne.exports = _t();
var y = Ne.exports;
function Je(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Je(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function le() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Je(e)) && (o && (o += " "), o += t);
  return o;
}
const $e = "-", Nt = (e) => {
  const t = Dt(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split($e);
      return l[0] === "" && l.length !== 1 && l.shift(), Ze(l, t) || Ot(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const c = r[i] || [];
      return l && o[i] ? [...c, ...o[i]] : c;
    }
  };
}, Ze = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Ze(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join($e);
  return (i = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : i.classGroupId;
}, He = /^\[(.+)\]$/, Ot = (e) => {
  if (He.test(e)) {
    const t = He.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Dt = (e) => {
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
      const s = n === "" ? t : Fe(t, n);
      s.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Vt(n)) {
        Oe(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([s, i]) => {
      Oe(i, Fe(t, s), r, o);
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
}, Vt = (e) => e.isThemeGetter, $t = (e) => {
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
}, De = "!", Ve = ":", Bt = Ve.length, Gt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const s = [];
    let i = 0, l = 0, c = 0, h;
    for (let a = 0; a < n.length; a++) {
      let k = n[a];
      if (i === 0 && l === 0) {
        if (k === Ve) {
          s.push(n.slice(c, a)), c = a + Bt;
          continue;
        }
        if (k === "/") {
          h = a;
          continue;
        }
      }
      k === "[" ? i++ : k === "]" ? i-- : k === "(" ? l++ : k === ")" && l--;
    }
    const b = s.length === 0 ? n : n.substring(c), x = Ut(b), g = x !== b, u = h && h > c ? h - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: u
    };
  };
  if (t) {
    const n = t + Ve, s = o;
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
}, Ut = (e) => e.endsWith(De) ? e.substring(0, e.length - 1) : e.startsWith(De) ? e.substring(1) : e, Wt = (e) => {
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
}, Kt = (e) => ({
  cache: $t(e.cacheSize),
  parseClassName: Gt(e),
  sortModifiers: Wt(e),
  ...Nt(e)
}), Ht = /\s+/, Ft = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = t, i = [], l = e.trim().split(Ht);
  let c = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const b = l[h], {
      isExternal: x,
      modifiers: g,
      hasImportantModifier: u,
      baseClassName: a,
      maybePostfixModifierPosition: k
    } = r(b);
    if (x) {
      c = b + (c.length > 0 ? " " + c : c);
      continue;
    }
    let d = !!k, p = o(d ? a.substring(0, k) : a);
    if (!p) {
      if (!d) {
        c = b + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (p = o(a), !p) {
        c = b + (c.length > 0 ? " " + c : c);
        continue;
      }
      d = !1;
    }
    const S = s(g).join(":"), f = u ? S + De : S, v = f + p;
    if (i.includes(v))
      continue;
    i.push(v);
    const C = n(p, d);
    for (let E = 0; E < C.length; ++E) {
      const L = C[E];
      i.push(f + L);
    }
    c = b + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function qt() {
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
function Yt(e, ...t) {
  let r, o, n, s = i;
  function i(c) {
    const h = t.reduce((b, x) => x(b), e());
    return r = Kt(h), o = r.cache.get, n = r.cache.set, s = l, l(c);
  }
  function l(c) {
    const h = o(c);
    if (h)
      return h;
    const b = Ft(c, r);
    return n(c, b), b;
  }
  return function() {
    return s(qt.apply(null, arguments));
  };
}
const F = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Jt = /^\d+\/\d+$/, Zt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, er = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ue = (e) => Jt.test(e), I = (e) => !!e && !Number.isNaN(Number(e)), ae = (e) => !!e && Number.isInteger(Number(e)), Pe = (e) => e.endsWith("%") && I(e.slice(0, -1)), se = (e) => Zt.test(e), rr = () => !0, or = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xt.test(e) && !Qt.test(e)
), tt = () => !1, nr = (e) => er.test(e), sr = (e) => tr.test(e), ir = (e) => !z(e) && !T(e), ar = (e) => be(e, nt, tt), z = (e) => Qe.test(e), ce = (e) => be(e, st, or), Me = (e) => be(e, fr, I), qe = (e) => be(e, rt, tt), lr = (e) => be(e, ot, sr), Ce = (e) => be(e, it, nr), T = (e) => et.test(e), ze = (e) => ye(e, st), cr = (e) => ye(e, pr), Ye = (e) => ye(e, rt), dr = (e) => ye(e, nt), ur = (e) => ye(e, ot), Ae = (e) => ye(e, it, !0), be = (e, t, r) => {
  const o = Qe.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ye = (e, t, r = !1) => {
  const o = et.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", nt = (e) => e === "length" || e === "size" || e === "bg-size", st = (e) => e === "length", fr = (e) => e === "number", pr = (e) => e === "family-name", it = (e) => e === "shadow", mr = () => {
  const e = F("color"), t = F("font"), r = F("text"), o = F("font-weight"), n = F("tracking"), s = F("leading"), i = F("breakpoint"), l = F("container"), c = F("spacing"), h = F("radius"), b = F("shadow"), x = F("inset-shadow"), g = F("text-shadow"), u = F("drop-shadow"), a = F("blur"), k = F("perspective"), d = F("aspect"), p = F("ease"), S = F("animate"), f = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], v = () => [
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
  ], C = () => [...v(), T, z], E = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", "contain", "none"], w = () => [T, z, c], R = () => [ue, "full", "auto", ...w()], V = () => [ae, "none", "subgrid", T, z], N = () => ["auto", {
    span: ["full", ae, T, z]
  }, ae, T, z], W = () => [ae, "auto", T, z], M = () => ["auto", "min", "max", "fr", T, z], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...w()], q = () => [ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], A = () => [e, T, z], oe = () => [...v(), Ye, qe, {
    position: [T, z]
  }], m = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", dr, ar, {
    size: [T, z]
  }], O = () => [Pe, ze, ce], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    T,
    z
  ], G = () => ["", I, ze, ce], Y = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => [I, Pe, Ye, qe], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    a,
    T,
    z
  ], Q = () => ["none", I, T, z], ie = () => ["none", I, T, z], xe = () => [I, T, z], Ee = () => [ue, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [se],
      breakpoint: [se],
      color: [rr],
      container: [se],
      "drop-shadow": [se],
      ease: ["in", "out", "in-out"],
      font: [ir],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [se],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [se],
      shadow: [se],
      spacing: ["px", I],
      text: [se],
      "text-shadow": [se],
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
        aspect: ["auto", "square", ue, z, T, d]
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
        columns: [I, z, T, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": f()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": f()
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
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
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
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
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
        z: [ae, "auto", T, z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ue, "full", "auto", l, ...w()]
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
        flex: [I, ue, "auto", "initial", "none", z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, T, z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, T, z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ae, "first", "last", "none", T, z]
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
        col: N()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
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
        row: N()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": M()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": M()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...D(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...B(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...B()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": D()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...B(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...B()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
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
        "space-y": w()
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
            screen: [i]
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
        font: [o, T, Me]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Pe, z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cr, z, t]
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
        tracking: [n, T, z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [I, "none", T, Me]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...w()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", T, z]
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
        list: ["disc", "decimal", "none", T, z]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [I, "from-font", "auto", T, ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [I, "auto", T, z]
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
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", T, z]
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
        content: ["none", T, z]
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
        bg: oe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: m()
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
          }, ae, T, z],
          radial: ["", T, z],
          conic: [ae, T, z]
        }, ur, lr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
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
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
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
        border: A()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
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
        "outline-offset": [I, T, z]
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
        outline: A()
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
          Ce
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, Ae, Ce]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
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
        ring: A()
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
        "ring-offset": A()
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
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, Ae, Ce]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I, T, z]
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
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": U()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": U()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": U()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": U()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": U()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": U()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": U()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [T, z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": U()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-radial-at": v()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [I]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": U()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: oe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: m()
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
        mask: ["none", T, z]
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
          T,
          z
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
        brightness: [I, T, z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, T, z]
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
          Ce
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", I, T, z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, T, z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, T, z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, T, z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, T, z]
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
          T,
          z
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
        "backdrop-brightness": [I, T, z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, T, z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, T, z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, T, z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, T, z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, T, z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, T, z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, T, z]
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
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", T, z]
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
        duration: [I, "initial", T, z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", p, T, z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, T, z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, T, z]
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
        perspective: [k, T, z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
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
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
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
        transform: [T, z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
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
        accent: A()
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
        caret: A()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", T, z]
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
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
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
        "will-change": ["auto", "scroll", "contents", "transform", T, z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
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
        stroke: ["none", ...A()]
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
}, hr = /* @__PURE__ */ Yt(mr);
function X(...e) {
  return hr(le(e));
}
const gr = {
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
function at(e = gr) {
  const [t, r] = J(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, n] = J(null), s = _(() => {
    if (typeof window > "u") return;
    const a = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(a);
  }, []), i = te(() => {
    var k;
    if (o && e[o])
      return o;
    const a = Object.entries(e).filter(([d, p]) => {
      if (p.matcher)
        return p.matcher(t);
      const S = !p.minWidth || t.width >= p.minWidth, f = !p.maxWidth || t.width <= p.maxWidth;
      return S && f;
    });
    return a.sort(([, d], [, p]) => {
      const S = (d.minWidth ? 1 : 0) + (d.maxWidth ? 1 : 0);
      return (p.minWidth ? 1 : 0) + (p.maxWidth ? 1 : 0) - S;
    }), ((k = a[0]) == null ? void 0 : k[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = te(() => e[i], [e, i]), c = te(() => (l == null ? void 0 : l.type) || "grid", [l]), h = _((a) => {
    if (a && !e[a]) {
      console.warn(`Mode "${a}" not found in configuration`);
      return;
    }
    n(a);
  }, [e]), b = _((a) => i === a, [i]), x = te(() => Object.keys(e), [e]), g = _((a) => {
    switch (c) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(a);
      case "tabs":
        return a === "tabs";
      case "dock":
        return a === "dock";
      default:
        return !1;
    }
  }, [c]), u = te(() => {
    const a = Object.entries(e).map(([S, f]) => ({ name: S, ...f })).sort((S, f) => (S.breakpoint || 0) - (f.breakpoint || 0)), k = a.findIndex((S) => S.name === i), d = a[k + 1], p = a[k - 1];
    return {
      current: i,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: d == null ? void 0 : d.name,
      nextBreakpoint: d == null ? void 0 : d.breakpoint,
      prevMode: p == null ? void 0 : p.name,
      prevBreakpoint: p == null ? void 0 : p.breakpoint,
      isSmallest: k === 0,
      isLargest: k === a.length - 1
    };
  }, [e, i, l]);
  return $(() => {
    if (typeof window > "u") return;
    const a = () => s(), k = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", a), window.addEventListener("orientationchange", k), () => {
      window.removeEventListener("resize", a), window.removeEventListener("orientationchange", k);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: i,
    currentModeConfig: l,
    currentLayoutType: c,
    // Mode management
    setMode: h,
    isMode: b,
    availableModes: x,
    // Features and capabilities
    supportsFeature: g,
    breakpointInfo: u,
    // Utilities
    isForced: !!o,
    updateViewport: s
  };
}
const ne = "pretty-poly-grid-", ge = {
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
        r && r.startsWith(ne) && e.push(r);
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
        r && r.startsWith(ne) && e.push(r);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, pe = /* @__PURE__ */ new Map(), je = {
  save: (e, t) => {
    pe.set(e, t);
  },
  load: (e) => pe.get(e) || null,
  remove: (e) => {
    pe.delete(e);
  },
  clear: () => {
    for (const e of pe.keys())
      e.startsWith(ne) && pe.delete(e);
  }
};
function _e(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? ge : je;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? lt : je;
    case "memory":
    default:
      return je;
  }
}
function Be(e) {
  return `${ne}${e}`;
}
function br(e, t, r = ge) {
  const o = Be(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function yr(e, t = ge) {
  const r = Be(e);
  return t.load(r);
}
function wr(e, t = ge) {
  const r = Be(e);
  t.remove(r);
}
function Wr(e = ge) {
  const t = {};
  try {
    if (e === ge && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(ne)) {
          const n = o.substring(ne.length), s = e.load(o);
          s && (t[n] = s);
        }
      }
    else if (e === lt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(ne)) {
          const n = o.substring(ne.length), s = e.load(o);
          s && (t[n] = s);
        }
      }
    else if (e === je) {
      for (const r of pe.keys())
        if (r.startsWith(ne)) {
          const o = r.substring(ne.length), n = e.load(r);
          n && (t[o] = n);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function vr(e) {
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
function xr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: n = !0,
  saveDelay: s = 500
}) {
  const i = me(null), l = me(), c = me(""), h = me(!1);
  $(() => {
    if (!t) {
      i.current = null;
      return;
    }
    typeof t == "function" ? i.current = vr(t) : t === "localStorage" ? i.current = _e("localStorage") : t === "sessionStorage" ? i.current = _e("sessionStorage") : i.current = _e("localStorage");
  }, [t]), $(() => {
    if (!i.current || !t || typeof t == "function" || h.current)
      return;
    const a = yr(e, i.current);
    a && (o == null || o(a), h.current = !0);
  }, [e, t]);
  const b = _((a = r) => {
    if (!i.current || !t)
      return;
    const k = JSON.stringify(a);
    if (k !== c.current)
      try {
        br(e, a, i.current), c.current = k;
      } catch (d) {
        console.warn("Failed to save grid state:", d);
      }
  }, [e, t, r]), x = _((a = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      b(a);
    }, s);
  }, [b, s, r]), g = _(() => {
    if (!(!i.current || !t || typeof t == "function"))
      try {
        wr(e, i.current), c.current = "";
      } catch (a) {
        console.warn("Failed to clear grid state:", a);
      }
  }, [e, t]), u = _((a = r) => {
    l.current && clearTimeout(l.current), b(a);
  }, [b, r]);
  return $(() => {
    if (!(!n || !t))
      return x(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, n, t, x]), $(() => {
    if (!t || typeof t == "function")
      return;
    const a = () => {
      u();
    };
    return window.addEventListener("beforeunload", a), () => {
      window.removeEventListener("beforeunload", a);
    };
  }, [u, t]), $(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: u,
    debouncedSave: x,
    clearState: g,
    isEnabled: !!t
  };
}
function ct(e, t, r) {
  return Math.max(0, e - t - r);
}
function Kr(e, t) {
  return t > 0 ? e / t : 0;
}
function he(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Hr(e, t) {
  return t > 0 && e <= t;
}
function kr(e, t, r, o, n) {
  if (r === 0)
    return e;
  const s = t <= r, i = o * 2.5;
  return s && e > i ? n : e < r && !s ? o : e;
}
function Sr(e, t, r = 0, o = 1 / 0, n = !1) {
  const s = n ? -e : e, i = t + s;
  return he(i, r, o);
}
function zr(e, t, r) {
  const o = [];
  return (r ? e.filter((s) => !r.has(s.id)) : e).forEach((s) => {
    if (s.sizeUnit === "auto")
      o.push("auto");
    else if (s.sizeUnit === "px") {
      const i = t ? `--${t}-${s.id}-size` : `--${s.id}-size`;
      o.push(`var(${i}, ${s.size}px)`);
    } else {
      const i = t ? `--${t}-${s.id}-size` : `--${s.id}-size`;
      o.push(`var(${i}, ${s.size}fr)`);
    }
  }), o.join(" ");
}
function Fr(e, t) {
  return e * t;
}
function Tr(e, t) {
  return t > 0 ? e / t : 0;
}
function qr(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Yr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function Er(e, t) {
  const r = _((i) => "touches" in i ? {
    x: i.touches[0].clientX,
    y: i.touches[0].clientY
  } : {
    x: i.clientX,
    y: i.clientY
  }, []), o = _((i, l, c) => {
    const h = e.blocks[i];
    if (!h) return;
    if (h.resizable === !1) {
      console.warn(`Cannot resize block "${i}" - block is marked as non-resizable.`);
      return;
    }
    const b = r(c), x = document.querySelector(`[data-divider-id="${l}"]`), g = (x == null ? void 0 : x.getAttribute("data-divider-position")) || "end", a = Object.values(e.blocks).filter(
      (f) => f.parentId === h.parentId
    ).sort(
      (f, v) => (f.order || 0) - (v.order || 0)
    ), k = a.findIndex((f) => f.id === i);
    let d = null;
    if (g === "start" && k > 0 ? d = a[k - 1] : g === "end" && k < a.length - 1 && (d = a[k + 1]), d && d.resizable === !1) {
      console.warn(
        `Cannot resize block "${i}" - adjacent block "${d.id}" is marked as non-resizable.`
      );
      return;
    }
    if (d && h.sizeUnit === "fr" && d.sizeUnit === "px") {
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
        startPosition: b,
        initialSize: h.defaultSize || 0,
        initialAdjacentBlockId: d == null ? void 0 : d.id,
        initialAdjacentSize: d ? d.originalDefaultSize || d.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const p = h.parentId ? e.blocks[h.parentId] : null, S = (p == null ? void 0 : p.direction) || "row";
    document.body.style.cursor = S === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), n = _((i) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const c = r(i), h = l.parentId ? e.blocks[l.parentId] : null, b = (h == null ? void 0 : h.direction) || "row", x = b === "row" ? c.x - e.resize.startPosition.x : c.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const g = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), a = ((g == null ? void 0 : g.getAttribute("data-divider-position")) || "end") === "start", k = Sr(
        x,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        a
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: k }
      });
    } else if (l.sizeUnit === "fr") {
      const g = Object.values(e.blocks).filter(
        (M) => M.parentId === l.parentId
      ), u = g.filter((M) => M.sizeUnit === "fr"), a = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), k = a ? b === "row" ? a.clientWidth : a.clientHeight : 1200, d = g.filter((M) => M.sizeUnit === "px").reduce((M, D) => {
        const B = document.querySelector(`[data-block-id="${D.id}"]`);
        if (!B) return M;
        const K = b === "row" ? B.clientWidth : B.clientHeight;
        return M + K;
      }, 0), S = Array.from(
        (a == null ? void 0 : a.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((M, D) => {
        if (!(D instanceof HTMLElement)) return M;
        const B = b === "row" ? D.clientWidth : D.clientHeight;
        return M + B;
      }, 0), v = ct(k, d, S), C = u.reduce(
        (M, D) => M + (D.defaultSize || 1),
        0
      ), E = C > 0 ? v / C : 0;
      if (E === 0) return;
      const L = Tr(x, E), w = u.sort(
        (M, D) => (M.order || 0) - (D.order || 0)
      ), R = w.findIndex(
        (M) => M.id === e.resize.activeBlockId
      ), V = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), N = (V == null ? void 0 : V.getAttribute("data-divider-position")) || "end";
      let W = null;
      if (N === "start" && R > 0 ? W = w[R - 1] : N === "end" && R < w.length - 1 && (W = w[R + 1]), W) {
        let M, D;
        M = L, D = -L;
        const B = 0.1, K = Math.max(
          B,
          e.resize.initialSize + M
        ), q = Math.max(
          B,
          (e.resize.initialAdjacentSize || 1) + D
        ), A = K - e.resize.initialSize, oe = q - (e.resize.initialAdjacentSize || 1);
        Math.abs(A + oe) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: K
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: W.id, size: q }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), s = _(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: n,
    endResize: s
  };
}
function Cr(e, t) {
  var r;
  switch (t.type) {
    case "HIDE_BLOCK":
      return {
        ...e,
        hiddenBlocks: /* @__PURE__ */ new Set([...e.hiddenBlocks, t.payload.blockId])
      };
    case "SHOW_BLOCK": {
      const o = new Set(e.hiddenBlocks);
      return o.delete(t.payload.blockId), {
        ...e,
        hiddenBlocks: o
      };
    }
    case "TOGGLE_BLOCK_VISIBILITY": {
      const o = e.hiddenBlocks.has(t.payload.blockId), n = new Set(e.hiddenBlocks);
      return o ? n.delete(t.payload.blockId) : n.add(t.payload.blockId), {
        ...e,
        hiddenBlocks: n
      };
    }
    case "RESIZE_BLOCK": {
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
    }
    case "COLLAPSE_BLOCK": {
      const o = e.blocks[t.payload.blockId];
      if (!o) return e;
      const n = o.collapseTo ?? 0, s = o.minSize ?? 0, i = Math.max(n, s);
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            // Preserve original size for expand
            originalDefaultSize: o.originalDefaultSize || o.defaultSize,
            defaultSize: i,
            size: i
          }
        }
      };
    }
    case "EXPAND_BLOCK": {
      const o = e.blocks[t.payload.blockId];
      if (!o) return e;
      const n = o.originalDefaultSize || o.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            defaultSize: n,
            size: n
          }
        }
      };
    }
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
    case "RESET_STATE": {
      const o = Object.fromEntries(
        Object.entries(e.blocks).map(([n, s]) => [
          n,
          {
            ...s,
            size: s.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: o,
        activeDivider: void 0,
        resize: {
          isDragging: !1,
          startPosition: { x: 0, y: 0 },
          initialSize: 0
        }
      };
    }
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
    case "SPLIT_BLOCK": {
      const { targetBlockId: o, direction: n, firstChildId: s, secondChildId: i, initialSize: l = 1 } = t.payload, c = e.blocks[o];
      if (!c)
        return console.warn(`Cannot split: block ${o} not found`), e;
      if (c.type !== "group")
        return console.warn(`Cannot split: block ${o} is not a group`), e;
      if (c.canSplit !== !0)
        return console.warn(`Cannot split: block ${o} does not have canSplit enabled`), e;
      const h = n === "horizontal" ? "column" : "row", b = t.payload.newViewType || c.defaultViewType;
      if (!c.direction) {
        const x = c.children || [], g = x[0], u = g ? e.blocks[g] : void 0, a = {
          ...c,
          direction: h,
          children: [s, i]
        }, k = {
          id: s,
          type: "block",
          parentId: o,
          order: 0,
          defaultSize: l,
          sizeUnit: "fr",
          viewType: u == null ? void 0 : u.viewType,
          viewState: u == null ? void 0 : u.viewState
        }, d = {
          id: i,
          type: "block",
          parentId: o,
          order: 1,
          defaultSize: l,
          sizeUnit: "fr",
          viewType: b
        }, p = { ...e.blocks };
        return x.forEach((S) => {
          delete p[S];
        }), {
          ...e,
          blocks: {
            ...p,
            [o]: a,
            [s]: k,
            [i]: d
          }
        };
      }
      if (c.direction) {
        if (c.direction !== h)
          return console.warn(`Cannot split group ${o}: direction mismatch (has ${c.direction}, requested ${h})`), e;
        const x = {
          ...c,
          children: [...c.children || [], i]
        }, g = {
          id: i,
          type: "block",
          parentId: o,
          order: ((r = c.children) == null ? void 0 : r.length) || 0,
          defaultSize: l,
          sizeUnit: "fr",
          viewType: b
        };
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [o]: x,
            [i]: g
          }
        };
      }
      return e;
    }
    case "UNSPLIT_BLOCK": {
      const { blockId: o } = t.payload, n = e.blocks[o];
      if (!n || n.type !== "group" || !n.children)
        return e;
      const s = { ...e.blocks };
      n.children.forEach((l) => {
        delete s[l];
      });
      const i = {
        ...n,
        type: "block",
        children: void 0,
        viewType: void 0
        // User will need to set content
      };
      return s[o] = i, {
        ...e,
        blocks: s
      };
    }
    case "ADD_BLOCK": {
      const { parentId: o, block: n } = t.payload, s = e.blocks[o];
      if (!s) return e;
      const i = s.type === "group" && s.children ? {
        ...s,
        children: [...s.children, n.id]
      } : s;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [o]: i,
          [n.id]: n
        }
      };
    }
    case "REMOVE_BLOCK": {
      const { blockId: o } = t.payload, n = e.blocks[o];
      if (!n) return e;
      const s = { ...e.blocks };
      if (n.parentId) {
        const l = s[n.parentId];
        l && l.type === "group" && l.children && (s[n.parentId] = {
          ...l,
          children: l.children.filter((c) => c !== o)
        });
      }
      delete s[o];
      const i = new Set(e.hiddenBlocks);
      return i.delete(o), {
        ...e,
        blocks: s,
        hiddenBlocks: i
      };
    }
    case "SET_BLOCK_VIEW_TYPE": {
      const { blockId: o, viewType: n } = t.payload, s = e.blocks[o];
      return s ? {
        ...e,
        blocks: {
          ...e.blocks,
          [o]: {
            ...s,
            viewType: n
          }
        }
      } : e;
    }
    default:
      return e;
  }
}
function Ar(e, t, r) {
  return {
    blocks: e.reduce((n, s) => (n[s.id] = {
      ...s,
      size: s.defaultSize,
      originalDefaultSize: s.defaultSize
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
function jr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: n = !1,
  persistKey: s,
  onModeChange: i,
  onLayoutChange: l
}) {
  const { activeMode: c, viewport: h, setMode: b } = at(r), [x, g] = It(
    Cr,
    Ar(t, h, c)
  );
  $(() => {
    g({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), $(() => {
    const f = x.activeMode;
    c !== f && (g({
      type: "SWITCH_MODE",
      payload: { mode: c }
    }), i == null || i(c, f));
  }, [c, x.activeMode, i]);
  const { saveState: u, clearState: a } = xr({
    gridId: s || o,
    enabled: n,
    state: x,
    onStateLoad: (f) => {
      g({ type: "LOAD_STATE", payload: { state: f } });
    },
    autoSave: !0
  }), { startResize: k, updateResize: d, endResize: p } = Er(x, g), S = te(
    () => ({
      gridId: o,
      state: {
        ...x,
        activeMode: c,
        viewport: h
      },
      dispatch: g,
      // Grid operations
      resizeBlock: (f, v) => {
        g({
          type: "RESIZE_BLOCK",
          payload: { blockId: f, size: v }
        });
      },
      collapseBlock: (f) => {
        g({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: f }
        });
      },
      expandBlock: (f) => {
        g({
          type: "EXPAND_BLOCK",
          payload: { blockId: f }
        });
      },
      switchMode: (f) => {
        b(f);
      },
      // Block visibility operations
      hideBlock: (f) => {
        g({
          type: "HIDE_BLOCK",
          payload: { blockId: f }
        });
      },
      showBlock: (f) => {
        g({
          type: "SHOW_BLOCK",
          payload: { blockId: f }
        });
      },
      toggleBlockVisibility: (f) => {
        g({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId: f }
        });
      },
      // Split operations (LayoutService primitives)
      splitBlock: (f, v, C = {}) => {
        const { initialSize: E = 1, viewType: L, position: w = "after" } = C, R = Date.now(), V = `${f}-${R}-1`, N = `${f}-${R}-2`;
        return g({
          type: "SPLIT_BLOCK",
          payload: {
            targetBlockId: f,
            direction: v,
            newBlockId: w === "before" ? V : N,
            firstChildId: V,
            secondChildId: N,
            initialSize: E,
            newViewType: L,
            position: w
          }
        }), w === "before" ? V : N;
      },
      unsplitBlock: (f) => {
        g({
          type: "UNSPLIT_BLOCK",
          payload: { blockId: f }
        });
      },
      canSplit: (f) => {
        var E;
        const v = x.blocks[f];
        if (!v || v.type !== "group" || v.canSplit !== !0) return !1;
        const C = ((E = v.splitConfig) == null ? void 0 : E.minSplitSize) || 200;
        return !(v.sizeUnit === "px" && (v.defaultSize || 0) < C * 2);
      },
      addBlock: (f, v) => {
        const C = v.id || `block-${Date.now()}`, E = {
          id: C,
          type: "block",
          parentId: f,
          defaultSize: 1,
          sizeUnit: "fr",
          ...v
        };
        return g({
          type: "ADD_BLOCK",
          payload: { parentId: f, block: E }
        }), C;
      },
      removeBlock: (f) => {
        g({
          type: "REMOVE_BLOCK",
          payload: { blockId: f }
        });
      },
      // View type operations (future ViewRegistry support)
      setBlockViewType: (f, v) => {
        g({
          type: "SET_BLOCK_VIEW_TYPE",
          payload: { blockId: f, viewType: v }
        });
      },
      getBlockViewType: (f) => {
        var v;
        return (v = x.blocks[f]) == null ? void 0 : v.viewType;
      },
      // Resize operations (using extracted hook)
      startResize: k,
      updateResize: d,
      endResize: p,
      // Persistence
      persistState: () => u(x),
      resetState: () => {
        g({ type: "RESET_STATE" }), a();
      }
    }),
    [o, x, c, h, u, a, b, k, d, p]
  );
  return $(() => {
    if (l) {
      const f = Object.values(x.blocks);
      l(f);
    }
  }, [x.blocks, l]), /* @__PURE__ */ y.jsx(dt.Provider, { value: S, children: e });
}
function re() {
  const e = Ie(dt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Te() {
  const { state: e } = re();
  return e;
}
function Rr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: s,
    switchMode: i,
    persistState: l,
    resetState: c
  } = re();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: s,
    switchMode: i,
    persistState: l,
    resetState: c
  };
}
function ut() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = re();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function Jr(e) {
  const { state: t } = re();
  return t.hiddenBlocks.has(e);
}
function Zr() {
  const { hideBlock: e } = re();
  return e;
}
function Xr() {
  const { showBlock: e } = re();
  return e;
}
function Qr() {
  const { toggleBlockVisibility: e } = re();
  return e;
}
function Ir({
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
    activeBlockId: c,
    activeDividerId: h
  } = ut(), b = _(() => {
    if (!t.current) return 0;
    const d = t.current.getBoundingClientRect();
    return o === "column" ? d.width : d.height;
  }, [o, t]), x = _(() => {
    const d = b();
    if (d === 0) return 0;
    const p = e.filter((C) => C.sizeUnit === "px").reduce((C, E) => C + (E.defaultSize || 0), 0), S = 0, f = e.filter((C) => C.sizeUnit === "fr").reduce((C, E) => C + (E.defaultSize || 1), 0), v = ct(d, p, S);
    return f > 0 ? v / f : 0;
  }, [e, b]), g = _((d) => {
    const p = e.find((S) => S.id === d);
    p && p.defaultSize !== void 0 && (r == null || r(d, p.defaultSize));
  }, [e, r]), u = _((d) => {
    const p = e.find((S) => S.id === d);
    p && p.collapseTo !== void 0 && (r == null || r(d, p.collapseTo));
  }, [e, r]), a = _((d) => {
    const p = e.find((S) => S.id === d);
    p && p.defaultSize !== void 0 && (r == null || r(d, p.defaultSize));
  }, [e, r]), k = _((d) => {
    const p = e.find((S) => S.id === d);
    return !p || !p.collapseAt ? !1 : (p.defaultSize || 0) <= p.collapseAt;
  }, [e]);
  return $(() => {
    const d = (v) => {
      v.preventDefault(), s(v);
    }, p = (v) => {
      v.preventDefault(), s(v);
    }, S = () => {
      i();
    }, f = () => {
      i();
    };
    if (l)
      return document.addEventListener("mousemove", d), document.addEventListener("mouseup", S), document.addEventListener("touchmove", p), document.addEventListener("touchend", f), () => {
        document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", S), document.removeEventListener("touchmove", p), document.removeEventListener("touchend", f);
      };
  }, [l, s, i]), {
    // State
    isDragging: l,
    activeBlockId: c,
    activeDividerId: h,
    // Actions
    startResize: n,
    resetBlock: g,
    collapseBlock: u,
    expandBlock: a,
    // Utilities
    isBlockCollapsed: k,
    getContainerSize: b,
    calculatePixelsPerFr: x
  };
}
function Lr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: s,
  onSplitBlock: i,
  containerRef: l,
  stepSize: c = 10,
  largeStepSize: h = 50
}) {
  const b = _(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), x = _((d) => {
    if (!d) return null;
    const p = d.dataset.blockId;
    return t.find((S) => S.id === p) || null;
  }, [t]), g = _((d, p) => {
    if (!(l != null && l.current)) return null;
    const S = Array.from(
      l.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), f = d.getBoundingClientRect(), v = {
      x: f.left + f.width / 2,
      y: f.top + f.height / 2
    }, C = S.filter((E) => {
      if (E === d) return !1;
      const L = E.getBoundingClientRect(), w = {
        x: L.left + L.width / 2,
        y: L.top + L.height / 2
      };
      switch (p) {
        case "up":
          return w.y < v.y;
        case "down":
          return w.y > v.y;
        case "left":
          return w.x < v.x;
        case "right":
          return w.x > v.x;
        default:
          return !1;
      }
    });
    return C.length === 0 ? null : (C.sort((E, L) => {
      const w = E.getBoundingClientRect(), R = L.getBoundingClientRect(), V = {
        x: w.left + w.width / 2,
        y: w.top + w.height / 2
      }, N = {
        x: R.left + R.width / 2,
        y: R.top + R.height / 2
      }, W = Math.sqrt(
        Math.pow(V.x - v.x, 2) + Math.pow(V.y - v.y, 2)
      ), M = Math.sqrt(
        Math.pow(N.x - v.x, 2) + Math.pow(N.y - v.y, 2)
      );
      return W - M;
    }), C[0]);
  }, [l]), u = _((d) => {
    if (!e) return;
    const p = b();
    if (!p) return;
    const S = x(p);
    if (!S) return;
    const f = d.ctrlKey || d.metaKey, v = d.shiftKey, C = v ? h : c;
    if (!f && !v)
      switch (d.key) {
        case "ArrowUp": {
          d.preventDefault();
          const E = g(p, "up");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        }
        case "ArrowDown": {
          d.preventDefault();
          const E = g(p, "down");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        }
        case "ArrowLeft": {
          d.preventDefault();
          const E = g(p, "left");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        }
        case "ArrowRight": {
          d.preventDefault();
          const E = g(p, "right");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        }
        case "Enter":
        case " ":
          d.preventDefault(), S.collapsible && (s == null || s(S.id));
          break;
        case "Escape":
          d.preventDefault(), p.blur();
          break;
      }
    if (f && r)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), r(S.id, -C);
          break;
        case "ArrowDown":
          d.preventDefault(), r(S.id, C);
          break;
        case "ArrowLeft":
          d.preventDefault(), r(S.id, -C);
          break;
        case "ArrowRight":
          d.preventDefault(), r(S.id, C);
          break;
      }
    if (f)
      switch (d.key) {
        case "Minus":
        case "-":
          d.preventDefault(), n == null || n(S.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), s == null || s(S.id);
          break;
        case "\\":
          d.preventDefault(), v ? i == null || i(S.id, "horizontal") : i == null || i(S.id, "vertical");
          break;
      }
  }, [
    e,
    b,
    x,
    g,
    r,
    o,
    n,
    s,
    i,
    c,
    h
  ]), a = _((d) => {
    if (!(l != null && l.current)) return;
    const p = l.current.querySelector(
      `[data-block-id="${d}"]`
    );
    p && (p.focus(), o == null || o(d));
  }, [l, o]), k = _(() => l != null && l.current ? Array.from(
    l.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [l]);
  return $(() => {
    if (e)
      return document.addEventListener("keydown", u), () => {
        document.removeEventListener("keydown", u);
      };
  }, [u, e]), {
    focusBlock: a,
    getFocusableBlocks: k,
    getFocusedBlock: b,
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
  "aria-label": s
}) => {
  const i = me(null), l = Te(), { startResize: c, isDragging: h, activeDividerId: b } = ut(), [x, g] = J({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), u = l.blocks[e], a = r === "vertical", k = `${e}-${t}-divider`, d = h && b === k, p = _(() => {
    const f = document.querySelector("[data-grid-id]"), v = document.querySelector(`[data-block-id="${e}"]`);
    if (!f || !v) return;
    const C = f.getBoundingClientRect(), E = v.getBoundingClientRect(), L = u == null ? void 0 : u.parentId, w = L ? document.querySelector(`[data-block-id="${L}"]`) : f;
    if (!w) return;
    const N = ((w.hasAttribute("data-has-toolbar") ? w.querySelector("[data-split-content]") : null) || w).getBoundingClientRect();
    if (a) {
      const W = t === "start" ? E.left - C.left : E.right - C.left;
      g({
        left: W - o / 2,
        // Center on edge
        top: N.top - C.top,
        // Position relative to constraint area
        width: o,
        height: N.height
        // Use constraint height (content area if toolbar present)
      });
    } else {
      const W = t === "start" ? E.top - C.top : E.bottom - C.top;
      g({
        left: N.left - C.left,
        // Position relative to constraint area
        top: W - o / 2,
        // Center on edge
        width: N.width,
        // Use constraint width (content area if toolbar present)
        height: o
      });
    }
  }, [e, t, a, o, u == null ? void 0 : u.parentId]);
  Lt(() => {
    const f = document.querySelector("[data-grid-id]"), v = document.querySelector(`[data-block-id="${e}"]`);
    if (!f || !v) return;
    p();
    const C = new ResizeObserver(() => {
      p();
    });
    C.observe(f), C.observe(v);
    const E = u == null ? void 0 : u.parentId, L = E ? document.querySelector(`[data-block-id="${E}"]`) : null;
    if (L && (C.observe(L), L.hasAttribute("data-has-toolbar"))) {
      const R = L.querySelector("[data-split-content]");
      R && C.observe(R);
    }
    return () => {
      C.disconnect();
    };
  }, [e, p, u == null ? void 0 : u.parentId]), $(() => {
    p();
  }, [l.blocks, p]);
  const S = _((f) => {
    f.preventDefault(), c(e, k, f);
  }, [e, k, c]);
  return u ? /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: i,
      className: X(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        d && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        a ? "cursor-col-resize" : "cursor-row-resize",
        n
      ),
      style: {
        left: `${x.left}px`,
        top: `${x.top}px`,
        width: `${x.width}px`,
        height: `${x.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": k,
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
ft.displayName = "Divider";
function Pr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Mr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const n = Object.values(e).filter((l) => l.parentId === o.id).sort((l, c) => (l.order || 0) - (c.order || 0));
    if (n.length === 0) return;
    const i = o.direction === "row" ? "vertical" : "horizontal";
    n.forEach((l, c) => {
      if (c === 0) return;
      const h = n[c - 1], b = h.resizable !== !1, x = l.resizable !== !1;
      if (!b && !x)
        return;
      const { targetId: g, position: u } = Pr(h, l), a = e[g];
      a && a.resizable === !1 || t.push({
        id: `divider-${h.id}-${l.id}`,
        targetBlockId: g,
        position: u,
        direction: i
      });
    });
  }), t;
}
const _r = () => {
  const e = Te(), t = te(() => Mr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ y.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ y.jsx(
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
}, pt = Z(({ children: e, className: t, "aria-label": r }, o) => {
  const n = me(null), {
    state: s,
    resizeBlock: i,
    collapseBlock: l,
    expandBlock: c,
    switchMode: h,
    persistState: b,
    resetState: x
  } = re(), g = s.resize.isDragging;
  Pt(
    o,
    () => ({
      resizeBlock: i,
      collapseBlock: l,
      expandBlock: c,
      switchMode: h,
      persistState: b,
      resetState: x,
      getState: () => s
    }),
    [
      i,
      l,
      c,
      h,
      b,
      x,
      s
    ]
  );
  const u = te(() => Object.values(s.blocks).sort((v, C) => (v.order || 0) - (C.order || 0)), [s.blocks]), a = te(() => u.find((f) => !f.parentId), [u]);
  Ir({
    blocks: u,
    containerRef: n,
    onSizeChange: i,
    direction: (a == null ? void 0 : a.direction) || "row"
  });
  const { splitBlock: k } = re();
  Lr({
    enabled: !0,
    blocks: u,
    containerRef: n,
    onResizeBlock: (f, v) => {
      const C = s.blocks[f];
      if (C) {
        const E = C.defaultSize || 0, L = Math.max(0, E + v);
        i(f, L);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: c,
    onSplitBlock: (f, v) => {
      k(f, v);
    }
  });
  const { gridStyles: d, cssVariables: p, modeStyles: S } = te(() => {
    if (!a)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const f = u.reduce((R, V) => {
      if (V.id === a.id) return R;
      const N = V.parentId || a.id;
      return R[N] || (R[N] = []), R[N].push(V), R;
    }, {}), v = u.filter((R) => R.defaultSize !== void 0).map((R) => {
      const V = R.sizeUnit === "px" ? `${R.defaultSize}px` : `${R.defaultSize}fr`;
      return `--${a.id}-${R.id}-size: ${V};`;
    }).join(`
  `), C = () => "", E = (R, V = /* @__PURE__ */ new Set()) => {
      if (V.has(R))
        return console.warn(`Circular reference detected for parent: ${R}`), "";
      const N = new Set(V);
      N.add(R);
      const W = f[R] || [];
      if (W.length === 0) return "";
      const M = [...W].sort(
        (j, O) => (j.order || 0) - (O.order || 0)
      ), D = u.find((j) => j.id === R) || a, B = D == null ? void 0 : D.direction, K = M.map((j) => ({
        id: j.id,
        sizeUnit: j.sizeUnit || "fr",
        size: j.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), q = zr(K, a.id, s.hiddenBlocks), oe = (D == null ? void 0 : D.hasToolbar) === !0 ? `[data-block-id="${R}"] > [data-split-content]` : `[data-block-id="${R}"]`;
      let m = "";
      B ? m = `
${oe} {
  display: grid;
  ${B === "column" ? "grid-template-rows" : "grid-template-columns"}: ${q};
  ${B === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}` : m = `
${oe} {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}`;
      for (const j of M)
        j.type === "group" && (m += E(j.id, N));
      return m;
    }, L = E(a.id), w = C();
    return {
      cssVariables: `:root {
  ${v}
}`,
      gridStyles: L,
      modeStyles: w
    };
  }, [u, a, s.hiddenBlocks]);
  return a ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs("style", { type: "text/css", children: [
      p,
      d,
      S
    ] }),
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: n,
        className: X(
          "group relative overflow-hidden",
          g && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": a.id,
        "data-block-id": a.id,
        "data-block-type": a.type,
        "data-active-mode": s.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (s.activeMode === "grid" || s.activeMode === "desktop") && /* @__PURE__ */ y.jsx(_r, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
pt.displayName = "GridInternal";
const Nr = Z(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: n,
    onLayoutChange: s,
    onModeChange: i,
    className: l,
    dividers: c = "manual",
    dividerConfig: h,
    "aria-label": b
  }, x) => {
    const g = t.find((a) => !a.parentId), u = (g == null ? void 0 : g.id) || "root";
    return /* @__PURE__ */ y.jsx(
      jr,
      {
        blocks: t,
        modes: r,
        gridId: u,
        persist: o,
        persistKey: n,
        onLayoutChange: s,
        onModeChange: i,
        children: /* @__PURE__ */ y.jsx(
          pt,
          {
            ref: x,
            className: l,
            dividers: c,
            dividerConfig: h,
            "aria-label": b,
            children: e
          }
        )
      }
    );
  }
);
Nr.displayName = "Grid";
const mt = Z(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, n) => {
    const s = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: n,
        className: X(
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
mt.displayName = "Block.Content";
const ht = Z(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: n,
      className: X(
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
ht.displayName = "Block.Header";
const gt = Z(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: o,
      className: X(
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
  ({ left: e, center: t, right: r, className: o, "aria-label": n }, s) => /* @__PURE__ */ y.jsxs(
    "div",
    {
      ref: s,
      className: X(
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
        /* @__PURE__ */ y.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ y.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
bt.displayName = "Block.Toolbar";
const yt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": s,
    allowOverflow: i = !0
  }, l) => {
    const [c, h] = J(null), b = (u, a) => {
      a.preventDefault(), u.disabled || r(u.id);
    }, x = (u, a) => {
      a.preventDefault(), a.stopPropagation(), o && u.closable && o(u.id);
    }, g = (u, a) => {
      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), u.disabled || r(u.id));
    };
    return /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: l,
        className: le(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          i ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": s || "Block tabs",
        children: /* @__PURE__ */ y.jsx("div", { className: "flex items-center min-w-0", children: e.map((u) => {
          const a = u.id === t, k = c === u.id, d = u.icon;
          return /* @__PURE__ */ y.jsxs(
            "div",
            {
              className: le(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                a ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                u.disabled && "opacity-50 cursor-not-allowed",
                !i && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": a,
              "aria-disabled": u.disabled,
              tabIndex: u.disabled ? -1 : 0,
              onClick: (p) => b(u, p),
              onKeyDown: (p) => g(u, p),
              onMouseEnter: () => h(u.id),
              onMouseLeave: () => h(null),
              "data-tab-id": u.id,
              children: [
                d && /* @__PURE__ */ y.jsx(d, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ y.jsx("span", { className: "truncate min-w-0", children: u.label }),
                u.closable && o && /* @__PURE__ */ y.jsx(
                  "button",
                  {
                    className: le(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      k || a ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (p) => x(u, p),
                    "aria-label": `Close ${u.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ y.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ y.jsx(
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
yt.displayName = "Block.Tabs";
const Ge = Z(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": n }, s) => /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: s,
      className: le(
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
    onClick: s,
    className: i,
    "aria-label": l
  }, c) => {
    const [h, b] = J(!1), x = () => {
      t && !o && b(!0);
    }, g = () => {
      b(!1);
    }, u = () => {
      !o && s && s();
    }, a = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), u());
    };
    return /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          ref: c,
          className: le(
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
            i
          ),
          disabled: o,
          onClick: u,
          onKeyDown: a,
          onMouseEnter: x,
          onMouseLeave: g,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ y.jsx(
              e,
              {
                className: le(
                  "w-5 h-5",
                  r ? "text-primary" : "text-muted-foreground",
                  !o && "group-hover:text-foreground"
                )
              }
            ),
            n && /* @__PURE__ */ y.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            r && /* @__PURE__ */ y.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      h && t && /* @__PURE__ */ y.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ y.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ y.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
wt.displayName = "Block.Sidebar.Item";
const vt = Z(
  ({ className: e }, t) => /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: t,
      className: le(
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
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: n,
      className: X(
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
    divider: s,
    noDivider: i,
    "aria-label": l
  }, c) => {
    var S;
    const { gridId: h } = re(), b = Te(), { collapseBlock: x, expandBlock: g } = Rr(), { supportsFeature: u } = at(), a = b == null ? void 0 : b.blocks[e], k = ((S = b == null ? void 0 : b.hiddenBlocks) == null ? void 0 : S.has(e)) || !1, d = te(() => a != null && a.collapsible && a.collapseAt ? (a.size ?? a.defaultSize ?? 0) <= a.collapseAt : !1, [a]), p = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? g(e) : x(e));
    };
    return /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: c,
        className: X(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          d && "opacity-70",
          n
        ),
        style: {
          // Hide block with display: none - removes from grid flow
          // The grid template will be dynamically updated to exclude this block
          display: k ? "none" : void 0
        },
        "data-grid-id": h,
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
        "data-block-divider": s !== void 0 ? JSON.stringify(s) : void 0,
        "data-block-no-divider": i,
        "data-block-hidden": k,
        "aria-label": l,
        "aria-hidden": k,
        role: t === "group" ? "group" : void 0,
        tabIndex: u("resizing") && !k ? 0 : void 0,
        onDoubleClick: u("collapse") ? p : void 0,
        children: o
      }
    );
  }
);
Ue.displayName = "Block";
const kt = Z(
  (e, t) => /* @__PURE__ */ y.jsx(Ue, { ref: t, ...e, type: "group" })
);
kt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: kt,
  Layout: xt,
  Header: ht,
  Content: mt,
  Footer: gt,
  Toolbar: bt,
  Tabs: yt,
  Sidebar: Ge
});
Object.assign(Ge, {
  Item: wt,
  Spacer: vt
});
function Or(e) {
  const r = Te().blocks[e];
  if (!r)
    return {
      canSplitVertical: !1,
      canSplitHorizontal: !1,
      currentDirection: void 0,
      canSplit: !1
    };
  const o = r.direction !== void 0, n = !o || r.direction === "row", s = !o || r.direction === "column";
  return {
    canSplitVertical: n,
    canSplitHorizontal: s,
    currentDirection: r.direction,
    canSplit: r.canSplit === !0
  };
}
const St = Z(
  ({
    blockId: e,
    children: t,
    label: r,
    icon: o,
    showSplitButtons: n = !0,
    splitButtonLabels: s = {
      vertical: "Split Right",
      horizontal: "Split Down"
    },
    splitButtonIcons: i,
    onBeforeSplit: l,
    className: c,
    toolbarClassName: h,
    contentClassName: b,
    renderToolbar: x,
    "aria-label": g
  }, u) => {
    const { splitBlock: a } = re(), { canSplitVertical: k, canSplitHorizontal: d } = Or(e), p = i == null ? void 0 : i.vertical, S = i == null ? void 0 : i.horizontal, f = () => {
      l && l("vertical") === !1 || a(e, "vertical");
    }, v = () => {
      l && l("horizontal") === !1 || a(e, "horizontal");
    }, C = {
      blockId: e,
      canSplitVertical: k,
      canSplitHorizontal: d,
      handleSplitVertical: f,
      handleSplitHorizontal: v,
      label: r,
      icon: o
    };
    return /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: u,
        "data-block-id": e,
        "data-block-type": "group",
        "data-has-toolbar": "true",
        className: X("relative w-full h-full flex flex-col min-h-0", c),
        "aria-label": g,
        children: [
          x ? x(C) : /* @__PURE__ */ y.jsx(
            "div",
            {
              className: X(
                "flex-none border-b border-border bg-card",
                h
              ),
              children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
                /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
                  o && /* @__PURE__ */ y.jsx(o, { className: "w-4 h-4 text-muted-foreground" }),
                  r && /* @__PURE__ */ y.jsx("div", { className: "font-semibold text-sm", children: r })
                ] }),
                n && /* @__PURE__ */ y.jsxs("div", { className: "flex gap-1", children: [
                  k && /* @__PURE__ */ y.jsxs(
                    "button",
                    {
                      onClick: f,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${s.vertical} (Ctrl+\\)`,
                      "aria-label": s.vertical,
                      children: [
                        p && /* @__PURE__ */ y.jsx(p, { className: "w-3 h-3" }),
                        /* @__PURE__ */ y.jsx("span", { className: "hidden sm:inline", children: s.vertical })
                      ]
                    }
                  ),
                  d && /* @__PURE__ */ y.jsxs(
                    "button",
                    {
                      onClick: v,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${s.horizontal} (Ctrl+Shift+\\)`,
                      "aria-label": s.horizontal,
                      children: [
                        S && /* @__PURE__ */ y.jsx(S, { className: "w-3 h-3" }),
                        /* @__PURE__ */ y.jsx("span", { className: "hidden sm:inline", children: s.horizontal })
                      ]
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "div",
            {
              "data-split-content": !0,
              className: X("flex-1 relative min-h-0", b),
              children: t
            }
          )
        ]
      }
    );
  }
);
St.displayName = "BlockSplitContainer";
function zt({
  blockId: e,
  renderBlock: t,
  getSplitContainerProps: r,
  renderSplitContainer: o,
  renderGroup: n,
  className: s
}) {
  const i = Te();
  if (!i || !i.blocks)
    return null;
  const l = i.blocks[e];
  if (!l)
    return null;
  const c = () => !l.children || l.children.length === 0 ? null : /* @__PURE__ */ y.jsx(y.Fragment, { children: l.children.map((h) => /* @__PURE__ */ y.jsx(
    zt,
    {
      blockId: h,
      renderBlock: t,
      getSplitContainerProps: r,
      renderSplitContainer: o,
      renderGroup: n
    },
    h
  )) });
  if (l.type === "group" && l.hasToolbar) {
    const h = c();
    if (o)
      return /* @__PURE__ */ y.jsx(y.Fragment, { children: o(e, l, h) });
    const b = r ? r(l, e) : {};
    return /* @__PURE__ */ y.jsx(
      St,
      {
        blockId: e,
        className: s,
        ...b,
        children: h
      }
    );
  }
  if (l.type === "group" && l.children) {
    const h = c();
    return n ? /* @__PURE__ */ y.jsx(y.Fragment, { children: n(e, l, h) }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: h });
  }
  return t ? /* @__PURE__ */ y.jsx(y.Fragment, { children: t(l, e) }) : /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-block-id": e,
      "data-block-type": "block",
      className: s || "relative w-full h-full",
      children: /* @__PURE__ */ y.jsxs("div", { className: "p-4 text-muted-foreground", children: [
        'Block "',
        e,
        '" - No render function provided'
      ] })
    }
  );
}
zt.displayName = "BlockTreeRenderer";
const Dr = Z(
  ({
    icon: e,
    size: t = "sm",
    className: r,
    title: o = "Close",
    type: n = "button",
    ...s
  }, i) => {
    const l = {
      xs: "h-5 w-5 p-0.5",
      sm: "h-6 w-6 p-1",
      md: "h-7 w-7 p-1.5"
    }, c = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4"
    };
    return /* @__PURE__ */ y.jsx(
      "button",
      {
        ref: i,
        type: n,
        className: X(
          "pretty-poly-block-close-button",
          "inline-flex items-center justify-center",
          "rounded",
          "text-muted-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          l[t],
          r
        ),
        title: o,
        "aria-label": o,
        ...s,
        children: e ? /* @__PURE__ */ y.jsx(e, { className: c[t] }) : /* @__PURE__ */ y.jsx("span", { className: "text-base leading-none", children: "×" })
      }
    );
  }
);
Dr.displayName = "BlockCloseButton";
function eo(e, t, r) {
  const o = [];
  let n = e;
  const s = t.minSize ?? 0, i = t.maxSize ?? 1 / 0;
  if (e < s && (o.push(`Size ${e} is below minimum ${s}`), n = s), e > i && (o.push(`Size ${e} exceeds maximum ${i}`), n = i), n = he(n, s, i), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, c = t.collapseTo ?? 0, h = t.defaultSize ?? n;
    n = kr(
      n,
      r,
      l,
      c,
      h
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: n,
    violations: o
  };
}
function to(e, t, r, o, n = 1) {
  const s = [];
  let i = r, l = o;
  const c = fe(e.minSize ?? 0, e.sizeUnit, n), h = fe(e.maxSize ?? 1 / 0, e.sizeUnit, n), b = fe(t.minSize ?? 0, t.sizeUnit, n), x = fe(t.maxSize ?? 1 / 0, t.sizeUnit, n), g = fe(e.defaultSize ?? 0, e.sizeUnit, n), u = fe(t.defaultSize ?? 0, t.sizeUnit, n), a = g + r, k = u + o;
  let d = he(a, c, h), p = he(k, b, x);
  i = d - g, l = p - u;
  const S = i + l;
  if (Math.abs(S) > 1e-3) {
    const C = Math.abs(i) < Math.abs(r), E = Math.abs(l) < Math.abs(o);
    if (C && !E) {
      const L = u - i;
      p = he(L, b, x), l = p - u;
    } else if (E && !C) {
      const L = g - l;
      d = he(L, c, h), i = d - g;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const f = i + l;
  return {
    isValid: Math.abs(f) <= 1e-3,
    adjustedTargetDelta: i,
    adjustedAdjacentDelta: l,
    violations: s
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
function ro(e, t) {
  const r = [], o = e.filter((s) => s.sizeUnit === "px").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0), n = e.filter((s) => s.sizeUnit === "fr").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((s) => s.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((s) => {
    const i = t[s.id] ?? s.defaultSize ?? 0, l = s.minSize ?? 0, c = s.maxSize ?? 1 / 0;
    l > c && r.push(`Block ${s.id}: minSize (${l}) > maxSize (${c})`), (i < l || i > c) && r.push(`Block ${s.id}: size ${i} violates constraints [${l}, ${c}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
class Vr {
  constructor() {
    ee(this, "views", /* @__PURE__ */ new Map());
    ee(this, "listeners", /* @__PURE__ */ new Set());
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
const Tt = Re(null);
function Le() {
  const e = Ie(Tt);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function oo(e) {
  const t = Le(), [r, o] = J(() => t.getView(e));
  return $(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function no(e) {
  const t = Le(), [r, o] = J(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return $(() => {
    const n = () => {
      e != null && e.category ? o(t.getViewsByCategory(e.category)) : o(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function so({ children: e, registry: t }) {
  const [r] = J(() => t ?? new Vr());
  return /* @__PURE__ */ y.jsx(Tt.Provider, { value: r, children: e });
}
function io(e) {
  const t = Le();
  $(() => t.registerViews(e), [t, e]);
}
function ao(e) {
  const t = Le();
  $(() => t.registerView(e), [t, e]);
}
class $r {
  constructor() {
    ee(this, "commands", /* @__PURE__ */ new Map());
    ee(this, "executionListeners", /* @__PURE__ */ new Map());
    ee(this, "registrationListeners", /* @__PURE__ */ new Set());
    ee(this, "keybindingMap", /* @__PURE__ */ new Map());
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
      const s = o.category || "", i = n.category || "";
      if (s !== i) return s.localeCompare(i);
      const l = o.title || o.id, c = n.title || n.id;
      return l.localeCompare(c);
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
    return o ? (t.preventDefault(), t.stopPropagation(), this.executeCommand(o).catch((n) => {
      console.error(`Error executing command ${o}:`, n);
    }), !0) : !1;
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
const Et = Re(null);
function we() {
  const e = Ie(Et);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function lo(e) {
  const t = we(), [r, o] = J(() => t.getCommand(e));
  return $(() => {
    const n = () => {
      o(t.getCommand(e));
    };
    return t.onDidChangeCommands(n);
  }, [t, e]), r;
}
function co(e) {
  const t = we(), [r, o] = J(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return $(() => {
    const n = () => {
      e != null && e.category ? o(t.getCommandsByCategory(e.category)) : o(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function uo(e) {
  const t = we();
  return _(
    (...r) => t.executeCommand(e, ...r),
    [t, e]
  );
}
function fo(e) {
  const t = we();
  $(() => t.registerCommands(e), [t, e]);
}
function po(e) {
  const t = we();
  $(() => t.registerCommand(e), [t, e]);
}
function mo(e = !0) {
  const t = we();
  $(() => {
    if (!e) return;
    const r = (o) => {
      t.handleKeyboardEvent(o);
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, e]);
}
function ho({
  children: e,
  service: t,
  enableKeyboardShortcuts: r = !0
}) {
  const [o] = J(() => t ?? new $r());
  return $(() => {
    if (!r) return;
    const n = (s) => {
      o.handleKeyboardEvent(s);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, [o, r]), /* @__PURE__ */ y.jsx(Et.Provider, { value: o, children: e });
}
class Br {
  constructor() {
    ee(this, "viewTypes", {});
    // blockId -> viewTypeId
    ee(this, "layouts", /* @__PURE__ */ new Map());
    ee(this, "changeListeners", /* @__PURE__ */ new Set());
    ee(this, "layoutListeners", /* @__PURE__ */ new Set());
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
      var s, i;
      const o = new Date(((s = t.metadata) == null ? void 0 : s.createdAt) || 0);
      return new Date(((i = r.metadata) == null ? void 0 : i.createdAt) || 0).getTime() - o.getTime();
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
const Ct = Re(null);
function ve() {
  const e = Ie(Ct);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function go(e) {
  const t = ve(), [r, o] = J(() => t.getBlockViewType(e));
  return $(() => {
    const n = (i) => {
      o(i[e]);
    };
    return t.onViewTypesChange(n);
  }, [t, e]), r;
}
function bo() {
  const e = ve(), [t, r] = J(() => e.getAllViewTypes());
  return $(() => e.onViewTypesChange(r), [e]), t;
}
function yo() {
  const e = ve();
  return _(
    (t, r) => {
      e.setBlockViewType(t, r);
    },
    [e]
  );
}
function wo() {
  const e = ve(), [t, r] = J(() => e.getAllLayouts());
  return $(() => {
    const o = () => {
      r(e.getAllLayouts());
    };
    return e.onLayoutsChange(o);
  }, [e]), t;
}
function vo() {
  const e = ve();
  return _(
    (t, r, o, n) => {
      const s = e.createLayoutFromCurrentState(t, r, o, n);
      e.saveLayout(s);
    },
    [e]
  );
}
function xo() {
  const e = ve();
  return _(
    (t) => e.applyLayout(t),
    [e]
  );
}
function ko({
  children: e,
  service: t,
  initialViewTypes: r
}) {
  const [o] = J(() => {
    const n = t ?? new Br();
    return r && n.setViewTypes(r), n;
  });
  return /* @__PURE__ */ y.jsx(Ct.Provider, { value: o, children: e });
}
export {
  Ue as Block,
  mt as BlockContent,
  gt as BlockFooter,
  kt as BlockGroup,
  ht as BlockHeader,
  xt as BlockLayout,
  Ge as BlockSidebar,
  wt as BlockSidebarItem,
  vt as BlockSidebarSpacer,
  St as BlockSplitContainer,
  yt as BlockTabs,
  bt as BlockToolbar,
  zt as BlockTreeRenderer,
  $r as CommandService,
  ho as CommandServiceProvider,
  ft as Divider,
  Nr as Grid,
  jr as GridProvider,
  Br as LayoutService,
  ko as LayoutServiceProvider,
  Vr as ViewRegistry,
  so as ViewRegistryProvider,
  kr as applyCollapseLogic,
  Sr as calculateConstrainedSize,
  he as clamp,
  X as cn,
  vr as createCustomAdapter,
  gr as defaultModes,
  qr as findAdjacentBlock,
  Fr as frToPx,
  zr as generateGridTemplate,
  Wr as getAllGridStates,
  ct as getFlexSpacePx,
  _e as getStorageAdapter,
  Hr as isCollapsed,
  Yr as isZeroSum,
  yr as loadGridState,
  ge as localStorageAdapter,
  je as memoryStorageAdapter,
  Kr as pxPerFr,
  Tr as pxToFr,
  wr as removeGridState,
  br as saveGridState,
  lt as sessionStorageAdapter,
  xo as useApplyLayout,
  Or as useBlockSplitDirection,
  go as useBlockViewType,
  lo as useCommand,
  mo as useCommandKeyboardShortcuts,
  we as useCommandService,
  co as useCommands,
  uo as useExecuteCommand,
  Rr as useGridActions,
  re as useGridContext,
  Lr as useGridKeyboard,
  at as useGridMode,
  xr as useGridPersistence,
  Ir as useGridResize,
  Te as useGridState,
  Zr as useHideBlock,
  Jr as useIsBlockHidden,
  ve as useLayoutService,
  wo as useLayouts,
  po as useRegisterCommand,
  fo as useRegisterCommands,
  ao as useRegisterView,
  io as useRegisterViews,
  vo as useSaveLayout,
  yo as useSetBlockViewType,
  Xr as useShowBlock,
  Qr as useToggleBlockVisibility,
  oo as useViewDescriptor,
  Le as useViewRegistry,
  bo as useViewTypes,
  no as useViews,
  eo as validateBlockSize,
  ro as validateLayoutIntegrity,
  to as validateTwoWayResize
};
