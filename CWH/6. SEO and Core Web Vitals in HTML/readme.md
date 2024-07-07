# Web Vitals Overview

## Purpose
Improve user experience quality on the web.

## Initiative
Google’s unified guidance for essential quality signals.

## Core Web Vitals

### Key Metrics
- **Largest Contentful Paint (LCP)**: Measures loading performance. Should occur within 2.5 seconds.
- **Interaction to Next Paint (INP)**: Measures interactivity. Should be 200 milliseconds or less.
- **Cumulative Layout Shift (CLS)**: Measures visual stability. Should maintain a score of 0.1 or less.

### Measurement
75th percentile of page loads across mobile and desktop devices.

## Lifecycle of Metrics

### Phases
- **Experimental**: Initial testing and feedback.
- **Pending**: Minimum of six months adaptation period.
- **Stable**: Finalized metrics, can change annually.

## Tools for Measuring Core Web Vitals

### Field Tools
- Chrome User Experience Report
- PageSpeed Insights
- Search Console (Core Web Vitals report)

### JavaScript Measurement
Using the `web-vitals` JavaScript library

### Lab Tools
- Chrome DevTools
- Lighthouse (use TBT as a proxy for INP)

## Recommendations for Improvement
Optimize each metric:
- [LCP](https://web.dev/lcp/)
- [INP](https://web.dev/inp/)
- [CLS](https://web.dev/cls/)

## Additional Web Vitals

### Supporting Metrics
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Total Blocking Time (TBT)

## Future Changes

### Expectations
- **Core Web Vitals**: Stable with annual updates.
- **Other Web Vitals**: More frequent changes, experimental.

## Resources
- **JavaScript Library**: [web-vitals](https://github.com/GoogleChrome/web-vitals)
- **Chrome Extension**: [Web Vitals Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)

For detailed guidance and best practices, refer to specific documentation on each metric and the [Web Vitals changelog](https://github.com/GoogleChrome/web-vitals/blob/main/CHANGELOG.md).

## Examples of Core Web Vitals Metrics

### Largest Contentful Paint (LCP)
**Definition**: Measures the time it takes for the largest content element (e.g., image, video, text block) to load and be visible within the viewport.

- **Good Example**:
  - A blog page loads, and the main image at the top of the article (the largest element) appears within 2.5 seconds.
- **Poor Example**:
  - An e-commerce homepage where the main product image takes 5 seconds to load, causing users to wait before they can see the key content.

### Interaction to Next Paint (INP)
**Definition**: Measures the latency between a user's interaction (e.g., click, tap, keypress) and the next frame being painted on the screen.

- **Good Example**:
  - A user clicks on a button to open a menu, and the menu appears almost instantly, within 200 milliseconds.
- **Poor Example**:
  - A user taps a "Submit" button on a form, but the form only responds after 1 second, causing frustration due to the delayed feedback.

### Cumulative Layout Shift (CLS)
**Definition**: Measures the visual stability of a page by quantifying how much content shifts unexpectedly during loading.

- **Good Example**:
  - A news website where images and text blocks remain stable as the page loads, maintaining a CLS score of 0.05.
- **Poor Example**:
  - An article page where text jumps around because ads and images load late, resulting in a CLS score of 0.3, disrupting the reading experience.

### Visual Illustrations

#### Largest Contentful Paint (LCP)
- **Good Example**: 
  - ![Image loads quickly](https://example.com/quick-lcp-image)
- **Poor Example**:
  - ![Image loads slowly](https://example.com/slow-lcp-image)

#### Interaction to Next Paint (INP)
- **Good Example**: 
  - ![Button responds instantly](https://example.com/quick-inp-button)
- **Poor Example**:
  - ![Button has delayed response](https://example.com/slow-inp-button)

#### Cumulative Layout Shift (CLS)
- **Good Example**: 
  - ![Stable layout](https://example.com/stable-cls-layout)
- **Poor Example**:
  - ![Shifting layout](https://example.com/unstable-cls-layout)

By focusing on these examples, site owners and developers can better understand and improve their site's performance to meet the recommended thresholds for a good user experience.

## Using Lighthouse in Browser

Lighthouse is an open-source tool provided by Google for auditing web pages and helping improve the quality of web pages. It measures various aspects of web performance, including Core Web Vitals, accessibility, SEO, and more. Here’s how to use Lighthouse directly in the browser:

### Steps to Run a Lighthouse Audit in Chrome

1. **Open Chrome DevTools**:
   - Right-click on the webpage you want to audit and select "Inspect" or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac).

2. **Navigate to the Lighthouse Panel**:
   - In DevTools, you’ll see several tabs like Elements, Console, Sources, etc.
   - Click on the "Lighthouse" tab.

3. **Configure Lighthouse Settings**:
   - Choose the type of report you want to generate. Lighthouse can perform audits for Performance, Accessibility, Best Practices, SEO, and PWA (Progressive Web App).
   - You can select either "Mobile" or "Desktop" depending on the target audience for your audit.

4. **Generate Report**:
   - Click the "Analyze page load" button.
   - Lighthouse will run its audits and generate a report. This may take a few moments as it simulates page load and performs various checks.

5. **Review the Report**:
   - Once the audit is complete, Lighthouse will display a detailed report.
   - The report will include scores and recommendations across the selected categories.
   - For Core Web Vitals, you’ll see metrics like LCP, INP, and CLS along with specific suggestions to improve them.

### Understanding the Report

#### Performance
- **Largest Contentful Paint (LCP)**: Shows how quickly the main content loads.
- **Interaction to Next Paint (INP)**: Assesses the responsiveness of the page.
- **Cumulative Layout Shift (CLS)**: Measures the visual stability of the page.
- Other performance metrics such as Time to Interactive (TTI) and Speed Index.

#### Accessibility
- Checks for issues like contrast, proper labeling, and keyboard accessibility.

#### Best Practices
- Ensures the site follows modern best practices such as HTTPS, proper usage of API, etc.

#### SEO
- Basic SEO checks to ensure the page is discoverable by search engines.

#### Progressive Web App (PWA)
- Checks if the site meets the criteria for being a PWA.

### Tips for Improvement
- **Optimize Images**: Compress and properly size images for faster loading.
- **Minimize JavaScript**: Reduce and defer JavaScript loading to improve interactivity.
- **Use Modern Web Technologies**: Implement features like HTTP/2 and service workers for better performance.
- **Stabilize Layout**: Ensure elements don't shift unexpectedly during loading.

### Example Screenshots
- **Opening DevTools**:
  ![DevTools](https://developers.google.com/web/tools/lighthouse/images/devtools-audit.png)
  
- **Running Lighthouse**:
  ![Running Lighthouse](https://developers.google.com/web/tools/lighthouse/images/devtools-audit-run.png)
  
- **Lighthouse Report**:
  ![Lighthouse Report](https://developers.google.com/web/tools/lighthouse/images/lighthouse-report.png)

By regularly using Lighthouse, developers can identify performance bottlenecks and opportunities for improvement, helping to ensure a high-quality user experience.