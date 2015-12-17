# Magic8
A mobile Magic 8 Ball style web app

Down the road, I know I will be asked to harness the power of device orientation and motion detection in mobile, so I want to make a Magic 8 Ball web app!  I found a prototype iOS app that does something similar to what I want to do, using an airfare API: [AirFare8Ball](https://github.com/SabreDevStudio/AirFare8ball). 

### The problem: 

My idea is this: when deciding a race, many times a runner will consider how many runners met HER goal at a race previously.  Currently, there is no easy, accurate way to figure out this number without digging through pages and pages of race results.

### My solution:
I secured access to two different APIs ([Strava](https://strava.github.io/api) and [Athlinks](http://api.athlinks.com/) ) to get data about running races, and will investigate them both further to decide which one is better suited to my needs. Since I can parse data about most races (even 10ks!) through these apis, I can help inform a runner about whether or not a particular race has had many instances of people meeting her goals in the past.  

### Site workflow: 

On the home page is a form.  Inputs:
* A race name
* racing gender (m or f)
* Age on race day
* Previous personal best time for race distance *this may prove too difficult off the bat
* A time goal
* A prompt: Will I be able to meet my goal at this race? (shake to find out!)

The user shakes her mobile device, and, depending upon how many people of similar age, gender (and ability, if I can figure that out) have previously met this time goal at this race, the runner will see something like:

![Magic 8 Ball](http://www.blindfiveyearold.com/wp-content/uploads/2015/06/magic-8-ball-all-signs-point-to-yes.png)

Or..."Better Not Tell You Now"...or "Outlook Not So Good." or whatever.

The best part is there's a built-in error message: "Reply Hazy, Try Again Later."
