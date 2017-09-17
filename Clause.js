var iProlog;
(function (iProlog) {
    /**
     * representation of a clause
     * @class
     */
    var Clause = (function () {
        function Clause(len, hgs, base, neck, xs) {
            this.len = 0;
            this.hgs = null;
            this.base = 0;
            this.neck = 0;
            this.xs = null;
            this.hgs = hgs;
            this.base = base;
            this.len = len;
            this.neck = neck;
            this.xs = xs;
       
        }
        
   return Clause;
    }());
    iProlog.Clause = Clause;
    Clause["__class"] = "iProlog.Clause";
})(iProlog || (iProlog = {}));
