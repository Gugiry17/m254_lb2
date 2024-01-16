<script lang="ts">
	let message = '';

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries());
		const response = await fetch(
			'http://localhost:8080/engine-rest/process-definition/key/Process_0n9ldp6/start',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					variables: {
						fname: {
							value: data.fname,
							type: 'String'
						},
						lname: {
							value: data.lname,
							type: 'String'
						},
						email: {
							value: data.email,
							type: 'String'
						},
						projectname: {
							value: data.projectname,
							type: 'String'
						},
						description: {
							value: data.description,
							type: 'String'
						},
						deadline: {
							value: data.deadline,
							type: 'String'
						}
					}
				})
			}
		);
		const result = await response.json();
		message = `Dein Auftrag wurde erfolgreich erstellt. Deine Auftragsnummer lautet: ${result.id}`;
	};
</script>

<h1>Younique Auftragsformular</h1>

<span>{message}</span>

<form on:submit={handleSubmit}>
	<label>
		Vorname:
		<input type="text" name="fname" required />
	</label>
	<label>
		Nachname:
		<input type="text" name="lname" required />
	</label>
	<label>
		E-Mail:
		<input type="email" name="email" required />
	</label>
	<label>
		Projektname:
		<input type="text" name="projectname" required />
	</label>
	<label>
		Projektbeschreibung:
		<textarea name="description" required></textarea>
	</label>
	<label>
		Deadline:
		<input type="date" name="deadline" required />
	</label>
	<button type="submit">Absenden</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
	label {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
	input,
	textarea {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
	}
	button {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
	}

	span {
		color: green;
	}
</style>
