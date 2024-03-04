# A Basic Header

Use flexbox rules to create this very common webpage header style. The benefit to using flex here is that everything should be _flexible_. Check out the two screenshots below to get an idea of how it should scale with your screen. Besides flex rules, you'll also want to add some rules for margin and padding. (Hint: `ul`s have some default margin/padding that you will need to deal with.)

## Desired Outcome

narrow:
![narrow](./desired-outcome-narrow.png)

wide:
![wide](./desired-outcome-wide.png)

### Self Check

-   There is space between all items and the edge of the header (specific px amount doesn't matter here).
-   Logo is centered vertically and horizontally.
-   list-items are horizontal, and are centered vertically inside the header.
-   left-links and right-links are pushed all the way to the left and right, and stay at the edge of the header when the page is resized.
-   Your solution does not use floats, inline-block, or absolute positioning.

-   Note: For this exercise, it's completely acceptable to not match the font-family.

# Another common header style

We're starting to sneak in a little more CSS that you haven't seen yet. Don't worry about this for now; we just want things to look a little bit prettier, and this CSS will not interfere with your task.

For this one you will probably need to edit the HTML a little bit. Often with flexbox you need to add containers around things to make them go where you need them to go. In this case, you probably want to separate the items that go on the left and right of the header.

Just like you did in the `02-flex-header` exercise, you'll be nesting flex containers inside each other.

## Desired outcome

As with the last example, this one needs to be flexible in the middle, with items pushed to the left and right.

![png](./desired-outcome.png)

![gif](./desired-outcome.gif)

### Self Check

-   Everything is centered vertically inside the header.
-   There is 8px space between everything and the edge of the header.
-   Items are arranged horizontally as seen in the outcome image.
-   There is 16px between each item on both sides of the header.
-   flex is used to arrange everything.
