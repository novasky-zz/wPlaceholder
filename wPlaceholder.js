/* 
 * jQuery placeholder plugin 1.0
 * 
 * Copyright (c) 2012 William Novasky
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * Created 2012-06-21
 * http://github.com/novasky
 * 
 * HOW TO USE:
 *  - jQuery('#input-id').wPlaceholder( { text:'SEU NOME' } );
 * 
 */
 
(function($){
    $.fn.extend({
        
        wPlaceholder : function (options) {
            
            var defaults = {
                text : 'Write here..'
            }
            
            var options = $.extend(defaults, options);
            
            return this.each(function() {
                var o    = options;
                var obj  = $(this);
                var text = o.text;
                
                obj.val(o.text);
                
                obj
                    .focus(function(){
                        if ( obj.val() == o.text ) {
                            obj.val('');
                        }
                    })
                    .blur(function(){
                        if ( obj.val() == '' ) {
                            obj.val(o.text);
                        }
                    });
                
            });
            
        } 
        
    });
    
})(jQuery);
