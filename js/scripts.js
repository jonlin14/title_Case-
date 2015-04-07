var titleCase = function(input) {
    var caps_first_letter = input.charAt(0).toUpperCase();
    var length = input.length;
    var rest_of_word = input.substring(1,length);
    var output = caps_first_letter + rest_of_word;
    return output;
};
