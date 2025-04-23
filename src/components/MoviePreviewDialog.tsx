
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MoviePreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  movie: {
    title: string;
    trailer: string;
    description: string;
  };
}

const MoviePreviewDialog = ({ isOpen, onClose, movie }: MoviePreviewDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-cinema-darkpurple border-cinema-text/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{movie.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            width="100%"
            height="100%"
            src={movie.trailer}
            title={`${movie.title} Trailer`}
            allowFullScreen
            className="border-0"
          />
        </div>
        <p className="text-cinema-text mt-4">{movie.description}</p>
      </DialogContent>
    </Dialog>
  );
};

export default MoviePreviewDialog;
