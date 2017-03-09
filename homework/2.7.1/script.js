function arearraysEqual(a, b) {
    if (a === b) {
        return true;
    } else {

        if (a.length != b.length) {
            return false;
        } else {

            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
        }
     }
   return true;
}
