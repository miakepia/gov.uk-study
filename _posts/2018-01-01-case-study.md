---
layout: page
title: Creating unified navigation across GOV.UK, by Mia Allers

---
{% include styles.md %}

<!-- /////////////// INTRO /////////////  -->
<!-- {{ grid }}{{ row }} -->
{% include intro.html %}
<!-- {{ end_block }}{{ end_block }} -->

<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
This is a case study about how the Frontend Design & Navigation team on GOV.UK started tackling the thorny issue of site-wide navigation. This particular piece of work has spanned a number of months, and is still in progress.
{{ end_block }}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- /////////////// PART 1 — USERS /////////////  -->
{% include chapter-1-cover.html %}

<!-- Row -->{{ grid }}{{ row }}
{% include aside-1.html %}

{{ body-content }}
### The split
From the beginning, GOV.UK was split by user group.

[‘Mainstream’](https://www.gov.uk/browse/benefits) users were those using the site for ‘personal’ reasons — applying for a driving licence, getting a marriage certificate — while [‘Whitehall’](https://www.gov.uk/government/policies) users interacted with the site on a ‘professional’ basis. Each group had content that was written and published separately.

Going through the research, we realised this was a problem. All users may need to interact with all kinds of content, and the publishing split was causing broken journeys.
{{ end_block }}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- Row -->{{ grid }}
{% include publishing-apps.html %}
<!-- End row --> {{ end_block }}

<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
### Grouping users in a better way
Grouping users by personal and professional use wasn't working. However, we were aware that splitting users by demographic traits would be impossible. By sifting through [all the research](https://userresearch.blog.gov.uk) done since the launch of GOV.UK, we were able to group our users by three main [Jobs To Be Done](https://jtbd.info):
{% include job-stories.html %}

Jobs To Be Done give a good idea of what a user is trying to achieve, and why. Each job includes a range of tasks, and each task requires the user to interact with a range of content.
{{ end_block }}
<!-- End row --> {{ end_block }}{{ end_block }}


<!-- /////////////// PART 2 — GROUPING CONTENT /////////////  -->
{% include chapter-2-cover.html %}

<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
### Categorising content
GOV.UK has hundreds of content types — a hangover from [Transition](https://gds.blog.gov.uk/tag/transition/). These needed to be sorted and categorised if we wanted to bring any kind of logic to our user journeys.

We used card sorting to group 72 content types into 5 ‘super groups’. We then used [tree testing](https://www.optimalworkshop.com/treejack) to refine our groups with publishers throughout government, and later with thousands of end users.

The tests gave us a good idea of what kind of content we were publishing, but we needed to know why our users were reading.
{{ end_block }}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- Row -->{{ grid }}{{ row }}
{% include content-types.html %}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- /////////////// PART 3 — GROUPING USERS /////////////  -->
<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
### Matching content to jobs
We had the what, and we had the why. But to fix navigation, we had to marry the two by matching content groups to job stories. 

Doing this meant identifying which content types our users needed to complete different jobs, giving us a starting point for figuring out how pages needed to link up.

Knowing which content types were needed for each job also gave us a rough idea of how to generate and prioritise links.
{{ end_block }}
<!-- End row --> {{ end_block }}{{ end_block }}


<!-- Row --> {{ grid }}{{ row }}
{% include user-journey.html %}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- /////////////// PART 5 — THE DESIGN /////////////  -->
{% include chapter-3-cover.html %}


<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
### Start where the user is
We often joke that Google is our homepage. But it's true. Most users never even see our homepage, or any other pages designed for browsing. With most user journeys beginning on content pages, it made sense to tackle those first.
{% include search-engines.html %}

### Designing the page
GOV.UK has an incredibly pared back aesthetic. This is for universality, accessibility and clarity.

[Content](https://gds.blog.gov.uk/category/style-content-design/) needs to be of good quality, and the hierarchy needs to be clear. Everything on the page should serve a purpose, and that purpose should be led by one of five user needs.

These needs can be high level, such as orientating or leaving the page. Or they can be specific, such as seeing the next steps in a series, seeing what else is related, or seeing more of the same.

By defining these needs, we were able to arrange content on the page clearly and consistently — allowing us to create a universal and scaleable design.
{{ end_block }}
{% include aside-3.html %}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- Row -->{{ grid }}{{ row }}
{% include aside-4.html %}
{% include page-layout.html %}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- /////////////// PART 6 — COMPONENTS /////////////  -->

<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
### Components
We developed a list component that would change depending on it’s position and content. Because lists are the backbone of our navigation pattern, it was important to create flexible elements that work in different combinations. 
{{ end_block }}
{% include list-components.html %}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
The list component is based on the type hierarchy. Whereas many list styles evolved to suit a specific layout or content type, we spent time rationalising the type so that is was consistent across the site.
{{ end_block }}
{% include typography.html %}
<!-- End row --> {{ end_block }}{{ end_block }}

<!-- /////////////// PART 7 — TESTING /////////////  -->
{% include chapter-4-cover.html %}

<!-- Row -->{{ grid }}{{ row }}
{{ body-content }}
### Testing
We needed to be careful to separate the design from the content to avoid confusing the results. We also had no idea whether our jobs framework would be confirmed in the real world: so far we had been working from historical research.

We set up another round of tree testing to fine tune our content groups, and to begin understanding our users' mental models of how content is categorised.

{% include research.html %}


We also ran usability testing with users from different backgrounds: those with access needs (cognitive and physical), users with high digital confidence, low confidence and a range of domain knowledge.

We used the [GOV.UK A/B testing framework](https://insidegovuk.blog.gov.uk/2017/11/14/using-ab-testing-to-measurably-improve-common-user-journeys/) to ship content page changes to 60% of users across the site for two weeks. Although not a traditional A/B test with variants, we were able to gather data on user behaviour both before and during the test.

### Conclusions
We are currently collating the results of our varying tests, and are identifying areas of iteration. Results of our usability testing has confirmed our '5 levels of user need' on a content page, with most users able to understand and complete tasks successfully.

The usability tests have also challenged some of our ideas: using real content exposed problems with similarly named links, causing confusion for our users.

Our A/B tests have been switched off, and so far changes are difficult to discern. A data scientist will be digging in to them to tease out any changes in behaviour that may help us understand wider journeys.
{{ end_block }}
{% include aside-5.html %}
<!-- End row --> {{ end_block }}{{ end_block }}
