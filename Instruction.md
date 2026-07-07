# KintsuKai – Fully Offline & Self-Hosted Setup Guide

## 📌 Project Description

KintsuKai is a modern web interface built with Tailwind CSS and custom design tokens.

The goal is to transform the project into a **fully offline, self-hosted production system**.

This means:

- No external internet dependencies
- No CDNs
- No Google Fonts
- No external icon libraries
- No runtime external requests
- No development-only code
- Fully production-ready output

Everything must be stored locally and must work without internet connection.

---

# ⚠️ CORE RULES (CRITICAL)

## 1. FULL OFFLINE REQUIREMENT

The project must be 100% self-contained.

The assistant / developer must:

- Download ALL assets manually or via build tools
- Store EVERYTHING inside the project folder
- NEVER use external URLs in production code
- NEVER rely on Google, CDNs, or third-party services
- ENSURE full offline functionality

---

## 2. REMOVE ALL COMMENTS (IMPORTANT FOR PRODUCTION)

⚠️ THIS PROJECT WILL BE PUBLICLY RELEASED.

Therefore:

- REMOVE ALL HTML comments (`<!-- -->`)
- REMOVE ALL JavaScript comments (`//` and `/* */`)
- REMOVE ALL CSS comments (`/* */`)
- REMOVE ALL development notes
- REMOVE ALL debugging instructions
- REMOVE ALL internal documentation inside code

### ❌ NOT ALLOWED IN FINAL OUTPUT:

```html id="comment_bad_example"
<!-- Free Tools Section -->