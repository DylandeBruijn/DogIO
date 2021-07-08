import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.scss";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<section className={styles["Page"]}>
			<div className={styles["Page__header"]}></div>
			<div className={styles["Page__content"]}>
				<h3 className={styles["Page__content__title"]}>Contact</h3>
				<form
					className={styles["Page__content__form"]}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className={styles["Page__content__form__input"]}
						type="text"
						placeholder="Name"
						{...register("Name", { required: true, maxLength: 80 })}
					/>
					<input
						className={styles["Page__content__form__input"]}
						type="email"
						placeholder="Email"
						{...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
					/>
					<input
						className={styles["Page__content__form__input"]}
						type="tel"
						placeholder="Mobile number"
						{...register("Mobile number", { required: true, maxLength: 12 })}
					/>

					<input
						className={styles["Page__content__form__submit"]}
						type="submit"
					/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
