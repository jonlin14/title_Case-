var titleCase = function(input) {

    var split_sentence = input.split(" ");
    var return_array = [];
    var exceptions = ['and', 'the', 'in', 'an', 'a', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by'];
    var sentinel = 0;
    var output = null;

    for (var j = 0; j < 1; j++) {
        var first_word_lc = split_sentence[j].toLowerCase();
        var caps_first_letter = first_word_lc.charAt(0).toUpperCase();
        var length = first_word_lc.length;
        var rest_of_word = first_word_lc.substring(1,length);
        output = caps_first_letter + rest_of_word;
        return_array.push(output);
    }

    for (var i = 1; i < split_sentence.length; i++)
    {
        for (var j = 0; j < exceptions.length; j++)
        {
            output = split_sentence[i].toLowerCase();
            if (output === exceptions[j] ) {
                sentinel = 1;

            }
            var caps_first_letter = output.charAt(0).toUpperCase();
            var length = output.length;
            var rest_of_word = output.substring(1,length);
            output = caps_first_letter + rest_of_word;

        };

        if (sentinel === 1) {
            var exception_first_letter = output.charAt(0).toLowerCase()
            var length = output.length
            var rest_of_word = output.substring(1,length);
            output = exception_first_letter + rest_of_word;
            sentinel = 0;

        }
        return_array.push(output);

    }
    var return_string = return_array.join(" ");
    return return_string;
};

$(document).ready(function() {
    $("form#sentence").submit(function(event) {
        var input_sentence = $("input#input_sentence").val();
        var result = titleCase(input_sentence);

        $("#input_column").append("<li>" + input_sentence + "</li>");
        $("#output_column").append("<li>" + result + "</li>");


        event.preventDefault();
    });
});
