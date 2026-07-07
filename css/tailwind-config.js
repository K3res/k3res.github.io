// Tailwind CSS Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "tertiary-container": "#1a1c1b",
                "surface-tint": "#5f5e5e",
                "on-surface-variant": "#444748",
                "surface-container": "#eeeeee",
                "outline": "#747878",
                "on-tertiary-fixed": "#1a1c1b",
                "on-surface": "#1a1c1c",
                "on-primary-fixed-variant": "#474746",
                "on-primary-fixed": "#1c1b1b",
                "primary-fixed-dim": "#c8c6c5",
                "on-primary-container": "#858383",
                "tertiary-fixed": "#e2e3e1",
                "on-error": "#ffffff",
                "tertiary": "#000000",
                "secondary": "#735c00",
                "on-secondary": "#ffffff",
                "primary": "#000000",
                "surface-variant": "#e2e2e2",
                "on-tertiary-container": "#838483",
                "on-tertiary-fixed-variant": "#454746",
                "surface-container-highest": "#e2e2e2",
                "inverse-on-surface": "#f1f1f1",
                "secondary-fixed-dim": "#e9c349",
                "secondary-container": "#fed65b",
                "outline-variant": "#c4c7c7",
                "on-secondary-fixed-variant": "#574500",
                "inverse-primary": "#c8c6c5",
                "primary-container": "#1c1b1b",
                "on-secondary-fixed": "#241a00",
                "inverse-surface": "#2f3131",
                "on-background": "#1a1c1c",
                "error": "#ba1a1a",
                "error-container": "#ffdad6",
                "primary-fixed": "#e5e2e1",
                "on-secondary-container": "#745c00",
                "surface-dim": "#dadada",
                "surface-bright": "#f9f9f9",
                "surface-container-low": "#f3f3f3",
                "surface": "#f9f9f9",
                "on-error-container": "#93000a",
                "secondary-fixed": "#ffe088",
                "surface-container-high": "#e8e8e8",
                "on-tertiary": "#ffffff",
                "on-primary": "#ffffff",
                "background": "#f9f9f9",
                "surface-container-lowest": "#ffffff",
                "tertiary-fixed-dim": "#c6c7c5"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "gutter": "24px",
                "container-max": "1200px",
                "unit": "8px",
                "md": "16px",
                "xs": "4px",
                "xl": "64px",
                "sm": "8px",
                "lg": "32px"
            },
            "fontFamily": {
                "caption": ["Manrope"],
                "body-md": ["Manrope"],
                "h3": ["Manrope"],
                "body-lg": ["Manrope"],
                "label-sm": ["Manrope"],
                "h2": ["Manrope"],
                "h1": ["Manrope"]
            },
            "fontSize": {
                "caption": ["12px", { "lineHeight": "1.4", "letterSpacing": "0", "fontWeight": "400" }],
                "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
                "h3": ["24px", { "lineHeight": "1.4", "letterSpacing": "0", "fontWeight": "600" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
                "label-sm": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.02em", "fontWeight": "500" }],
                "h2": ["32px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                "h1": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }]
            }
        }
    }
}
