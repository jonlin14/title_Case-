var titleCase = function(input) {

    var split_Sentence = input.split(" ");
    var return_array = [];

    for (var j = 0; j < 1; j++) {
        var first_word_lc = split_Sentence[j].toLowerCase();
        var caps_first_letter = split_Sentence[j].charAt(0).toUpperCase();
        var length = split_Sentence[j].length;
        var rest_of_word = split_Sentence[j].substring(1,length);
        output = caps_first_letter + rest_of_word;
        return_array.push(output);
    }

    for (var i = 1; i < split_Sentence.length; i++)
    {

        var output = split_Sentence[i].toLowerCase();
        if (output !== 'the' )
        {
            var caps_first_letter = split_Sentence[i].charAt(0).toUpperCase();
            var length = split_Sentence[i].length;
            var rest_of_word = split_Sentence[i].substring(1,length);
            output = caps_first_letter + rest_of_word;
        }
        return_array.push(output);

    }
    var return_string = return_array.join(' ');
    return return_string;
};
