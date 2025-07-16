import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Collapse } from "react-collapse";
import "../Sidebar/Sidebar.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import Button from "@mui/material/Button";
function Sidebar() {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full pr-5 mb-3 text-[16px] font-[600] flex items-center ">
          Shop by Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Foods"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
    </aside>
  );
}

export default Sidebar;
