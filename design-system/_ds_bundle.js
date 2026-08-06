/* @ds-bundle: {"format":4,"namespace":"FWBGDesignSystem_b09739","components":[{"name":"EventCard","sourcePath":"components/cards/EventCard.jsx"},{"name":"MediaCard","sourcePath":"components/cards/MediaCard.jsx"},{"name":"PriceCard","sourcePath":"components/cards/PriceCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"LeafMotif","sourcePath":"components/core/LeafMotif.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ColorBlock","sourcePath":"components/layout/ColorBlock.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/cards/EventCard.jsx":"abb1608bdd9e","components/cards/MediaCard.jsx":"7964aeaad05f","components/cards/PriceCard.jsx":"39827e305fef","components/core/Badge.jsx":"219a087a6217","components/core/Button.jsx":"46a9e1c4c02a","components/core/Chip.jsx":"5a02e9d8f88e","components/core/Eyebrow.jsx":"380422dec1e4","components/core/Icon.jsx":"da9fc9185874","components/core/IconButton.jsx":"a6b36367fa6c","components/core/LeafMotif.jsx":"47e6f2ee1262","components/core/Logo.jsx":"e690b27c4427","components/core/SectionHeading.jsx":"851b0cb2840e","components/forms/Checkbox.jsx":"433f0266418b","components/forms/Input.jsx":"c86bd1dfed4c","components/forms/Radio.jsx":"477a5eb818e7","components/forms/Select.jsx":"05ea09a30c0a","components/forms/Textarea.jsx":"4e83ec394928","components/layout/ColorBlock.jsx":"cbf92611aef6","components/layout/Section.jsx":"771637a67294","components/navigation/Accordion.jsx":"7a839f545e5b","components/navigation/AnnouncementBar.jsx":"255fd41f8638","components/navigation/SiteHeader.jsx":"afd1fb1986a1","doc-page.js":"371bab66f42d","ui_kits/event_creative/Billboard.jsx":"dae597c4e2ea","ui_kits/event_creative/EmailBlast.jsx":"786a95185759","ui_kits/event_creative/RackCard.jsx":"4bad742a12c4","ui_kits/event_creative/SocialPost.jsx":"10ea6c39c8d9","ui_kits/website/App.jsx":"7cf5df40155d","ui_kits/website/Chrome.jsx":"0662e080a2a2","ui_kits/website/EventDetail.jsx":"e61381e19e17","ui_kits/website/Gardens.jsx":"a42a93587862","ui_kits/website/Home.jsx":"9998e443a9c2","ui_kits/website/Membership.jsx":"2b3962b0af42"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FWBGDesignSystem_b09739 = window.FWBGDesignSystem_b09739 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/MediaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed image card with a dark protection gradient and caption at the bottom. */
function MediaCard({
  image,
  alt = '',
  title,
  meta,
  href = '#',
  ratio = '3 / 4',
  radius = 'var(--radius-xl)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      textDecoration: 'none',
      borderRadius: radius,
      aspectRatio: ratio,
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      transition: 'box-shadow .2s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform .5s var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      padding: 'var(--space-md) var(--space-sm) var(--space-sm)',
      background: 'linear-gradient(hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),0),hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.9))',
      color: 'var(--color-white)',
      textShadow: '0 1px 1px rgba(0,0,0,.35)'
    }
  }, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      opacity: 0.85,
      marginBottom: 4
    }
  }, meta) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 'var(--text-lg)',
      lineHeight: 1.15
    }
  }, title)));
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BADGE_SKINS = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)'
  },
  'primary-light': {
    backgroundColor: 'var(--color-primary-light)',
    color: 'var(--color-bg)'
  },
  accent: {
    backgroundColor: 'var(--color-accent)',
    color: 'var(--color-white)'
  },
  'accent-light': {
    backgroundColor: 'hsla(var(--color-accent-h),var(--color-accent-s),var(--color-accent-l),.2)',
    color: 'var(--color-contrast-higher)'
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-white)'
  },
  tertiary: {
    backgroundColor: 'var(--color-tertiary)',
    color: 'var(--color-primary)'
  },
  'contrast-higher': {
    backgroundColor: 'var(--color-contrast-higher)',
    color: 'var(--color-bg)'
  },
  outline: {
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 1px var(--color-contrast-lower)',
    color: 'inherit'
  },
  success: {
    backgroundColor: 'var(--color-success)',
    color: 'var(--color-white)'
  },
  warning: {
    backgroundColor: 'var(--color-warning)',
    color: 'var(--color-contrast-higher)'
  },
  error: {
    backgroundColor: 'var(--color-error)',
    color: 'var(--color-white)'
  }
};
function Badge({
  variant = 'primary',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--radius-full)',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.06em',
      lineHeight: 1,
      padding: '6px 10px',
      WebkitFontSmoothing: 'antialiased',
      ...BADGE_SKINS[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Calendar / listing card: photo, date, eligibility badge, title, excerpt, text link. */
function EventCard({
  image,
  alt = '',
  date,
  badge,
  title,
  excerpt,
  href = '#',
  cta = 'Learn More',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      overflow: 'hidden',
      background: 'var(--color-bg-lighter)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'box-shadow .2s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 2',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform .5s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxs)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xxs)',
      flexWrap: 'wrap'
    }
  }, date ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      color: 'var(--color-contrast-medium)'
    }
  }, date) : null, badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "accent-light"
  }, badge) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      lineHeight: 1.25,
      color: 'var(--color-contrast-higher)',
      margin: 0
    }
  }, title), excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      color: 'var(--color-contrast-high)',
      margin: 0,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, excerpt) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-xxs)',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--color-primary)',
      textDecoration: hover ? 'underline' : 'none'
    }
  }, cta)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BTN_VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-white)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--color-contrast-higher)'
  },
  secondary: {
    background: 'var(--color-secondary-lighter)',
    color: 'var(--color-contrast-higher)'
  },
  subtle: {
    background: 'var(--color-bg-dark)',
    color: 'var(--color-contrast-higher)'
  },
  white: {
    background: 'var(--color-bg-lighter)',
    color: 'var(--color-contrast-higher)'
  },
  'subtle-outline': {
    background: 'var(--color-bg)',
    color: 'var(--color-contrast-higher)',
    boxShadow: 'inset 0 0 0 1px var(--color-bg-dark)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-bg-lighter)',
    boxShadow: 'inset 0 0 0 1px var(--color-bg-lighter)'
  },
  'ghost-dark': {
    background: 'transparent',
    color: 'var(--color-contrast-higher)',
    boxShadow: 'inset 0 0 0 1px var(--color-contrast-higher)'
  }
};
const BTN_HOVER = {
  primary: {
    background: 'var(--color-primary-dark)'
  },
  accent: {
    background: 'var(--color-accent-light)'
  },
  secondary: {
    background: 'var(--color-secondary-light)'
  },
  subtle: {
    background: 'var(--color-bg-darker)'
  },
  white: {
    background: 'var(--color-bg-light)'
  },
  'subtle-outline': {
    boxShadow: 'inset 0 0 0 1px var(--color-bg-darker)'
  },
  ghost: {
    background: 'hsla(var(--color-bg-lighter-h),var(--color-bg-lighter-s),var(--color-bg-lighter-l),.2)'
  },
  'ghost-dark': {
    background: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.5)',
    boxShadow: 'inset 0 0 0 1px var(--color-contrast-medium)'
  }
};
const BTN_SIZES = {
  sm: '0.8em',
  md: 'var(--text-16)',
  lg: '1.2em'
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled,
  block,
  iconLeft,
  iconRight,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const base = {
    position: 'relative',
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--space-xxs)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    fontFamily: 'var(--font-primary)',
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: BTN_SIZES[size] || BTN_SIZES.md,
    border: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: 'var(--btn-padding-y) var(--btn-padding-x)',
    borderRadius: 'var(--btn-radius)',
    opacity: disabled ? 0.6 : 1,
    transition: 'all .2s ease',
    WebkitFontSmoothing: 'antialiased',
    ...BTN_VARIANTS[variant],
    ...(hover && !disabled ? BTN_HOVER[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/PriceCard.jsx
try { (() => {
/** Membership tier card — benefit list, price, CTA, footnote. */
function PriceCard({
  title,
  description,
  benefits = [],
  price,
  period = 'Annually',
  cta = 'Become Member',
  href = '#',
  footnote,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-lighter)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 'var(--text-xxl)',
      lineHeight: 1.1,
      color: 'var(--color-contrast-higher)',
      margin: 0
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-contrast-high)',
      margin: 0
    }
  }, description) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-xxs) 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxs)'
    }
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-xxs)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.4,
      color: 'var(--color-contrast-high)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 7,
      height: 7,
      marginTop: 7,
      borderRadius: '50%',
      background: 'var(--color-secondary)'
    }
  }), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-xxs)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 500,
      fontSize: 'var(--text-xxxl)',
      color: 'var(--color-contrast-higher)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-contrast-medium)'
    }
  }, period)), footnote ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-contrast-medium)',
      margin: 0
    }
  }, footnote) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: href,
    block: true
  }, cta));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter chip — the "All / Events / Members-Only" row on the calendar. */
