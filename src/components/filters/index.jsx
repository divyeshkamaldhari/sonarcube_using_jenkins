import { Button, Divider, Select } from "antd";
import { setListData } from "../../utils/common-functions/common-functions";

export default function Filters({ list, setState, title, state, keyName, data }) {
    const handleChange = (e) => {
        setState([...e]);
    };

    const sharedProps = {
        mode: "multiple",
        options: list.map((item) => ({
            value: item.value,
            label: item.label,
            title: item.label,
        })),
        placeholder: "Select Item...",
        maxTagCount: "responsive",
        tagRender: ({ label }) => (
            <div className="ant-select-selection-item" title={label}>
                {label.length > 10 ? `${label.slice(0, 10)}...` : label}
            </div>
        ),
    };

    return (
        <div className="single-filters">
            <p>{title}</p>

            <Select
                {...sharedProps}
                size={"large"}
                onChange={handleChange}
                value={state}
                dropdownRender={(menu) => (
                    <>
                        {menu}
                        <Divider style={{ margin: "8px 0" }} />
                        <Button
                            onClick={() => setState([])}
                            style={{ marginRight: "8px", width: "100%", marginBottom: "10px" }}
                        >
                            Clear All Options
                        </Button>
                        <Button
                            onClick={() => setState(setListData(keyName, data).map((e) => e.value))}
                            style={{ width: "100%", marginBottom: "10px" }}
                        >
                            Select All Options
                        </Button>
                    </>
                )}
            />
        </div>
    );
}
