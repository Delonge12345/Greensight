/**
 * Created by Максим on 08.12.2019.
 */
import React from 'react';
import style from './ReadFile.module.css';

export class ImageUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreviewUrl: ''
		};
	}

	_handleSubmit(e) {
		e.preventDefault();

		console.log('handle uploading-', this.state.file);
	}

	_handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		}

		reader.readAsDataURL(file)
	}

	render() {
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />);
		} else {
			$imagePreview = (<div className={style.previewText}>Please select an Image for Preview</div>);
		}

		return (
			<div className={style.previewComponent}>
				<form onSubmit={(e)=>this._handleSubmit(e)}>
					<input className={style.fileInput}
								 type="file"
								 onChange={(e)=>this._handleImageChange(e)} />
					<button className={style.submitButton}
									type="submit"
									onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
				</form>
				<div className={style.imgPreview}>
					{$imagePreview}
				</div>
			</div>
		)
	}
}