function Chip({
  selected,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-xxxs)',
      border: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-full)',
      padding: '9px 16px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      lineHeight: 1,
      transition: 'all .2s ease',
      background: selected ? 'var(--color-primary)' : hover ? 'var(--color-bg-dark)' : 'transparent',
      color: selected ? 'var(--color-bg-lighter)' : 'var(--color-contrast-high)',
      boxShadow: selected ? 'none' : 'inset 0 0 0 1px var(--color-bg-darker)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small all-caps label that sits above a headline. */
function Eyebrow({
  children,
  color = 'var(--color-accent-darker)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--eyebrow-letter-spacing)',
      textTransform: 'uppercase',
      lineHeight: 1,
      color,
      marginBottom: 'var(--space-xxs)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_SIZES = {
  xxs: 'var(--icon-xxs)',
  xs: 'var(--icon-xs)',
  sm: 'var(--icon-sm)',
  md: 'var(--icon-md)',
  lg: 'var(--icon-lg)',
  xl: 'var(--icon-xl)'
};

/** Renders an SVG from assets/icons by file stem. Inherits currentColor via CSS mask. */
function Icon({
  name,
  size = 'xs',
  base = '/assets/icons',
  style,
  ...rest
}) {
  const px = ICON_SIZES[size] || size;
  const url = `url("${base}/${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: px,
      height: px,
      flex: 'none',
      backgroundColor: 'currentColor',
      WebkitMask: `${url} center / contain no-repeat`,
      mask: `${url} center / contain no-repeat`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  label,
  variant = 'subtle',
  size = 'md',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const skins = {
    subtle: {
      background: 'var(--color-bg-dark)',
      color: 'var(--color-contrast-higher)',
      hover: 'var(--color-bg-darker)'
    },
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-white)',
      hover: 'var(--color-primary-dark)'
    },
    white: {
      background: 'var(--color-bg-lighter)',
      color: 'var(--color-contrast-higher)',
      hover: 'var(--color-bg-light)'
    },
    plain: {
      background: 'transparent',
      color: 'inherit',
      hover: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.4)'
    }
  };
  const s = skins[variant] || skins.subtle;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      transition: 'all .2s ease',
      background: hover ? s.hover : s.background,
      color: s.color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 'lg' ? 'sm' : 'xs'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/LeafMotif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The oversized skeletal-leaf watermark used as a background graphic on fwbg.org. */
function LeafMotif({
  size = 240,
  color = 'var(--color-primary)',
  opacity = 0.12,
  base = '/assets',
  style,
  ...rest
}) {
  const url = `url("${base}/logo-leaf.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: size,
      height: size,
      opacity,
      backgroundColor: color,
      WebkitMask: `${url} center / contain no-repeat`,
      mask: `${url} center / contain no-repeat`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { LeafMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LeafMotif.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** FWBG logo lockups. Never redraw, recolour, rotate or separate the leaf from the wordmark. */
function Logo({
  variant = 'primary',
  height = 48,
  base = '/assets',
  style,
  ...rest
}) {
  const src = {
    primary: 'logo-primary.svg',
    reversed: 'logo-reversed.svg',
    mark: 'logo-mark.svg'
  }[variant];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/${src}`,
    alt: "Fort Worth Botanic Garden",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Eyebrow + New Kansas display headline + optional Satoshi standfirst. */
function SectionHeading({
  eyebrow,
  title,
  emphasis,
  standfirst,
  align = 'left',
  size = 'lg',
  style
}) {
  const sizes = {
    md: 'var(--text-xxl)',
    lg: 'var(--text-xxxl)',
    xl: 'var(--text-xxxxl)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 'var(--max-width-sm)' : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: sizes[size] || sizes.lg,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--color-contrast-higher)',
      margin: '0 0 var(--space-xs)'
    }
  }, title, emphasis ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, emphasis)) : null), standfirst ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--body-line-height)',
      color: 'var(--color-contrast-high)',
      margin: 0
    }
  }, standfirst) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  id,
  disabled,
  style
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--checkbox-radio-gap, var(--space-xxs))',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      lineHeight: 'var(--body-line-height)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-contrast-high)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: uid,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 'var(--checkbox-radio-size)',
      height: 'var(--checkbox-radio-size)',
      marginTop: 3,
      borderRadius: 'var(--checkbox-radius)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--color-primary)' : 'var(--color-bg)',
      boxShadow: checked ? 'none' : 'inset 0 0 0 1px var(--color-bg-darker)',
      transition: 'all .2s ease'
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "2 6.5 4.8 9 10 3.2",
    fill: "none",
    stroke: "var(--color-bg-lighter)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const ring = error ? 'inset 0 0 0 1px transparent, 0 0 0 2px var(--color-error)' : focus ? 'inset 0 0 0 1px transparent, 0 0 0 2px var(--color-bg-darker)' : 'inset 0 0 0 1px var(--color-bg-dark)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxxs)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--color-contrast-higher)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": error ? 'true' : undefined,
    style: {
      font: 'inherit',
      fontSize: 'var(--text-16)',
      lineHeight: 1.2,
      color: 'var(--color-contrast-higher)',
      background: 'var(--color-bg)',
      border: 0,
      outline: 0,
      appearance: 'none',
      padding: 'var(--form-control-padding-y) var(--form-control-padding-x)',
      borderRadius: 'var(--form-control-radius)',
      boxShadow: ring,
      transition: 'all .2s ease'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-contrast-medium)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  id,
  disabled,
  style
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-xxs)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-contrast-high)',
      lineHeight: 'var(--body-line-height)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 'var(--checkbox-radio-size)',
      height: 'var(--checkbox-radio-size)',
      marginTop: 3,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg)',
      boxShadow: checked ? 'inset 0 0 0 1px var(--color-primary)' : 'inset 0 0 0 1px var(--color-bg-darker)',
      transition: 'all .2s ease'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--radio-marker-size)',
      height: 'var(--radio-marker-size)',
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  id,
  iconBase,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxxs)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--color-contrast-higher)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    style: {
      font: 'inherit',
      fontSize: 'var(--text-16)',
      lineHeight: 1.2,
      width: '100%',
      color: 'var(--color-contrast-higher)',
      background: 'var(--color-bg)',
      border: 0,
      outline: 0,
      appearance: 'none',
      padding: 'var(--form-control-padding-y) calc(var(--form-control-padding-x) * 3) var(--form-control-padding-y) var(--form-control-padding-x)',
      borderRadius: 'var(--form-control-radius)',
      boxShadow: 'inset 0 0 0 1px var(--color-bg-dark)'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--form-control-padding-x)',
      pointerEvents: 'none',
      color: 'var(--color-contrast-medium)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "xxs",
    base: iconBase
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  id,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxxs)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--color-contrast-higher)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: 'var(--text-16)',
      lineHeight: 1.4,
      resize: 'vertical',
      color: 'var(--color-contrast-higher)',
      background: 'var(--color-bg)',
      border: 0,
      outline: 0,
      padding: 'var(--space-xxs) var(--form-control-padding-x)',
      borderRadius: 'var(--form-control-radius)',
      boxShadow: focus ? 'inset 0 0 0 1px transparent, 0 0 0 2px var(--color-bg-darker)' : 'inset 0 0 0 1px var(--color-bg-dark)',
      transition: 'all .2s ease'
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-contrast-medium)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/ColorBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BLOCK_TONES = {
  evergreen: {
    background: 'var(--color-primary)',
    color: 'var(--color-bg-lighter)'
  },
  meadow: {
    background: 'var(--fwbg-meadow)',
    color: 'var(--color-primary-darker)'
  },
  sunstone: {
    background: 'var(--color-accent)',
    color: 'var(--color-primary-darker)'
  },
  limestone: {
    background: 'var(--color-bg)',
    color: 'var(--color-contrast-higher)'
  },
  seasonal: {
    background: 'var(--color-secondary)',
    color: 'var(--color-contrast-higher)'
  }
};

/** The event-branding colour block: a high-contrast slab that houses dates, CTAs and logos. */
function ColorBlock({
  tone = 'evergreen',
  leaf = false,
  radius = 'var(--radius-xl)',
  assetBase = '/assets',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: radius,
      padding: 'var(--space-md)',
      ...BLOCK_TONES[tone],
      ...style
    }
  }, rest), leaf ? /*#__PURE__*/React.createElement(__ds_scope.LeafMotif, {
    size: 320,
    color: "currentColor",
    opacity: 0.1,
    base: assetBase,
    style: {
      position: 'absolute',
      right: -70,
      bottom: -110,
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { ColorBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ColorBlock.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Page section wrapper: vertical rhythm, max-width, optional inverse or seasonal scope. */
function Section({
  tone = 'page',
  season,
  width = 'lg',
  pad = 'lg',
  children,
  style,
  ...rest
}) {
  const tones = {
    page: {
      background: 'var(--color-bg)'
    },
    light: {
      background: 'var(--color-bg-lighter)'
    },
    sunken: {
      background: 'var(--color-bg-dark)'
    },
    inverse: {
      background: 'var(--color-primary)',
      color: 'var(--color-bg)'
    },
    none: {}
  };
  const pads = {
    sm: 'var(--space-md)',
    md: 'var(--space-lg)',
    lg: 'var(--space-xl)',
    xl: 'var(--space-xxl)'
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    "data-season": season,
    "data-theme": tone === 'inverse' ? 'dark' : undefined,
    style: {
      paddingBlock: pads[pad] || pads.lg,
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'calc(100% - 2 * var(--component-padding))',
      maxWidth: `var(--max-width-${width})`,
      margin: '0 auto'
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/** Rule-separated disclosure list — FAQs, hours, membership details. */
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: i === 0 ? '1px solid var(--color-contrast-lower)' : 'none',
      borderBottom: '1px solid var(--color-contrast-lower)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-sm)',
      textAlign: 'left',
      cursor: 'pointer',
      background: 'none',
      border: 0,
      padding: 'var(--space-xs) 0',
      font: 'inherit',
      fontSize: 'var(--text-md)',
      fontWeight: 700,
      color: 'var(--color-contrast-higher)'
    }
  }, it.title, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: open === i ? 'rotate(180deg)' : 'none',
      transition: 'transform .3s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "1 4 6 9 11 4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), open === i ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--space-sm)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--body-line-height)',
      color: 'var(--color-contrast-high)'
    }
  }, it.body) : null)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
/** Full-width notice above the header — closures, weather, early entry. */
function AnnouncementBar({
  children,
  onClose,
  iconBase,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-primary)',
      color: 'var(--color-bg-lighter)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-xxl)',
      margin: '0 auto',
      padding: 'var(--space-xxs) var(--component-padding)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: 1
    }
  }, children), onClose ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close header banner",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'inherit',
      cursor: 'pointer',
      display: 'flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: "xs",
    base: iconBase
  })) : null));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
/** fwbg.org mega-nav bar: logo, top-level sections, status, ticketing CTA. */
function SiteHeader({
  items = [],
  active,
  onSelect,
  status,
  assetBase = '/assets',
  ctaLabel = 'Get Tickets',
  ctaHref = '#',
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--mega-nav-height)',
      width: '100%',
      background: 'var(--color-bg-lighter)',
      position: 'relative',
      zIndex: 'var(--z-index-header)',
      boxShadow: 'inset 0 -1px 0 hsla(var(--color-contrast-higher-h),var(--color-contrast-higher-s),var(--color-contrast-higher-l),.1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'calc(100% - 2 * var(--component-padding))',
      height: '100%',
      maxWidth: 'var(--max-width-xxl)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Go to homepage",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "primary",
    height: 38,
    base: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      flex: 1,
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => onSelect && onSelect(it),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 2px',
      font: 'inherit',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: active === it ? 'var(--color-contrast-higher)' : 'var(--color-contrast-high)',
      boxShadow: active === it ? 'inset 0 -2px 0 var(--color-accent)' : 'none'
    }
  }, it, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "xxs",
    base: assetBase + '/icons'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xs)',
      flex: 'none'
    }
  }, status ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      color: 'var(--color-contrast-high)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--color-secondary)'
    }
  }), status) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "sm",
    href: ctaHref
  }, ctaLabel))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/event_creative/Billboard.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Logo,
  ColorBlock,
  LeafMotif,
  Badge
} = window.FWBGDesignSystem_b09739;
const A = '../../assets';
function Billboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1200,
      height: 400,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-primary)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/rose-garden.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'var(--color-bg-lighter)'
    }
  }, /*#__PURE__*/React.createElement(LeafMotif, {
    size: 360,
    color: "currentColor",
    opacity: 0.08,
    base: A,
    style: {
      position: 'absolute',
      right: -110,
      bottom: -140
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--color-tertiary)'
    }
  }, "March 1 \u2013 April 30"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 58,
      lineHeight: 1.02,
      margin: '8px 0 14px'
    }
  }, "A place where curiosity ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "blooms")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.4,
      maxWidth: '34ch',
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.85)'
    }
  }, "Sixty thousand bulbs, four gardens, one long weekend. Included with general admission.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      opacity: .7,
      marginBottom: 6
    }
  }, "Presented by"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 500,
      fontSize: 20
    }
  }, "Sponsor Wordmark"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginTop: 12
    }
  }, "Get tickets at fwbg.org/eventname")), /*#__PURE__*/React.createElement(Logo, {
    variant: "reversed",
    height: 54,
    base: A
  }))));
}
window.Billboard = Billboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/event_creative/Billboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/event_creative/EmailBlast.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Logo,
  ColorBlock,
  LeafMotif,
  Badge
} = window.FWBGDesignSystem_b09739;
const A = '../../assets';
function EmailBlast() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      background: 'var(--color-bg-lighter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--color-bg-dark)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary",
    height: 30,
    base: A
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.07em',
      color: 'var(--color-contrast-medium)'
    }
  }, "Member News")), /*#__PURE__*/React.createElement("img", {
    src: A + '/images/japanese-garden.jpg',
    alt: "",
    style: {
      width: '100%',
      height: 190,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Fall Japanese Festival"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 27,
      lineHeight: 1.1,
      color: 'var(--color-contrast-higher)',
      margin: '6px 0 12px'
    }
  }, "Come see what's ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "in season")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 13.5,
      lineHeight: 1.45,
      color: 'var(--color-contrast-high)'
    }
  }, "Taiko drumming, tea ceremonies and koi feeding return to the Japanese Garden for one weekend only. Members get first access to timed entry."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#"
  }, "Reserve Your Time")), /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "evergreen",
    radius: "0",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      opacity: .75
    }
  }, "Supported by"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 500,
      fontSize: 17,
      margin: '4px 0 12px'
    }
  }, "Sponsor Wordmark"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.5,
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.8)'
    }
  }, "3220 Botanic Garden Blvd., Fort Worth, TX 76107", /*#__PURE__*/React.createElement("br", null), "fwbg.org \xB7 (817) 463-4160")));
}
window.EmailBlast = EmailBlast;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/event_creative/EmailBlast.jsx", error: String((e && e.message) || e) }); }

// ui_kits/event_creative/RackCard.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Logo,
  ColorBlock,
  LeafMotif,
  Badge
} = window.FWBGDesignSystem_b09739;
const A = '../../assets';
function RackCard() {
  const rows = [['Reduce Stress', 'Spending time outdoors can lower stress levels by up to 28%.'], ['Boost Overall Well-Being', 'Two hours a week in nature improves life satisfaction and mental clarity.'], ['Build Community', 'Meet like-minded people while working toward shared wellness goals.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 675,
      background: 'var(--color-bg-lighter)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/photography.jpg',
    alt: "",
    style: {
      width: '100%',
      height: 210,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "A Prescription for Nature"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 30,
      lineHeight: 1.1,
      color: 'var(--color-contrast-higher)',
      margin: '6px 0 15px'
    }
  }, "Experience Wellness Naturally with ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Nature Rx")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--color-contrast-high)'
    }
  }, "Nature Rx at the Fort Worth Botanic Garden brings the healing power of nature to our community. Collaborating with local healthcare teams, we offer complementary activities and educational programs designed to nurture both mental and physical well-being."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 18
    }
  }, rows.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 900,
      color: 'var(--color-contrast-higher)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.35,
      color: 'var(--color-contrast-high)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "meadow",
    radius: "var(--radius-lg)",
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 900,
      lineHeight: 1.3
    }
  }, "Want More Information?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.35,
      marginTop: 4
    }
  }, "Visit fwbg.org/nature-rx or email NatureRx@fwbg.org")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--color-contrast-medium)'
    }
  }, "Supported by"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--color-contrast-higher)'
    }
  }, "Sponsor Wordmark")), /*#__PURE__*/React.createElement(Logo, {
    variant: "primary",
    height: 32,
    base: A
  })))));
}
window.RackCard = RackCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/event_creative/RackCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/event_creative/SocialPost.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Logo,
  ColorBlock,
  LeafMotif,
  Badge
} = window.FWBGDesignSystem_b09739;
const A = '../../assets';
function SocialPost() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      height: 420,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/children-camp.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '62%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      height: '42%',
      background: 'var(--color-primary)',
      color: 'var(--color-bg-lighter)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(LeafMotif, {
    size: 220,
    color: "currentColor",
    opacity: 0.09,
    base: A,
    style: {
      position: 'absolute',
      right: -60,
      top: -30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--color-tertiary)'
    }
  }, "March 1 \u2013 April 30"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 32,
      lineHeight: 1.05,
      marginTop: 6
    }
  }, "Where every visit ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "plants a memory"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "fwbg.org/eventname"), /*#__PURE__*/React.createElement(Logo, {
    variant: "reversed",
    height: 34,
    base: A
  }))));
}
window.SocialPost = SocialPost;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/event_creative/SocialPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  SiteChrome
} = window;
function App() {
  const [route, setRoute] = React.useState('home');
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  const Page = {
    home: window.Home,
    gardens: window.Gardens,
    event: window.EventDetail,
    membership: window.Membership
  }[route];
  return /*#__PURE__*/React.createElement(SiteChrome, {
    route: route,
    go: go
  }, /*#__PURE__*/React.createElement(Page, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const NS = window.FWBGDesignSystem_b09739;
const {
  AnnouncementBar,
  SiteHeader,
  Logo,
  Icon,
  Input,
  Button,
  Eyebrow
} = NS;
const A = '../../assets',
  I = '../../assets/icons';
const NAV = ['Visit', 'Events', 'Gardens', 'Learn', 'Science'];
const ROUTE_FOR = {
  Gardens: 'gardens',
  Events: 'event',
  Visit: 'home',
  Learn: 'home',
  Science: 'home'
};
const FOOTER_COLUMNS = [{
  title: 'Plan Your Visit',
  links: ['Overview', 'Admission and Hours', 'Directions & Parking', 'Interactive Map', 'Accessibility', 'Tours', 'FAQs']
}, {
  title: 'Events',
  links: ['Full Calendar', 'For Adults', 'For Children', 'Private Events', 'Free Admission Days', 'Dog Days', 'Fall Japanese Festival']
}, {
  title: 'Gardens',
  links: ['All Gardens', 'Japanese Garden', 'Rose Garden', 'Rainforest Conservatory', 'Fuller Garden', 'Backyard Vegetable Garden']
}, {
  title: 'Learn',
  links: ['Overview', 'Children & Family', 'Adult Education', 'School Programs', 'Camps', 'Field Trips']
}, {
  title: 'Science',
  links: ['Overview', 'Herbarium', 'BRIT Library', 'BRIT Press', 'Tour the BRIT', 'Journal of BRIT']
}, {
  title: 'Give',
  links: ['Ways to Give', 'General Giving', 'Join Giving Circle', 'Volunteer', 'Corporate Partnerships']
}];
const SOCIAL = ['facebook', 'instagram', 'linkedin', 'tiktok', 'x', 'youtube'];
function Newsletter() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg,var(--color-bg-lighter) 0,var(--color-bg) 100%)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      width: '100%',
      height: 440,
      transform: 'translateY(-50%)',
      backgroundColor: 'hsla(var(--color-bg-dark-h),var(--color-bg-dark-s),var(--color-bg-dark-l),.55)',
      mixBlendMode: 'multiply',
      WebkitMask: `url(${A}/logo-leaf.svg) center/contain no-repeat`,
      mask: `url(${A}/logo-leaf.svg) center/contain no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--max-width-sm)',
      margin: '0 auto',
      padding: 'var(--space-xxl) var(--component-padding)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 'var(--text-xxxl)',
      lineHeight: 1.1,
      color: 'var(--color-contrast-higher)',
      margin: '0 0 var(--space-xs)'
    }
  }, "Be Among the First to Know What's ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Next")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto var(--space-sm)',
      maxWidth: '46ch',
      color: 'var(--color-contrast-high)',
      fontSize: 'var(--text-md)'
    }
  }, "Get the latest news, announcements, and more about Fort Worth Botanic Garden, the most immersive and innovative space we've ever created."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xs)',
      maxWidth: 480,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email Address *",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Sign Up"))));
}
function SiteChrome({
  route,
  go,
  children
}) {
  const [banner, setBanner] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, banner ? /*#__PURE__*/React.createElement(AnnouncementBar, {
    iconBase: I,
    onClose: () => setBanner(false)
  }, /*#__PURE__*/React.createElement("strong", null, "August Early Closure:"), " The Garden will close early at 3 PM daily, with final entry at 2 PM. On Tuesday, Aug. 11, the Garden will close at 1 PM, with final entry at noon.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    items: NAV,
    active: NAV.find(n => ROUTE_FOR[n] === route),
    onSelect: n => go(ROUTE_FOR[n]),
    status: "Open \xB7 Last entry 2 p.m.",
    assetBase: A,
    ctaLabel: "Get Tickets"
  })), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Newsletter, null), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-primary)',
      color: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-xxl)',
      margin: '0 auto',
      padding: 'var(--space-xl) var(--component-padding) var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-xl)',
      paddingBottom: 'var(--space-lg)',
      borderBottom: '1px solid hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "reversed",
    height: 54,
    base: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.5
    }
  }, "3220 Botanic Garden Blvd.", /*#__PURE__*/React.createElement("br", null), "Fort Worth, TX 76107", /*#__PURE__*/React.createElement("br", null), "(817) 463-4160 \xB7 admissions@fwbg.org"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.5,
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.75)'
    }
  }, "Members: 7:00 a.m. \u2013 6:00 p.m.", /*#__PURE__*/React.createElement("br", null), "Public: 8:00 a.m. \u2013 6:00 p.m.", /*#__PURE__*/React.createElement("br", null), "Last entry at 5:00 p.m."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xs)',
      marginTop: 'var(--space-xxs)'
    }
  }, SOCIAL.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      display: 'flex',
      color: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: `social-${s}`,
    size: "xs",
    base: I
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--fwbg-meadow)'
    }
  }, "Botanical Research Institute of Texas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.5
    }
  }, "1700 University Drive", /*#__PURE__*/React.createElement("br", null), "Fort Worth, Texas 76107", /*#__PURE__*/React.createElement("br", null), "(817) 332-4441"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      lineHeight: 1.5,
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.7)',
      maxWidth: '44ch'
    }
  }, "We honor the ancestry, heritage, and gifts of all Indigenous Peoples who were sustained by these lands and give thanks to them."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--space-md)',
      padding: 'var(--space-lg) 0'
    }
  }, FOOTER_COLUMNS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--fwbg-meadow)',
      marginBottom: 'var(--space-xs)'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-xs)',
      textDecoration: 'none',
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.85)'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-md)',
      paddingTop: 'var(--space-sm)',
      borderTop: '1px solid hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.2)',
      fontSize: 'var(--text-xs)',
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.7)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA92026 Fort Worth Botanic Garden, All Rights Reserved"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Cookie Preferences"))))));
}
Object.assign(window, {
  SiteChrome,
  Newsletter,
  A,
  I
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventDetail.jsx
try { (() => {
const {
  Button,
  Badge,
  Eyebrow,
  SectionHeading,
  Section,
  ColorBlock,
  Accordion,
  EventCard
} = window.FWBGDesignSystem_b09739;
const A = '../../assets';
function EventDetail({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 420,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/rainforest-conservatory.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.8),hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.1))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      maxWidth: 'var(--max-width-xxl)',
      margin: '0 auto',
      padding: '0 var(--component-padding) var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Special Exhibit"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    style: {
      color: 'var(--color-bg-lighter)',
      boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.5)'
    }
  }, "Included with admission")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 62,
      lineHeight: 1.03,
      color: 'var(--color-bg-lighter)',
      margin: 0,
      maxWidth: '15ch'
    }
  }, "Sean Kenney's ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Nature POP!")))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--space-xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 1.45,
      color: 'var(--color-contrast-higher)',
      marginTop: 0
    }
  }, "Larger-than-life sculptures built entirely from LEGO bricks are hidden along the Garden's paths all summer. Follow the trail from the Rose Garden to the Pollinator Pathway and see how many you can find."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 1.5,
      color: 'var(--color-contrast-high)'
    }
  }, "The exhibit is included with general admission and free for members. Sculptures are outdoors along the main loop; the full route is about 1.75 miles and takes roughly an hour at an easy pace. Strollers and wheelchairs are welcome on the paved sections."), /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Plan your",
    emphasis: "visit",
    size: "md",
    style: {
      margin: 'var(--space-md) 0 var(--space-sm)'
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: 'Where do I start?',
      body: 'Begin at the Main Entrance on Botanic Garden Blvd. Trail maps are available at admissions or by scanning the QR code on the welcome sign.'
    }, {
      title: 'Is it accessible?',
      body: 'The main loop is paved and wheelchair accessible. Two sculptures sit on gravel spurs with a firm surface alternative nearby.'
    }, {
      title: 'Can I photograph the sculptures?',
      body: 'Yes. Personal photography is welcome. Professional and posed sessions require a photography pass.'
    }]
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      position: 'sticky',
      top: 110
    }
  }, /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "evergreen",
    leaf: true,
    assetBase: A
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--fwbg-citrus)'
    }
  }, "May 22 \u2013 Sept 7, 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 32,
      lineHeight: 1.1,
      margin: '4px 0 var(--space-xs)'
    }
  }, "Included with general admission"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-sm)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.5,
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.85)'
    }
  }, "Fort Worth Botanic Garden \xB7 Main Loop", /*#__PURE__*/React.createElement("br", null), "Daily, 8:00 a.m. \u2013 3:00 p.m. (final entry 2 p.m.)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxs)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "Purchase Admission"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Plan Your Visit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-lighter)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-sm)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--color-contrast-medium)',
      marginBottom: 8
    }
  }, "Presented by"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 500,
      fontSize: 22,
      color: 'var(--color-contrast-higher)'
    }
  }, "Sponsor Wordmark"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-contrast-medium)'
    }
  }, "Sponsor logo supplied by the partner; placed above the fold with a descriptor line, per the brand guidelines."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Also on",
    title: "While you're",
    emphasis: "here",
    size: "md",
    style: {
      marginBottom: 'var(--space-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(EventCard, {
    image: A + '/images/herbarium.jpg',
    date: "Jun 1 \u2013 Sep 30",
    title: "Photo Exhibit: Sherwin Carlquist",
    excerpt: "Expeditions through the lens, from the BRIT Library collection."
  }), /*#__PURE__*/React.createElement(EventCard, {
    image: A + '/images/children-camp.jpg',
    date: "Aug 29, 2026",
    badge: "Member discounts",
    title: "Bat Walk Tour",
    excerpt: "As the sun sets, the Garden transforms into a world full of nocturnal life waiting to be discovered."
  }), /*#__PURE__*/React.createElement(EventCard, {
    image: A + '/images/gift-shop.jpg',
    date: "Aug 8, 2026",
    badge: "Free for members",
    title: "Member Appreciation Day",
    excerpt: "20% off in the Treasure Tree and Trellis gift shops, every second Saturday."
  }))));
}
window.EventDetail = EventDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gardens.jsx
try { (() => {
const {
  Button,
  Chip,
  Eyebrow,
  SectionHeading,
  MediaCard,
  Section,
  Accordion
} = window.FWBGDesignSystem_b09739;
const A = '../../assets';
const GARDENS = [['Japanese Garden', 'japanese-garden', 'Formal', '7.5 acres of koi ponds, moon bridges and pruned pines.'], ['Rose Garden', 'rose-garden', 'Historic', 'The 1933 WPA-built ramp and shelter house, still in bloom.'], ['Rainforest Conservatory', 'rainforest-conservatory', 'Under Glass', 'A tropical collection kept warm year round.'], ['Backyard Vegetable Garden', 'planting', 'Edible', 'Produce grown here is donated to Union Gospel Mission.'], ['Adelaide Polk Fuller Garden', 'wedding', 'Formal', 'A walled garden and the most requested ceremony site.'], ['BRIT Building & Grounds', 'hero-brit-building', 'Science', 'Green roof, herbarium and library at 1700 University Drive.']];
const FILTERS = ['All Gardens', 'Formal', 'Historic', 'Under Glass', 'Edible', 'Science'];
function Gardens() {
  const [filter, setFilter] = React.useState('All Gardens');
  const shown = GARDENS.filter(g => filter === 'All Gardens' || g[2] === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 360,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/japanese-garden.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.2),hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.8))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      maxWidth: 'var(--max-width-xxl)',
      margin: '0 auto',
      padding: '0 var(--component-padding) var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--fwbg-meadow)'
    }
  }, "Gardens"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 60,
      lineHeight: 1.05,
      color: 'var(--color-bg-lighter)',
      margin: 0
    }
  }, "Four Seasons. One Garden. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Endless Beauty.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxs)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-md)'
    }
  }, FILTERS.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-md)'
    }
  }, shown.map(([t, s, cat, blurb]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxs)'
    }
  }, /*#__PURE__*/React.createElement(MediaCard, {
    image: `${A}/images/${s}.jpg`,
    title: t,
    meta: cat,
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      color: 'var(--color-contrast-high)'
    }
  }, blurb))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    width: "md",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Before you come",
    title: "Good to",
    emphasis: "know",
    style: {
      marginBottom: 'var(--space-sm)'
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: 'What are your hours?',
      body: 'Members enter at 7:00 a.m. and the public at 8:00 a.m. Last entry is at 5:00 p.m. During July and August the Garden closes at 3 PM, with final entry at 2 PM.'
    }, {
      title: 'Is parking free?',
      body: 'Yes. Parking is free at both the Main Entrance on Botanic Garden Blvd and the West Entrance.'
    }, {
      title: 'Can I bring my dog?',
      body: 'Dogs are welcome during Dog Days, held one weekend each month. Hours are reduced to 8 AM – 1 PM during July and August.'
    }, {
      title: 'Do I need a photography pass?',
      body: 'Posed and professional photography requires a pass. The last pass is sold two hours before closing.'
    }]
  })));
}
window.Gardens = Gardens;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gardens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Chip,
  Eyebrow,
  SectionHeading,
  MediaCard,
  EventCard,
  PriceCard,
  Icon,
  Section
} = window.FWBGDesignSystem_b09739;
const A = '../../assets',
  I = '../../assets/icons';
