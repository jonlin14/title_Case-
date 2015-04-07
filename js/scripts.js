var titleCase = function(input) {

    var split_Sentence = input.split(" ");
    console.log(split_Sentence);
    var return_array = [];
    for (var i = 0; i < split_Sentence.length; i++)
    {

        var output = split_Sentence[i].toLowerCase();
        console.log(output);
        if (output !== ('and'))
        {
            var caps_first_letter = split_Sentence[i].charAt(0).toUpperCase();
            var length = split_Sentence[i].length;
            var rest_of_word = split_Sentence[i].substring(1,length);
            output = caps_first_letter + rest_of_word;
            console.log(output);
        }
        console.log(output);
        return_array.push(output);

    }
    var return_string = return_array.join(' ');
    return return_string;
};
