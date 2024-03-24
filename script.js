function q1() {
    $('#names-q1').empty();
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/citybike",
        data: {},
        success: function (response) {
            let rows = response["getStationList"]["row"];
            for (let i = 0; i < rows.length; i++) {
                let rack_name = rows[i]['stationName'];
                let rack_cnt = rows[i]['rackTotCnt'];
                let bike_cnt = rows[i]['parkingBikeTotCnt'];
                let temp_html = '';
                if (bike_cnt < 5) {
                    temp_html = `<tr class="urgent">
                        <td>${rack_name}</td>
                        <td>${rack_cnt}</td>
                        <td>${bike_cnt}</td>
                      </tr>`
                } else {
                    temp_html = `<tr>
                        <td>${rack_name}</td>
                        <td>${rack_cnt}</td>
                        <td>${bike_cnt}</td>
                      </tr>`
                }
                $('#names-q1').append(temp_html);
            }
        }
    })
}