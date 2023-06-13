
namespace GoiApi
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.matxt = new System.Windows.Forms.TextBox();
            this.tentxt = new System.Windows.Forms.TextBox();
            this.dongiatxt = new System.Windows.Forms.TextBox();
            this.btn_them = new System.Windows.Forms.Button();
            this.btn_sua = new System.Windows.Forms.Button();
            this.btn_xoa = new System.Windows.Forms.Button();
            this.dataSanPham = new System.Windows.Forms.DataGridView();
            this.ma = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ten = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dongia = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.madm = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.madmtxt = new System.Windows.Forms.TextBox();
            ((System.ComponentModel.ISupportInitialize)(this.dataSanPham)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(66, 48);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(42, 25);
            this.label1.TabIndex = 0;
            this.label1.Text = "Ma";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(66, 121);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(49, 25);
            this.label2.TabIndex = 1;
            this.label2.Text = "Ten";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(66, 194);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(86, 25);
            this.label3.TabIndex = 2;
            this.label3.Text = "Don gia";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(66, 274);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(142, 25);
            this.label4.TabIndex = 3;
            this.label4.Text = "Ma danh muc";
            // 
            // matxt
            // 
            this.matxt.Location = new System.Drawing.Point(268, 42);
            this.matxt.Name = "matxt";
            this.matxt.Size = new System.Drawing.Size(242, 31);
            this.matxt.TabIndex = 4;
            // 
            // tentxt
            // 
            this.tentxt.Location = new System.Drawing.Point(268, 118);
            this.tentxt.Name = "tentxt";
            this.tentxt.Size = new System.Drawing.Size(242, 31);
            this.tentxt.TabIndex = 5;
            // 
            // dongiatxt
            // 
            this.dongiatxt.Location = new System.Drawing.Point(268, 194);
            this.dongiatxt.Name = "dongiatxt";
            this.dongiatxt.Size = new System.Drawing.Size(242, 31);
            this.dongiatxt.TabIndex = 6;
            // 
            // btn_them
            // 
            this.btn_them.Location = new System.Drawing.Point(714, 39);
            this.btn_them.Name = "btn_them";
            this.btn_them.Size = new System.Drawing.Size(118, 43);
            this.btn_them.TabIndex = 8;
            this.btn_them.Text = "Them";
            this.btn_them.UseVisualStyleBackColor = true;
            // 
            // btn_sua
            // 
            this.btn_sua.Location = new System.Drawing.Point(714, 146);
            this.btn_sua.Name = "btn_sua";
            this.btn_sua.Size = new System.Drawing.Size(118, 43);
            this.btn_sua.TabIndex = 9;
            this.btn_sua.Text = "Sua";
            this.btn_sua.UseVisualStyleBackColor = true;
            // 
            // btn_xoa
            // 
            this.btn_xoa.Location = new System.Drawing.Point(714, 256);
            this.btn_xoa.Name = "btn_xoa";
            this.btn_xoa.Size = new System.Drawing.Size(118, 43);
            this.btn_xoa.TabIndex = 10;
            this.btn_xoa.Text = "Xoa";
            this.btn_xoa.UseVisualStyleBackColor = true;
            // 
            // dataSanPham
            // 
            this.dataSanPham.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataSanPham.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.ma,
            this.ten,
            this.dongia,
            this.madm});
            this.dataSanPham.Location = new System.Drawing.Point(47, 401);
            this.dataSanPham.Name = "dataSanPham";
            this.dataSanPham.RowHeadersWidth = 82;
            this.dataSanPham.RowTemplate.Height = 33;
            this.dataSanPham.Size = new System.Drawing.Size(890, 275);
            this.dataSanPham.TabIndex = 11;
            // 
            // ma
            // 
            this.ma.HeaderText = "Ma";
            this.ma.MinimumWidth = 10;
            this.ma.Name = "ma";
            this.ma.Width = 200;
            // 
            // ten
            // 
            this.ten.HeaderText = "Ten";
            this.ten.MinimumWidth = 10;
            this.ten.Name = "ten";
            this.ten.Width = 200;
            // 
            // dongia
            // 
            this.dongia.HeaderText = "Don gia";
            this.dongia.MinimumWidth = 10;
            this.dongia.Name = "dongia";
            this.dongia.Width = 200;
            // 
            // madm
            // 
            this.madm.HeaderText = "MaDanhMuc";
            this.madm.MinimumWidth = 10;
            this.madm.Name = "madm";
            this.madm.Width = 200;
            // 
            // madmtxt
            // 
            this.madmtxt.Location = new System.Drawing.Point(268, 274);
            this.madmtxt.Name = "madmtxt";
            this.madmtxt.Size = new System.Drawing.Size(242, 31);
            this.madmtxt.TabIndex = 7;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(2033, 920);
            this.Controls.Add(this.dataSanPham);
            this.Controls.Add(this.btn_xoa);
            this.Controls.Add(this.btn_sua);
            this.Controls.Add(this.btn_them);
            this.Controls.Add(this.madmtxt);
            this.Controls.Add(this.dongiatxt);
            this.Controls.Add(this.tentxt);
            this.Controls.Add(this.matxt);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataSanPham)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox matxt;
        private System.Windows.Forms.TextBox tentxt;
        private System.Windows.Forms.TextBox dongiatxt;
        private System.Windows.Forms.Button btn_them;
        private System.Windows.Forms.Button btn_sua;
        private System.Windows.Forms.Button btn_xoa;
        private System.Windows.Forms.DataGridView dataSanPham;
        private System.Windows.Forms.DataGridViewTextBoxColumn ma;
        private System.Windows.Forms.DataGridViewTextBoxColumn ten;
        private System.Windows.Forms.DataGridViewTextBoxColumn dongia;
        private System.Windows.Forms.DataGridViewTextBoxColumn madm;
        private System.Windows.Forms.TextBox madmtxt;
    }
}

