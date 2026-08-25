import { defineConfig } from "tinacms";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true" || !process.env.TINA_CLIENT_ID || process.env.TINA_CLIENT_ID === "null";

export default defineConfig({
  branch:
    process.env.TINA_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main",
  ...(isLocal ? {} : {
    clientId: process.env.TINA_CLIENT_ID || "",
    token: process.env.TINA_TOKEN || "",
  }),

  build: {
    outputFolder: "admin",
    publicFolder: process.env.NODE_ENV === "production" ? "dist" : "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/pages",
        format: "json",
        match: {
          include: "homepage",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "heroSlides",
            label: "Hero Slides",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.imageAlt || "Slide" }
              },
            },
            fields: [
              { type: "image", name: "image", label: "Image (Desktop)" },
              { type: "image", name: "mobileImage", label: "Image (Mobile)" },
              { type: "string", name: "imageAlt", label: "Image Alt Text" },
            ],
          },
          {
            type: "object",
            name: "aboutSection",
            label: "About Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "subTitle", label: "Sub Title" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleLine2", label: "Title Line 2" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "linkText", label: "Link Text" },
            ],
          },
          {
            type: "object",
            name: "purposeSection",
            label: "Purpose Section",
            fields: [
              { type: "image", name: "image", label: "Left Image" },
              { type: "string", name: "visionText", label: "Vision Text", ui: { component: "textarea" } },
              { type: "string", name: "missionText", label: "Mission Text", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "whyChooseUs",
            label: "Why Choose Us Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleLine2", label: "Title Line 2" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "identityCards",
            label: "Identity Cards",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Card" }
              },
            },
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "supportingText", label: "Supporting Text" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
              { type: "string", name: "href", label: "Link URL" },
            ],
          },
          {
            type: "object",
            name: "features",
            label: "Features List (Why Choose Us Cards)",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Feature" }
              },
            },
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "string",
                name: "iconName",
                label: "Icon Name",
                options: [
                  { label: "Trending Up", value: "TrendingUp" },
                  { label: "Gem", value: "Gem" },
                  { label: "Zap", value: "Zap" },
                  { label: "Users", value: "Users" },
                  { label: "Shopping Bag", value: "ShoppingBag" },
                  { label: "Sparkles", value: "Sparkles" },
                ],
              },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
            ],
          },
          {
            type: "object",
            name: "ctaSection",
            label: "CTA Section (Visit Us In Store)",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "primaryButtonText", label: "Primary Button Text" },
              { type: "string", name: "primaryButtonUrl", label: "Primary Button URL" },
              { type: "string", name: "secondaryButtonText", label: "Secondary Button Text" },
              { type: "string", name: "secondaryButtonUrl", label: "Secondary Button URL" },
            ],
          },
        ],
      },
      {
        name: "storepage",
        label: "Storepage",
        path: "content/pages",
        format: "json",
        match: {
          include: "storepage",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "heroSection",
            label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleLine2", label: "Title Line 2" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "buttonUrl", label: "Button Link" },
              { type: "string", name: "availabilityText", label: "Availability Text" },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
            ],
          },
          {
            type: "object",
            name: "collectionsShowcase",
            label: "Collections Showcase",
            fields: [
              {
                type: "object",
                name: "intro",
                label: "Intro Text",
                fields: [
                  { type: "string", name: "subheading", label: "Subheading (Label)" },
                  { type: "string", name: "headingLine1", label: "Heading Line 1" },
                  { type: "string", name: "headingLine2", label: "Heading Line 2" },
                  { type: "string", name: "headingHighlight", label: "Heading Highlight Word" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ]
              },
              {
                type: "object",
                name: "collections",
                label: "Collections",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label || "Collection" }
                  }
                },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
                  { type: "string", name: "supportingText", label: "Supporting Text", ui: { component: "textarea" } },
                  { type: "string", name: "ctaText", label: "CTA Text" },
                  { type: "string", name: "linkText", label: "Link Text" },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "imageAlt", label: "Image Alt" },
                  { type: "string", name: "bgWord", label: "Background Word" },
                  { 
                    type: "string", 
                    name: "layout", 
                    label: "Layout",
                    options: [
                      { label: "Content Left", value: "content-left" },
                      { label: "Content Right", value: "content-right" }
                    ]
                  },
                ]
              }
            ]
          },
          {
            type: "object",
            name: "visitBanner",
            label: "Visit Banner (Black Section)",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleLine2", label: "Title Line 2" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "button1Text", label: "Button 1 Text" },
              { type: "string", name: "button1Url", label: "Button 1 Link" },
              { type: "string", name: "button2Text", label: "Button 2 Text" },
              { type: "string", name: "button2Url", label: "Button 2 Link" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
            ],
          },
          {
            type: "object",
            name: "whatsappCta",
            label: "WhatsApp CTA",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "noteText", label: "Note Text" },
            ],
          },
        ],
      },
      {
        name: "contactpage",
        label: "Contactpage",
        path: "content/pages",
        format: "json",
        match: {
          include: "contactpage",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "heroSection",
            label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "titleLine1", label: "Title Line 1" },
              { type: "string", name: "titleLine2", label: "Title Line 2" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "button1Text", label: "Button 1 Text" },
              { type: "string", name: "button1Url", label: "Button 1 Link" },
              { type: "string", name: "button2Text", label: "Button 2 Text" },
              { type: "string", name: "button2Url", label: "Button 2 Link" },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
            ],
          },
          {
            type: "object",
            name: "contactCards",
            label: "Contact Cards",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Card" }
              },
            },
            fields: [
              {
                type: "string",
                name: "iconName",
                label: "Icon Name",
                options: [
                  { label: "Phone", value: "Phone" },
                  { label: "Mail", value: "Mail" },
                  { label: "Message Circle", value: "MessageCircle" },
                  { label: "Map Pin", value: "MapPin" },
                ],
              },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "info", label: "Info" },
              { type: "string", name: "actionText", label: "Action Text" },
              { type: "string", name: "link", label: "Link" },
            ],
          },
          {
            type: "object",
            name: "reachUsSection",
            label: "Reach Us Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "methods",
                label: "Reach Methods",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title || "Method" }
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "iconName",
                    label: "Icon Name",
                    options: [
                      { label: "Phone", value: "Phone" },
                      { label: "Mail", value: "Mail" },
                      { label: "Message Circle", value: "MessageCircle" },
                    ],
                  },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "primaryText", label: "Primary Link Text" },
                  { type: "string", name: "primaryLink", label: "Primary Link URL" },
                  { type: "string", name: "secondaryText", label: "Secondary Text (Optional)" },
                  { type: "string", name: "secondaryLink", label: "Secondary Link URL (Optional)" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "formSection",
            label: "Contact Form Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "formspreeUrl", label: "Formspree Endpoint URL" },
              { type: "string", name: "buttonText", label: "Button Text" },
            ],
          },
          {
            type: "object",
            name: "whatsappBanner",
            label: "WhatsApp Banner",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "buttonUrl", label: "Button Link" },
            ],
          },
          {
            type: "object",
            name: "faqSection",
            label: "FAQ Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "faqs",
                label: "FAQs",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.question || "FAQ" }
                  },
                },
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
