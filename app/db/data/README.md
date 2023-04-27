# Seed data for this Tigris Data demo

For this demo, we’re using musical artist details pulled from the [Spotify API](https://developer.spotify.com).

Docs: https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists

The queries look like this:

```
GET https://api.spotify.com/v1/artists?ids=<comma-separated>
```

Up to 50 IDs are allowed at a time.

Use the following two queries to get roughly 95 artists selected from my Spotify favorites:

```
https://api.spotify.com/v1/artists?ids=3jK9MiCrA42lLAdMGUZpwa,73sIBHcqh3Z3NyqHKZ7FOL,0YrtvWJMgSdVrk3SfNjTbx,78xUyw6FkVZrRAtziFdtdu,4Chn8klatnhzqu9CLNMgHo,41AbNVba2ccpmcc9QtOJE7,6pwHWKweuoCyx3OoFaD0Q5,3pTE9iaJTkWns3mxpNQlJV,0YQBN02bmZvwGNrrWsg2sT,0V8xaun2So5GLeMAC0fpbW,2vm8GdHyrJh2O2MfbQFYG0,4mO4aGO6u29UyR6XLZR9XW,4LEiUm1SRbFMgfqnQTwUbQ,4Cedjq5BQL3MhapRvDpFED,4qKpLkR911SUlnd4HAtF79,7FDlvgcodNfC0IBdWevl4u,55VydwMyCuGcavwPuhutPL,08GQAI4eElDnROBrJRGE0X,4tX2TplrkIP4v05BNC903e,4TsHKU8l8Wq7n7OPVikirn,32Ko3nL0210QAt14S3Rs4Y,1Xyo4u8uXC1ZmMpatF05PJ,2mVVjNmdjXZZDvhgQWiakk,19y5MFBH7gohEdGwKM7QsP,4V8LLVI7PbaPR0K2TGSxFF,1U1el3k54VvEUzo3ybLPlM,3zunDAtRDg7kflREzWAhxl,4VmEWwd8y9MCLwexFMdpwt,1UH80jhsYsFztK0anu2FNS,4RnBFZRiMLRyZy0AzzTg2C,0du5cEVh5yTK9QJze8zA0C,5ivCbtrcD5N4rD337xIb2z,2x9SpqnPi8rlE9pjHBwmSC,06HL4z0CvFAxyc27GXpf02,53KwLdlmrlCelAZMaLVZqU,3qnGvpP8Yth1AqSBMqON5x,59oA5WbbQvomJz2BuRG071,3ZllGjNdP5pS8UFnT5Jj2x,3LVPGE5jPPwtbGslx07YR0,3VAxb3UskTNiHAKh4UeOEv,2cCUtGK9sDU2EoElnk0GNB,6iWuBN32BqCJAeXW6o3nil,4ZWvN9FEfdTea1SEHjpTNi,7xTKLpo7UCzXSnlH7fOIoM,3K2Srho6NCF3o9MswGR76H,7jVv8c5Fj3E9VhNjxT4snq,676oR6vRgfSzaBibbPhLhH,3IunaFjvNKj98JW89JYv9u,1LeVJ5GPeYDOVUjxx1y7Rp,39vA9YljbnOApXKniLWBZv

https://api.spotify.com/v1/artists?ids=3D1IyJznpDnWnnFrzjuWnh,4ETSs924pXMzjIeD6E9b4u,4NZvixzsSefsNiIqXn0NDe,7fw0E8WHdG3r9SuPBcGmWk,56oDRnqbIiwx4mymNEv7dS,4lPl9gqgox3JDiaJ1yklKh,5FxD8fkQZ6KcsSYupDVoSO,6FIrstf3kHEg3zBOyLpvxD,5Q8NEHGX70m1kkojbtm8wa,42Np3r8zXnaKcjLQsQSjyG,0nJaMZM8paoA5HEUTUXPqi,2YZyLoL8N0Wb9xBt1NhZWg,5l8VQNuIg0turYE1VtM9zV,5INjqkS1o8h1imAzPqGZBb,6qyi8X6MdP1lu6B1K6yh3h,0WwSkZ7LtFUFjGjMZBMt6T,1dfeR4HaWDbWqFHLkxsg1d,0oSGxfWSnnOXhD2fKuz2Gy,3bWdqOEkgKiSmVnHZM2feN,7wFDo161xYdeaiLz3KIHoM,5au2vhHl8DViD9PUxUZBTb,4jU68Hm8np6WNZXMqi7rz3,5a2EaR3hamoenG9rDuVn8j,3vbKDsSS70ZX9D2OcvbZmS,1GAS0rb4L8VTPvizAx2O9J,7mnBLXK823vNxN3UWB7Gfz,0Mz5XE0kb1GBnbLQm2VbcO,4M5nCE77Qaxayuhp3fVn4V,6Ghvu1VvMGScGpOUJBAHNH,63knPlGzLHTNDf1J78Fvte,7giUHu5pv6YTZgSkxxCcgh,5cMVRrisBpDkXCVG48epED,0rvjqX7ttXeg3mTy8Xscbt,75U40yZLLPglFgXbDVnmVs,1yAwtBaoHLEDWAnWR87hBT,34UhPkLbtFKRq3nmfFgejG,2Kx7MNY7cI1ENniW7vT30N,2cevwbv7ISD92VMNLYLHZA,1US3cA3tVZ50O7n4xE1o0K,34EP7KEpOjXcM2TCat1ISk,3TNt4aUIxgfy9aoaft5Jj2
```

The results of these queries have been lightly processed and saved in `artists.json` to use as seed data for this demo.