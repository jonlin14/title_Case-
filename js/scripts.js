var titleCase = function(input) {

    var split_Sentence = input.split(" ");
    var return_array = [];
    for (var i = 0; i < split_Sentence.length; i++)
    {
        console.log(split_Sentence[i]);
        var caps_first_letter = split_Sentence[i].charAt(0).toUpperCase();
        var length = split_Sentence[i].length;
        var rest_of_word = split_Sentence[i].substring(1,length);
        var output = caps_first_letter + rest_of_word;
        return_array.push(output);
    }
    var return_string = return_array.join(' ');
    return return_string;
};
