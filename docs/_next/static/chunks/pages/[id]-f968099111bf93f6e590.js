_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [5],
  {
    '20a2': function (e, n, t) {
      e.exports = t('nOHt');
    },
    YFqc: function (e, n, t) {
      e.exports = t('cTJO');
    },
    cTJO: function (e, n, t) {
      'use strict';
      var r = t('J4zp'),
        o = t('284h');
      (n.__esModule = !0), (n.default = void 0);
      var c = o(t('q1tI')),
        a = t('elyg'),
        i = t('nOHt'),
        u = t('vNVm'),
        l = {};
      function f(e, n, t, r) {
        if (e && (0, a.isLocalURL)(n)) {
          e.prefetch(n, t, r).catch(function (e) {
            0;
          });
          var o =
            r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale;
          l[n + '%' + t + (o ? '%' + o : '')] = !0;
        }
      }
      var s = function (e) {
        var n = !1 !== e.prefetch,
          t = (0, i.useRouter)(),
          o = (t && t.pathname) || '/',
          s = c.default.useMemo(
            function () {
              var n = (0, a.resolveHref)(o, e.href, !0),
                t = r(n, 2),
                c = t[0],
                i = t[1];
              return {
                href: c,
                as: e.as ? (0, a.resolveHref)(o, e.as) : i || c,
              };
            },
            [o, e.href, e.as]
          ),
          d = s.href,
          p = s.as,
          v = e.children,
          b = e.replace,
          h = e.shallow,
          O = e.scroll,
          y = e.locale;
        'string' === typeof v && (v = c.default.createElement('a', null, v));
        var g = c.Children.only(v),
          _ = g && 'object' === typeof g && g.ref,
          m = (0, u.useIntersection)({ rootMargin: '200px' }),
          E = r(m, 2),
          w = E[0],
          j = E[1],
          P = c.default.useCallback(
            function (e) {
              w(e),
                _ &&
                  ('function' === typeof _
                    ? _(e)
                    : 'object' === typeof _ && (_.current = e));
            },
            [_, w]
          );
        (0, c.useEffect)(
          function () {
            var e = j && n && (0, a.isLocalURL)(d),
              r = 'undefined' !== typeof y ? y : t && t.locale,
              o = l[d + '%' + p + (r ? '%' + r : '')];
            e && !o && f(t, d, p, { locale: r });
          },
          [p, d, j, y, n, t]
        );
        var L = {
          ref: P,
          onClick: function (e) {
            g.props &&
              'function' === typeof g.props.onClick &&
              g.props.onClick(e),
              e.defaultPrevented ||
                (function (e, n, t, r, o, c, i, u) {
                  ('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var n = e.currentTarget.target;
                      return (
                        (n && '_self' !== n) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, a.isLocalURL)(t))) &&
                    (e.preventDefault(),
                    null == i && (i = r.indexOf('#') < 0),
                    n[o ? 'replace' : 'push'](t, r, {
                      shallow: c,
                      locale: u,
                      scroll: i,
                    }).then(function (e) {
                      e && i && document.body.focus();
                    }));
                })(e, t, d, p, b, h, O, y);
          },
          onMouseEnter: function (e) {
            (0, a.isLocalURL)(d) &&
              (g.props &&
                'function' === typeof g.props.onMouseEnter &&
                g.props.onMouseEnter(e),
              f(t, d, p, { priority: !0 }));
          },
        };
        if (e.passHref || ('a' === g.type && !('href' in g.props))) {
          var M = 'undefined' !== typeof y ? y : t && t.locale,
            R = (0, a.getDomainLocale)(
              p,
              M,
              t && t.locales,
              t && t.domainLocales
            );
          L.href =
            R ||
            (0, a.addBasePath)((0, a.addLocale)(p, M, t && t.defaultLocale));
        }
        return c.default.cloneElement(g, L);
      };
      n.default = s;
    },
    nPOr: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[id]',
        function () {
          return t('r4CR');
        },
      ]);
    },
    r4CR: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, '__N_SSG', function () {
          return u;
        });
      var r = t('BGKE');
      function o(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++)
              (t = c[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (t = c[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var c = t('20a2'),
        a = t('YFqc'),
        i = t.n(a),
        u = !0;
      n.default = function (e) {
        var n = e.id,
          t = o(e, ['id']),
          a = Object(c.useRouter)();
        return Object(r.c)('main', {
          children: [
            Object(r.c)('p', {
              children: [
                'Param: ',
                Object(r.b)('strong', {
                  children:
                    null !== a && void 0 !== a && a.isFallback ? 'Hold on' : n,
                }),
              ],
            }),
            Object(r.c)('p', {
              children: [
                'Props from _app.tsx: ',
                Object(r.b)('strong', { children: JSON.stringify(t) }),
              ],
            }),
            Object(r.c)('p', {
              children: [
                'Page Process Env: ',
                Object(r.b)('strong', { children: 'TEST_PAGE_VAR' }),
              ],
            }),
            Object(r.b)(i.a, {
              href: '/',
              children: Object(r.b)('a', { children: 'index' }),
            }),
          ],
        });
      };
    },
    vNVm: function (e, n, t) {
      'use strict';
      var r = t('J4zp'),
        o = t('TqRt');
      (n.__esModule = !0),
        (n.useIntersection = function (e) {
          var n = e.rootMargin,
            t = e.disabled || !i,
            o = (0, c.useRef)(),
            l = (0, c.useState)(!1),
            f = r(l, 2),
            s = f[0],
            d = f[1],
            p = (0, c.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  t ||
                    s ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, n, t) {
                        var r = (function (e) {
                            var n = e.rootMargin || '',
                              t = u.get(n);
                            if (t) return t;
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var n = r.get(e.target),
                                    t =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  n && t && n(t);
                                });
                              }, e);
                            return (
                              u.set(
                                n,
                                (t = { id: n, observer: o, elements: r })
                              ),
                              t
                            );
                          })(t),
                          o = r.id,
                          c = r.observer,
                          a = r.elements;
                        return (
                          a.set(e, n),
                          c.observe(e),
                          function () {
                            a.delete(e),
                              c.unobserve(e),
                              0 === a.size && (c.disconnect(), u.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: n }
                      )));
              },
              [t, n, s]
            );
          return (
            (0, c.useEffect)(
              function () {
                i ||
                  s ||
                  (0, a.default)(function () {
                    return d(!0);
                  });
              },
              [s]
            ),
            [p, s]
          );
        });
      var c = t('q1tI'),
        a = o(t('0G5g')),
        i = 'undefined' !== typeof IntersectionObserver;
      var u = new Map();
    },
  },
  [['nPOr', 0, 2, 1, 3]],
]);
