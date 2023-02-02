import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { Button, IconButton, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Item from "../../components/Item";

const ItemDetails = () => {
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    async function getItem() {
        const item = await fetch(
            `http://localhost:3001/api/items/${itemId}?populate=image`,
            { method: "GET" }
        );
        const itemJson = await item.json();
        setItem(itemJson.data);
    }

    async function getItems() {
        const items = await fetch(
            "http://localhost:3001/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJson = await items.json();
        setItems(itemsJson.data);
    }

    useEffect(() => {
        getItem();
        getItems();
    }, [itemId]);
    
    return <div>ItemDetails</div>;
};

export default ItemDetails;
