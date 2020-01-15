const dao = require('../dao/db');

const DeviceService = {
    save: (device_info) => {
        return new Promise((resovle, reject) => {
            let sql = `insert into login_info (
                app_id, 
                user_id,
                device_id,
                device_type,
                is_physical_device,
                ios_name,
                ios_system_name,
                ios_system_version,
                ios_model,
                ios_localized_model,
                android_version,
                android_board,
                android_bootloader,
                android_brand,
                android_device,
                android_display,
                android_fingerprint,
                android_hardware,
                android_host,
                android_id,
                android_manufacturer,
                android_model,
                android_product,
                android_tags,
                android_type,
                collect_time) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now());`;
            dao.execute(sql, [
                device_info.app_id,
                device_info.user_id,
                device_info.device_id,
                device_info.device_type,
                device_info.is_physical_device,
                device_info.ios_name,
                device_info.ios_system_name,
                device_info.ios_system_version,
                device_info.ios_model,
                device_info.ios_localized_model,
                device_info.android_version,
                device_info.android_board,
                device_info.android_bootloader,
                device_info.android_brand,
                device_info.android_device,
                device_info.android_display,
                device_info.android_fingerprint,
                device_info.android_hardware,
                device_info.android_host,
                device_info.android_id,
                device_info.android_manufacturer,
                device_info.android_model,
                device_info.android_product,
                device_info.android_tags,
                device_info.android_type
            ])
                .then((data) => {
                    resovle(data);
                })
                .catch((e) => {
                    reject(e);
                });
        });
    }
};
module.exports = DeviceService;