var titleCase = function(input) {

    var split_Sentence = input.split(" ");
    var return_array = [];
    var exceptions = ['the', 'and'];

    for (var j = 0; j < 1; j++) {
        var first_word_lc = split_Sentence[j].toLowerCase();
        var caps_first_letter = first_word_lc.charAt(0).toUpperCase();
        var length = first_word_lc.length;
        var rest_of_word = first_word_lc.substring(1,length);
        output = caps_first_letter + rest_of_word;
        return_array.push(output);
    }

    for (var i = 1; i < split_Sentence.length; i++)
    {
        var output = split_Sentence[i].toLowerCase();

        exceptions.forEach(function(exception) {
            if (output !== exception )
            {
                var caps_first_letter = output.charAt(0).toUpperCase();
                var length = output.length;
                var rest_of_word = output.substring(1,length);
                output = caps_first_letter + rest_of_word;
            }
        });
        return_array.push(output);

    }
    var return_string = return_array.join(' ');
    return return_string;
};
