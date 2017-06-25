import ApiHelper from './../../api';

export default function infoDataHelper() {
    let data = {};
    return ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/info').then((info) => {
        data.info = info[0];
        return ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/contacts').then((contacts) => {
            data.contacts = contacts[0];
            return ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/schedule').then((schedule) => {
                data.schedule = schedule;
                return ApiHelper.fetchContent('MTM1NTY4Mjg4MQ/price').then((price) => {
                    data.price = price;
                    return data;
                });
            });
        });
    });
}