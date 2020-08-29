//================================================================
// RS_MultipleMessageSystem.js
// ---------------------------------------------------------------
// The MIT License
// Copyright (c) 2020 biud436
// ---------------------------------------------------------------
// Free for commercial and non commercial use.
//================================================================
/*:
 * @plugindesc <RS_MultipleMessageSystem>
 * @author biud436
 *          
 * @help
 *
 */

var Imported = Imported || {};
Imported.RS_MultipleMessageSystem = true;

var RS = RS || {};
RS.MultipleMessageSystem = RS.MultipleMessageSystem || {};

(function($) {
    
    "use strict";

    var parameters = $plugins.filter(function (i) {
      return i.description.contains('<RS_MultipleMessageSystem>');
    });
    
    parameters = (parameters.length > 0) && parameters[0].parameters;

    class Window_SMessage extends Window_Message {
        
    }
    
})(RS.MultipleMessageSystem);