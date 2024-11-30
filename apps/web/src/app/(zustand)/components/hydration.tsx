"use client";

import * as React from "react";
import { useTodoStore } from "../store/useTodoStore";

const Hydration = () => {
	React.useEffect(() => {
		useTodoStore.persist.rehydrate();
	}, []);

	return null;
};

export default Hydration;
