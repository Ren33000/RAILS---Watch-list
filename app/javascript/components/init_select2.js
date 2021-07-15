import $ from "jquery";
import "select2";

const initSelect2 = () => {
    // $(".select2").select2();
    $(".select2").select2({
        placeholder: "Select a movie",
        allowClear: true,
    });
};

export { initSelect2 };