const EVENTS = [{
  image: A + '/images/children-camp.jpg',
  date: 'Aug 7, 2026',
  badge: 'Free for members',
  cat: 'Events',
  title: 'Members-Only: Hop into Learning Movie Night',
  excerpt: "Close out summer with a free movie night under the stars. Bring a blanket, spread out on the lawn, and enjoy this year's feature."
}, {
  image: A + '/images/gift-shop.jpg',
  date: 'Aug 8, 2026',
  badge: null,
  cat: 'Members-Only Events',
  title: 'August Member Appreciation Day: 20% Off Gift Shop',
  excerpt: 'Members get a double-discount in our Treasure Tree Gift Shop and Trellis Gift Shop every second Saturday of the month.'
}, {
  image: A + '/images/planting.jpg',
  date: 'Aug 15, 2026',
  badge: 'Member discounts',
  cat: 'Adult Education Classes',
  title: 'En Plein Air Watercolor: Native Texas Boardwalk',
  excerpt: "Embark on a historical tradition of outdoor painting with guided lessons in the Garden's tranquil morning light."
}, {
  image: A + '/images/herbarium.jpg',
  date: 'Aug 22, 2026',
  badge: 'Free for members',
  cat: 'Events',
  title: 'Member Orientation & Tour: BRIT Herbarium & Library',
  excerpt: 'Join us for our quarterly Member Orientation, a friendly and informative gathering for both new and renewing members.'
}];
const FILTERS = ['All', 'Events', 'Members-Only Events', 'Adult Education Classes'];
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 560,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/rainforest-conservatory.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.75) 0%,hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.15) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      maxWidth: 'var(--max-width-xxl)',
      margin: '0 auto',
      padding: '0 var(--component-padding)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--fwbg-citrus)'
    }
  }, "May 22 \u2013 Sept 7"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 68,
      lineHeight: 1.02,
      color: 'var(--color-bg-lighter)',
      margin: '0 0 var(--space-sm)',
      maxWidth: '16ch'
    }
  }, "Sean Kenney's ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Nature POP!"), " Made with LEGO Bricks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "Purchase Admission"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('event')
  }, "Learn More"))));
}
function NewsStrip({
  go
}) {
  const items = [{
    kicker: 'July 28, 2026',
    title: "FWBG Earns the Nation's Highest Museum Honor",
    img: A + '/images/hero-brit-building.jpg'
  }, {
    kicker: 'Opening This Fall',
    title: 'Baker Martin Family Garden',
    img: A + '/images/planting.jpg'
  }, {
    kicker: 'Jun 1 – Sep 30',
    title: 'Photo Exhibit: Sherwin Carlquist',
    img: A + '/images/herbarium.jpg'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-sm)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(MediaCard, {
    key: it.title,
    image: it.img,
    meta: it.kicker,
    title: it.title,
    ratio: "16 / 9"
  }))));
}
function Weather() {
  const rows = [['weather-clear-day', 'Clear, Sunny'], ['weather-wind', '13 mph'], ['weather-precipitation', '0%']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-lighter)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Today's Weather"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 64,
      lineHeight: 1,
      color: 'var(--color-contrast-higher)'
    }
  }, "96\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-contrast-medium)'
    }
  }, "Feels like 98\xB0", /*#__PURE__*/React.createElement("br", null), "H: 101\xB0 L: 80\xB0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      paddingTop: 'var(--space-xxs)',
      borderTop: '1px solid var(--color-contrast-lower)'
    }
  }, rows.map(([n, t]) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-contrast-high)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: "xs",
    base: I
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      color: 'var(--color-accent-darker)'
    }
  }, "46 days left of Summer"));
}
function Calendar({
  go
}) {
  const [filter, setFilter] = React.useState('All');
  const shown = EVENTS.filter(e => filter === 'All' || e.cat === filter);
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 'var(--space-lg)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Evergreen Favorites",
    title: "Something for",
    emphasis: "everyone",
    size: "md",
    standfirst: "Enjoy some of the ongoing and loved experiences at the Fort Worth Botanic Garden."
  }), /*#__PURE__*/React.createElement(Weather, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxs)',
      flexWrap: 'wrap'
    }
  }, FILTERS.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-sm)'
    }
  }, shown.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e, {
    onClick: () => go('event')
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "subtle-outline",
    size: "sm"
  }, "View Full Calendar")))));
}
function GardensBlock({
  go
}) {
  const gardens = [['Japanese Garden', 'japanese-garden'], ['Rose Garden', 'rose-garden'], ['Rainforest Conservatory', 'rainforest-conservatory']];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-md)',
      marginBottom: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Gardens",
    title: "Let's",
    emphasis: "Explore",
    standfirst: "The FWBG is composed of 23 specialty gardens, including a tropical conservatory, a forest boardwalk, and a water conservation garden."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "subtle-outline",
    onClick: () => go('gardens')
  }, "View All")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-sm)'
    }
  }, gardens.map(([t, s]) => /*#__PURE__*/React.createElement(MediaCard, {
    key: t,
    image: `${A}/images/${s}.jpg`,
    title: t,
    ratio: "4 / 5"
  }))));
}
function Research() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    width: "xxl",
    pad: "xl",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -120,
      top: -60,
      width: 520,
      height: 520,
      opacity: .08,
      backgroundColor: 'var(--color-bg-lighter)',
      WebkitMask: `url(${A}/logo-leaf.svg) center/contain no-repeat`,
      mask: `url(${A}/logo-leaf.svg) center/contain no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--fwbg-meadow)'
    }
  }, "Science that Sustains"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 'var(--text-xxxxl)',
      lineHeight: 1.05,
      color: 'var(--color-bg-lighter)',
      margin: '0 0 var(--space-sm)'
    }
  }, "Rooted in ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Research")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 1.5,
      color: 'hsla(var(--color-bg-h),var(--color-bg-s),var(--color-bg-l),.85)',
      margin: '0 0 var(--space-sm)',
      maxWidth: '48ch'
    }
  }, "Serving as the research arm of the Fort Worth Botanic Garden, the Botanical Research Institute of Texas (BRIT) is an international scientific research and learning center dedicated to conservation and knowledge sharing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white"
  }, "Learn More"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Volunteer at BRIT"))), /*#__PURE__*/React.createElement("img", {
    src: A + '/images/brit-research.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-xl)',
      aspectRatio: '4 / 3',
      objectFit: 'cover'
    }
  })));
}
function Connect() {
  const links = [{
    t: 'FWBG Tours',
    s: 'Let us guide you through nature',
    c: "Let's Go",
    i: 'tours-fwbg'
  }, {
    t: 'BRIT Tours',
    s: 'Discover science and conservation',
    c: "I'm Ready",
    i: 'tours-brit'
  }, {
    t: 'Photography',
    s: 'Take your best shot with us',
    c: 'Learn More',
    i: 'photography'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Connect With",
    emphasis: "Us",
    align: "center",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-sm)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.t,
    href: "#",
    style: {
      position: 'relative',
      display: 'block',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      aspectRatio: '3 / 2',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/${l.i}.jpg`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.1),hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.85))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      padding: 'var(--space-sm)',
      color: 'var(--color-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 'var(--text-xl)'
    }
  }, l.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      opacity: .85,
      marginBottom: 8
    }
  }, l.s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, l.c))))));
}
function MembershipTeaser({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "xxl",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-lg)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/memberships-hero.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-xl)',
      aspectRatio: '16 / 9',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(PriceCard, {
    title: "Family Membership*",
    description: "Yearly membership for two adults and children.",
    benefits: ['Year-round Garden admission', 'Invitations to members-only events and webinars', 'Early members-only admission daily at 7:00 a.m.'],
    price: "$95",
    footnote: "*Includes benefits for adult children with disabilities and two single-use guest passes per year.",
    cta: "Become Member",
    href: "#",
    style: {
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "subtle-outline",
    size: "sm",
    onClick: () => go('membership')
  }, "Our Memberships")));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(NewsStrip, {
    go: go
  }), /*#__PURE__*/React.createElement(Calendar, {
    go: go
  }), /*#__PURE__*/React.createElement(MembershipTeaser, {
    go: go
  }), /*#__PURE__*/React.createElement(GardensBlock, {
    go: go
  }), /*#__PURE__*/React.createElement(Research, null), /*#__PURE__*/React.createElement(Connect, null));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Membership.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  PriceCard,
  SectionHeading,
  Section,
  Eyebrow,
  Checkbox,
  Radio,
  Input,
  Select,
  Accordion
} = window.FWBGDesignSystem_b09739;
const A = '../../assets',
  I = '../../assets/icons';
