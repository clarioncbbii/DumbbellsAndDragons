export default function FormSection({ styles, classChoice, classData }) {
  // classChoice will be added to the form submission

  return (
    <div className={styles.class_details_showcase}>
      <form>
        {" "}
        <fieldset>
          <legend>Your Data</legend>

          <label htmlFor="age">Age</label>
          <select name="age" type="text" required>
            <option disabled>Select...</option>
            <option value={"16 to 25"}>16 to 25</option>
            <option value={"26 to 35"}>26 to 35</option>
            <option value={"36 to 45"}>36 to 45</option>
            <option value={"46 to 55"}>46 to 55</option>
            <option value={"56 to 65"}>56 to 65</option>
            <option value={"66 +"}>66 +</option>
          </select>

          <label htmlFor="bodyType">Body Type</label>
          <select name="bodyType" type="text" required>
            <option disabled>Select...</option>
            <option value={"A"}>Type A</option>
            <option value={"B"}>Type B</option>
            <option value={"None"}>Not Specified</option>
          </select>

          <label htmlFor="weight">Weight</label>
          <input name="weight" type="number" required />
        </fieldset>
        <fieldset>
          <legend>Your Bio</legend>
          <label htmlFor="bio">Tell us your story...</label>
          <textarea name="bio" required />
        </fieldset>
      </form>

      <div>
        <h3>Class Features</h3>
        <h4>{classData[classChoice.class].details.title}</h4>
        <p>{classData[classChoice.class].details.tag1}</p>
        <p>{classData[classChoice.class].details.tag2}</p>
      </div>
    </div>
  );
}
