---
layout: page
title: Creating unified navigation across GOV.UK

---
{% include styles.md %}

<!-- GRID --> {{ grid }}
<!-- /////////////// INTRO /////////////  -->
{% include intro.html %}

{{ row }}
{% include dots.html %}
{{ end_block }}

<!-- /////////////// PART 1 — USERS /////////////  -->
<!-- Row -->{{ row }}
{{ body-content }}
## User needs
However many sites it is behind the scenes, GOV.UK operated according to one major principle: from the beginning, it was split by user group.

‘Mainstream’ users were those using the site for ‘personal’ reasons — applying for a licence, getting a marriage certificate — while ‘Whitehall’ users interacted with the site on a ‘professional’ basis.

Each user group was thought to have its own separate needs, and content was organised accordingly.
{{ end_block }}
<!-- End row --> {{ end_block }}

<!-- Row -->{{ row }}
{% include publishing-apps.html %}
<!-- End row --> {{ end_block }}


<!-- /////////////// PART 2 — GROUPING CONTENT /////////////  -->
<!-- Row -->{{ row }}
{{ body-content }}
## Grouping content
In order to begin linking up our content, we needed to figure out what our users where looking at, and why.

GOV.UK has hundreds of content types — an unfortunate hangover from [Transition](https://gds.blog.gov.uk/tag/transition/). These needed to be sorted and categorised if we wanted to bring any kind of logic to our user journeys.
{{ end_block }}
<!-- End row --> {{ end_block }}

<!-- Row --> {{ row }}
{% include templates.html %}
<!-- End row --> {{ end_block }}

<!-- Row -->{{ row }}
{{ body-content }}
We used card sorting to group 72 content types into 5 ‘super groups’.  We used treejack tests to refine our groups with publishers throughout government, and later with thousands of end users.

This gave us a good idea of what kind of content we were publishing, but we needed to know why our users were reading.
{{ end_block }}
<!-- End row --> {{ end_block }}

<!-- Row -->{{ row }}
{% include content-types.html %}
<!-- End row --> {{ end_block }}

<!-- /////////////// PART 3 — GROUPING USERS /////////////  -->
<!-- Row -->{{ row }}
{{ body-content }}
## Grouping users
To figure out why our users were looking at different content types, we sifted through all the research done since the launch of GOV.UK. 

This helped us to group our users by three main [Jobs To Be Done](https://jtbd.info). Jobs To Be Done give a good idea of what a user is trying to achieve, and why.

Each job includes a range of tasks, and each task requires the user to interact with a variety of content page types.
{% include job-stories.html %}
{{ end_block }}
<!-- End row --> {{ end_block }}


<!-- /////////////// PART 4 — PLOTTING USER JOURNEYS /////////////  -->
<!-- Row -->{{ row }}
{{ body-content }}
## Plotting user journeys
We had the what, and we had the why. But to fix navigation, we had to marry the two by matching content groups to job stories. 

This allowed us to track our users across the site as they completed different jobs, and gave us an idea of how different content types needed to link up.
{{ end_block }}
<!-- End row --> {{ end_block }}

<!-- Row --> {{ row }}
{% include user-journey.html %}
<!-- End row --> {{ end_block }}

<!-- /////////////// PART 5 — THE DESIGN /////////////  -->
<!-- Row -->{{ row }}
{{ body-content }}
## Designing the page
GOV.UK has an incredibly pared back aesthetic. This is for universality, accessibility and clarity.

The simplicity means that our content needs to be of good quality, and the hierarchy needs to be clear. Content should always serve a purpose, and the purpose should be led by one of five user needs.

What users need to do on a page can be high level, such as orientating or leaving the page. Or they can be specific, such as seeing the next steps in a series, seeing what else is related, or seeing more of them same.

By using the five levels of need, we were able to arrange content on the page clearly and consistently.
{{ end_block }}
{% include page-layout.html %}
<!-- End row --> {{ end_block }}

<!-- /////////////// PART 6 — COMPONENTS /////////////  -->
<!-- Row -->{{ row }}
{{ body-content }}
## Components
We developed a flexible list component that would change depending on it’s position and content. 
{{ end_block }}
<!-- End row --> {{ end_block }}

<!-- Row -->{{ row }}
{% include components.html %}
<!-- End row --> {{ end_block }}

<!-- /////////////// PART 7 — TESTING /////////////  -->
<!-- Row -->{{ row }}
{{ body-content }}
## Testing
We quickly realised that testing the designs would be tricky.

We needed to test not just the usability of the design, but the link content itself.
{{ end_block }}
<!-- End row --> {{ end_block }}

<!-- Row -->{{ row }}
{% include research.html %}
<!-- End row --> {{ end_block }}

<!-- Row -->{{ row }}
{{ body-content }}
Initial usability tests have shown that generally, our assumptions have been correct: users who are ‘doing a thing’ are more likely to engage with links closer to the body content, and less likely to explore further down the page.

Our next task is to test with users who are in a more exploratory mode — those changing or advising on a thing.
{{ end_block }}
<!-- End row --> {{ end_block }}
