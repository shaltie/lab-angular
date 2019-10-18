# Description

You are required to develop an application using Angular 6+.

**Note:** For the styling of the components you are free to use any framework of your choice.

Your application needs to have two (2) routes:

## Main Route
* The main route will contain a fullscreen map (eg Google maps).
* When the page loads, the map should display the markers from the `locations.json` data set in this repo.
* Upon clicking on a marker a column will appear on the left of the same page, and the map will resize so both the column and the map fit the page.

## Second Route
* The second route will contain two tabs.
* The first tab will display all the data from the given data set with pagination.
* The second tab will display a form and a map. The user will fill the fields to create a new entry for the data set (name, lat, long). When the form is submitted the new pin will appear on the map of this page and it should also be added to the original dataset.
* The map will include simple drawing tools.
    * A clear button - that removes all pins on the map.
    * A circle draw button - when a circle is drawn, all the pins whose coordinates fall inside the area, should appear on the map.
