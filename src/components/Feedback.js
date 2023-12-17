// Feedback.js
export default function Feedback() {
  return (
    <div
      style={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 20,
        padding: 10,
        width: "fit-content",
      }}
    >
      <div>
        <form>
          <p className="text-2xl">Contact Us</p>
          <div>
            <label className="text-sm">Select your Query or Course*</label>
            <select
              className="bg-gray-50 border border-gray-300 
						text-gray-600 text-sm rounded-lg 
						focus:border-blue-500 w-full p-2.5"
            >
              <option value="Feedback">-- Select Your Query --</option>
              <option value="Feedback">Feedback</option>
              <option value="Feedback">Course Related Queries</option>
              <option value="Feedback">Payment Related Issue</option>
              <option value="Feedback">Hiring Related Queries</option>
              <option value="Feedback">Advertise With Us</option>
            </select>
            <br></br>
            <label className="text-sm">Name</label>
            <br></br>
            <input
              className="bg-gray-50 border border-gray-300 
						text-sm rounded-lg focus:border-blue-500 
						w-full p-2.5"
              type="text"
              placeholder="Iron Man"
            />
            <br></br>
            <label className="text-sm">Email Address*</label>
            <br></br>
            <input
              className="bg-gray-50 border border-gray-300 
					    text-sm rounded-lg focus:border-blue-500 
						w-full p-2.5"
              type="email"
              placeholder="abc@email.org"
            />
            <br></br>
            <label className="text-sm">Contact No.</label>
            <br></br>
            <input
              className="bg-gray-50 border border-gray-300 
						text-sm rounded-lg focus:border-blue-500 
						w-full p-2.5"
              type="text"
              placeholder="1324567890"
            />
            <label className="text-sm">Drop Your Query</label>
            <br></br>
            <textarea
              className="bg-gray-50 border border-gray-300 
						text-sm rounded-lg 
						focus:border-blue-500 
						w-full p-2.5"
              rows="2"
              cols="25"
              maxLength="300"
              placeholder="Max Allowed Characters: 300"
            ></textarea>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 6,
                  borderRadius: 5,
                  cursor: "pointer",
                  width: "60%",
                }}
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
