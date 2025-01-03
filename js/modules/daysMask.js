export default () => {
    $('input[name="daterange"]').daterangepicker({
        opens: 'center'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });

    $('.cancelBtn').text('Отменить');
    $('.applyBtn').text('Применить');
}