const TIERS = [{
  title: 'Individual',
  description: 'One named adult.',
  price: '$65',
  benefits: ['Year-round Garden admission', 'Members-only events and webinars', 'Early admission daily at 7:00 a.m.']
}, {
  title: 'Family*',
  description: 'Two adults and children.',
  price: '$95',
  benefits: ['Everything in Individual', 'Two single-use guest passes each year', 'Benefits for adult children with disabilities'],
  footnote: '*See membership FAQs for household definitions.'
}, {
  title: 'Giving Circle',
  description: 'Supports research and conservation.',
  price: '$1,500',
  benefits: ['Everything in Family', 'Behind-the-scenes BRIT herbarium tours', 'Invitations to donor previews']
}];
function Membership() {
  const [tier, setTier] = React.useState('Family*');
  const [gift, setGift] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 340,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/images/memberships-hero.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.15),hsla(var(--color-black-h),var(--color-black-s),var(--color-black-l),.8))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      maxWidth: 'var(--max-width-xxl)',
      margin: '0 auto',
      padding: '0 var(--component-padding) var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--fwbg-meadow)'
    }
  }, "Membership"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-secondary)',
      fontWeight: 100,
      fontSize: 58,
      lineHeight: 1.05,
      color: 'var(--color-bg-lighter)',
      margin: 0
    }
  }, "Together, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "We Grow")))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "lg",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-sm)',
      alignItems: 'stretch'
    }
  }, TIERS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    onClick: () => setTier(t.title),
    style: {
      borderRadius: 'var(--radius-xl)',
      outline: tier === t.title ? '2px solid var(--color-primary)' : '2px solid transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PriceCard, _extends({}, t, {
    cta: tier === t.title ? 'Continue' : 'Select',
    style: {
      height: '100%'
    }
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    width: "sm",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Step 2",
    title: "Who is this",
    emphasis: "for?",
    size: "md",
    style: {
      marginBottom: 'var(--space-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First Name",
    placeholder: "Jordan"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last Name",
    placeholder: "Reyes"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email Address *",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "How did you hear about us?",
    iconBase: I,
    options: ['Select one', 'A friend or family member', 'Social media', 'A visit to the Garden', 'A school or camp program']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "start",
    label: "Start my membership today",
    checked: !gift,
    onChange: () => setGift(false)
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "start",
    label: "This is a gift \u2014 send a certificate",
    checked: gift,
    onChange: () => setGift(true)
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Email me about members-only events and early access",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Become a Member")))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    width: "md",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Membership",
    emphasis: "FAQs",
    size: "md",
    style: {
      marginBottom: 'var(--space-sm)'
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: 'When does my membership start?',
      body: 'Immediately. Your digital card is emailed within a few minutes and works at both entrances.'
    }, {
      title: 'Can I bring guests?',
      body: 'Family members receive two single-use guest passes each year. Additional guests receive the member discount rate.'
    }, {
      title: 'Is my membership tax deductible?',
      body: 'The portion above the fair market value of benefits received is tax deductible. Your receipt itemises the amount.'
    }]
  })));
}
window.Membership = Membership;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Membership.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.LeafMotif = __ds_scope.LeafMotif;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ColorBlock = __ds_scope.ColorBlock;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();

