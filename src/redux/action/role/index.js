import axios from "axios"

export const getData = (jsonData, wClause) => {
    return async dispatch => {
        var bodyFormData = new FormData();
        bodyFormData.set('json_data', jsonData);
        bodyFormData.set('w_clause', wClause);
        await axios({
                url: "https://lms-iotas.herokuapp.com/api/v1/getRole",
                method: "POST",
                headers: { 'x-api-key': 'iotas@12345'},
                data: bodyFormData,
            })
            .then(result => {
                // console.log("ddr", result);
                dispatch({
                    type: "GET_USERS",
                    roles: result.data.response_data,
                })
            })
            .catch(err => console.log("Error", err))
    }
}

